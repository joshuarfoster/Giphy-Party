$('#submit')
    .on('click', async function(e) {
        e.preventDefault();
        const result = await axios.get("https://api.giphy.com/v1/gifs/search", { params: { 'api_key': 'fZSr24P5oce9FX2NNV0YgscJ7ks8ButB', 'q': `${$('#searchTerm').val()}`, 'limit': '1' } })
        console.log(result.data);
        $('#gifs').append($(`<image src=${result.data.data[0].images.original.url}>`))
    })
$('#clear')
    .on('click', function() {
        $('#gifs').empty()
    })