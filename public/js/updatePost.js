const postHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();
  const postId = document.querySelector('#submit').getAttribute('data-id');

  if (postId && title && content) {
    const response = await fetch(`/api/blogs/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ 
        title, 
        content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Your post has been updated.')
      document.location.replace('/profile');
    } else {
      alert('Failed to update post');
    }
  }
};
  
document
  .querySelector('#submit')
  .addEventListener('click', postHandler);
