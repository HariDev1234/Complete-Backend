// // console.log("Hello, World!");
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7];
// let arr3 = [8, 9];
// let OutputArr = [];

// let resultArr = [arr1, arr2, arr3];

// // let result = arr1.concat(arr2, arr3);
// // // console.log(result)
// // // console.log(resultArr.flat());

// // let reduce = resultArr.reduce((acc, arr) => {
// //     return acc.concat(arr)
// // }, []);
// // // console.log(reduce)

// // // resultArr.forEach(item => {
// // //     OutputArr.push(...item);
// // // })
// // // console.log(OutputArr);

// // for(let i = 0; i < resultArr.length; i++) {
// //     for(let j = 0; j < resultArr[i].length; j++) {
// //         OutputArr.push(resultArr[i][j]);
// //     }
// // }

// // console.log(OutputArr)

// let arrs = [1, 2, 3, 2, 1, 4, 5];

// // let result = arrs.reduce((acc, curVal) => {
// //     if(!acc.includes(curVal)) {
// //         acc.push(curVal);
// //     }
// //     return acc
// // }, []);
// // console.log(result, ";;;;");



// // let arr1 = [1, 2, 3, 4];
// // let arr2 = [4, 5, 6, 4];
// // // output: [1, 2, 3, 4, 5, 6];
// // let resultarr = [...arr1, ...arr2];
// // let filterArr =[...new Set(resultarr)];

// // console.log(filterArr);

// // let result = resultarr.filter((item, index) => {
// //     return resultarr.indexOf(item) === index;
// // });
// // console.log(result, "result");

// // let result = resultarr.reduce((acc, curval) => {
// //     if(!acc.includes(curval)) {
// //         acc.push(curval);
// //     }
// //     return acc;
// // }, [])
// // console.log(result);

// // let result = [];

// // for(let i = 0; i < resultarr.length; i++) {
// //     if(result.indexOf(resultarr[i]) === -1) {
// //         result.push(resultarr[i]);
// //     }
// // }
// // console.log(result, "result")





// let arr = [1, 1, 1, 3, 4]; 
// // output: {1: 2, 2: 1, 3: 1, 4: 1} repeated counts

// let obj = {};

// // arr.forEach((item, index) => {
// //     if(obj[item]) {
// //         obj[item] = obj[item] + 1;
// //     } else {
// //         obj[item] = 1
// //     }
// // })
// // let result = arr.reduce((acc, curVal) => {
// //     acc[curVal] = (acc[curVal] || 0) + 1;

// //     return acc
// // }, {});
// // let filterArr = Object.entries(result).filter(([key, value]) => value > 1);
// // console.log(Object.fromEntries(filterArr))

// // let repeatArr = [1, 2, 1, 3, 4];

// // for (let i = 0; i < repeatArr.length; i++) {
// //   let count = 0;
// //   let isVisited = false;

// //   for (let k = 0; k < i; k++) {
// //     if (repeatArr[i] === repeatArr[k]) {
// //       isVisited = true;
// //       break;
// //     }
// //   }

// //   if (!isVisited) {
// //     for (let j = 0; j < repeatArr.length; j++) {
// //       if (repeatArr[i] === repeatArr[j]) {
// //         count++;
// //       }
// //     }

// //     console.log(`${repeatArr[i]} = ${count}`);
// //   }
// // }

// // for(let i = 0; i < arr.length; i++) {
// //     count = 0;
// //     for(let j = i + 1; j < arr.length; j++) {
// //         if(arr[i] == arr[j]) {
// //             count++;
// //         }
// //     }
// //     if(count == 1) {
// //         console.log(`${arr[i]} = ${count}`)
// //     }
// // }

// // console.log(filterArr)

// const nestedArray = [1, 2, [3, 4, [5, 6]]]; 

// // let flatten = (nested) => {
// //     let result = [];
// //     let stack = [...nested];
// //     while (stack.length) {
// //         let value = stack.pop();
// //         if(Array.isArray(value)) {
// //             stack.push(...value);
// //         } else {
// //             result.push(value);
// //         }
// //     }
// //     // console.log(result, "lll");
// // }
// // flatten(nestedArray)
// // Output: [1, 2, 3, 4, 5, 6]

// // console.log(nestedArray.flat(Infinity));

// function flatten(arr) {
//   let result = [];

//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result.push(...flatten(item));
//     } else {
//       result.push(item);
//     }
//   }
//     console.log(result)
//   return result;
// }

// console.log(flatten(nestedArray));

// const users = [
//   { id: 1, name: "Hari" },
//   { id: 2, name: "John" },
//   { id: 1, name: "Hari" },
//   { id: 3, name: "Sam" }
// ];

// // const result = [
// //   ...new Map(users.map(item => [item.id, item])).values()
// // ];

// // let result = users.filter((item, index) => {
// //     return index === users.findIndex(obj => obj.id == item.id);
// // })

// // let result = users.reduce((acc, curVal) => {
// //     let exist = acc.find(item => item.id == curVal.id);
// //     if(!exist) {
// //         acc.push(curVal);
// //     }
// //     return acc;
// // }, [])

// const fun = (...argu) => {
//     let result = argu.flat(Infinity);
//     // console.log(result)
// }
// fun([2], [3], [4])

// // console.log(result);

// // let targetArr = [1, 2, 3, 4, 5];
// // let targetVal = 6;

// // for(let i = 0; i < targetArr.length; i++) {
// //     for(let j = i + 1; j < targetArr.length; j++) {
// //         let sum = targetArr[i] + targetArr[j];
// //         // console.log(sum, "sum", targetArr[i], targetArr[j])
// //         if(sum === targetVal) {
// //             console.log(`${targetArr[i]} '+' ${targetArr[j]} = ${targetVal}`)
// //         }
// //     }
// // }

// // let reverseArr = [1, 2, 3, 4, 5, 6];

// // let start = 0;
// // let end = reverseArr.length - 1;

// // while(start < end) {
// //     let temp = reverseArr[end];
// //     reverseArr[end] = reverseArr[start]
// //     reverseArr[start] = temp;

// //     start ++;
// //     end --;
// // }
// // console.log(reverseArr);

// // let str = "inthenameoforganisation";

// // for(let i = 0; i < str.length; i++) {

// //     let count = 0;
// //     let isVisited = false;

// //     for(k = 0; k < i; k++) {
// //         if(str[i] == str[k]) {
// //             isVisited = true;
// //             break;
// //         }
// //     }
// //     if(!isVisited) {
// //         for(let j = i + 1; j < str.length; j++) {
// //             if(str[i] == str[j]) {
// //                 count ++;
// //             }
// //         }
// //         console.log(`${str[i]} = ${count}`);
// //     }
// // }


// // let arrobj = [
// //     {id: 1, name: "Hari"},
// //     {id: 1, name: "Hari"}
// // ]
// // let resultarr = [];
// // for(let i = 0; i < arrobj.length; i ++) {
// //     if(!resultarr.find(obj => obj.id === arrobj[i].id)) {
// //         resultarr.push(arrobj[i]);
// //     }
// // }
// // console.log(resultarr, "resultarrresultarr")

// // let sortarr = [1, 2, 3, 4, 5, 6, 9, 7, 8];

// // for(let i = 0; i < sortarr.length; i++) {

// //     for(let j = i + 1; j < sortarr.length; j++) {
// //         if(sortarr[i] > sortarr[j]) {
// //             let temp = sortarr[i];
// //             sortarr[i] = sortarr[j];
// //             sortarr[j] = temp;
// //         }
// //     }
// // }
// // console.log(sortarr);

// // let rev = [1, 2, 3, 4, 5, 6];
// // let start = 0;
// // let end = rev.length - 1;

// // while(start < end) {
// //     let temp = rev[end];
// //     rev[end] = rev[start];
// //     rev[start] = temp;

// //     start++;
// //     end--
// // }
// // console.log(rev)

// // let num = "7008390888";

// // let formatnum = num.replace(
// //     /(\d{3})(\d{3})(\d{4})/, "+91-($1)-($2)-($3)"
// // )
// // console.log(formatnum)

// // let str = "Hari3Reac24";

// // console.log(str.match(/\s/g));


// // let str = "hari";
// // let resultstr = "";

// // // for(let i = str.length - 1; i >= 0; i--) {
// // //     resultstr += str[i];
// // // }
// // // console.log(resultstr)
// // let strarr = str.split("");
// // let left = 0;
// // let right = strarr.length - 1;

// // while(left < right) {
// //     let temp = str[left];
// //         strarr[left] = str[right];
// //         strarr[right] = temp;

// //     left ++;
// //     right --
// // }
// // console.log(strarr.join(''))

// // let word = "hello world javascript";
// // let worksplt = word.split(" ");
// // let result = "";

// // for(let i = worksplt.length - 1; i >= 0; i--) {
// //     result += worksplt[i];
// //     if(i > 0) {
// //         result += " "
// //     }
// // }
// // console.log(result)

// // let factorialFun = (num) => {
// //     if(num == 0 || num == 1) return 1;
// //     return num * factorialFun(num -1);
// // }
// // console.log(factorialFun(5));

// // for(let i = 1; i <= 10; i ++) {
// //     console.log(2 * i)
// // }

// // let tablefun = (num, start = 1) => {

// //     if(start > 10) {
// //         return;
// //     }
// //     console.log(`${num} * ${start} = ${num * start}`);
// //     tablefun(2, start + 1)
// // }
// // tablefun(2);

// // let num = 121;
// // let converStr = String(num)
// // console.log(Number(converStr.split("").reverse().join('')))
// // console.log(num === Number(converStr.split("").reverse().join('')));

// // let poly = (num) => {

// //     let original = num;
// //     let reverse = 0;
// //     while(num > 0) {
// //         let digit = num % 10;
// //         reverse = reverse * 10 + digit;
// //         num = Math.floor(num/10);
// //     }
// //     return (original == reverse);
// // }
// // console.log(poly(121));

// // let arrmax = [4, 6, 7, 9]
// // let max = arrmax.reduce((acc, curr) => {
// //   return curr > acc ? curr : acc;
// // });

// // console.log(max);

// // let arrgiven = [1, 2, 3, 4, 5];

// // const newarr = arr.forEach(item => {
// //     console.log(item * 2);
// // })

// // console.log(newarr)
// // console.log(arrgiven)

// // function greet(...argu) {
// //   console.log(argu);
// // }
// // greet()
// // const singlearr = [];
// // let mergefun = (...argu) => {
// //     let collectarr = argu;
// //     collectarr.forEach(item => singlearr.push(...item))

// // }
// // mergefun([1, 2], [3 , 4]);
// // console.log(singlearr)


// // let newarr1 = [1, 2, 3];
// // let newarr2 = [2, 3, 4];

// // let result1 = newarr1.reduce((acc, curVal, index) => {
// //     if(newarr2.includes(curVal)) {
// //         acc.push(curVal);
// //     } 
// //     return acc;
// // }, []);
// // console.log(result1)


// // let repeated = [1, 2, 3, 4, 4, 3];
// // let result = repeated.reduce((acc, curVal) => {
// //      acc[curVal] = (acc[curVal] || 0) + 1;
// //      return acc
// // }, {})
// // console.log(Object.entries(result).filter(([key, value]) => console.log(key, value)), "result")

// // for(let i = 0; i < repeated.length; i ++) {
// //     let count = 0;
// //     let isVisited = false;

// //     for(let k = 0; k < i; k++) {
// //         if(repeated[i] == repeated[k]) {
// //             isVisited = true;
// //             break;
// //         }
// //     }
// //     if(!isVisited) {
// //         for(let j = i + 1; j < repeated.length; j++) {
// //             if(repeated[i] == repeated[j]) {
// //                 console.log(repeated[i])
// //             }
// //         }
// //     }
// // }


// // let strname = "Hari prasad swain";
// // let splitstr = strname.split(" ");
// // console.log(splitstr)
// // let newstr = ""
// // for(let i = 0; i < splitstr.length; i++) {
// //     for(let j = splitstr[i].length - 1; j >= 0; j--) {
// //         newstr += splitstr[i][j];
// //     }
// //  newstr += " ";
// // }

// // console.log(newstr, "kk")

// // let tablefun = (num = 2, start = 1) => {

// //     if(start > 10) {
// //         return;
// //     }
// //     console.log(num * start);
// //     tablefun(num = 2, start + 1);
// // }
// // let fact = (num = 4) => {
// //     if(num == 0) {
// //         console.log(1)
// //         return;
// //     }


// // }
// // fact()

// let maxarr = [4, 5, 1, 2];

// // let result = maxarr.reduce((acc, curval) => {
// //     return acc < curval ? acc = curval : acc;
// // })
// // console.log(result)

// // for(let i = 0; i < maxarr.length; i++) {
// //     let max = maxarr[0];
// //     for(let j = i + 1; j < maxarr.length; j++) {
// //         if(max < maxarr[j]) {
// //             max = maxarr[j]
// //         }
// //     }
// //     console.log(max, "lll")
// //     return max;
// // }

// let dupli = [1, 2, 3, 4, 2, 3];

// let resultdupli = dupli.reduce((acc, curval, index) => {
//     return !acc.find(curval)
// }, []);

// console.log(resultdupli)


// function fibonacci(n) {
//   let a = 0;
//   let b = 1;


//   for (let i = 2; i < n; i++) {
//     let next = a + b;

//     console.log(next);

//     a = b;
//     b = next;
//   }
// }

// fibonacci(10);


// function longestCommonSubstring(str1, str2) {
//   let longest = "";

//   for (let i = 0; i < str1.length; i++) {
//     let current = "";

//     for (let j = i; j < str1.length; j++) {
//       current += str1[j];
//         console.log(current, "curr")
//       if (
//         str2.includes(current) &&
//         current.length > longest.length
//       ) {
//         longest = current;
//       }
//     }
//   }

//   return longest;
// }

// console.log(
//   longestCommonSubstring("abcdef", "zcdemf")
// );


// function isBalanced(str) {
//   let stack = [];

//   for (let char of str) {

//     if (char === "(" || char === "[" || char === "{") {
//       stack.push(char);
//     }

//     else if (char === ")" || char === "]" || char === "}") {

//       if (stack.length === 0) {
//         return false;
//       }

//       let last = stack.pop();

//       if (
//         (char === ")" && last !== "(") ||
//         (char === "]" && last !== "[") ||
//         (char === "}" && last !== "{")
//       ) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }

// console.log(isBalanced("{[()]}")); // true
// // console.log(isBalanced("{[(])}")); // false
// console.log(isBalanced("()[]{}"));  // true
// console.log(isBalanced("([{}])"));  // true













// // index.js //


// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let arr3 = [9, 10, 11, 12];

// let result;
// // result = arr1.concat(arr2, arr3);
// // console.log(result); 

// // let mergeArray = (...arg) => {
// //     let merged = arg.reduce((acc, curVal, index) => {
// //         return acc.concat(curVal);
// //     }
// //     , []);
// //     console.log(merged);
// // }
// // result = mergeArray(arr1, arr2, arr3);

// let filterduparr = [1, 2, 3, 3, 4, 5, 4];

// // result = filterduparr.filter((item, index, arr) => index == arr.findIndex(element => element == item));

// // for(let i = 0; i < filterduparr.length; i++) {
// //     let count = 0;
// //     let isVisited = false;

// //     for(let k = 0; k < i; k++) {
// //         if(filterduparr[k] == filterduparr[i]) {
// //             isVisited = true;
// //             break;
// //         }
// //     }


// //     if(!isVisited) {
// //         for(let j = i + 1; j < filterduparr.length; j++) {
// //             if(filterduparr[i] == filterduparr[j]) {
// //                 count++
// //             }
// //         }
// //     }
// //     if(count > 0) console.log(`${filterduparr[i]} = ${count}`)
// // }


// // result = filterduparr.reduce((acc, curVal, index) => {
// //     acc[curVal] = (acc[curVal] || 0) + 1;

// //     return acc;
// // }, {});
// // console.log(Object.fromEntries(Object.entries(result).filter(([key, value]) => value > 1)));

// // result = filterduparr.filter((item, index, arr) => {
// //     return index == arr.findIndex(element => element == item);
// // })
// // console.log(result)


// let flattenArr = [1, 2, [4, 5], 6, [[7, 8]]];

// // console.log(flattenArr.flat(Infinity));

// let flatArr = [];

// // let flatten = (arr) => {
// //     let stack = [...arr];
// //     let result = [];

// //     while(stack.length) {
// //         let popElement = stack.pop();

// //         if(Array.isArray(popElement)) {
// //             stack.push(...popElement);
// //         } else {
// //             result.push(popElement);
// //         }
// //     }

// //     return result;
// // }
// // console.log(flatten(flattenArr).reverse())

// // [1, 2, [4, 5], 6, [[7, 8]]]
// // function flatten(nested) {

// //     let result = [];

// //     for(let item of nested) {
// //         if(Array.isArray(item)) {
// //             result.push(...flatten(item))
// //         } else {
// //             result.push(item)
// //         }
// //     }
// // }

// // function table(number, start) {
// //     if(start > 10) {
// //         return;
// //     } else {
// //         console.log(number * start);
// //         table(2, start + 1)
// //     }
// // }
// // table(2, 1)



// let duplicate = [
//     {id: 1, name: "Hari"},
//     {id: 1, name: "Hari"}
// ]

// // result = duplicate.filter((item, index, arr) => {
// //     return index == arr.findIndex((element, index) => element.id == item.id);
// // });

// // result = duplicate.reduce((acc, curVal, arr) => {
// //      let exist = acc.find(item => item.id == curVal.id);
// //      if(!exist) {
// //         acc.push(curVal);
// //      }
// //      return acc;
// // }, []);
// // console.log(result);

// // let targetarr = [1, 2, 3, 4, 5, 6];

// // let targetValue = 6;

// // for(let i = 0; i < targetarr.length; i ++) {

// //     for(let j = i + 1; j < targetarr.length; j ++) {
// //         let sum = targetarr[i] + targetarr[j];
// //         if(targetValue == sum) {
// //             console.log(`${targetarr[i]} + ${targetarr[j]} = ${sum}`)
// //         }
// //     }
// // }


// let sort_arr = [1, 2, 3, 8, 9, 10, 4, 6];


// // result = sort_arr.sort((a, b) => a - b);
// // console.log(result);

// // for(let i = 0; i < sort_arr.length; i ++) {

// //     for(let j = i + 1; j < sort_arr.length; j ++) {
// //         if(sort_arr[i] > sort_arr[j]) {
// //             let temp = sort_arr[j];
// //             sort_arr[j] = sort_arr[i];
// //             sort_arr[i] = temp;
// //         }
// //     }
// // }
// // console.log(sort_arr);

// let some_obj = [
//     {
//         books: ["hari", "prasad"]
//     },
//     {
//         books: ["swain", "title"]
//     }
// ];

// // result = some_obj.reduce((acc, curVal) => {
// //     acc.push(...curVal.books);
// //     return acc
// // }, []);
// // console.log(result)


// // let obj = {
// //   name: "Hari",

// //   function(...arg) {
// //     console.log(arg);
// //   },

// //   last() {
// //     console.log(this.name);
// //   }
// // };

// // obj.function(1, 2, 3, 4);
// // obj.last();


// // let fun = function() {
// //     console.log(Object.values(arguments));
// // }
// // fun(1, 2, 3, 4)

// // let rev_arr = [1, 2, 3, 4, 5, 6];

// // let start = 0;
// // let end = rev_arr.length - 1;

// // while(start < end) {
// //     let temp = rev_arr[end];
// //     rev_arr[end] = rev_arr[start];
// //     rev_arr[start] = temp;

// //     start ++;
// //     end --;
// // }
// // console.log(rev_arr);

// // function fact(num = 5) {
// //     let result = 1
// //     for(let i = 1; i <= num; i++) {
// //         result *= i;
// //     }
// //     return result;
// // }
// // console.log(fact());

// // function factorial(num = 5) {
// //     if(num == 0) return 1;
// //     return num * factorial(num - 1);
// // }

// // console.log(factorial());


// let str_rev = "Hari";
// let str = ""

// // for(let i = str_rev.length - 1; i >= 0; i --) {
// //     str += str_rev[i];
// // }
// // console.log(str);


// // let logn_str = "Hari Prasad swain";
// // let split_str = logn_str.split(" ");
// // let stt_result = "";

// // for(let i = 0; i < split_str.length; i++) {

// //     for(let j = split_str[i].length - 1; j >= 0; j--) {
// //         stt_result += split_str[i][j];
// //     }
// //     stt_result += " ";
// // }
// // console.log(stt_result)
// // result = logn_str.split(" ").map(item => item.split("").reverse().join('')).join(" ");
// // console.log(result);


// // const firstname = func();

// // let name = "Hari";

// // function func() {
// //     return `my name is ${name}`;
// // }
// // console.log(firstname);

// // for(var i = 0; i <= 5; i++) {
// //     setTimeout(() => {
// //         console.log(i)
// //     }, 1000)
// // }


// let inter_rev = "Hello, world!";
// let rev_str = "";


// // result = inter_rev
// //   .split(" ")
// //   .map(word => word.split("").reverse().join(""))
// //   .join(" ");

// // console.log(result);

// // let str_str = "Hello, World";

// // result = str_str
// //   .split(" ")
// //   .map(word => {
// //     let reversed = "";

// //     for (let i = word.length - 1; i >= 0; i--) {
// //       reversed += word[i];
// //     }

// //     return reversed;
// //   })
// //   .join(" ");

// // console.log(result);


// // let names = "Hari,";

// // console.log(names.slice(0, -1))

// // let pali = "tomato"


// // let max_element = [9, 10, 2, 90, 40];

// // result = max_element.sort((a, b) => b - a);
// // console.log(result[0]);

// // let dup_arr = [5, 3, 4, 5, 4, 8, 9];
// // let push_arr = [];

// // result = dup_arr.reduce((acc, curVal) => {
// //     acc[curVal] = (acc[curVal] || 0) + 1;

// //     return acc
// // }, {});
// // // console.log(result);
// // Object.entries(result).filter(([key, value]) => {
// //     if(value > 1) {
// //         push_arr.push(key);
// //     }
// // });

// // console.log(push_arr)



// let dup_arr = [5, 3, 4, 5, 4, 8, 9];

// // for(let i = 0; i < dup_arr.length; i ++) {
// //     let count = 0;
// //     let isVisited = false;

// //     for(let k = 0; k < i; k ++) {
// //         if(dup_arr[i] == dup_arr[k]) {
// //             isVisited = true;
// //             break;
// //         }
// //     }
// //     if(!isVisited) {
// //         for(let j = 0; j < dup_arr.length; j ++) {
// //             if(dup_arr[i] == dup_arr[j]) {
// //                 count ++;
// //             }
// //         }
// //     }
// //     if(count > 1) {
// //         console.log(`${dup_arr[i]}=${count}`);
// //     }
// // }


// // function fibo(num) {
// //     let a = 0;
// //     let b = 1;

// //     for(let i = 2; i < num; i ++) {
// //         let next = a + b;

// //         console.log(next);

// //         a = b;
// //         b = next;
// //     }
// // }
// // fibo(6);

// // let inser_arr1 = [1, 2, 3, 4];
// // let inser_arr2 = [3, 4, 5, 6];

// // result = inser_arr1.filter((item) => {
// //     return inser_arr2.includes(item);
// // });

// // console.log(result)



// // function longestCommonSubstring(str1, str2) {
// //   let longest = "";

// //   for (let i = 0; i < str1.length; i++) {
// //     let current = "";

// //     for (let j = i; j < str1.length; j++) {
// //       current += str1[j];
    
// //       console.log(current)
// //       if (
// //         str2.includes(current) &&
// //         current.length > longest.length
// //       ) {
// //         longest = current;
// //       }
// //     }
// //   }

// //   return longest;
// // }

// // console.log(
// //   longestCommonSubstring("zabcdef", "zcdemf")
// // );

// // function logSub(str1, str2) {
// //     let logest = "";

// //     for(let i = 0; i < str1.length; i++) {
// //         let current = "";
// //         for(let j = i; j < str1.length; j ++) {
// //             current += str1[j];

// //             if(str2.includes(current) && current.length > logest.length) {
// //                 logest = current;
// //             }
// //         }
// //     }

// //     return logest;
// // }
// // console.log(logSub("zabcdef", "zcdemf"));



// // let isBalanced = (str) => {

// //     let stack = [];

// //     for(let char of str) {

// //         if(char == "(" || char == "{" || char == "[" ) {
// //             stack.push(char);
// //         } else if (char == ")" || char == "}" || char == "]") {
// //             let last = stack.pop();

// //             if(
// //                 (char === ")" && last !== "(") 
// //                 || (char === "}" && last !== "{")
// //                 || (char === "]" && last !== "[")
// //             ) {
// //                 return false
// //             }
// //         }
// //     }

// //     return stack.length == 0
// // }
// // result = isBalanced("{[()]}");
// // console.log(result);

// // let missing = [1, 2, 3, 5, 6, 8];


// // for(let i = 0; i < missing.length - 1; i ++) {

// //     let sum_num = missing[i] + 1;

// //     if(sum_num !== missing[i + 1]) {
// //         console.log(sum_num);
// //     }
// // }


// // let logest = [10, 22, 9, 33, 2, 41, 60];
// // let result_arr = [logest[0]];

// // for(let j = 1; j < logest.length; j ++) {
// //     if(logest[j] > result_arr[result_arr.length - 1]) {
// //         result_arr.push(logest[j]);
// //     }
// // }
// // console.log(result_arr)

// // let arr = [10, 22, 9, 33, 2, 41, 60];

// //  result = [arr[0]];

// // for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] > result[result.length - 1]) {
// //         result.push(arr[i]);
// //     }
// // }

// // console.log(result);


// // logest = [10, 22, 9, 33, 2, 41, 60];

// // let seq = [logest[0]];

// // for(let j = 1; j < logest.length; j ++) {

// //     if(logest[j] > seq[seq.length - 1]) {
// //         seq.push(logest[j]);
// //     }
// // }
// // console.log(seq)

// let position_arr = [10, 22, 9, 33, 2, 41, 60];

// // function rotate(arr, position) {

// //     let start = 0;
// //     let end = arr.length - 1;

// //     while(start < end) {

// //         let temp = arr[end];
// //         arr[end] = arr[start];
// //         arr[start] = temp;
        

// //         start ++
// //         end --
// //     }

// // }
// // rotate(position_arr)
// // console.log(position_arr);

// position_arr = [10, 22, 9, 33, 2, 41, 60];

// function rotate(arr, k) {
//     let result = [];

//     k = k % arr.length;

//     // Put last k elements first
//     for (let i = arr.length - k; i < arr.length; i++) {
//         console.log(i)
//         result.push(arr[i]);
//     }

//     // Put remaining elements
//     for (let i = 0; i < arr.length - k; i++) {
//         result.push(arr[i]);
//     }

//     return result;
// }

// position_arr = rotate(position_arr, 50);

// // console.log(position_arr);

// // let step = [1, 2, 3, 4];
// // step1 = [4, 3, 2, 1]; reverse entire array
// // step2 = [3, 4, 2, 1]; reverse first k elements
// // step3 = [3, 4, 1, 2]; reverse remaining elements


// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     let arr1 = str1.split("").sort();
//     console.log(arr1)
//     let arr2 = str2.split("").sort();

//     return arr1.join("") === arr2.join("");
// }

// // console.log(isAnagram("listen", "silent")); // true
// // // console.log(isAnagram("hello", "world"));   // false


// // function isAnagram(str1, str2) {

// //     if (str1.length !== str2.length) {
// //         return false;
// //     }

// //     let count = {};

// //     // Count characters from first string
// //     for (let i = 0; i < str1.length; i++) {
// //         let char = str1[i];

// //         count[char] = (count[char] || 0) + 1;
// //     }

// //     // Subtract characters from second string
// //     for (let i = 0; i < str2.length; i++) {
// //         let char = str2[i];

// //         if (!count[char]) {
// //             return false;
// //         }

// //         count[char]--;
// //     }

// //     return true;
// // }

// // console.log(isAnagram("listen", "silent")); // true
// // console.log(isAnagram("hello", "world"));   // false


// // function fibonacci(n) {
// //     if (n === 0) {
// //         return 0;
// //     }

// //     if (n === 1) {
// //         return 1;
// //     }

// //     return fibonacci(n - 1) + fibonacci(n - 2);
// // }

// // console.log(fibonacci(7));


// // let arr = ["eat", "ate", "tan", "nat"];

// // let result = arr.reduce((acc, word) => {

// //     let key = word.split("").sort().join("");

// //     if (!acc[key]) {
// //         acc[key] = [];
// //     }

// //     acc[key].push(word);

// //     return acc;

// // }, {});

// // console.log(Object.values(result));




// // let largest_num = [9, 10, 5, 20, 30];
// // let large = largest_num[0];


// // for(let i = 1; i < largest_num.length; i ++) {

// //     if(large < largest_num[i]) {
// //         large = largest_num[i];
// //     }
// // }
// // console.log(large)


// let reverse = [5, 6, 5, 7, 20, 30];

// // result = reverse.reduce((acc, curVal) => {
// //     let num_status = curVal % 2
// //     if(num_status == 0) {
// //         acc["even"] = (acc["even"] || 0) + 1;
// //     } else {
// //         acc["old"] = (acc["old"] || 0) + 1;
// //     }

// //     return acc;
// // }, {});
// // console.log(result)

// // result = reverse.filter((item, index, arr) => index == arr.findIndex((element) => item == element));
// // console.log(result)
// // result = reverse.sort((a, b) => b - a);
// // console.log(result)
// // let start = 0;
// // let end = reverse.length - 1;

// // while(start < end) {
// //     let temp = reverse[start];
// //     reverse[start] = reverse[end];
// //     reverse[end] = temp;

// //     start ++;
// //     end --;
// // }
// // console.log(reverse)

// // function isSorted(arr) {

// //     for(let i = 0; i < arr.length; i ++) {
// //         if(arr[i] > arr[i + 1]) {
// //             return false;
// //         }
// //     }
// //     return true;
// // }
// // result = isSorted(reverse);
// // console.log(result)


// // let move = [1,0,1,1,1,0,0,0,1];
// // let empty = [];

// // let moveFun = (arr) => {

// //     for(let i = 0; i < arr.length; i ++) {
// //         if(arr[i] == 1) {
// //             empty.unshift(arr[i]);
// //         } else {
// //             empty.push(arr[i]);
// //         }
// //     }
// // }
// // moveFun(move);
// // console.log(empty, "empty");


// // let missing = [1, 2, 3, 4, 6, 7];

// // function missFun(arr) {

// //     for(let i = 0; i < arr.length - 1; i ++) {
// //         let sum = arr[i] + 1;
// //         if(sum !== arr[i + 1]) {
// //             console.log(`Missing number is ${sum}`)
// //         }
// //     }
// // }
// // missFun(missing);

// let rotatearr = [1,2,3,4, 5,6];
// let k = 2

// // console.log(rotatearr.slice(-0))
// // console.log(rotatearr.slice(0, -0))
// // function rotate(arr) {

// // }
// // rotate(rotatearr);



// // let commonFun = (arr1, arr2) => {
// //     let result = arr1.filter((item) => {
// //         return arr2.includes(item);
// //     })
// //     return result;
// // }
// // result = commonFun([1,2,3,5],[1,4,3,2,3,4,5]);
// // console.log(result, "result")



// // result = [...[1,2,3,5], ...[1,4,3,2,3,4,5]].reduce((acc, curVal) => {
// //     if(!acc.includes(curVal)) {
// //         acc.push(curVal);
// //     }
// //     return acc;
// // }, []);
// // console.log(result)


// let dup = [1, 3, 4, 2, 5, 3];
// let emptydup = []

// // for(let i = 0; i < dup.length; i ++) {
// //     if(!emptydup.includes(dup[i])) {
// //         emptydup.push(dup[i]);
// //     } else {
// //         console.log(dup[i]);
// //     }
// // }

// let major = [2, 2, 2, 1, 1, 1, 2];
// // let max = 0;
// // let num;

// // for(let i = 0; i < major.length; i ++) {
// //     let count = 0;
// //     let visited = false;

// //     for(let k = 0; k < i; k ++) {
// //         if(major[k] == major[i]) {
// //             visited = true;
// //             break;
// //         }
// //     }

// //     if(!visited) {
// //         for(let j = 0; j < major.length; j ++) {
// //             if(major[j] == major[i]) {
// //                  count++;
// //             }
// //         }
// //         if(count > max) {
// //             max = count;
// //             num = major[i]
// //         }
// //     }

// //     console.log(major[i], count)

// // }
// // console.log(max, num);

// // result = major.reduce((acc, curVal) => {
// //     acc[curVal] = (acc[curVal] || 0) + 1;

// //     return acc
// // }, {});

// // console.log(Object.entries(result), "result")

// // let max_min = [0,2,430,65,-1];
// // let min = max_min[0];
// // let max = max_min[0];
// // let secMax = max_min[0]

// // for(let i = 1; i < max_min.length; i ++) {

// //     if(min > max_min[i]) {
// //         min = max_min[i];
// //     } else if (max < max_min[i]) {
// //         secMax = max;
// //         max = max_min[i];
// //     } else if (max_min[i] > secMax && max_min[i] < max) {
// //         secMax = max_min[i]
// //     }
// // }
// // console.log(min, max, secMax);

// let rev = "aabbc";

// // console.log(rev.split("").reverse().join(""))

// // function reverseFun(str = "Hari") {
// //     let rev_str = "";

// //     for(let i = str.length - 1; i >= 0; i --) {
// //         rev_str += str[i];
// //     }
// //     return rev_str;
// // }
// // result = reverseFun("madam");
// // console.log(result == "madam");

// // result = rev.split("").reduce((acc, curVal) => {
// //     acc[curVal] = (acc[curVal] || 0) + 1;

// //     return acc;
// // }, {});
// // console.log(result)

// // let repeateds = "hariprasadswain";

// // let repeated = (str) => {

// //         for(let i = 0; i < str.length; i ++) {
// //             let first_repeated = false;
// //             for(let j = i + 1; j < str.length; j ++) {
// //                 if(str[i] == str[j]) {
// //                     first_repeated = true;
// //                     break;
// //                 }
// //             }
// //             if (!first_repeated) {
// //                 return str[i];
// //             }

// //         }
// // }
// // result = repeated(repeateds);
// // console.log(result)

// // function anagramFun(str1, str2) {
// //     first = str1.split("").sort().join("");
// //     second = str2.split("").sort().join("");

// //     return first == second;
// // }
// // result = anagramFun("apa", "aap");
// // console.log(result);


// // function logestSub(str) {
// //     let max = 0;
// //     let new_str = "";
    
// //     for(let i = 0; i < str.length; i ++) {
// //         let current = "";

// //         for(let j = i; j < str.length; j ++) {
            
// //             if(current.includes(str[j])) {
// //                 break;
// //             }
// //             current += str[j];
// //         }

// //         if(current.length > max) {
// //             max = current.length;
// //             new_str = current;
// //         }
// //     }

// //     return {max, new_str};

// // }
// // result = logestSub("aabcabcbb");
// // console.log(result)


// let compress_str = "aaababc";
// let comp = ""
// let count = 1
// // result = compress_str.split("").reduce((acc, curVal) => {
// //     acc[curVal] = (acc[curVal] || 0) + 1;

// //     return acc
// // }, {});

// // for(let item in result) {
// //     comp += item + result[item];
// // }
// // console.log(comp)


// // for(let i = 0; i < compress_str.length; i ++) {

// //     if(compress_str[i] == compress_str[i + 1]) { 
// //         count++;
// //     } else {
// //         comp += compress_str[i] + count;
// //         count = 1
// //     }
// // }
// // console.log(comp, "kkk")

// // let remove_dup = "aabbbcccccsdddd";
// // let remove_str = ""

// // for(let i = 0; i < remove_dup.length; i ++) {
// //     if(!remove_str.includes(remove_dup[i])) {
// //         remove_str += remove_dup[i];
// //     }
// // }
// // console.log(remove_str)

// // const items = [
// //   { key: 'id', data: '101' },
// //   { key: 'id', data: '1013' },
// //   { key: 'id', data: '1011' },
// //   { key: 'id', data: '1012' },
// //   { key: 'name', data: 'Alice' },
// //   { key: 'id', data: '102' },
// //   { key: 'name', data: 'Bob' }
// // ];

// // result = items.reduce((acc, curVal, index) => {
// //     if(acc[curVal.key]) {
// //         acc[curVal.key].push(curVal);
// //     } else {
// //         acc[curVal.key] = [curVal];
// //     }
    
// //     return acc;
// // }, {});
// // console.log(result)

// // const itemskey = [
// //   { key: 'id', data: '101' },
// //   { key: 'name', data: 'Alice' },
// //   { key: 'id', data: '102' },
// //   { key: 'name', data: 'Bob' },
// //   { key: 'email', data: 'alice@example.com' }
// // ];

// // result = itemskey.reduce((acc, curVal) => {

// //     if(acc[curVal.key]) {
// //         acc[curVal.key].push(curVal.data);
// //     } else {
// //         acc[curVal.key] = [curVal.data];
// //     }

// //     return acc
// // }, {});
// // console.log(result)



// // {
// //   user: {
// //     name: 'Alice',
// //     age: '30',
// //     email: 'alice@example.com'
// //   },
// //   settings: {
// //     theme: 'dark',
// //     notifications: 'enabled'
// //   }
// // }

// // const items = [
// //   { key: 'user.name', data: 'Alice' },
// //   { key: 'user.age', data: '30' },
// //   { key: 'user.email', data: 'alice@example.com' },
// //   { key: 'settings.theme', data: 'dark' },
// //   { key: 'settings.notifications', data: 'enabled' }
// // ];

// // result = items.reduce((acc, curVal) => {
// //     let [object_key, key] = curVal.key.split(".");
    
// //     if(acc[object_key]) {
// //         acc[object_key] = {...acc[object_key], [key]: curVal.data}
// //     } else {
// //         acc[object_key] = {[key]: curVal.data};
// //     }

// //     return acc;
// // }, {});
// // console.log(result)


// // const obj = {
// //   user: {
// //     name: 'Alice',
// //     age: '30',
// //     email: 'alice@example.com'
// //   },
// //   settings: {
// //     theme: 'dark',
// //     notifications: 'enabled'
// //   }
// // };

// // const updates = [
// //   { key: 'user.name', value: 'Bob' },
// //   { key: 'settings.theme', value: 'light' },
// //   { key: 'user.city', value: 'New York' }
// // ];

// // result = updates.reduce((acc, curVal) => {
// //     let [object_key, key] = curVal.key.split(".");

// //     obj[object_key] = {...obj[object_key], [key]: curVal.value};

// // }, {});

// // console.log(obj);

// // const company = {
// //   name: "TechNova",
// //   location: "Bangalore",
// //   employees: [
// //     {
// //       id: 1,
// //       name: "Alice",
// //       department: "Engineering",
// //       skills: ["JavaScript", "React", "Node.js"]
// //     },
// //     {
// //       id: 2,
// //       name: "Bob",
// //       department: "Design",
// //       skills: ["Photoshop", "Figma"]
// //     },
// //     {
// //       id: 3,
// //       name: "Charlie",
// //       department: "Engineering",
// //       skills: ["Java", "Spring", "Hibernate"]
// //     }
// //   ],
// //   founded: 2010,
// //   isActive: true
// // };

// // result = company.employees.filter((item) => item.department == "Engineering").map((ele) => {
// //     return ...ele.skills
// // })
// // console.log(result.flat(Infinity), "result");


// // let missingnum =  [3, 7, 1, 2, 8, 4, 5];

// // function missingFun(arr) {
// //     let sortedarr = arr.sort((a, b) => a-b);
    
// //     for(let i = 0; i < sortedarr.length - 1; i++) {
// //         let sum = sortedarr[i] + 1
// //         if(sum !== sortedarr[i + 1]) {
// //             console.log(sum);
// //         }
// //     }
// // }
// // missingFun(missingnum)


// // let most = ["apple", "banana", "apple", "orange", "banana", "apple", "grape"];
// // let maxcount = 0, mincount = 0;

// // result = most.reduce((acc, curVal) => {
// //     acc[curVal] = (acc[curVal] || 0) + 1;

// //     return acc;
// // }, {});
// // console.log(Object.entries(result).map(([key, value]) => {
  
// // }))
// // console.log(maxcount, mincount)

// // const input = [1, 3, 1, 3, 2, 1, 4, 3, 3];
// // let inputObj = {},
// // maxval = 0;

// // for(let item of input) {
// //     inputObj[item] = (inputObj[item] || 0) + 1;

// //     if(inputObj[item] > maxval) {
// //         maxval = inputObj[item];
// //     }
// // }
// // console.log(maxval)

// // const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // result = input.reduce((acc, curVal) => {
// //     let remainder = curVal % 3;

// //     if(acc[remainder]) {
// //         acc[remainder].push(curVal);
// //     } else {
// //         acc[remainder] = [curVal];
// //     }

// //     return acc
// // }, {})
// // console.log(result)

// // const input = ["apple", "banana", "avocado", "blueberry", "cherry", "carrot",'david'];

// // result = input.reduce((acc, curVal) => {
// //     let first_char = curVal[0];

// //     if(acc[first_char]) {
// //         acc[first_char].push(curVal);
// //     } else {
// //         acc[first_char] = [curVal];
// //     }
// //     return acc;
// // }, {});
// // console.log(result)


// // const users = [
// //   { name: "Alice", age: 25 },
// //   { name: "Bob", age: 30 },
// //   { name: "Charlie", age: 25 },
// //   { name: "David", age: 30 }
// // ];


// // result = users.reduce((acc, curVal) => {

// //     if(acc[curVal.age]) {
// //         acc[curVal.age].push(curVal)
// //     } else {
// //         acc[curVal.age] = [curVal];
// //     }

// //     return acc
// // }, {});
// // console.log(result)


// // const input = "aabbcdeffg";

// // for(let i = 0; i < input.length; i ++) {
// //     let count = 0;
// //     let isVisited = false;

// //     for(let k = 0; k < i; k ++) {
// //         if(input[k] == input[i]) {
// //             isVisited = true;
// //             break;
// //         }
       
// //     }

// //     if(!isVisited) {
// //         for(let j = 0; j < input.length; j ++) {
// //             if(input[i] == input[j]) {
// //                 count++;
// //             }
// //         }
// //     }

// //     if(count == 1) {
// //         console.log(input[i], count);
// //         return;
// //     }
// // }


// // const students = [
// //   { name: "Alice", grade: "A" },
// //   { name: "Bob", grade: "B" },
// //   { name: "Charlie", grade: "A" },
// //   { name: "David", grade: "C" },
// //   { name: "Eva", grade: "B" }
// // ];


// // result = students.reduce((acc, curVal) => {
// //     let char = curVal.name.charAt(0);
// //     if(acc[char]) {
// //         acc[char].push(curVal.name);
// //     } else {
// //         acc[char] = [curVal.name];
// //     }

// //     return acc;
// // }, {})

// // console.log(result);


// // const input = [1, [2, 3], [4, [5, 6]], 7,7,4,3];

// // let stack = [...input];
// // let resul = [];

// // while(stack.length > 0) {
// //     let popele = stack.pop();

// //     if(Array.isArray(popele)) {
// //         stack.push(...popele);
// //     } else {
// //         resul.push(popele);
// //     }
// // }
// // console.log(resul.reverse())
// // function flatt(input) {
// //     let emput = [];

// //     for(let item of input) {
// //         if(Array.isArray(item)) {
// //             emput.push(...flatt(item)) 
// //         } else {
// //             emput.push(item)
// //         }
// //     }
// //     return emput;
// // }
// // console.log(flatt(input))


// // const input = "this is a test this is only a test only i";
// // const input_split = input.split(" ");

// // result = input_split.reduce((acc, curVal) => {
// //     acc[curVal] = (acc[curVal] || 0) + 1;

// //     return acc
// // }, {});

// // let acc = {};
// // for(let i of input_split) {
// //     acc[i] = (acc[i] || 0) + 1;
// // }
// // for(let i of input_split) {
// //     if(acc[i] == 1) {
// //         console.log(i)
// //     }
// // }

// // const input = "abcabcbb";

// // let new_str = "";

// // for(let i = 0; i < input.length; i ++) {
// //     let current = "";

// //     for(let j = i; j < input.length; j ++) {

// //         if(current.includes(input[j])) {
// //             break;
// //         }
// //         current += input[j]
// //     }
// //     if(current.length > new_str.length) {
// //         new_str = current;
// //     }
// // }
// // console.log(new_str)

// // let a = 'My name is Manisha';
// // let a_split = a.split(" ");
// // let long_str = a_split[0];

// // for(let i = 1; i < a_split.length; i ++) {

// //     if(long_str.length < a_split[i].length) {
// //         long_str = a_split[i];
// //     }
// // }
// // console.log(long_str)

// console.log(1 + "2" + 3);
// console.log(1 + 2 + "3");
// console.log("2" - 3);
// console.log([] == false);
// console.log([] === false);




// // function sum(a = 5, b = 7) {
// //     console.log(a * b);
// // }
// // sum(null, 20);  // Here null become 0 (Zero)
// // sum(undefined, 20)  // In JavaScript, a default parameter is used when the argument is undefined or not provided.


// // console.log((true + "")[3])
// // console.log([1, 2] + ![]);


// // Promise.resolve(console.log(2)).then(() => {
// //     console.log(3);
// // }).then(() => {
// //     console.log(4)
// // })
// // setTimeout(() => console.log(5), 0);
// // console.log(6)

// // console.log(2) is not asynchronous in your code, even though it appears inside Promise.resolve().


// // console.log(!!"") //"" (empty string) is a falsy value in JavaScript.

// // A good interview answer is: “Double NOT (!!) converts a value to its corresponding Boolean value based on whether it is truthy or falsy.”

// // console.log(!!{}, !![])
// // Even though {} and [] are empty, they are still objects, and all objects are truthy in JavaScript.


// // let x = 10; x++;
// // console.log(x) // 11


// // function x() {
// //     console.log("Func")
// // }

// // var x = 9;

// // x();

// // During the creation/hoisting phase, both the function declaration and var x are hoisted. The function declaration provides the initial value:
// // x = function () {
// //   console.log("Func");
// // };

// // The var x declaration itself doesn't overwrite it during hoisting.

// // Then, during execution:
// // assigns 9 to x, replacing the function reference.
// // So when JavaScript reaches:

// // x();
// // it is effectively doing:
// // 9();

// // console.log(typeof null)

// // var z = 1, y = z = typeof y;

// // console.log(y);

// // Conceptually:

// // var z = 1;
// // var y;

// // y = z = typeof y; 
// // Assignments are evaluated from right to left:



// // Promise.resolve(a = 7).catch((error) => {
// //     console.log(error);
// // }).then((arg) => {
// //     console.log(arg);
// // })


// // Promise.resolve(throw new Error("error")).catch((error) => console.log(error)).then(arg => {console.log(arg)})
// // throw is a statement, not an expression that can be passed into Promise.resolve().

// // let x = "abc"; x.split("").concat(["d"]);

// // console.log(x, x.split(""), x.split("").concat(["d"]))


// // for(let i = 1; i < 5; i ++) {
// //     if(i === 3) continue;
// //     console.log(i);
// // } 
// // output: 1 2 4
// // Because continue skips the current iteration and moves to the next iteration of the loop.


// // Array.prototype.myMap = function (callback) {
// //     let result = [];

// //     for(let i = 0; i < this.length; i ++) {
// //         result.push(callback(this[i], i, this));
// //     }

// //     return result;
// // } 

// // let arr = [1, 2, 3, 4];

// // let result = arr.myMap((item) => {
// //     return 2 * item
// // })
// // console.log(result)





// // const arr = [10, 5, 20, 8, 20, 15];


// // function second(arr) {
// //     let max = -Infinity;         // 10
// //     let second_max = -Infinity;  // 10

// //     for(let i = 0; i < arr.length; i ++) {
// //         if(arr[i] > max) {
// //             second_max = max;
// //             max = arr[i];
// //         } else if(arr[i] > second_max && arr[i] !== max) {
// //             second_max = arr[i];
// //         }
// //     }

// //     return {max, second_max};
// // }
// // let result = second([-10, -5, -20, -8]);

// // console.log(result);


// // const arr = [1, 2, 3, 2, 4, 5, 1, 6, 3];

// // function removeDup(arr) {
// //     let seen = new Map();
// //     let result = []

// //     for(let item of arr) {

// //         if(!seen.has(item)) {
// //             seen.set(item, true);
// //             result.push(item)
// //         }
// //     }

// //     return result
// // }

// // let result = removeDup(arr);
// // console.log(result)


// // const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];


// // function frequency(arr) {
// //     let result_obj = {};

// //     for(let item of arr) {
// //         result_obj[item] = (result_obj[item] || 0) + 1;
// //     }
// //     return result_obj;
// // }
// // console.log(frequency(arr));



// // const arr = ["apple", "apple", "banana", "banana"];;

// // function most_frequency(arr) {
// //     let obj = {}
// //     let most_freg_ele = "";
// //     let most_count = 0;

// //     for(let item of arr) {
// //         obj[item] = (obj[item] || 0) + 1;

// //         if(obj[item] >= most_count) {
// //             most_freg_ele = item;
// //             most_count = obj[item];
// //         }
// //     }
// //     return { most_freg_ele,  most_count}
// // }
// // console.log(most_frequency(arr));


// // function most_frequency(arr) {
// //     const frequency = new Map();

// //     for (let item of arr) {
// //         frequency.set(item, (frequency.get(item) || 0) + 1);
// //     }

// //     let most_freg_ele = null;
// //     let most_count = 0;

// //     for (let item of arr) {
// //         if (frequency.get(item) > most_count) {
// //             most_freg_ele = item;
// //             most_count = frequency.get(item);
// //         }
// //     }

// //     return { most_freg_ele, most_count };
// // }


// // const arr = [1, 2, 4, 5, 6];

// // function missingNum(arr) {
// //     let total_arrLength = arr.length + 1;
// //     let total = (total_arrLength * (total_arrLength + 1)) / 2;
// //     let sum = arr.reduce((acc, curVal) => acc + curVal);

// //     return total - sum;
// // }
// // console.log(missingNum(arr));


// // Important //
// // const arr = [0, 1, 0, 3, 12, 0, 5];


// // function moves(arr) {
// //     let j = 0;

// //     for(let i = 0; i < arr.length; i ++) {

// //         if(arr[i] !== 0) {
// //             [arr[i], arr[j]] = [arr[j], arr[i]];

// //             j++;
// //         }
// //     }
// // }
// // moves(arr);
// // console.log(arr)


// // const str = "aabbccddff";

// // function firstNon(str) {

// //     for(let i = 0; i < str.length; i ++) {
// //         let is_visited = false;
// //         let count = 0;

// //         for(let k = 0; k < i; k ++) {

// //             if(str[i] == str[k]) {
// //                 is_visited = true;
// //                 break;
// //             }
// //         }

// //         if(!is_visited) {
// //             for(let j = 0; j < str.length; j ++) {
// //                 if(str[i] === str[j]) {
// //                     count ++;
// //                 }
// //             }
// //         }

// //         if(count == 1) {
// //             return str[i];
// //         } 
// //     }
// //     return null
// // }
// // console.log(firstNon(str))

// //Important //
// // const str = "aabbcdeff";

// // function firstNon(str) {
// //     const frequency = Object.create(null);

// //     // Count character frequencies
// //     for (let char of str) {
// //         frequency[char] = (frequency[char] || 0) + 1;
// //     }

// //     // Find first character with frequency 1
// //     for (let char of str) {
// //         if (frequency[char] === 1) {
// //             return char;
// //         }
// //     }

// //     return null;
// // }

// // console.log(firstNon(str)); // "c"




// // const arr = [1, 2, [3, 4, [5, 6], [7, 8]], 9, 10];


// // function recursion(arr) {
// //     let result = [];

// //     for(let item of arr) {

// //         if(Array.isArray(item)) {
// //             result.push(recursion(item))
// //         } else {
// //             result.push(item)
// //         }
// //     }
// //     return result
// // }
// // console.log(recursion(arr))


// // const str = "I am learning JavaScript programming";

// // function maxStr(str) {
// //     let split_str = str.split(" ");
// //     let max = "";

// //     for(let item of split_str) {

// //         if(item.length > max.length) {
// //             max = item;
// //         }
// //     }

// //     return max;
// // }
// // console.log(maxStr(str))

// // Important
// // const str =  "  I   love   JS  ";

// // function maxStr(str) {
// //     // console.log(str.trim().split(/\s+/))
// //     let split_str = str.split(" ");
// //     let start = 0;
// //     let end = split_str.length - 1;
// //     while(end > start) {

// //         let temp = split_str[end];
// //         split_str[end] = split_str[start];
// //         split_str[start] = temp;

// //         start++;
// //         end--
// //     }

// //     return split_str.join(" ");
// // }
// // console.log(maxStr(str))


// // function targetFan(arr, n) {
// //     let sort_arr = arr.sort((a, b) => a - b);

// //     let start = 0;
// //     let end = sort_arr.length - 1;

// //     while(end > start) {
// //         let sum = sort_arr[start] + sort_arr[end];

// //         if(sum > n) {
// //             end --;
// //         } else if(sum < n) {
// //             start ++;
// //         } else if(sum == n) {
// //             return [start, end];
// //         }
// //     }

// //     return [];
// // }
// // console.log(targetFan(arr, target));


// // Important 
// // const arr = [2, 11, 7, 15];
// // const target = 9;

// // function targetFan(arr, n) {
// //     let map = new Map();

// //     for(let i = 0; i < arr.length; i ++) {
// //         let remaining = n - arr[i];

// //         if(map.has(remaining)) {
// //             return [map.get(remaining), i];
// //         }
// //         map.set(arr[i], i)
// //     }

// //     return []
// // }
// // console.log(targetFan(arr, target))


// // Important 
// // const arr = [1, 2, 3, 2, 4, 5, 1, 6, 3, 3];


// // function getDupFun(arr) {
// //     let result = [];
// //     let map = new Map();

// //     for(let item of arr) {
// //         map.set(item, (map.get(item) || 0) + 1)
// //     }
// //     for(let item of arr) {
// //         if(map.get(item) > 1) {
// //             result.push(item);
// //             map.set(item, 0);  // Helps to avoid unnecessary element count check as we already covered //
// //         }
// //     }
// //     return result
// // }
// // console.log(getDupFun(arr));



// // const arr1 = [1, 1, 2, 3];
// // const arr2 = [3, 4, 5];


// // function Intersection(first, second) {
// //     let merge = [...first, ...second];
// //     let map = new Map();
// //     let result = [];

// //     console.log(merge)

// //     for(let item of merge) {
// //         map.set(item, (map.get(item) || 0) + 1)
// //     }

// //     for(let item of merge) {
// //         if(map.get(item) > 1) {
// //             result.push(item);
// //             map.set(item, 0);
// //         }
// //     }
// //     return result
// // }
// // console.log(Intersection(arr1, arr2))    result [1, 3] but expecting [3] common in both array

// //Important

// // function commonsection(first, second) {
// //     let map = new Map();
// //     let result = [];


// //     for(let item of first) {
// //         map.set(item, (map.get(item) || 0) + 1)
// //     }
// //     for(let item of second) {
// //         if(map.has(item)) {
// //             result.push(item);
// //             map.delete(item);
// //         }
// //     }
// //     return result
// // }
// // console.log(commonsection(arr1, arr2))


// // const arr1 = [1, 3, 5, 7];
// // const arr2 = [2, 4, 6, 8];

// // function sortArr(first, second) {
// //     let arr = [...first, ...second];

// //     for(let i = 0; i < arr.length; i ++ ) {

// //         for(let j = i + 1; j < arr.length; j ++) {

// //             if(arr[i] > arr[j]) {
// //                 let temp = arr[j];
// //                 arr[j] = arr[i];
// //                 arr[i] = temp;
// //             }
// //         }
// //     }

// //     return arr;
// // }

// // console.log(sortArr(arr1, arr2))



// //Important //
// // const arr = [-10, 5, 2];

// // function maxSum(arr) {
// //     if(arr.length < 2) return null;
// //     let sum = -Infinity;

// //     for(let i = 0; i < arr.length; i ++) {

// //         for(let j = i + 1; j < arr.length; j ++) {
// //             let total = arr[i] + arr[j];

// //             if(total > sum) {
// //                 sum = total
// //             }
// //         }
// //     }

// //     return sum;
// // }
// // console.log(maxSum(arr));

// //Important//
// // function maxSum(arr) {
// //     if (arr.length < 2) return null;

// //     let max = -Infinity;
// //     let secondMax = -Infinity;

// //     for (let item of arr) {
// //         if (item >= max) {
// //             secondMax = max;
// //             max = item;
// //         } else if (item > secondMax) {
// //             secondMax = item;
// //         }
// //     }

// //     return max + secondMax;
// // }

// // console.log(maxSum([-10, 5, 2])); // 7
// // console.log(maxSum([5, 5, 3]));   // 10
// // console.log(maxSum([-10, -5, -2])); // -7

// // console.log({} == {})

// // console.log(obj.name === copy.name);       
// // true ❌

// // Why is the third answer true?
// // Because strings are primitive values in JavaScript. Primitive values are compared by value, whereas objects are compared by reference.

// //Very Important//
// // const user = {
// //     name: "Rahul",
// //     age: 28,
// //     address: {
// //         city: "Hyderabad",
// //         pincode: 500001
// //     },
// //     skills: ["JavaScript", "React"]
// // };

// // const copiedUser = deepClone(user);

// // copiedUser.address.city = "Bangalore";
// // copiedUser.skills.push("Node.js");

// // console.log(user.address.city);
// // // Hyderabad ✅

// // console.log(user.skills);
// // // ["JavaScript", "React"] ✅

// // console.log(copiedUser.skills);

// // ["JavaScript", "React", "Node.js"]


// // function deepClone(value) {

// //     if (value === null || typeof value !== "object") {
// //         return value;
// //     }

// //     let result = Array.isArray(value) ? [] : {};

// //     for (let key of Object.keys(value)) {
// //         result[key] = deepClone(value[key]);
// //     }

// //     return result;
// // }


// // Array.prototype.myMap = function (callback) {
// //     let result = [];

// //     for(let i = 0; i < this.length; i ++) {
// //         result.push(callback(this[i], i, this));
// //     }

// //     return result;
// // } 

// // let arr = [1, 2, 3, 4];

// // let result = arr.myMap((item) => {
// //     return 2 * item
// // })
// // console.log(result)

// // Import 
// // Array.prototype.myMap = function(callback) {
// //     let result = []

// //     for(let i = 0; i < this.length; i ++) {
// //        result.push(callback(this[i], i, this));
// //     }

// //     return result
// // }

// // Array.prototype.myFilter = function(callback) {
// //     let result = [];

// //     for (let i = 0; i < this.length; i++) {
// //         if (callback(this[i], i, this)) {
// //             result.push(this[i]);
// //         }
// //     }

// //     return result;
// // };

// // Array.prototype.myReduce = function(callback, initialValue) {
// //     let accumulator = initialValue;
// //     let startIndex = 0;

// //     // Handle when initialValue is not provided
// //     if (arguments.length < 2) {
// //         if (this.length === 0) {
// //             throw new TypeError("Reduce of empty array with no initial value");
// //         }

// //         accumulator = this[0];
// //         startIndex = 1;
// //     }

// //     for (let i = startIndex; i < this.length; i++) {
// //         if (i in this) {
// //             accumulator = callback(accumulator, this[i], i, this);
// //         }
// //     }

// //     return accumulator;
// // };


// // let result = arr.myMap((item) => {
// //     return 2 * item
// // })
// // console.log(result)




// // function debounce(callback, delay) {
// //     let timer;

// //     return function (...args) {
// //         clearTimeout(timer);
// //         timer = setTimeout(() => {
// //             callback.apply(this, args);
// //         }, delay)
// //     } 
// // }

// // const search = debounce(function(arg) {
// //     console.log("API called", arg);
// // }, 500);


// // search("Hari")


// // function throttle(callback, delay) {
// //     let lastExecution = 0;

// //     return function (...args) {
// //         let now = Date.now();

// //         if (now - lastExecution >= delay) {
// //             lastExecution = now;
// //             callback(...args);
// //         }
// //     };
// // }

// // const throttledFn = throttle((value) => {
// //     console.log(value);
// // }, 1000);

// // // Assume calls occur at these elapsed times:
// // throttledFn("A"); // 0 ms
// // throttledFn("B"); // 300 ms
// // throttledFn("C"); // 700 ms
// // throttledFn("D"); // 1200 ms
// // throttledFn("E"); // 1500 ms
// // throttledFn("F"); // 2300 ms




// // function outer() {
// //     let count = 0;

// //     return function inner() {
// //         count++;
// //         console.log(count);
// //     };
// // }

// // const fn1 = outer();
// // const fn2 = outer();

// // fn1();
// // fn1();
// // fn2();
// // fn1();
// // fn2();


// // for (var i = 0; i < 3; i++) {
// //     setTimeout(() => {
// //         console.log(i);
// //     }, 1000);
// // }


// // Why?
// // - var is function-scoped (or global-scoped outside a function).
// // - All three callbacks share the same i binding.
// // - By the time the timers execute, the loop has completed and i is 3.


// // for (let i = 0; i < 3; i++) {
// //     setTimeout(() => {
// //         console.log(i);
// //     }, 1000);
// // }

// // Why?
// // In a for loop with let, JavaScript creates a new binding for i for each iteration.
// // Each callback closes over its own iteration's binding.


// // A more precise interview answer is:
// // var is function-scoped, so all callbacks share the same variable binding. let is block-scoped, and a for loop creates a separate lexical binding for each iteration. Therefore, callbacks using let remember different values.


// // for (var i = 0; i < 3; i++) {

// //     (function(index) {
// //         setTimeout(() => {
// //             console.log(index);
// //         }, 1000);
// //     })(i);

// // }

// // for (var i = 0; i < 3; i++) {
// //     setTimeout(function(index) {
// //         console.log(index);
// //     }, 1000, i);
// // }


// // Interview-ready explanation
// // Since var is function-scoped, all callbacks share the same variable. To solve this without let, we can use an IIFE to create a separate function scope for each iteration. Each callback then retains its own index parameter through closure.


// // closure // Why needed

// // Why is this useful for encapsulation?
// // You answered that it helps create a private scope. ✅ Correct!
// // The closure allows us to keep count private and expose only controlled methods such as increment(), decrement(), and getCount().


// // Promise.resolve(10)
// //     .then((value) => {
// //         console.log(value);
// //         return value * 2;
// //     })
// //     .then((value) => {
// //         console.log(value);
// //         throw new Error("Something went wrong");
// //     })
// //     .catch((error) => {
// //         console.log(error.message);
// //         return 100;
// //     })
// //     .then((value) => {
// //         console.log(value);
// //     });

// // console.log("End");

// // function myPromiseAll(promises) {
// //     return new Promise((resolve, reject) => {
// //         let results = [];
// //         let completed = 0;

// //         if (promises.length === 0) {
// //             resolve([]);
// //             return;
// //         }

// //         promises.forEach((promise, index) => {
// //             Promise.resolve(promise)
// //                 .then((value) => {
// //                     results[index] = value;
// //                     completed++;

// //                     if (completed === promises.length) {
// //                         resolve(results);
// //                     }
// //                 })
// //                 .catch((error) => {
// //                     reject(error);
// //                 });
// //         });
// //     });
// // }

// // const p1 = new Promise(resolve => {
// //     setTimeout(() => resolve("First"), 3000);
// // });

// // const p2 = new Promise(resolve => {
// //     setTimeout(() => resolve("Second"), 1000);
// // });

// // const p3 = new Promise(resolve => {
// //     setTimeout(() => resolve("Third"), 2000);
// // });

// // // Promise.resolve(p1).then(resp => console.log(resp))
// // myPromiseAll([p1, p2, p3])
// //     .then(result => console.log(result));





// // function myPromiseRace(promises) {
// //     return new Promise((resolve, reject) => {

// //         promises.forEach((promise) => {
// //             Promise.resolve(promise)
// //                 .then((result) => {
// //                     resolve(result);
// //                 })
// //                 .catch((error) => {
// //                     reject(error);
// //                 });
// //         });

// //     });
// // }


// // const p1 = new Promise(resolve => {
// //     setTimeout(() => resolve("First"), 3000);
// // });

// // const p2 = new Promise(resolve => {
// //     setTimeout(() => resolve("Second"), 1000);
// // });

// // const p3 = new Promise(resolve => {
// //     setTimeout(() => resolve("Third"), 2000);
// // });

// // myPromiseRace([p1, p2, p3])
// //     .then(result => console.log(result))
// //     .catch(error => console.log(error));



// // function myPromiseAllSettled(promises) {
// //     return new Promise((resolve) => {
// //         let results = [];
// //         let completed = 0;

// //         if (promises.length === 0) {
// //             resolve([]);
// //             return;
// //         }

// //         promises.forEach((promise, index) => {
// //             Promise.resolve(promise)
// //                 .then((value) => {
// //                     results[index] = {
// //                         status: "fulfilled",
// //                         value: value
// //                     };

// //                     completed++;

// //                     if (completed === promises.length) {
// //                         resolve(results);
// //                     }
// //                 })
// //                 .catch((error) => {
// //                     results[index] = {
// //                         status: "rejected",
// //                         reason: error
// //                     };

// //                     completed++;

// //                     if (completed === promises.length) {
// //                         resolve(results);
// //                     }
// //                 });
// //         });
// //     });
// // }


// // const arr = [
// //     0, 1, false, 2, "",
// //     3, null, "hello", undefined, NaN
// // ];


// // function falsyRemove(arr) {
// //     let result = [];

// //     for(let item of arr) {
// //         if(item) {
// //             result.push(item)
// //         }
// //     }
// //     return result;

// // }
// // console.log(falsyRemove(arr))


// // const obj = {
// //     name: "Rahul",
// //     address: {
// //         city: "Hyderabad",
// //         location: {
// //             pincode: 500001,
// //             country: "India"
// //         }
// //     },
// //     skills: {
// //         frontend: "React",
// //         backend: "Node.js"
// //     }
// // };

// // O/P

// // {
// //     "name": "Rahul",
// //     "address.city": "Hyderabad",
// //     "address.location.pincode": 500001,
// //     "address.location.country": "India",
// //     "skills.frontend": "React",
// //     "skills.backend": "Node.js"
// // }

// // Important 
// // function flattenObject(obj, parentKey = "", result = {}) {

// //     for (let [key, value] of Object.entries(obj)) {

// //         let newKey = parentKey
// //             ? `${parentKey}.${key}`
// //             : key;

// //         if (value !== null && typeof value === "object") {
// //             flattenObject(value, newKey, result);
// //         } else {
// //             result[newKey] = value;
// //         }
// //     }

// //     return result;
// // }

// // console.log(flattenObject(obj));


// // const menus = [
// //     { id: 1, name: "Dashboard", parentId: null },
// //     { id: 2, name: "Users", parentId: null },
// //     { id: 3, name: "Add User", parentId: 2 },
// //     { id: 4, name: "User List", parentId: 2 },
// //     { id: 5, name: "User Details", parentId: 4 },
// //     { id: 6, name: "Reports", parentId: null }
// // ];

// // function buildMenuTree(menus) {
// //     const map = new Map();
// //     const result = [];

// //     // Step 1: Create independent copies of every menu
// //     for (let item of menus) {
// //         map.set(item.id, {
// //             ...item,
// //             children: []
// //         });
// //     }
// //     // Step 2: Connect children to parents
// //     for (let item of menus) {
// //         const current = map.get(item.id);

// //         if (item.parentId === null) {
// //             result.push(current);
// //         } else {
// //             const parent = map.get(item.parentId);
// //             if (parent) {
// //                 parent.children.push(current);
// //             }
// //             console.log(parent, "llll")
// //         }
// //     }

// //     return result;
// // }

// // console.log(buildMenuTree(menus));



// // const arr1 = [1, 2, 3, 4, 5];
// // const arr2 = [3, 4, 6];

// // function nonPresent(first, second) {
// //     let result = [];
// //     let map = new Map();

// //     for(let item of second) {


// //             map.set(item, true);

// //     }

// //     for(let item of first) {
// //         if(!map.has(item)) {
// //             result.push(item);
// //         }
// //     }

// //     return result
// // }
// // console.log(nonPresent(arr1, arr2))



// // const arr1 = [1, 1, 2, 3, 4, 5];
// // const arr2 = [3, 4, 6, 7];


// // function nonPresentBoth(first, second) {
// //     let result = [];
// //     let first_map = new Map();
// //     let second_map = new Map();

// //     for (let item of first) {
// //         first_map.set(item, true);
// //     }

// //     for (let item of second) {
// //         second_map.set(item, true);
// //     }

// //     for (let item of first_map.keys()) {
// //         if (!second_map.has(item)) {
// //             result.push(item);
// //         }
// //     }

// //     for (let item of second_map.keys()) {
// //         if (!first_map.has(item)) {
// //             result.push(item);
// //         }
// //     }

// //     return result;
// // }

// // console.log(nonPresentBoth([1, 1, 2], [2, 3, 3]));
// // [1, 3]

// // const arr = [1, 2, 3, 4];

// // function firstRepeat(arr) {
// //     let map = new Map();

// //     for(let item of arr) {
// //         map.set(item, (map.get(item) || 0) + 1) 
// //     }
// //     for(let item of arr) {

// //         if(map.get(item) > 1) {
// //             return item;
// //         }
// //     }
// //     return null
// // }
// // console.log(firstRepeat(arr))

// // const arr = [100, 4, 200, 1, 3, 2];

// // function longestConsecutive(arr) {
// //     let set = new Set(arr);
// //     let maxLength = 0;

// //     for (let item of set) {

// //         // Check whether item is the start of a sequence
// //         if (!set.has(item - 1)) {

// //             let current = item;
// //             let count = 1;

// //             // Find consecutive numbers
// //             while (set.has(current + 1)) {
// //                 current++;
// //                 count++;
// //             }

// //             maxLength = Math.max(maxLength, count);
// //         }
// //     }

// //     return maxLength;
// // }

// // console.log(longestConsecutive(arr)); // 4

// // function targetFun(arr, target) {
// //     let result = [];
// //     let seen = new Map();
// //     let addedPairs = new Set();

// //     for (let item of arr) {
// //         let remaining = target - item;

// //         if (seen.has(remaining)) {
// //             let a = Math.min(item, remaining);
// //             let b = Math.max(item, remaining);

// //             let pairKey = `${a},${b}`;

// //             if (!addedPairs.has(pairKey)) {
// //                 result.push([a, b]);
// //                 addedPairs.add(pairKey);
// //             }
// //         }

// //         seen.set(item, true);
// //     }

// //     return result;
// // }

// // const arr = [2, 4, 3, 5, 7, 8, 1, 2, 3];
// // const target = 9;

// // console.log(targetFun(arr, target));

// // const arr = [1, 1, 2, 2, 3];

// // function majorityFun(arr) {
// //     let map = new Map();

// //     for (let item of arr) {
// //         let count = (map.get(item) || 0) + 1;

// //         map.set(item, count);

// //         if (count > arr.length / 2) {
// //             return item;
// //         }
// //     }

// //     return null;
// // }

// // // console.log(majorityFun([2, 2, 1, 1, 2, 2, 2]));
// // // 2

// // console.log(majorityFun([1, 1, 1, 2, 2, 3, 3]));
// // null


// // const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// // function maxSubArray(arr) {
// //     if (arr.length === 0) return null;

// //     let currentSum = arr[0];
// //     let maxSum = arr[0];

// //     for (let i = 1; i < arr.length; i++) {
// //         currentSum = Math.max(arr[i], currentSum + arr[i]);

// //         maxSum = Math.max(maxSum, currentSum);
// //     }

// //     return maxSum;
// // }

// // console.log(maxSubArray(arr)); // 6

// // function maxSubArray(arr) {
// //     if (arr.length === 0) return null;

// //     let currentSum = arr[0];
// //     let maxSum = arr[0];

// //     let start = 0;
// //     let end = 0;
// //     let tempStart = 0;

// //     for (let i = 1; i < arr.length; i++) {

// //         if (arr[i] > currentSum + arr[i]) {
// //             currentSum = arr[i];
// //             tempStart = i;
// //         } else {
// //             currentSum += arr[i];
// //         }

// //         if (currentSum > maxSum) {
// //             maxSum = currentSum;
// //             start = tempStart;
// //             end = i;
// //         }
// //     }

// //     return {
// //         maxSum,
// //         subArray: arr.slice(start, end + 1)
// //     };
// // }

// // const arr = [5, -2, 3, -10, 4, 6];

// // console.log(maxSubArray(arr));


// // position_arr = [10, 22, 9, 33, 2, 41, 60];

// // function rotate(arr, k) {
// //     let result = [];

// //     k = k % arr.length;
// //     console.log(k, "lll")
// //     // Put last k elements first
// //     for (let i = arr.length - k; i < arr.length; i++) {
// //         result.push(arr[i]);
// //     }

// //     // Put remaining elements
// //     for (let i = 0; i < arr.length - k; i++) {
// //         result.push(arr[i]);
// //     }

// //     return result;
// // }

// // console.log(rotate(position_arr, 50));


// const arr = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;

// // function rotateByRight(arr, k) {
// //     let result = [];
// //     k = k % arr.length;

// //     for(let i = arr.length - k; i < arr.length; i ++) {
// //         result.push(arr[i]);
// //     }

// //     for(let i = 0; i < arr.length - k; i ++) {
// //         result.push(arr[i])
// //     }
// //     return result
// // }
// // console.log(rotateByRight(arr, k))

// // function rotateInplace(arr, k) {
// //     let n = arr.length;
// //     k = k % n;

// //     function reverse(start, end) {
// //         console.log(start, end)
// //         while(end > start) {
// //             let temp = arr[end];
// //             arr[end] = arr[start];
// //             arr[start] = temp;


// //             start ++;
// //             end --;
// //         }
// //     }
// //     reverse(0, n - 1);
    
// //     reverse(0, k - 1);

// //     reverse(k, n - 1)

// //     return arr
// // } 
// // console.log(rotateInplace(arr, k));



// Function.prototype.myBind = function(context, ...args) {
//     const originalFn = this;

//     return function(...newArgs) {
//         return originalFn.apply(context, [...args, ...newArgs]);
//     };
// };

// const user = {
//     name: "Rahul"
// };

// function introduce(age, city) {
//     return `${this.name} is ${age} years old and lives in ${city}`;
// }

// const boundFn = introduce.myBind(user, 28);

// console.log(boundFn("Hyderabad"));


// Function.prototype.myCall = function(context, ...args) {
//     const fn = Symbol("fn");

//     context[fn] = this;

//     try {
//         return context[fn](...args);
//     } finally {
//         delete context[fn];
//     }
// };


// Function.prototype.myApply = function(context, args = []) {
//     const fn = Symbol("fn");

//     context[fn] = this;

//     try {
//         return context[fn](...args);
//     } finally {
//         delete context[fn];
//     }
// };

// // function once(callback) {
// //     let executed = false;
// //     let result;

// //     return function(...args) {
// //         if (!executed) {
// //             executed = true;
// //             result = callback.apply(this, args);
// //         }

// //         return result;
// //     };
// // }
// // function initializeApp() {
// //     console.log("Application initialized");
// //     return "Success";
// // }

// // const initialize = once(initializeApp);

// // console.log(initialize());
// // console.log(initialize());
// // console.log(initialize());


// // function once(callback) {
// //     let executed = false;
// //     let result;

// //     return function(...args) {
// //         if (!executed) {
// //             executed = true;
// //             result = callback.apply(this, args);
// //         }
// //         return result;
// //     };
// // }

// // let count = 0;

// // const increment = once(function(value) {
// //     count += value;
// //     return count;
// // });

// // console.log(increment(5));
// // console.log(increment(10));
// // console.log(increment(20));
// // console.log(count);


// function curry(fn) {
//     return function curried(...args) {

//         console.log(fn.length)
//         if (args.length >= fn.length) {
//             return fn(...args);
//         }

//         return function(...nextArgs) {
//             return curried(...args, ...nextArgs);
//         };
//     };
// }

// function sum(a, b, c) {
//     return a + b + c;
// }

// const curriedSum = curry(sum);

// console.log(curriedSum(1)(2)(3)); // 6
// console.log(curriedSum(1, 2)(3)); // 6
// console.log(curriedSum(1)(2, 3)); // 6
// console.log(curriedSum(1, 2, 3)); // 6