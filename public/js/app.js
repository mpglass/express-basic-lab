$.ajax({
    url: '/sign',
    type: 'GET',
    dataType: 'json',
})
.then(names => {
    console.log(names)
    names.forEach(visitor => {
        $('#nameLog').append(`<h1>${visitor.name}</h1>`)
    })
})