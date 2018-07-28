package com.blueflame.chapter4_userinterfacelayouts;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.GridView;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.Locale;

public class MainActivity extends Activity {

	private static final String TAG = MainActivity.class.getName();
	private ArrayList<String> editableData;
	private ArrayAdapter<String> editableAdapter;
	private int count;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		// Normal Linear Layout
        /*
		setContentView(R.layout.activity_main);
		*/



        /*
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

		// On-click listener attachment
		gridView.setOnItemClickListener(
				new AdapterView.OnItemClickListener() {
					@Override
					public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
						TextView selectedView = (TextView) view;
						Log.d(TAG, String.format("You clicked: %s", selectedView.getText()));
					}
				}
		);
		*/

        setContentView(R.layout.activity_edit_data_set);

        this.editableData = new ArrayList<>();
		editableData.add("Item 1");
		editableData.add("Item 2");
		editableData.add("Item 3");
		this.count = 3;

		editableAdapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, editableData);
		GridView editableGridView = findViewById(R.id.editableGridView);
		editableGridView.setAdapter(editableAdapter);

		editableGridView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
			@Override
			public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
				editableData.remove(position);
				editableAdapter.notifyDataSetChanged();
			}
		});
	}

	public void addItem(View view) {
		count++;
		String newItem = String.format(Locale.US, "Item %d", count);
		editableData.add(newItem);
		editableAdapter.notifyDataSetChanged();
	}
}
