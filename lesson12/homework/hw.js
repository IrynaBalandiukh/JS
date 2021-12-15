// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postsArray => {
        for (let post of postsArray) {
            let div = document.createElement('div');
            div.classList.add('post');
            document.body.getElementsByClassName('postsBlock')[0].appendChild(div);
            let userId = document.createElement('div');
            userId.innerText = `User id - ${post.userId}`;
            let postId = document.createElement('div');
            postId.innerText = `Post id - ${post.id}`;
            let title = document.createElement('div');
            title.classList.add('title');
            title.innerText = `Title - ${post.title}`;
            let text = document.createElement('div');
            text.innerText = `Post - ${post.body}`;
            div.append(userId, postId,title, text);
        }
    })


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments =>{
        console.log(comments)
            for (let comment of comments) {
            let div = document.createElement('div');
            div.classList.add('comment-div');
            document.body.appendChild(div);
            let postId = document.createElement('div');
            postId.innerText = comment.postId;
            let userId = document.createElement('div')
            userId.innerText = comment.id;
            let name = document.createElement('div');
            name.classList.add('name');
            name.innerText = comment.name;
            let email = document.createElement('div');
            email.classList.add('email');
            email.innerText = comment.email;
            let text = document.createElement('div');
            text.innerText = comment.body;
            div.append(postId, userId, name, email, text);
        }
    })