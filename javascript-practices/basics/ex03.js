/* null과 undefined */

var myVal1 = undefined; // 명시적으로 undefined 대입
var myVal2; // 암시적으로 undefined 대입된다.
var myVal3 = null;

console.log(myVal1 + ":" + myVal2 + ":" + myVal3);
// console.log(myVal4); // error -> not defined error

console.log(myVal1 == myVal3); // 값비교
console.log(myVal1 === myVal3); // 타입비교 + 값비교

console.log("===================================");

// == : eqaulity, 값의 동치성, 형변환
console.log(4 == '4');
console.log(false == 0);
console.log('abc' == new String('abc'));

console.log(true + 10); // 11
console.log('abc' + new String('abd')); // abcabc
console.log(1 + "11"); // number -> string 111
console.log("11" + 1); // string 111

console.log("===================================");
// === : identity
// 1. 타입의 동일성 + 값의 동일성
// 2. 객체의 동일성 : 객체
console.log("2" === 2);
console.log(true === 1);
console.log(4 === 2);
console.log(new Number(4) === new Number(4));