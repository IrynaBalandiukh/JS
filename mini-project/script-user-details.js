let url = new URL(location.href);
let searchUser = url.search;
let userId = searchUser.slice(1);

fetch('https://jsonplaceholder.typicode.com/users/'+userId)
    .then(response => response.json())
    .then(user => {
        let userBlock = document.createElement('div');
        userBlock.classList.add('user-block');
        document.body.appendChild(userBlock);
        let userId = document.createElement('div');
        userId.innerText = `User id - ${user.id}`;
        let name = document.createElement('div');
        name.innerText = `Name - ${user.name}`;
        let userName = document.createElement('div');
        userName.innerText = `User name - ${user.username}`;
        let email = document.createElement('div');
        email.innerText = `Email - ${user.email}`;
        let phone = document.createElement('div');
        phone.innerText = `Phone - ${user.phone}`;
        let website = document.createElement('div');
        website.innerText = `Website - ${user.website}`;

        let addressBlock = document.createElement('div');
        let city = document.createElement('div');
        city.innerText = `City - ${user.address.city}`;
        let street = document.createElement('div');
        street.innerText = `Street - ${user.address.street}`;
        let suite = document.createElement('div');
        suite.innerText = `Suite - ${user.address.suite}`;
        let zipcode = document.createElement('div');
        zipcode.innerText = `Zipcode - ${user.address.zipcode}`;
        let geoBlock = document.createElement('div');
        let lat = document.createElement('div');
        lat.innerText = `Geo: lat - ${user.address.geo.lat}`;
        let lng = document.createElement('div');
        lng.innerText = `lng - ${user.address.geo.lng}`;
        geoBlock.append(lat, lng);
        addressBlock.append(city,street, suite, zipcode, geoBlock);

        let companyBlock = document.createElement('div');
        let bs = document.createElement('div');
        bs.innerText = `bs - ${user.company.bs}`;
        let catchPhrase = document.createElement('div');
        catchPhrase.innerText = `Catch phrase - ${user.company.catchPhrase}`;
        let companyName = document.createElement('div');
        companyName.innerText = `Name - ${user.company.name}`;
        companyBlock.append(bs, catchPhrase, companyName);

        let postsOfUser = document.createElement('button');
        postsOfUser.classList.add('btn', 'postBtn');
        postsOfUser.innerText = 'Posts of current user';
        document.body.appendChild(postsOfUser);
        userBlock.append(userId, name, userName, email, phone, website, addressBlock, companyBlock);

        postsOfUser.onclick = function () {
            fetch('https://jsonplaceholder.typicode.com/users/'+user.id+'/posts')
                .then(response => response.json())
                .then(posts => {
                        let postsWrapper = document.createElement('div');
                        postsWrapper.classList.add('posts-wrapper');
                        userBlock.appendChild(postsWrapper);
                        for (let post of posts) {
                                let postBlock = document.createElement('div');
                                postBlock.classList.add('post-block');
                                postsWrapper.appendChild(postBlock);
                                let postTitle = document.createElement('div');
                                postTitle.innerText = `Title - ${post.title}`;
                                let postDetails = document.createElement('button');
                                postDetails.innerText = 'Show post details';
                                postDetails.classList.add('btn');
                                postDetails.onclick = function () {
                                        location.href = `post-details.html?${post.id}`;
                                }
                                postBlock.append(postTitle, postDetails);
                        }
                })
        }
    })
