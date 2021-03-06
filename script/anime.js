let id = 12;
let allGenres = "";
let genres;
let url;
let main = document.querySelector(".main");


function preparAnime(id){
    fetch(`https://api.jikan.moe/v3/genre/anime/${id}/1`).then((response) => {
        return response.json();
    }).then((category) =>{
        anime = category.anime; 
        var animeArray = [];
        for (i = 0; i < 100; i++) {
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
        showAnime(animeArray)
    }); 
}
function showAnime(animeArray){
    
    for (i = 0; i < 100; i++) {
        genres = "";
        allGenres = "";
        genres = animeArray[i].genres;
        genres.forEach(element => {
            allGenres += element.name+", ";
        });
        let description = tronque_description(animeArray[i].synopsis, 100);
        let cardAnime = new Card(animeArray[i].title, animeArray[i].id, animeArray[i].image_url, animeArray[i].score, [['Genre', allGenres, false],['Description', description, false]], animeArray[i].r18, animeArray[i].type,  animeArray[i].episodes+"ep", true, 1)
        document.querySelector('.main').appendChild(cardAnime.generateCard())
    }
}

function getUrlTrailer(id){
    fetch(`https://api.jikan.moe/v3/anime/${id}`).then((response) => {
        return response.json();
    }).then((data) =>{
        urlTrailer = data.trailer_url;
        console.log(urlTrailer);
        

        let modal = document.createElement('aside');
        modal.setAttribute("id","modal")
        modal.dataset.video = true;
        let iframeModal = document.createElement('iframe');
        iframeModal.classList.add('trailerVideo');
        iframeModal.setAttribute('src', `${urlTrailer}`);
        iframeModal.setAttribute('frameborder', 0);
        iframeModal.setAttribute('autoplay', 1);
        iframeModal.setAttribute('allow', "autoplay");
        iframeModal.setAttribute('allowfullscreen', 1);

        main.appendChild(modal);
        modal.appendChild(iframeModal);
    }); 
}