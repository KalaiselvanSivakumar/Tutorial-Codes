package com.blueflame.chapter4_userinterfacelayouts;

import android.app.Activity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);

		setContentView(R.layout.activity_listview);

		// Data set for ListView
		String[] data = new String[]
				{
						"Item 1", "Item 2", "Item 3", "Item 4", "Item 5"
				};

		// Data set passed to Adapter to create View objects
		ArrayAdapter<String> adapter =
				new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, data);

		// Passing adapter to the layout (ListView)
        ListView listView = findViewById(R.id.listView);
        listView.setAdapter(adapter);
	}
}
