let url = new URL(location.href);
let searchPost = url.search;
let postId = searchPost.slice(1);

fetch('https://jsonplaceholder.typicode.com/posts/'+postId)
    .then(response => response.json())
    .then(post => {
            let postBlock = document.createElement('div');
            postBlock.classList.add('post-block');
            document.body.appendChild(postBlock);
            let postId = document.createElement('div');
            postId.innerText = `Post id - ${post.id}`;
            let postTitle = document.createElement('div');
            postTitle.innerText = `Title - ${post.title}`;
            let postText = document.createElement('div');
            postText.innerText = post.body;
            let showComments = document.createElement('button');
            showComments.innerText = 'Show comments';
            showComments.classList.add('btn');
            postBlock.append(postId, postTitle, postText, showComments);
            showComments.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/posts/'+post.id+'/comments')
                    .then(response => response.json())
                    .then(comments => {
                        let commentsWrapper = document.createElement('div');
                        commentsWrapper.classList.add('comments-wrapper');
                        postBlock.appendChild(commentsWrapper);
                        for (let comment of comments) {
                            let commentBlock = document.createElement('div');
                            commentBlock.classList.add('comment-block');
                            commentsWrapper.appendChild(commentBlock);
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
    })