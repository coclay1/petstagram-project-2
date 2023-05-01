// Get references to the form and its input elements
const addPostForm = document.querySelector('#add-post-form');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const dogSelect = document.querySelector('#dog');

// Listen for the submit event on the form
addPostForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Extract the input data from the form
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  const dogId = dogSelect.value;

  // Perform client-side validation (if necessary)
  if (!title || !content || !dogId) {
    alert('Please fill out all fields.');
    return;
  }

  // Make an API call to your backend route to create a new dog post
  try {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content, dogId }),
      headers: { 'Content-Type': 'application/json' },
    });

    // If the post is created successfully, redirect the user to a relevant page
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
