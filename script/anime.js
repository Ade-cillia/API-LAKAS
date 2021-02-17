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
        preparAnime(el.dataset.genre);
     
    }
});

function preparAnime(id){
    fetch(`https://api.jikan.moe/v3/genre/anime/${id}/1`).then((response) => {
        return response.json();
    }).then((category) =>{
        anime = category.anime; 
        console.log(anime);
        var animeArray = [];
        for (i = 0; i < 10; i++) {
            animeArray.push(
                {
                    'id' : anime[i].mal_id,
                    'title':  anime[i].title,
                    'genres':  anime[i].genres,
                    'score' : anime[i].score,
                    'synopsis':  anime[i].synopsis,
                    'type':  anime[i].type,
                    'episodes':  anime[i].episodes,
                    'kids':  anime[i].kids,
                    'r18':  anime[i].r18,
                    'image_url':  anime[i].image_url
                });
        }
        console.log(animeArray)
        showAnime(animeArray)
    }); 
}
function showAnime(animeArray){
    for (i = 0; i < 1; i++) {
        document.querySelector('.main').appendChild(Card.createCard());
        let imageDiv = document.querySelector('#image_url');
        let image = document.createElement('img');
        image.setAttribute("src", `${animeArray[i].image_url}`)
        document.querySelector('#title').innerHTML = animeArray[i].title;
        document.querySelector('#type').innerHTML = animeArray[i].type;
        let genres = animeArray[i].genres;
        genres.forEach(element => {
            allGenres += element.name+", ";
        });
        document.querySelector('#genres').innerHTML = allGenres;
        document.querySelector('#episodes').innerHTML = animeArray[i].episodes+"ep";
        document.querySelector('.high').innerHTML = animeArray[i].score;
        document.querySelector('#synopsis').innerHTML = tronque_description(animeArray[i].synopsis, 65);
        

        imageDiv.appendChild(image);
    }
}