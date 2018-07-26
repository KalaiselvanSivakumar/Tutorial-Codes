package com.blueflame.example.helloandroid;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class MainActivity extends Activity {

    private static final String TAG = MainActivity.class.getName();
    public static final String EXTRA_MESSAGE = "com.blueflame.example.helloandroid.MESSAGE";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void nextPageButtonHandler(View view) {
        Log.d(TAG, "In next page button handler method");
        Intent intent = new Intent(this, SecondActivity.class);
        Button button = (Button) view;
        String buttonTextMessage = button.getText().toString();
        Log.d(TAG, buttonTextMessage);
        intent.putExtra(EXTRA_MESSAGE, buttonTextMessage);
        startActivity(intent);
    }
}
