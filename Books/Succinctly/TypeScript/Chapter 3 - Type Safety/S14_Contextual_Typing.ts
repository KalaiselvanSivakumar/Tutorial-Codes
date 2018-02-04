var func: (name: string) => string;
func = function(name){ // Type inferred: nmae: string, return type string based on above declaration
    return name;
}