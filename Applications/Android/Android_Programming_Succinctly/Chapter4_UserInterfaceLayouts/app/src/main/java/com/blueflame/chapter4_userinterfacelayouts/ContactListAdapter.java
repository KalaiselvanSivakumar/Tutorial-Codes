package com.blueflame.chapter4_userinterfacelayouts;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import java.util.ArrayList;

public class ContactListAdapter extends BaseAdapter {

	private static LayoutInflater inflater;
	private ArrayList<ContactDataItem> data;
	private Context context;

	public ContactListAdapter(Context context, ArrayList<ContactDataItem> data) {
		this.context = context;
		this.data = data;
		inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
	}

	@Override
	public int getCount() {
		return data.size();
	}

	@Override
	public Object getItem(int position) {
		return data.get(position);
	}

	@Override
	public long getItemId(int position) {
		return position;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		// See if the view needs to be inflated
		if (convertView == null) {
			convertView = inflater.inflate(R.layout.custom_list_view, null);
		}

		// Extract the desired views
		TextView contactNameValue = convertView.findViewById(R.id.customListViewNameValue);
		TextView contactPhoneValue = convertView.findViewById(R.id.customListViewPhoneValue);

		// Get the data item
		ContactDataItem dataItem = data.get(position);

		// Set the data in view
		contactNameValue.setText(dataItem.name);
		contactPhoneValue.setText(dataItem.phoneNumber);

		return convertView;
	}

}
