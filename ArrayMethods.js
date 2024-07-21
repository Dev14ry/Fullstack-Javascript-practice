// '#  Array.join() Method

// const elements = ['Namaste','Nepal']
// let newElements = elements.join("Duniya , Kaise ho ");
// console.log(newElements);
// console.log(elements.join(''));
// console.log(elements.join('-'));

// # Array slice() method

// const animals = ['ant','bison','camel','duck','elephant'];
// const sliceArr = animals.slice(2,4);
// console.log(sliceArr);
// console.log(animals);
// console.log(animals.slice(2));
// console.log();
// console.log(animals.slice(1,3));
// console.log();
// console.log(animals.slice(-4));
// console.log(animals.slice(1,-1));

// yesle orginal array change gardaina.

// # splice method of array.

const arr6 = ["a","b","c","d"]
const splicarr = arr6.splice(0,2);
console.log(splicarr);
console.log(arr6);

// yesle orginal array ma change garxa.



// # array method  indexOf()

// const beasts = ['ant','bison','camel','duck','bison']

// console.log(beasts.indexOf('bison'));
// console.log(beasts.indexOf('bison',2));
// console.log(beasts.indexOf('giraffe'));

// yadi value exist garxa bhane index value return garxa.
// yadi kunai element array ma exist gardaina bhane yesle -1 return garxa.
// yesle jaile pani start left dekhi right janxa.
// yesma casesensitive hunxa.





// Array push Method

// const data1 = ['a','b',3,'5',{name:"rohit"},[1,3,4]]
// const dataUpdated=data1.push("Hello");
// data.push("Nepal");
// console.log(data1);
// console.log(dataUpdated);

// push method le array ko length return garxa
// data haru array ko last ma add garxa


// # pop method of Array

// const data2 = ['a','b',3,'5',{name:"rohit"},[1,3,4]]

// let popvalue = data2.pop();
// console.log(popvalue);

// array ko last element lai delete garxa.
// pop method le original array ma changes garxa.
// ye le removed value lai return garxa.

// # Shift method of Array

// const data3 = ['a','b',3,'5',{name:"rohit"},[1,3,4]]
// let shiftedValue = data3.shift();
// console.log(shiftedValue);
// console.log(data3);

// yesh method le original array ma modified garxa.
// array ma bhayeko first element lai remove garxa.
// yesh le shifted value lai return garxa.

// # Unshift method of Array

// const data4 = ['a','b',3,'5',{name:"rohit"},[1,3,4]];
// console.log(data4.length);
// let unshiftlength = data4.unshift("apple","ball");
// console.log(unshiftlength);

// console.log(data4);

//yo method le array ko agadi element lai add garxa.
// yo method le original array ma modified garxa.
// you method le array ko length lai return garxa.

// # inclueds method of Array.

// const animals = ["dog","cat","horse","lion"];
// console.log(animals.includes("lion"));
// console.log(animals.includes("Lion"));
// console.log(animals.includes("giraffe"));
// console.log(animals.includes("cat"));

//includes method le array ma bhayeko element exist garxa bhane true return garxa na bhaye false return garxa.
// case sensitive ma kaam garxa.

//# Last LastindexOf method of array.


// const animals2 = ["dog","cat","horse","lion","cat"];
// console.log(animals2.lastIndexOf("cat",4));
// console.log(animals2.lastIndexOf("cat",2));
// console.log(animals2.lastIndexOf("kangaroo"));

// yadi array ma kunai element exist gardai xa bhane tesko index value return garxa.
// yadi kunai element array ma exist gardaina bhane yesle -1 return garxa.
// yesko starting right dekhi left hunxa.
// case sensative ma kam garxa.

// # toString method of Array

// const animals3 = ["dog","cat","horse","lion","cat"];
// const arrtoString = animals3.toString();
// console.log(arrtoString);
// console.log(animals3);

// yo method le string ma convert garxa.
// yesle orginal array ma modified gareko hudaina.

// # fill method of array.

// const animals4 = ["dog","cat","horse","lion","cat"];
// const fillarr = animals4.fill("Hello",2,-2);
// console.log(fillarr);

// yesle original array ma modified garxa.

// # flat method in array.

// const arr = [1,2,3,4,[5,6,[7,8]]]
// const flatarr2 = arr.flat();
// const flatarr3 = arr.flat(2);
// console.log(flatarr2);
// console.log(flatarr3);
// console.log(arr);

// flat method bhitra by default 1 hunxa.
// yesle orginal array change gardaina.

// # concat method of array.

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arrConcat = arr1.concat(arr2)
// console.log(arrConcat);
// console.log(arr1);
// console.log(arr2);

// yesle array lai concat garna  ka lagi kam lagxa.
// yesle orginal array ma change gardaina.

// # reverse method of array.

// const arr4 = ['apple','ball','cat'];
// const arrReverse = arr4.reverse();
// console.log(arr4);
// console.log(arr4);

// yesle array ma bheyeko element lai reverse gardinxa.
// yesle orginal array ma change garxa.

// # sort method of Array.


