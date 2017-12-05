// Variable declared with let keyword is block scoped
function blockScope() {
    if (true) {
        let x = 10;
    }
    console.log(x); // Compile type error as x is not known outside the if block 
}