const blogId = document.querySelector('input[name="blog-id"]').value;

console.log(blogId);

const commentFormHandler = async (event) => {
  event.preventDefault();

  const commentContent = document.querySelector('textarea[name="comment-body"]').value;
  console.log(commentContent);

  if(commentContent) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        blogId,
        commentContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  };
}

document
  .querySelector('#postCommentBtn') //not sure what this needs to be??
  .addEventListener('submit', commentFormHandler);