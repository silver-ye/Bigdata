const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result); 

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4; // 반복되는 것들읗 함수로 정의하여서 재사용성을 높임

function add(a, b) { // 이름은 가능한 의미있는 이름으로 지정하는 것이 좋음, ()안에 몇가지의 인자들이 받을 지를 지정하는 것
    return a + b; // 코드 블럭안의 내용들이 정의된 메모리가 있고 add는 그것을 가리키는 주소를 가진 ref
}

const sum = add(3, 4);
console.log(sum);

const doSomething = add; // add가 reference를 가졌음으로 doSomething도 같은 reference를 할당 받음

const result3 = doSomething(2, 3);
console.log(result3);
const result4 = add(2, 3); // refeerence가 같음으로 동일한 함수가 사용됨
console.log(result4);

function print() { // 인자가 없는 함수는 input을 받지 않음
    console.log('print');
}

print(8, 33); // 인자가 없는 함수인 print에 아무리 인자를 넣어주어도 아무런 일이 일어나지않음

function divide(num1, num2) {
    return num1 / num2;
}

function surprise(callback) {
    const result = callback(2, 3); // divide(2, 3)과 동일
    console.log(result);
}

surprise(divide);