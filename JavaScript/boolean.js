// false : 0, -0, '', null, undefined 데이터가 없고 비어있는 것은 false
// true : -1, 'hello'등의 문자열도 true, []도 배열은 object로 true
if (false) {
    console.log('true');
} else {
    console.log('false');
}

let num; // undefined
if (num) {
    console.log('true');
}

num && console.log(num); // num이 undefined임으로 false로 실행되지않음
// num이 들어오면 console.log에 찍는다는 의미

let obj; // undefined
if (obj)  {
    console.log(obj.name);
}

obj && console.log(obj.name); // 그냥 obj.name을 불러오면 없음으로 곧장 프로그램이 꺼지게 됨으로 && 사용