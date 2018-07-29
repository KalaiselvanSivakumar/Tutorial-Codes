package com.blueflame.userinterfacewidgets;

import android.app.Activity;
import android.content.res.Resources;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.widget.ImageView;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_imageview);

		// Image View - Image source setting programmatically
		ImageView imageView = findViewById(R.id.imageView);
		Resources resources = getResources();
		Drawable image = resources.getDrawable(R.drawable.ic_launcher_foreground);
		// Uncomment below line to set different image in the ImageView
//		imageView.setImageDrawable(image);

	}
}
