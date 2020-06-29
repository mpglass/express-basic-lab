$.ajax({
    url: '/sign',
    type: 'GET',
    dataType: 'json',
})
.then(names => {
    names.forEach(visitor => {
        $('div').append(`<h1>${visitor.name}</h1>`)
    })
})