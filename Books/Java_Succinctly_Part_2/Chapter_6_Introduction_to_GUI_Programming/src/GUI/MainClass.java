package GUI;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;

public class MainClass extends JFrame {

	public static void main(String[] args) {
		MainClass mainWindow = new MainClass();
	}

	public MainClass() {
		// Create a JPanel. Flow Layout adds all the controls in the single row
		JPanel panel = new JPanel(new FlowLayout());

		// Add some controls
		panel.add(new JLabel("Test Button: "));
		JButton btnClickMe = new JButton("Click Me!");
		panel.add(btnClickMe);

		// Set this as the current action listener for the button
		btnClickMe.addActionListener(new ActionListener(){
		
			@Override
			public void actionPerformed(ActionEvent e) {
				// Show a message box
				JOptionPane.showMessageDialog(null, "You clicked on the button!");
			}
		});

		// Set the current content pane to the panel
		this.setContentPane(panel);

		// Set the size of the window
		this.setSize(640, 480);
		
		// Set the app to close when the window closes
		// If the below behaviour is not set,
		// then application continue to run in the background even after closing
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);

		// Set the window to visible
		this.setVisible(true);
	}

}
