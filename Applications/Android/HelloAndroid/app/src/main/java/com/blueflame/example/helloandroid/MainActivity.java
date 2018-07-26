package com.blueflame.example.helloandroid;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

public class MainActivity extends Activity {

    private static final String TAG = MainActivity.class.getName();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void nextPageButtonHandler(View view) {
        Log.d(TAG, "In next page button handler method");
        Intent intent = new Intent(this, SecondActivity.class);
        startActivity(intent);
    }
}
