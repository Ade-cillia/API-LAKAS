

function tronque_description(description, lg_max) {
    if (description.length > lg_max){
        description = description.substr(0, lg_max);
        last_space= description.lastIndexOf(" ");  
        description = description.substr(0, last_space)+" ...";
        return description;
    }else {
        return description;
    }
}

document.querySelector('.website-main').addEventListener('click', (el) => {
    
    el = el.target;
    //console.log(el)
    if(el.dataset.trailer){
        getUrlTrailer(el.dataset.trailer);
    }
    if(el.dataset.video){
        document.querySelector("#modal").remove();
    }
    if(el.dataset.genre){
        document.querySelector('.page-title').innerHTML = '';
        document.querySelector('.main').innerHTML = '';
        preparAnime(el.dataset.genre);
        placeTitle(el);;
    }
    
    if(el.dataset.topmanga){
        document.querySelector('.page-title').innerHTML = '';
        document.querySelector('.main').innerHTML = '';
        preparManga();
        placeTitle(el);
    }

    if (el.dataset.idperso) {
        document.querySelector('.page-title').innerHTML = '';     
        document.querySelector('.main').innerHTML = '';
        menuChar(el.dataset.idperso);
        placeTitle(el);
    }

    if(el.dataset.producer){
        document.querySelector('.page-title').innerHTML = '';
        document.querySelector('.main').innerHTML = '';
        createProd(el.dataset.producer);
    }
    if(el.dataset.producer_anime){
        let prodAnime = new Card('Mon anime', 12, null, 2, [['Genre', 'les genres de mon anime', false],['Description', 'lorem ipsum lorem lorem ipsum', false]], true, 'TV', 22)
        document.querySelector('.main').appendChild(prodAnime.generateCard());
    }
});

function placeTitle(el){
    let title = document.createElement('h1')
    let spanTitle =  document.createElement('span')
    spanTitle.innerHTML = el.innerHTML;
    document.querySelector('.page-title').appendChild(title);
    title.appendChild(spanTitle);
}