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
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Spinner;
import android.widget.TextView;

import java.util.ArrayList;

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

		/*
		// Checkbox
		setContentView(R.layout.activity_checkbox);
		isGreen = false;
		isBold = false;
		isBig = false;
		synchronizeCheckBoxes();
		synchronizeTextView();
		*/

		/*
		// Radio Group and Radio Button
		setContentView(R.layout.activity_radiobutton);
		// Set the initial selection
		RadioButton serif = findViewById(R.id.radioButtonSerif);
		serif.setChecked(true);
		radioButtonClickHandler(null);
		*/

		setContentView(R.layout.activitiy_spinner);

		ArrayAdapter<CharSequence> spinnerAdapter = ArrayAdapter.createFromResource(this, R.array.spinner_colors, android.R.layout.simple_spinner_item);
		spinnerAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

		Spinner spinner = findViewById(R.id.colorSpinner);
		spinner.setAdapter(spinnerAdapter);

		spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
			@Override
			public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
				String selectedColor = (String) parent.getItemAtPosition(position);
				setTextColor(selectedColor);
			}

			@Override
			public void onNothingSelected(AdapterView<?> parent) { }
		});

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

	public void radioButtonClickHandler(View view) {
		RadioGroup radioGroup = findViewById(R.id.radioGroup);
		String typeface;
		switch (radioGroup.getCheckedRadioButtonId()) {
			case R.id.radioButtonSans:
				typeface = "sans";
				break;
			case R.id.radioButtonSerif:
				typeface = "serif";
				break;
			case R.id.radioButtonMonoSpace:
				typeface = "monospace";
				break;
			default:
				typeface = "default";
		}
		TextView textView = findViewById(R.id.radioText);
		textView.setTypeface(Typeface.create(typeface, Typeface.NORMAL));
	}

	public void setTextColor(String color) {
		String hexColor;
		switch (color) {
			case "Red":
				hexColor = "#FFAA0000";
				break;
			case "Orange":
				hexColor = "#FFCC6600";
				break;
			case "Yellow":
				hexColor = "#FFCCAA00";
				break;
			case "Green":
				hexColor = "#FF00AA00";
				break;
			case "Blue":
				hexColor = "#FF0000AA";
				break;
			case "Violet":
				hexColor = "#FF6600AA";
				break;
			default:
				hexColor = "#FF000000";
		}
		TextView textView = findViewById(R.id.spinnerText);
		textView.setTextColor(Color.parseColor(hexColor));
	}
}
