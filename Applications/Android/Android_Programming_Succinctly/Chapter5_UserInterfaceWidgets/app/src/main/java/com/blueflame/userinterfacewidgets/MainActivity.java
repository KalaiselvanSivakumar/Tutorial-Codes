package com.blueflame.userinterfacewidgets;

import android.app.Activity;
import android.content.res.Resources;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.util.Log;
import android.util.TypedValue;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends Activity {

	private static final String TAG = MainActivity.class.getName();

	private boolean isGreen, isBold, isBig;

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

		/*
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
		*/

		setContentView(R.layout.activity_checkbox);
		isGreen = false;
		isBold = false;
		isBig = false;
		synchronizeCheckBoxes();
		synchronizeTextView();

	}

	private void synchronizeCheckBoxes() {
		CheckBox greenCheckBox = findViewById(R.id.greenCheckBox);
		CheckBox boldCheckBox = findViewById(R.id.boldCheckBox);
		CheckBox bigCheckBox = findViewById(R.id.bigCheckBox);
		greenCheckBox.setChecked(isGreen);
		boldCheckBox.setChecked(isBold);
		bigCheckBox.setChecked(isBig);
	}

	private void synchronizeTextView() {
		TextView textView = findViewById(R.id.checkBoxText);
		String colour = isGreen ? "#FF009900" : "#FF000000";

		textView.setTextColor(Color.parseColor(colour));
		textView.setTypeface(
				Typeface.create(Typeface.DEFAULT,
						isBold ? Typeface.BOLD : Typeface.NORMAL));
		textView.setTextSize(TypedValue.COMPLEX_UNIT_SP, isBig ? 30 : 18);
	}

	public void checkBoxClickHandler(View view) {
		CheckBox checkBox = (CheckBox) view;
		boolean isChecked = checkBox.isChecked();
		switch (checkBox.getId()) {
			case R.id.greenCheckBox:
				isGreen = isChecked;
				break;
			case R.id.boldCheckBox:
				isBold = isChecked;
				break;
			case R.id.bigCheckBox:
				isBig = isChecked;
				break;
		}
		synchronizeTextView();
	}
}
