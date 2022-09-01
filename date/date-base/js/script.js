"use strict";

const date = new Date();

// DATE API
console.log(date.getFullYear()); // թվականն ենք ստանում - 2022
console.log(date.getMonth()); // ամիս - 1
console.log(date.getDay()); // շաբաթվա օր, օրինակ կիրակին = 0
console.log(date.getDate()); // էս օրվա օրը, 23։59։59։999ից առաջ

// TIME API
const timeDate = new Date();
console.log(timeDate.getHours()); // ժամ
console.log(timeDate.getMinutes()); // րոպե
console.log(timeDate.getSeconds()); // վայրկյան
console.log(timeDate.getMilliseconds()); // միլիվայրկյան
console.log(timeDate.getTime()); // միլիվայրկյան տվյալ պահից
console.log(timeDate.getTimezoneOffset()); // Ժամային գոտի -240րոպե

// STANDART DATE & TIME
const dnt = new Date();
console.log(dnt.toDateString()); // Tue Aug 30 2022
console.log(dnt.toTimeString()); // 16:57:44 GMT+0400 (Armenia Standard Time)

// LOCAL DATE & TIME API
const localDNT = new Date();
console.log(localDNT.toLocaleString()); // 08/30/2022, 04:49:51 PM
console.log(localDNT.toLocaleTimeString()); // 04:51:51 PM
console.log(localDNT.toLocaleDateString()); // 8/30/2022

// TIME ZONE - ASIA/YEREVAN
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

let start = new Date();

let res = 0;

for (let i = 0; i < 500000; i++) {
	res = i ** 3;
}

console.log(res + " Loop Response");

let end = new Date();

console.log(`Loop performance time is: ${end - start} miliseconds`);