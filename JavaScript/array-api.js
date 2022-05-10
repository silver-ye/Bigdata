// Q1. make a string out of an array
{ // join : 배열을 문자열로 만들기
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(','); 
    console.log(result);
}

// Q2. make an array out of a string
{ // split : 문자열을 배열로 만들기
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',', 2); // 구분자 지정 이후에는 limit을 작성해서 어디까지 받을지를 지정 가능
    // 구분자를 전달하지않으면 한 문자열로 다 들어감
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{ // reverse : 배열 반대로 받기
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); // 변환된 것을 확인 가능
    console.log(array); // 기존의 배열도 변환이 적용됨
}

// Q4. make new array without the first two elements
{ // slice : 새로운 배열을 생성
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // 배열의 특정한 부분을 리턴함, 마지막 end는 +1해서 진행됨
    console.log(result); 
    console.log(array);
}

class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{ // find : 첫번째로 찾아진 요소를 리턴함
    const result = students.find((student) => student.score === 90); // 한줄일 경우에는 return도 생략 가능
    console.log(result);
}

// Q6. make an array of enrolled students
{ // filter : 여러가지를 리턴 가능
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{ // map : 배열안의 요소들을 다르게 변환하는 것
    const result = students.map((student) => student.score); // 배열안의 든 요소들을 map에 콜백함수에서 가공해진 값을 대체 
    console.log(result); 
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 50); // 50점보다 한명이라도 낮으면 true가 리턴됨
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50); // every는 모두가 만족되어야 true, !는 반대로 나오게함
    console.log(result2);
}

// Q9. compute students' average score
{ // reduce : 콜백 함수의 함꼐 누적된 값을 리턴함, reduce는 리턴값이 있어야함
    const result = students.reduce((prev, curr) => {
        console.log(prev);
        console.log(curr);
        return prev + curr.score; // return해주는 값들이 prev로 넘어가게 됨
    }, 0); // 0부터 시작
    console.log(result);

    const resultReverse = students.reduceRight((prev, curr) => { // reduceRight으로 뒤에 인자부터 계산 가능
        console.log(prev);
        console.log(curr);
        return prev + curr.score; // return해주는 값들이 prev로 넘어가게 됨
    }, 0); // 0부터 시작
    console.log(resultReverse);

    const resultEasy = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(resultEasy / students.length); // reduce로 누적액을 구하고 length로 나눠서 평균구하기
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map((student) => student.score).join();
    console.log(result);

    const result2 = students
        .map((student) => student.score)
        .filter((score) => score >= 50) // 연결해서 사용 가능
        .join();
    console.log(result2);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{ // sort : 
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b) // b가 a보다 크다면 마이너스 밸류로 오름차순으로 진행됨, 내림차순을 원하면 b - a로 변경
        .join();
    console.log(result);
}