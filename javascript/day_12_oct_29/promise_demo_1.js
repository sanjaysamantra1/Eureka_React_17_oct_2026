let max_value = Math.max(10, 20, 30, 40, 50); // max() returns a value
console.log('max_value: ', max_value);

let usersPromise = fetch('https://jsonplaceholder.typicode.com/users');

usersPromise.then(
    (response) => { // response is not final response, we have to use .json()
        response.json().then(userArr => {
            console.log(userArr);
        })
    },
    (error) => { console.log('Error: ', error) },
)
