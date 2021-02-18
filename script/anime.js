let id = 12;
let allGenres = "";
let modal = document.querySelector(".modal");
let genres;
let url;

document.querySelector('.website-main').addEventListener('click', (el) => {
    el = el.target;
    console.log(el)
    if(el.dataset.trailer){
        getUrlTrailer(el.dataset.trailer);
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
        document.querySelector('.main').innerHTML = ''
        preparAnime(el.dataset.genre);
     
    }
});

function preparAnime(id){
    fetch(`https://api.jikan.moe/v3/genre/anime/${id}/1`).then((response) => {
        return response.json();
    }).then((category) =>{
        anime = category.anime; 
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
        let description = tronque_description(animeArray[i].synopsis, 100);
        let cardAnime = new Card(animeArray[i].title, animeArray[i].id, animeArray[i].image_url, animeArray[i].score, [['Genre', allGenres, false],['Description', description, false]], animeArray[i].r18, animeArray[i].type,  animeArray[i].episodes, true)
        document.querySelector('.main').appendChild(cardAnime.generateCard())

        


    }
}
function getUrlTrailer(id){
    fetch(`https://api.jikan.moe/v3/anime/${id}`).then((response) => {
        return response.json();
    }).then((data) =>{
        urlTrailer = data.trailer_url
        if(modal){
            modal.remove();
        }
        
        console.log(urlTrailer)
        let modal = document.createElement('aside')
        modal.classList.add('modal', 'none')
        modal.dataset.video = true
        let iframeModal = document.createElement('iframe')
        iframeModal.classList.add('trailerVideo')
        iframeModal.setAttribute('src', `${urlTrailer}`)
        iframeModal.setAttribute('frameborder', 0)
        iframeModal.setAttribute('allowfullscreen', 1)

        main.appendChild(modal)
        modal.appendChild(iframeModal)
    }); 
}