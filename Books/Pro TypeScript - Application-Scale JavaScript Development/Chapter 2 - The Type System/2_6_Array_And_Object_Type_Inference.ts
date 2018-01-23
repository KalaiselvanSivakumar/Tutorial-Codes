// type inferred - {str: string, num: number, flag: boolean}[]
var array = [
    {str: 'String', num: 100, flag: true}
]

for (var i = 0; i < array.length; ++i) {
    var value = array[i]; // {str: string, num: number, flag: boolean}
    console.log(value);
}

// 2.7
// Best common type
var matchingArray = [ // Type will be combination of all with or symbol
    {str: 'A', num: 12, flag: true},
    {str: 'B', num: 1},
    {num: 100}
]

for(i = 0; i < matchingArray.length; ++i) {
    // value = matchingArray[i]; // ERROR - Not assignable
    var temp = matchingArray[i]; // Type will be same as matchingArray
    temp.str; // Property 'str' does not exist in the type of matchingArray
    temp.num; // Exist
    temp.flag; // Property 'flag' does not exist in the type of matchingArray
}
