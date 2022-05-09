// 1. String concatenation
console.log('my' + ' cat'); // plus 기호를 이용하여 문자열과 문자열을 합할 수 있음
console.log('1' + 2); // 문자열의 숫자를 더하게 되면 string으로 되어서 12 출력
console.log(`string literals :

''''
1 + 2 = ${1 + 2}`); // $를 이용하여 값을 받아서 출력이 가능

console.log('ellie\'s book'); // '의 경우에는 인식이 안됨으로 \를 이용해서 출력 가능
console.log("ellie's \nbook"); // \n = 엔터, \t = 탭

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3) // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const perIncrement = ++counter;
// counter = counter + 1; counter에 1을 더한 후
// preIncrement = counter; preIncrement에 더해진 값인 3을 할당함
console.log(`perIncrement: ${perIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter; 먼저 변수의 값을 postIncrement에 할당시킴, 위에서 계산되었음으로 값은 3
// counter = counter + 1; 이후에 counter에 더하기 1을 진행함, 값은 4
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // counter값은 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // counter값은 3

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y; 반복되는 x를 생략해서 진행
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or), finds the first truthy value 첫번째에서 true가 등장하면 멈춤
console.log(`or : ${value1 || value2 || check()}`); // 셋중에 하나라고 true가 되면 true, 심플한 연산들을 앞에 두어야함

// &&(and), finds the first falsy value 모두가 true가 나와야함으로 앞에서 false가 나오면 멈춤
console.log(`and : ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something; // null이 아닐 경우에만 something을 가져오게 됨
// }

function check() {
    for (let i = 0; i < 10; i++) {
        // wsating time
        console.log('😂');
    }
    return true;
}

// !(not)
console.log(!value1); // 값을 반대로 변경해줌 true -> false


// 7. Equality
const stringFive = '5';
const numberFIve = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFIve); // 안에 들은 것은 숫자 5로 동일하고 취급, true
console.log(stringFive != numberFIve); // false

// === strict equality, no type conversion
console.log(stringFive === numberFIve); // 타입을 신경써서 진행하여, 타입이 다르므로 다르게 취급, false
console.log(stringFive !== numberFIve); // true

// object equality by reference
const ellie1 = { name : 'ellie' };
const ellie2 = { name : 'ellie' }; // ellie1과 같은 값이지만 서로 다른 reference를 가짐으로 다른 값으로 취급
const ellie3 = ellie1; // ellie1과 같은 reference를 가지고 있음
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false) // false
console.log(null == undefined); // true, 같은 것으로 간주
console.log(null === undefined); // false

// 8. Conditional operators : if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log("You are amazing coder");
} else {
    console.log('unknown');
}

// 9. Ternary operator : ?
// condition ? value1 : value2; true인 경우에는 value1을 false인 경우에는 value2를 실행
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch operators
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all');
        break;
}

switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox': // 둘의 결과가 같으면 이렇게 case를 묶어서 사용 가능
        console.log('love you!');
        break;
    default:
        console.log('same all');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) { // false가 나오기전까지 반복 진행
    console.log(`while : ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while : ${i}`);
    i--;
} while (i > 0); // block을 먼저 실행한 다음에 조건을 실행, 위에 계산에 따라서 i가 0임에도 block실행 후에 멈춤

// for loop, for(begin; condition; step) 시작하는 문장, 조건문, 어떤식으로 진행될 건지 
for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration, let으로 선언해서 작성 가능
    console.log(`inline variable for : ${i}`);
}

// nested loops, cpu에 좋지 않음으로 되도록이면 피하는걸 추천
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i : ${i}, j : ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}
// (without continue)
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`q1. ${i}`);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8
// (use break)
for (let i = 0; i <= 10; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}