// appendix parameter must be string or number
// If it receives other types, it must throw error.
// Only specific types can be handled by the function.
function appendWithoutUnion(text: string, appendix: any): string {
    if (typeof appendix === "number") {
        return text + Array(appendix).join(" ");
    }
    if (typeof appendix === "string") {
        return text + " " + appendix;
    }
    throw new Error("appendix must be string or number");
}

console.log(appendWithoutUnion("Kalai", "selvan"));
console.log(appendWithoutUnion("Kalai", 5));
console.log(appendWithoutUnion("Text", true)); // Throws error while executing