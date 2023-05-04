try {
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({body})
    })
}