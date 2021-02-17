let id = 1;
let allGenres = "";
let modal = document.querySelector(".modal");
 


document.querySelector('.anime').addEventListener('click', (el) => {
    el = el.target;
    if(el.dataset.trailer){
        modal.classList.remove('none');
    }
    if(el.dataset.video){
        modal.classList.add('none');
        var iframes = document.querySelectorAll('iframe');
        Array.prototype.forEach.call(iframes, iframe => { 
        iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'stopVideo' }), '*');
        });
    }
});
document.querySelector('.aside-menu').addEventListener('click', (el) => {
    el = el.target;
    if(el.dataset.genre){
        console.log('nnan');

        document.querySelector(`.allAnime-block`).classList.add('none') 
        

        if(document.querySelector(`#${el.dataset.genre}`) === null){
            showAnime(el.dataset.genre);
        }else{
            document.querySelector(`#${el.dataset.genre}`).classList.remove('none') 
        }
    }
});

function showAnime(genreID){
    fetch(`https://api.jikan.moe/v3/anime/${id}`).then((response) => {
        return response.json();
    }).then((anime) =>{
        console.log(anime);
        let animeDiv = document.querySelector('.anime');
        let allAnime_block = document.createElement("div").setAttribute("id", genreID).setAttribute("class", "allAnime-block none");
        let anime_block = document.createElement("div").setAttribute("class", "anime-block");
        let animeLeftPart = document.createElement("div").setAttribute("class", "animeLeftPart");
        let image_url = document.createElement("div").setAttribute("id", "image_url");
        let divTitle = document.createElement("div").setAttribute("class", "divTitle");
        let h1Title =  document.createElement("h1").setAttribute("class", "h1Title")

        let animeRightPart


        let imageDiv = document.querySelector('#image_url');
        let image = document.createElement('img');
        image.setAttribute("src", `${anime.image_url}`)
        document.querySelector('#title').innerHTML = anime.title;
        document.querySelector('#type').innerHTML = anime.type;
        let genres = anime.genres;
        genres.forEach(element => {
            allGenres += element.name+", ";
        });
        document.querySelector('#genres').innerHTML = allGenres;
        document.querySelector('#episodes').innerHTML = anime.episodes;
        
        
        document.querySelector('#synopsis').innerHTML = tronque_description(anime.synopsis, 65);

        animeDiv.appendChild(allAnime_block);
        allAnime_block.appendChild(anime_block);
        anime_block.appendChild(animeLeftPart);
        animeLeftPart.appendChild(image_url);
        image_url.appendChild(divTitle);
        divTitle.appendChild(h1Title);


        imageDiv.appendChild(image);
        
    }); 
}