// 1. Use strict
// added in ES 5
// use this for Valina JavaScript.
'use strict';


// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name'; // block안이 아닌 밖에서 정의하는 global scope, 어느곳에서나 불러오기 가능
{
    let name = 'ellie'; // let을 이용하여 변수를 선언하고 값을 할당
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName); // block안에서도 불러오기 가능
} // block 밖에서는 block안의 내용을 볼 수 없음

//console.log(name); // block밖에서 console로 name을 부르면 아무것도 불러지지 않음
console.log(globalName); // block밖에서도 불러오기 가능

// var (don't ever use this!)
// var hoisting : 어디에 선언했는지에 상관없이 항상 선언을 끌어올려주는 것(move declaration from bottom to top)
// has no block scope
console.log(age); // 값을 할당하기전에 출력하는 것도 가능(undefined 출력됨)
age = 4; // var에서는 변수를 선언하기전에 먼저 할당하는 것이 가능
console.log(age); // 4를 할당했음으로 4가 출력됨
var age;

{
    age = 4;
    var age;
}
console.log(age); // var에서 선언한 경우네느 block scope가 없음으로 block밖에서도 불러오기 가능

// name = 4;
// let name; // let의 경우에는 오류가 나타남

// 3. Contant, r(read only)
// 한번 할당하면 값이 절대 바뀌지 않는 것
// use const whenever possible
// only use let if variable needs to chage.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types : premitive types, frozen objects (i.e. object.freeze())
// Mutuable data types : all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security(보안성)
// - thread safety(동시에 값을 변경하지 않게 하기 위하여)
// - reduce human mistakes

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container(single item들을 묶어서 박스로 관리할 수 있게 해줌)
// function, first-class function(function도 다른 데이터타입처럼 할당이 가능)
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0; 
const negativeInfinity = -1 / 0; 
const nAn = 'not a number' / 2; // 숫자가 아닌 string으로 나누게 되면 not a number 오류
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**35 ~ 2*53) 만 표현 가능, 숫자에 n만 붙이면 bigInt로 간주
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string 
const char = 'c'; // 글자가 하나든 몇개든 string
const brendan = 'brendan';
const greeting = 'hello' + brendan; // plus기호를 이용하여 string과 변수를 합칠 수 있음
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = 'hi ${brendan}!'; //template literals (string) $기호와 `을 이용하여 변수의 값을 출력 가능
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null; // null로 값이 할당되어짐
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // 선언은 되었지만 아무런 값도 할당되지 않은 상태 let x = undefined;로도 사용 가능
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects, 동시다발적으로 일어나서 고유한 식별자가 필요할 때 사용
// string으로 사용하면 동일한 string이 쓰일 경우에는 사용할 수 없음으로 symbol을 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // 동일하지 않음(false)
const gSymbol1 = Symbol.for('id'); // 주어진 symbol에 맞는 string을 만들어달라는 의미
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // .description을 이용하여 string으로 변환하고 사용해야함

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20}; // ellie라는 object를 이용하여 naem과 age를 설명 가능
ellie.age = 21; // ellie는 상수로 변경이 불가하지만, ellie안에 있는 name과 age변수는 변경이 가능함

// 5. Dynamic typing : dynamcially typed language
let text = 'hello';
console.log(text.charAt(0)); // 인덱스로 h가 출력됨
console.log(`value: ${text}, type: ${typeof text}`); // type = string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // type = number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // type = string, number를 string으로 변환해서 더하기 진행 = '75'
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // type = number, 숫자와 숫자가 사용할 수 있는 /를 사용함으로 number로 인식하여서 4가 나옴
console.log(text.charAt(0)); // number일 경우에는 에러가 발생하게 됨

