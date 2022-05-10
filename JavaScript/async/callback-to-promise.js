// Callback Hell example change to promise
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||  
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id); // 조건문에 만족한다면 id를 반환
                } else {
                    reject(new Error('not found')); // 만족하지않으면 Error를 생성해서 not found를 반환
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name : 'ellie', role : 'admin' }); // 조건문이 맞으면 object를 전달
                } else {
                    reject(new Error('no access')); // 만족하지않으면 no access를 반환
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
