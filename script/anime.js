let id = 12;
let allGenres = "";
let modal = document.querySelector(".modal");
let genres;

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
    for (i = 0; i < 10; i++) {
        genres = "";
        allGenres="";
        genres = animeArray[i].genres;
        genres.forEach(element => {
            allGenres += element.name+", ";
        });
        let description = tronque_description(animeArray[i].synopsis, 65);
        let cardAnime = new Card(animeArray[i].title, animeArray[i].id, animeArray[i].image_url, animeArray[i].score, [['Genre', allGenres, false],['Description', description, false]], false, animeArray[i].type,  animeArray[i].episodes)
        document.querySelector('.main').appendChild(cardAnime.generateCard())

        


    }
}