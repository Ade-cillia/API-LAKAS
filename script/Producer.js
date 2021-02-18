let producers;

function createProd(id){
    fetch(`https://api.jikan.moe/v3/producer/${id}/1`)
      .then((response) => {
        return response.json();
      })
      .then((producers) => {
        let title = document.createElement('h1')
        title.innerText = producers.meta.name;
        document.querySelector('.page-title').appendChild(title);
        let type = document.createElement('p');
        type.innerText = producers.meta.type;
        document.querySelector('.page-title').appendChild(type);
        let anime = producers.anime;
        anime.forEach(element => {   
        let description = tronque_description(element.synopsis, 100);
        document.querySelector('.main').appendChild(Card.create(element.title, null, element.image_url, element.score, [['synopsis', description, false]], element.r18, element.source, element.episode,false));  
        });
          
      });
}
document.querySelector('.aside-menu').addEventListener('click', (el) => {
    el = el.target;
    if(el.dataset.producer){
        document.querySelector('.main').innerHTML = '';
        document.querySelector('.page-title').innerHTML = '';
        createProd(el.dataset.producer);
    }
    if(el.dataset.producer_anime){
        let prodAnime = new Card('Mon anime', 12, null, 2, [['Genre', 'les genres de mon anime', false],['Description', 'lorem ipsum lorem lorem ipsum', false]], true, 'TV', 22)
        document.querySelector('.main').appendChild(prodAnime.generateCard());
    }
});

