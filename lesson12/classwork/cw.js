// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    for (let post of posts) {
        let div = document.createElement('div');
        div.classList.add('post-div');
        document.body.appendChild(div);
        let userId = document.createElement('div');
        userId.innerText = `User id - ${post.userId}`;
        let postId = document.createElement('div');
        postId.innerText = `Post id - ${post.id}`;
        let title = document.createElement('div');
        title.innerText = `Title - ${post.title}`;
        title.classList.add('title');
        let text = document.createElement('div');
        text.innerText = `Post - ${post.body}`;
        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = 'Show comments';
        div.append(userId, postId,title, text, btn);
        btn.onclick = function () {
            fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                .then(response => response.json())
                .then(comments => {
                    for (let comment of comments) {
                        let commentBlock = document.createElement('div');
                        commentBlock.classList.add('comment-div');
                        div.appendChild(commentBlock);
                        let postId = document.createElement('div');
                        postId.innerText = comment.postId;
                        let userId = document.createElement('div');
                        userId.innerText = comment.id;
                        let name = document.createElement('div');
                        name.innerText = comment.name;
                        let email = document.createElement('div')
                        email.innerText = comment.email;
                        let text = document.createElement('div');
                        text.innerText = comment.body;
                        commentBlock.append(postId, userId, name, email, text);
                    }
                })
        }
    }
})