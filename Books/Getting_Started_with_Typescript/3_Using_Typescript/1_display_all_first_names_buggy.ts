// Renamed file type from js to ts

// It doesn't throw error as the generated js file from ts uses ES3 which don't have for-of loop

// Displays all the persons firstnames
function displayAllFirstNamesTS(persons) {
    let firstName;
    for (firstName of persons) {
        console.log(firstName);
    }
}

displayAllFirstNamesTS("This is not a persons list"); // Prints undefined string length times
displayAllFirstNamesTS(100); // TypeError: persons is not iterable