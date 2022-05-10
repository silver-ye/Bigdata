'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor 생성자를 생성
    constructor(name, age) {
        // fields
        this.name = name; // 전달된 데이터블 바로 할당하게 됨
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name} : hello!`);
    }
}

const ellie = new Person('ellie', '20');// 새로운 object를 만들때는 new라는 키워드를 사용
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter & Setter
class User {
    constructor(firestName, lastName, age) {
        this.firestName = firestName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() { // age를 그대로 사용하게 되면 무한으로 호출됨으로 get, set에서는 _를 붙여서 사용
        return this._age;
    }

    set age(value) { // set은 value를 받아옴
        // if (value < 0) {
        //     throw Error('age can not be negative'); // 오류를 알리기도 가능
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1); // -1이라는 나이는 존재하지않음, 그걸 방지하기 위해서 getter와 setter를 사용
console.log(user1.age); // getter와 setter를 사용했음으로 0으로 출력됨

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
    publicField = 2; // constructor없이 필드를 정의하면 public으로 외부에서 접근 가능
    #pricateField = 0; // #를 붙이면 private로 클래스 내부에서만 접근이 가능하고 값을 고치기 가능, 클래스 외부에서는 불가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding'; // object에 들어오는 데이터에 상관없이 클래스에서 사용하는 거라면 static를 사용하는 것이 메모리의 사용을 줄임
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // 진행하면 publisher가 할당되지 않았음으로 undefined 출력됨, publisher는 Article이라는 클래스 자체에 붙어있음
console.log(Article.publisher); // 'Dream Coding' 출력
Article.printPublisher(); // 'Dream Coding' 출력

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}  // extends를 사용해서 상속 가능
class Triangle extends Shape { // 다형성으로 필요한 함수만 재정의해서 사용 가능
    draw() {
        super.draw(); // 위의 정의된 함수도 사용하고싶다면 부모의 메소드를 사용하는 super를 쓰기
        console.log('🔺'); // overwirting되면 위의 정의된 함수가 더이상 호출되지않음
    }

    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw()
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // 왼쪽에 있는 object가 오른쪽에 있는 클래스의 object인지 아닌지 확인하며 불리언값 출력, true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true, Shape이 들어가있음으로 맞음
console.log(triangle instanceof Object); // true, 모든 object들은 자바의 Object를 상속받은 것임으로 true
console.log(triangle.toString());
