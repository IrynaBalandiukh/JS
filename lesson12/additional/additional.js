// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    for (let user of users) {
        let userBlock = document.createElement('div');
        document.body.appendChild(userBlock);
        let userId = document.createElement('div');
        userId.innerText = `User id - ${user.id}`;
        let name = document.createElement('div');
        name.innerText = `Name - ${user.name}`;
        let userName = document.createElement('div');
        userName.innerText = `User name - ${user.username}`;
        let email = document.createElement('div');
        email.innerText = `Email - ${user.email}`;
        let showPosts = document.createElement('button');
        showPosts.innerText = 'Show posts';
        userBlock.append(userId, name, userName, email, showPosts);
        showPosts.onclick = function () {
            fetch('https://jsonplaceholder.typicode.com/users/'+user.id+'/posts')
                .then(response => response.json())
                .then(posts => {
                    for (let post of posts) {
                        let postBlock = document.createElement('div');
                        userBlock.appendChild(postBlock);
                        let postId = document.createElement('div');
                        postId.innerText = `Post id - ${post.id}`;
                        let postTitle = document.createElement('div');
                        postTitle.innerText = `Title - ${post.title}`;
                        let postText = document.createElement('div');
                        postText.innerText = post.body;
                        let showComments = document.createElement('button');
                        showComments.innerText = 'Show comments';
                        postBlock.append(postId, postTitle, postText, showComments);
                        showComments.onclick = function () {
                            fetch('https://jsonplaceholder.typicode.com/posts/'+post.id+'/comments')
                                .then(response => response.json())
                                .then(comments => {
                                    for (let comment of comments) {
                                        let commentBlock = document.createElement('div');
                                        postBlock.appendChild(commentBlock);
                                        let commName = document.createElement('div');
                                        commName.innerText = `Name - ${comment.name}`;
                                        let commEmail = document.createElement('div');
                                        commEmail.innerText = `Email - ${comment.email}`;
                                        let commentText = document.createElement('div');
                                        commentText.innerText = `Comment: ${comment.body}`;
                                        commentBlock.append(commName, commEmail, commentText);
                                    }
                                })
                        }
                    }
                })
        }
    }
})