let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    for (let user of users) {
        let userBlock = document.createElement('div');
        userBlock.classList.add('user-block');
        wrapper.appendChild(userBlock);
        let userId = document.createElement('div');
        userId.innerText = `User id - ${user.id}`;
        let name = document.createElement('div');
        name.innerText = `Name - ${user.name}`;
        let showDetails = document.createElement('button');
        showDetails.classList.add('btn');
        showDetails.innerText = 'Show details';
        userBlock.append(userId, name, showDetails);
        showDetails.onclick = function () {
            location.href = `user-details.html?${user.id}`;
        }
}})
