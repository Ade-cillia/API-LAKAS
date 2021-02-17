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
            showAnime();
        }else{
            document.querySelector(`#${el.dataset.genre}`).classList.remove('none') 
        }
    }
});

function showAnime(){
    fetch(`https://api.jikan.moe/v3/anime/${id}`).then((response) => {
        return response.json();
    }).then((anime) =>{
        console.log(anime);
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