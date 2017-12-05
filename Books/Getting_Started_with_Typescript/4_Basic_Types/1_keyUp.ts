function onKeyUp(): void {
    let inputEl = document.getElementById("firstNameInput") as HTMLInputElement;
    let firstName: string = inputEl.value;

    let output = document.getElementById("welcomeMessage") as HTMLParagraphElement;
    output.innerHTML = `Hi ${firstName}!!, Your First Name length is ${firstName.trim().length}!`;
}