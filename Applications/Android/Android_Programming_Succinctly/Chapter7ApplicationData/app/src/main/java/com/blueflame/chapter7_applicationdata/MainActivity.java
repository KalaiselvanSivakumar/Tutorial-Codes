package com.blueflame.chapter7_applicationdata;

import android.app.Activity;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends Activity {

	private static String SHARED_PREFS_KEY = "existingInput";

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
				return false;
			}
		});

		// Load the string from SharedPreferences
		SharedPreferences prefs = getPreferences(MODE_PRIVATE);
		String existingInput = prefs.getString(SHARED_PREFS_KEY, "");
		prefsText.setText(existingInput);

	}

	public void saveStringWithSharedPreferences(String key, String value) {
		SharedPreferences prefs = getPreferences(MODE_PRIVATE);
		SharedPreferences.Editor editor = prefs.edit();

		editor.putString(key, value);
		editor.apply();
	}
}
