package com.blueflame.chapter7_applicationdata;

import android.app.Activity;
import android.content.ContentValues;
import android.content.SharedPreferences;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.widget.EditText;
import android.widget.TextView;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class MainActivity extends Activity {

	private static String SHARED_PREFS_KEY = "existingInput";
	private static String FILENAME = "internalStorage";
	private static String AUTHOR_NAME = "Kalai selvan Sivakumar";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		// Set up the EditText
		EditText prefsText = findViewById(R.id.sharedPrefsText);
		prefsText.setOnEditorActionListener(new TextView.OnEditorActionListener() {
			@Override
			public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
				String input = v.getText().toString();
				saveStringWithSharedPreferences(SHARED_PREFS_KEY, input);

				// Logging the current key
				String value = getPreferences(MODE_PRIVATE).getString(SHARED_PREFS_KEY, "No saved data");
				Log.d(MainActivity.class.getName(), value);
				saveStringWithDatabase(input);

				FileInputStream inputStream = null;
				try {
					saveStringWithInternalStorage(FILENAME, input);
					inputStream = openFileInput(FILENAME);
					int maxBytes = inputStream.available();
					byte[] data = new byte[maxBytes];
					inputStream.read(data, 0, maxBytes);
					while (inputStream.read(data) != -1) {}
					String existingInput = new String(data);
					Log.d(MainActivity.class.getName(), "Internal Storage: " + existingInput);
				}
				catch (IOException io) {
					io.printStackTrace();
				}
				finally {
					if (inputStream != null) {
						try {
							inputStream.close();
						}
						catch (IOException io) {
							io.printStackTrace();
						}
					}
				}
				return false;
			}
		});

		// Load the string from SharedPreferences
		SharedPreferences prefs = getPreferences(MODE_PRIVATE);
		String existingInput = prefs.getString(SHARED_PREFS_KEY, "");
		prefsText.setText(existingInput);

	}

	// Shared Preferences
	public void saveStringWithSharedPreferences(String key, String value) {
		SharedPreferences prefs = getPreferences(MODE_PRIVATE);
		SharedPreferences.Editor editor = prefs.edit();

		editor.putString(key, value);
		editor.apply();
	}

	// Internal Storage
	public void saveStringWithInternalStorage(String filename, String value)
			throws IOException {
		FileOutputStream outputStream = openFileOutput(filename, MODE_PRIVATE);
		byte[] data = value.getBytes();
		outputStream.write(data);
		outputStream.close();
	}

	public void saveStringWithDatabase(String value) {
		// Storing the values in ContentValues object
		ContentValues values = new ContentValues();
		values.put(MessageOpenHelper.COLUMN_AUTHOR, AUTHOR_NAME);
		values.put(MessageOpenHelper.COLUMN_MESSAGE, value);

		MessageOpenHelper dbHelper = new MessageOpenHelper(this);
		SQLiteDatabase db = dbHelper.getWritableDatabase();
		long id = db.insert(MessageOpenHelper.TABLE_MESSAGES, null, values);
		Log.d(MainActivity.class.getName(), String.format("Saved new record to database with ID: %d", id));
		dbHelper.close();
	}

	public void readDataFromDataBase() {
		// Load the most recent record from the SQLite Database
		MessageOpenHelper dbHelper = new MessageOpenHelper(this);
		SQLiteDatabase db = dbHelper.getReadableDatabase();

		// Fetch the records with the appropriate author name
		String[] columns = {
				MessageOpenHelper.COLUMN_ID,
				MessageOpenHelper.COLUMN_MESSAGE
		};
		String selection = MessageOpenHelper.COLUMN_AUTHOR + " = '" + AUTHOR_NAME + "'";
		Cursor cursor = db.query(MessageOpenHelper.TABLE_MESSAGES, columns, selection, null, null, null, null);
		// Log the most recent record
		cursor.moveToLast();
		long id = cursor.getLong(0);
		String message = cursor.getString(1);
		Log.d(MainActivity.class.getName(), String.format("Retrieved info from database. ID: %d Message: %s", id, message));
		// Clean up
		cursor.close();
		dbHelper.close();
	}

}
