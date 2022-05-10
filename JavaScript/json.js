'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); // json의 규격 사항은 ""
console.log(json); // 배열처럼 보이지만 json으로 변환됨

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(), // Date라는 object로 getDate 사용 가능
    jump : () => {
        console.log(`${name} can jump!`); // 함수는 json으로 포함되지 않고 제외됨, symbol도 제외됨
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]); // 원하는 것만 골라서 지정 가능
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name' ? 'ellie' : value; // key가 name이라면 ellie로 아니면 value
}); 
console.log(json);

// 2. JSON to Object
console.clear()
json = JSON.stringify(rabbit);
const obj = JSON.parse(json); // 변경할 json을 전달해주면 됨
console.log(obj);
rabbit.jump();
// obj.jump(); // 변환한 것은 함수가 없어서 에러가 발생하게 됨

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // 변환한 birthDate는 string임으로 getDate를 사용할 수 없음
console.log(obj.birthDate);

const obj2 = JSON.parse(json, (key, value) => { // getDate로 변경해주기
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value; 
});
console.log(obj2.birthDate.getDate()); // 이제 getDate를 사용 가능
