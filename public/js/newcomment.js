const commentHandler = async (event) => {
  event.preventDefault();

  const comment= document.querySelector('#new-comment').value.trim();
  const postId = event.target.getAttribute('data-id');

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify( {
        comment_content: comment,
        blog_id: postId,
      } ),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post-comment/${postId}`);
    } else {
      alert('Failed to add comment');
    }
  }
};

document
  .querySelector('.comment-container')
  .addEventListener('click', commentHandler);