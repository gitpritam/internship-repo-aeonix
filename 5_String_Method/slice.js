//Length
const text = "abcdefghijklmnopqrstuvwxyz";
console.log(text.length);

//charat -> return character at that index
console.log(text.charAt(1)); //b

//charCodeAt -> return utf-16 code 0-65535
console.log(text.charCodeAt(1));

//get a particular letter
console.log(text.at(1));
console.log(text[1]);

//slice(start,end)
console.log(text.slice(1, 4));
console.log(text.slice(-4));

//uper lower
console.log(text.toLowerCase());
console.log(text.toUpperCase());

//concat
console.log(text.concat("-", "0123456789"));

//replace(search item, value)
console.log(text.replace("abc", "123"));
