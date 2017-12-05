// Displays all the persons firstnames
function displayAllFirstNames(persons) {
    let firstName;
    for (firstName of persons) {
        console.log(firstName);
    }
}

displayAllFirstNames("This is not a persons list"); // Prints all characters in seperate line
displayAllFirstNames(100); // TypeError: persons is not iterable