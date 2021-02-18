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
    if(el.dataset.topmanga){
        document.querySelector('.page-title').innerHTML = '';
        document.querySelector('.main').innerHTML = '';
        preparManga();
    }
    if (el.dataset.idperso) {
        document.querySelector('.page-title').innerHTML = '';     
        document.querySelector('.main').innerHTML = '';
        menuChar(el.dataset.idperso);
    }
    if(el.dataset.producer){
        document.querySelector('.page-title').innerHTML = '';
        document.querySelector('.main').innerHTML = '';
        createProd(1);
        console.log('arrayProducers');
    }
    if(el.dataset.producer_anime){
        let prodAnime = new Card('Mon anime', 12, null, 2, [['Genre', 'les genres de mon anime', false],['Description', 'lorem ipsum lorem lorem ipsum', false]], true, 'TV', 22)
        document.querySelector('.main').appendChild(prodAnime.generateCard());
    }
});