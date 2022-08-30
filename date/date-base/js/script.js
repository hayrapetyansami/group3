"use strict";

const date = new Date();

// DATE API
console.log(date.getFullYear()); // թվականն ենք ստանում - 2022
console.log(date.getMonth()); // ամիս - 1
console.log(date.getDay()); // շաբաթվա օր, օրինակ կիրակին = 0
console.log(date.getDate()); // էս օրվա օրը, 23։59։59։999ից առաջ
console.log(date.toLocaleString()); // 08/30/2022, 04:49:51 PM
console.log(date.toLocaleTimeString()); // 04:51:51 PM
console.log(date.toLocaleDateString()); // 8/30/2022
console.log(date.toDateString()); // Tue Aug 30 2022
console.log(date.toTimeString()); // 16:57:44 GMT+0400 (Armenia Standard Time)

// TIME API
const timeDate = new Date();
console.log(timeDate.getHours()); // ժամ
console.log(timeDate.getMinutes()); // րոպե
console.log(timeDate.getSeconds()); // վայրկյան
console.log(timeDate.getMilliseconds()); // միլիվայրկյան

console.log(Intl.DateTimeFormat().resolvedOptions().timeZone); // Asia/Yerevan

// SET
const dSet = new Date();
dSet.setFullYear(2011);
dSet.setMonth(9);
dSet.setDate(6);
dSet.setHours(21);
dSet.setMinutes(36);
dSet.setSeconds(41);
dSet.setMilliseconds(777);
console.log(dSet);


// ստուգում ենք մեր կոդի <performance>-ը

// let start = new Date();
const start = performance.now();

let res = 0;

for (let i = 0; i < 500000; i++) {
	res = i ** 3;
}

console.log(res + " Loop Response");
// let end = new Date();
const end = performance.now();;

console.log(`Loop performance time is: ${end - start} miliseconds`);