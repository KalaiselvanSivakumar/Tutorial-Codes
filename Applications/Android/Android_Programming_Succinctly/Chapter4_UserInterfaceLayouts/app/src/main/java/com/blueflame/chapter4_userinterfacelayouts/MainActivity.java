package com.blueflame.chapter4_userinterfacelayouts;

import android.app.Activity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.GridView;
import android.widget.ListView;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		// Normal Linear Layout
        /*
		setContentView(R.layout.activity_main);
		*/



        // List View
//		setContentView(R.layout.activity_listview);

		// Grid View
		setContentView(R.layout.activity_gridview);

		// Data set for ListView
		String[] data = new String[]
				{
						"Item 1", "Item 2", "Item 3",
						"Item 4", "Item 5", "item 6",
						"Item 7", "Item 8", "item 9"
				};

		// Data set passed to Adapter to create View objects
		ArrayAdapter<String> adapter =
				new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, data);

		// Passing adapter to the layout (ListView)
		// List View
//        ListView listView = findViewById(R.id.listView);
//        listView.setAdapter(adapter);

		// Grid View
		GridView gridView = findViewById(R.id.gridView);
		gridView.setAdapter(adapter);

	}
}
