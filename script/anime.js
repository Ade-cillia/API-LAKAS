let id = 12;
let allGenres = "";
let modal = document.querySelector(".modal");
 

/*
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
*/
document.querySelector('.aside-menu').addEventListener('click', (el) => {
    el = el.target;
    if(el.dataset.genre){
        console.log('nnan');
        
        if(document.querySelector(`#${el.dataset.genre}`) === null){
            document.querySelector('.main').appendChild(Card.createCard());
            showAnime();
        }else{
            document.querySelector(`#${el.dataset.genre}`).classList.remove('none') 
        }
    }
});

function showAnime(){
    fetch(`https://api.jikan.moe/v3/genre/anime/${id}/1`).then((response) => {
        return response.json();
    }).then((category) =>{
        anime = category.anime; 
        console.log(anime);
        var animeArray;
        for (i = 0; i < 10; i++) {
            animeArray = 
                {
                    i : 
                    {
                        'id' : anime[i].mal_id,
                        'title' : anime[i].title,
                        'genres' : anime[i].genres,
                        'score' : anime[i].score,
                        'synopsis' : anime[i].synopsis,
                        'type' : anime[i].type,
                        'episodes' : anime[i].episodes,
                        'kids' : anime[i].kids,
                        'r18' : anime[i].r18,
                        'image_url' : anime[i].image_url
                    }
                }
        }
        debugger;
        console.log(animeArrays)
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
        imageDiv.appendChild(image);
        
    }); 
}