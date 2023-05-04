const commentFormHandler = async function (event) {
    event.preventDefault();

    const body = document.querySelector('#comment').value;

    if (body) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // document.location.reload();
    }
};

document
    .querySelector('#commentSubmit')
    .addEventListener('submit', commentFormHandler);


