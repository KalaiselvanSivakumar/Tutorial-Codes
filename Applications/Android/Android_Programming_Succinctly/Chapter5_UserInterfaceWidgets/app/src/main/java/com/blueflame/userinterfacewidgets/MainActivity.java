package com.blueflame.userinterfacewidgets;

import android.app.Activity;
import android.content.res.Resources;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.inputmethod.EditorInfo;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends Activity {

	private static final String TAG = MainActivity.class.getName();

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		// Image View
		/*
		setContentView(R.layout.activity_imageview);
		// Image View - Image source setting programmatically
		ImageView imageView = findViewById(R.id.imageView);
		Resources resources = getResources();
		Drawable image = resources.getDrawable(R.drawable.ic_launcher_foreground);
		// Uncomment below line to set different image in the ImageView
//		imageView.setImageDrawable(image);
		*/

		// Button types
		/*
		setContentView(R.layout.activity_button);
		*/

		// Text View
		setContentView(R.layout.activity_textview);
		// Getting the text from EditText
		EditText editText = findViewById(R.id.editText);
		editText.setOnEditorActionListener(new TextView.OnEditorActionListener() {
			@Override
			public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
				// EditorInfo has lots of constant to check actionId
				if (actionId == EditorInfo.IME_ACTION_SEND) {
					String input = v.getText().toString();
					Log.d(TAG, String.format("Processing input: %s", input));
				}
				// Return false - default behaviour. If it returns false, onscreen keyboard will close
				// If it is changed to true, then everything has to be handled manually
				return false;
			}
		});
	}
}
