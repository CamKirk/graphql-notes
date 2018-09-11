var query = `
    {hello}
`;

fetch('/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify({
        query
    })
})
    .then(function(r) {
        return r.json();
    })
    .then(function(data) {        
        console.log('data return', data);

    });