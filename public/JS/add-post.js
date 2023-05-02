// Get references to the form and its input elements
const addPostForm = document.querySelector('#add-post-form');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

// Listen for the submit event on the form
addPostForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Extract the input data from the farm
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  //  client-side validation
  if (!title || !content) {
    alert('Please fill out all fields.');
    return;
  }

  //  API call to your backend route to create a new user post
  try {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    // If the post is created successfully, take the user to a relevant page
    if (response.ok) {
      window.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  } catch (error) {
    console.error(error);
    alert('Error creating post');
  }
});
