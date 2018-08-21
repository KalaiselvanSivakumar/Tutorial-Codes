'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import  { StatusBarItem, window, StatusBarAlignment, commands, ExtensionContext, TextDocument } from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

    console.log('Congratulations, your extension "WordCount" is now active!');

	let wordCounter = new WordCounter();
	
    let disposable = commands.registerCommand('extension.sayHello', () => {
		wordCounter.updateWordCount();    
    });

	// Add to the list of disposables which are disposed when this extension is deactivated
	context.subscriptions.push(wordCounter);
    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}

class WordCounter {

	private _statusBarItem: StatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);

	public updateWordCount() {
		
		// Get the current text editor
		let editor = window.activeTextEditor;
		if (!editor) {
			this._statusBarItem.hide();
			return;
		}

		let doc = editor.document;

		// Only update status if an Markdown file
		if (doc.languageId === "markdown") {
			let wordCount = this._getWordCount(doc);

			// Update the status bar
			this._statusBarItem.text = wordCount !== 1 ? `${wordCount} Words` : '1 Word';
			this._statusBarItem.show();
		} else {
			this._statusBarItem.hide();
		}

	}

	public _getWordCount(doc: TextDocument): number {

		let docContent = doc.getText();

		// Parse out unwanted whitespace so the split is accurate
		docContent = docContent.replace(/(< ([^>]+)<)/g, '').replace(/\s+/g, ' ');
		docContent = docContent.replace(/^\s\s*/, '').replace(/\s\s*$/, '');

		let wordCount = 0;
		if (docContent !== '') {
			wordCount = docContent.split(" ").length;
		}
		return wordCount;
	}

	dispose() {
		this._statusBarItem.dispose();
	}
}
