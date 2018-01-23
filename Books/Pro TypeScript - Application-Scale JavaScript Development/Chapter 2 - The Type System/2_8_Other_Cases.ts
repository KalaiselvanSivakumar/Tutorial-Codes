// 2.8 Contextual Types
// window.onclick method preexists. So it can use its type knowledge
window.onclick = function(event) {
    // ...
}

// 2.9 Widened Types
function nullReturner() { // Type will be widened to any incase of null or undefined
    return null;
}
