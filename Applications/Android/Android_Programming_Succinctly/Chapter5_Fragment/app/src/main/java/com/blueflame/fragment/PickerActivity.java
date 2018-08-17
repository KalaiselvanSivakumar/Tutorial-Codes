package com.blueflame.fragment;

import android.app.Activity;
import android.app.DatePickerDialog;
import android.app.DialogFragment;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.widget.DatePicker;

public class PickerActivity extends FragmentActivity
		implements DatePickerDialog.OnDateSetListener {

	public void showDatePickerDialog(View view) {
		DialogFragment picker = new DatePickerFragment();
		picker.show(getSupportFragmentManager(), "datePicker");
	}

	@Override
	public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
		// Process the selected date
	}
}
