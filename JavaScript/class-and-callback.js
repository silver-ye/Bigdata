class Counter {
    constructor() {
        this.counter = 0; // 자체적으로 counter라는 변수가 있고 0으로 초기화됨
    }

    increase(runIf5Times) { // class에서 함수는 function이라고 명시하지 않아도 됨
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            runIf5Times(this.counter); // callback함수를 불러옴
        }
    }
}

const coolCounter = new Counter();
function printSomething(num) { // callback 함수 선언
    console.log(`${num} yo!`);
}
function alertNum(num) {
    alert(`WOW ${num}`);
}
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(alertNum);

// 위와 동일하지만 constructor에서 callback받아오기 가능
class Counter2 {
    constructor(runEveryFiveTimes) {
        this.counter = 0; // 자체적으로 counter라는 변수가 있고 0으로 초기화됨
        this.callback = runEveryFiveTimes;
    }

    increase(runIf5Times) { // class에서 함수는 function이라고 명시하지 않아도 됨
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            this.callback && this.callback(this.counter); // callback함수가 undefined일수도 있음을 방어
        }
    }
}

function printSomething(num) { // callback 함수 선언
    console.log(`${num} yo!`);
}
function alertNum(num) {
    alert(`WOW ${num}`);
}
const coolCounter2 = new Counter2(printSomething); // 원하는 callback함수를 넣어주기
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();
coolCounter2.increase();

const printCounter = new Counter2(printSomething); // 서로 다른 기능을 수행하는 object 생성 가능
const alertCounter = new Counter2(alertNum);