
function displayFullNameJS(friend: any): void {
    let fullName = friend.firstName;
    if (friend.lastName) {
        fullName += " " + friend.lastName;
    }
    console.log(fullName);
}

displayFullNameJS({firstName: "Kalai"});
displayFullNameJS({firstName: "Kalai", lastName: "selvan"});