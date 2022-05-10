// primitive type : 정의할 수 있는 가장 작은 단위
// number, string, boolean, null, undefined 제외하면 다 오브젝트
let num = 2; // 변수의 이름은 원하는대로 만들 수 있음으로 의미있는 이름으로 지정하는 것이 좋음
let number = num; // 변수를 선언하면 무조건 공간이 생기게 됨
console.log(num);
console.log(number);

number = 3; // 3으로 업데이트함

console.log(num); // number의 영향을 받지않음
console.log(number);

// object
let obj = { // 묶어서 위치를 나타내는 reference가 있음
    name : 'ellie', // 키마다 각각 메모리가 할당됨
    age : 20,
};

console.log(obj.name);

let obj2 = obj; // obj는 위치들의 주소가 들어있음
console.log(obj2.name);

obj.name = 'jully'; // name을 jully로 업데이트
console.log('------------');
console.log(obj.name); // 업데이트된 이름이 출력
console.log(obj2.name); // 같은 주소를 사용함으로 업데이트된 이름이 출력
// obj가 const형식으로 선언되면 reference를 새로 변경할 수는 없지만, 그 안에 있는 key값들을 변경이 가능



