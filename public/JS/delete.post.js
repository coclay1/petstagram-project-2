const { DELETE } = require("sequelize/types/query-types");

const delBtn = async(event) => {
    if(event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE', 
        });
        if(response.ok) {
            document.location.replace('/')
        }else {
            alert('Fail to delete')
        }
    };
};

