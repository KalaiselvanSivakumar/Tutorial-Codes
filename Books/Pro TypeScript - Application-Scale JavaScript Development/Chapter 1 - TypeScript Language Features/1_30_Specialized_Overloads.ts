// Specialized Overloads are the ability to overload based on the string values.


// This is the TypeScript's implementation of getElementsByTagName
// This list does not includes all variations
function getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>; // When tag is 'a', then return List of HTMLAnchorElement
function getElementsByTagName(name: "blockquote"): NodeListOf<HTMLQuoteElement>;
function getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
function getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
function getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;
function getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;
// Non-specialized signature is a must in this kind of Overloads.
function getElementsByTagName(name: string): NodeList; // Non-specialized signature
// Non-specialized overload returns a superclass of all specialized overloads.
// All specialized overloads must return subtype of non-specialized overload.
function getElementsByTagName(name: string): NodeList { // implementation signature
    return document.getElementsByTagName(name);
}

// If you call the above method with the name argument's value as "form", then it will return NodeListOf<HTMLFormElement>;
// This is the use of specialized overloads.
