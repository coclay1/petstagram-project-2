const editBtn = async(event) => {
    if(event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT', 
        });
        if(response.ok) {
            document.location.replace('/')
        }else {
            alert('Fail to delete')
        }
    };
};
