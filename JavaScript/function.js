// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing 하나의 일만 하도록
// naming: doSomething, command, verb 동사 형태로 이름 지정
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS object이기에 변수에 할당 가능, 파라미터로 전달 가능, 함수로 리턴 가능
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) { // message가 숫자인지 문자열인지 알기가 어려움, 그렇기에 tyep script를 사용
    console.log(message);
}
log('Hello@');
log(1234);

// function log(message : string) : number { // message는 string, return값은 number를 적어주는 type script
//     console.log(message);
//     return 0;
// }

// 2. Parameters
// primitive parameters: passed by value 메모리에 value가 그대로 저장됨
// object parameters: passed by reference reference가 전달됨
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name : 'ellie' };
changeName(ellie); // reference가 ellie라는 이름을 가르키고 있고 이를 coder로 변경
console.log(ellie); // coder 출력

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') { // 두가지의 파라미터를 받음, =를 통해서 default값을 지정
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // message만 받았음으로 Hi! by undefined 으로 출력

// 4. Rest parameters (added in ES6)
function printAll(...args) { // ...는 배열 형태로 전달한다는 의미
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) { // of 로도 사용 가능
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg)); // 배열을 이용해서 더 간단하게 사용 가능
}
printAll('dream', 'coding', 'ellie')

// 5. Local scope, 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
      // console.log(childMessage); // 안에 정의된 것으로 확인 불가해서 오류 발생
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b; // 계산된 값을 리턴함, 모든 함수는 return되며 지정된 return값이 없다면 return undefined
}
const result = sum(1, 2); // 3
console.log(`sum : ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) { // block안에서 로직을 작성하면 가독성이 떨어지게됨
        // long upgrade logic...
    } 
}

// good
function upgradeUser(user) {
    if (user.point <= 10) { // 조건이 맞지않을 때는 빨리 리턴해서 함수를 종료하고
        return;
    }
    // long upgrade logic... 조건이 맞을때만 필요한 로직들을 수행
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // 함수를 곧장 상수에 할당하는 것을 확인 가능, 함수에 이름이 없는 것을 anoymous function이라고 함, 원한다면 이름 작성 가능
    console.log('print');
};
print();
const printAgain = print;
printAgain(); // 다시 print 함수 호출 가능
const sumAgain = sum; // 다시 sum 함수 호출 가능
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { // printYes, printNo는 함수로 함수를 불러서 사용하는 것을 callback 함수라고 함, 함수가 파라미터로 들어감
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces 디버그
// recursions 재귀함수
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function, 함수를 간결하게 만들어주는 좋은 친구
// always anonymous
// const simplePrint = function () { // 원래 function
//     console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!'); // Arrow function으로 function이라고 표기하지않고 block 사용하지않고 => 으로 사용 가능

const add = (a, b) => a + b; // Arrow function
const simpleMultiply = (a, b) => { 
  // do something more, block을 사용할 수 있으며 return을 지정해야함
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE'); 
})(); // 선언함과 동시에 호출이 가능

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));