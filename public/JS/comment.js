// const commentFormHandler = async function (event) {
//     event.preventDefault();

//     const body = document.querySelector('#comment').value;

//     if (body) {
//         await fetch('/api/comments', {
//             method: 'POST',
//             body: JSON.stringify({
//                 body
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         // document.location.reload();
//     }
// };

// document
//     .querySelector('#commentSubmit')
//     .addEventListener('submit', commentFormHandler);



const commentFormHandler = async function (event) {
    event.preventDefault();
  
    const body = document.querySelector('#comment').value;
  
    if (body) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data)
  
      // create a new comment element
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = `
        <p>Comment by User Number: ${data.user_id}</p>
    
        <p>${data.body}</p>
      `;
  
      // add the new comment element to the comments section
      const commentsSection = document.querySelector('#comments');
      commentsSection.appendChild(commentElement);
  
      // clear the comment input
      document.querySelector('#comment').value = '';
    }
  };
  
  document
    .querySelector('#commentSubmit')
    .addEventListener('submit', commentFormHandler);