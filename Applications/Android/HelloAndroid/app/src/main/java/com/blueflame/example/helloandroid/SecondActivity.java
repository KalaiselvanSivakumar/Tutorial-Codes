package com.blueflame.example.helloandroid;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class SecondActivity extends Activity {

    private static final String TAG = SecondActivity.class.getName();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        /**
         * To get data from the savedInstanceState, use the below commented lines.
         * In the below code, KEY is a constant denoting a key
         */

//        if (savedInstanceState != null) {
//            savedInstanceState.getString(KEY);
//            this.key = KEY;
//        }

        Intent intent = getIntent();
        String message = intent.getStringExtra(MainActivity.EXTRA_MESSAGE);
        // The following method call should be used only after setContentView method call
        TextView textView = findViewById(R.id.selected_title);
        textView.setText(message);
    }

    // To save data to the InstanceState, use the below method
    // Ensure to save the variables before calling super function

//    @Override
//    protected void onSaveInstanceState(Bundle outState) {
//        outState.putString(KEY, this.key);
//        super.onSaveInstanceState(outState);
//    }
}
