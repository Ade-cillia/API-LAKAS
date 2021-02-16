let id = 1;
fetch(`https://api.jikan.moe/v3/anime/${id}`).then((response) => {
    return response.json();
}).then((anime) =>{
    console.log(anime);
    let animeDiv = document.querySelector('.anime');
    let image = document.createElement('img');
    image.setAttribute("src", `${anime.image_url}`)
    document.querySelector('#title').innerHTML = anime.title;
    animeDiv.prepend(image);
    
});  