const homepageHandler = async (event) => {
  event.preventDefault();

  const postId = event.target.getAttribute('data-card-id');

  if (postId) {
    document.location.replace(`post-comment/${postId}`);
  }
};
  
document
  .querySelector('.project-list')
  .addEventListener('click', homepageHandler);