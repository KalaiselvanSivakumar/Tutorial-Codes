/*package whatever //do not write package name here */

import java.io.*;

// Reverse a Stack in O(n) without using extra space.
class StackNode {
    public int data;
    public StackNode next;
    public StackNode(int data) {
        this.data = data;
    }
}

class Stack {
    public StackNode top = null;
    public void display() {
        if (top == null) {
            return;
        }
        StackNode node = top;
        while (node != null) {
            System.out.print(node.data + " -> ");
            node = node.next;
        }
        System.out.println();
    }
    public void push(int data) {
        StackNode node = new StackNode(data);
        if (top == null) {
            top = node;
            return;
        }
        node.next = top;
        top = node;
        display();
    }
    
    public void pop() {
        if (top == null) {
            System.out.println("Stack is empty");
            return;
        }
        System.out.println("POP: " + top.data);
        top = top.next;
        display();
    }
    
    public void reverse() {
        if (top == null) {
            System.out.println("No data to reverse");
            return;
        }
        StackNode prev, curr, next;
        prev = null;
        curr = top;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        top = prev;
        display();
    }
}

public class ReverseStack {
	public static void main (String[] args) {
		Stack st = new Stack();
		st.reverse(); // No data to reverse
		st.pop(); // Stack is empty
		st.push(1); // 
		st.reverse(); // 1 -> 
		st.push(2); // 2 -> 1 -> 
		st.reverse(); // 1 -> 2 -> 
		st.reverse(); // 2 -> 1 -> 
		st.push(3); // 3 -> 2 -> 1 -> 
		st.push(4); // 4 -> 3 -> 2 -> 1 -> 
		st.push(5); // 5 -> 4 -> 3 -> 2 -> 1 -> 
		st.reverse(); // 1 -> 2 -> 3 -> 4 -> 5 -> 
	}
}