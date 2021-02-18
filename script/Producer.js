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


