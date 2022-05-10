// 함수 선언
// function doSomething() {
//     console.log('hello');
// } // 이렇게만 작성하고 실행하게 되면 선언만 진행함으로 hello나오지않음
function doSomething(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum; // 계산한 값을 return
}

// 함수 호출
// doSomething(); // 호출이 되야지 hello 나옴
// const result = add(1, 2); // return값이 있음으로 result에 담기가 가능
// console.log(result);
doSomething(add); // 함수를 전달할 때는 함수의 이름만을 이용해서 전달해야함, doSomething에서 실행되서 5가 출력
// doSomething(add(1, 2));로 진행하면 안의 add가 실행되고 doSomething으로 넘어감