let axios = require('axios');
let results = [];

async function getUsers() {
    return await axios.get('https://jsonplaceholder.typicode.com/users');
}
getUsers().then(res => {
    console.log(res.data)
})