function append(text: string, appendix: string | number):string {
    if (typeof appendix === "string") {
        return text + " " + appendix;
    }
    else {
        return text + Array(appendix).join(" ");
    }
}

console.log(append("Kalai", "selvan"));
console.log(append("Kalai", 5));
console.log(append("Text", true)); // Throws compile type error