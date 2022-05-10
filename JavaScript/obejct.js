'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age) { // 인자가 늘어나면 같이 늘어나게 됨으로 object를 사용하게 됨
    console.log(name);
    console.log(age);
}

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 클래스를 이용해서 오브젝트 사용 가능, 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name : 'ellie', age : 4}; // 클래스가 없어도 바로 오브젝트를 생성 가능
print(ellie);

ellie.hasJob = true; // 뒤늦게 오브젝트를 추가하는 것도 가능, 가능하지만 유지보수에는 힘드니 적절히 사용
console.log(ellie.hasJob); 

delete ellie.hasJob; // 오브젝트 삭제도 가능하게 됨
console.log(ellie.hasJob); // 삭제했음으로 undefined 출력

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); // 오브젝트는 배열처럼 []를 이용해서도 값을 가져올 수 있음, key는 항상 문자열이어야함
// 정확하게 어떤키가 필요한지 모를 때, []를 사용하며, 코딩할때는 .를 사용하는 것이 맞음
ellie['hasJob'] = true; // []을 이용해서 추가하는 것도 가능
console.log(ellie.hasJob); // true 출력

function printValue(obj, key) {
    // console.log(obj.key ) // key를 받아오게 됨으로 출력하면 없음으로 오류나 나게 됨
    console.log(obj[key]); // 받아오는 모르는 값은 이런식으로 []을 이용하는 것이 좋음
}
printValue(ellie, 'name'); 
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name : 'bob', age : 2 };
const person2 = { name : 'steve', age : 3 };
const person3 = { name : 'dave', age : 4 }; // 이런식으로 계속해서 생성하면 불편함으로 function을 사용할 수 있음
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) { // 특별한 기능없이 오브젝트만 만드는 것은 대문자로 시작하도록 함수들을 생성
    // this = {}; 생략됨
    this.name = name;
    this.age = age;
    // return this; 생략됨
}

// 5. in operator: property existence check (key in obj), 들어있는지 없는지 확인하기
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false
console.log('random' in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear(); // console을 깨끗하게 하기
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name : 'ellie', age : '20' };
const user2 = user; // user2에도 동일한 reference 할당됨, 같은 reference의 포인터를 가지게 됨
user2.name = 'coder';
console.log(user); // 같은 reference로 coder로 변경되게 됨

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// 현재 사용하는 방법
// const user4 = {}; // 이런식으로 복사가 가능하게 됨
// Object.assign(user4, user);
// console.log(user4); 

const user4 = Object.assign({}, user); // assign은 복사할 타켓과 복사되어지는 소스를 지정해야함, 위와 동일한 값을 가짐
console.log(user4);

// assign은 여러개도 할 수 있음
const fruit1 = { color : 'red' };
const fruit2 = { color : 'blue', size : 'big' }; // size가 다름
const mixed = Object.assign({}, fruit1, fruit2); // fruit1과 fruit2를 합치기, 뒤에 있는 것이 앞의 것의 값을 계속해서 덮어씌움
console.log(mixed.color); // blue 출력
console.log(mixed.size); // big 출력



