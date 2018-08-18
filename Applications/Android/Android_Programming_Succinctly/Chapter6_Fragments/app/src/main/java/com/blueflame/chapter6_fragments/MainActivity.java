package com.blueflame.chapter6_fragments;

import android.app.ActionBar;
import android.app.Activity;
import android.app.FragmentTransaction;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.ViewPager;
import android.view.Menu;

// Change extends to Activity for activity_main layout file - Basic demo
public class MainActivity extends FragmentActivity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		// Two Fragments in the same activity - Basic case
//		setContentView(R.layout.activity_main);

		// Swipe between views
		setContentView(R.layout.activity_swipe_view);
		SimplePagerAdapter adapter = new SimplePagerAdapter(getSupportFragmentManager());
		final ViewPager pager = findViewById(R.id.fragmentPager);
		pager.setAdapter(adapter);

		// Tabs
		final ActionBar actionBar = getActionBar();
		actionBar.setNavigationMode(ActionBar.NAVIGATION_MODE_TABS);
		ActionBar.TabListener tabListener = new ActionBar.TabListener() {
			@Override
			public void onTabSelected(ActionBar.Tab tab, FragmentTransaction ft) {
				pager.setCurrentItem(tab.getPosition());
			}

			@Override
			public void onTabUnselected(ActionBar.Tab tab, FragmentTransaction ft) {

			}

			@Override
			public void onTabReselected(ActionBar.Tab tab, FragmentTransaction ft) {

			}
		};

		actionBar.addTab(actionBar.newTab().setText("Home").setTabListener(tabListener));
		actionBar.addTab(actionBar.newTab().setText("Articles").setTabListener(tabListener));

		pager.setOnPageChangeListener(new ViewPager.SimpleOnPageChangeListener() {
			public void onPageSelected(int position) {
				actionBar.setSelectedNavigationItem(position);
			}
		});

	}

	public static class SimplePagerAdapter extends FragmentPagerAdapter {

		private SimplePagerAdapter (FragmentManager fragmentManager) {
			super(fragmentManager);
		}

		@Override
		public Fragment getItem(int position) {
			switch (position) {
				case 0:
					return new HomeViewFragment();
				case 1:
					return new ArticlesFragment();
				default:
					return null;
			}
		}

		@Override
		public int getCount() {
			return 2;
		}
	}

}
