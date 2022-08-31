
const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-body"]').value;
  
    console.log(title);
    console.log(content);
  
    var response = await fetch(`/api/newpost`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/newpost');
    } else {
      alert('Failed to update your post');
    }
  
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);

const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-body"]').value;

  const response = await fetch(`/api/post/${blogId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log(response);
  if (response.ok) {
    document.location.replace('/newpost');
  } else {
    alert('Failed to update your post');
  }
  document.location.replace('/newpost');
};

const deleteClickHandler = async () => {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/newpost');
};