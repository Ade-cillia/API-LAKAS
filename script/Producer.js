let producers;
let list = document.querySelector('#producers');
let infos = document.querySelector('#infos');
let infosAnime = document.querySelector('#infosAnime');
function createProd(id){
    fetch(`https://api.jikan.moe/v3/producer/${id}/1`)
      .then((response) => {
          return response.json();
      })
      .then((producers) => {
          // let pro = new Card(arrayProducers.name, arrayProducers.type, null,null, null, true, null, null,false);
          // let producer = producers.meta;
          let title = document.createElement('h1')
          title.innerText = producers.meta.name;
          document.querySelector('.page-title').appendChild(title);
          // console.log(producer);
          //document.querySelector('#name').innerHTML = producer.name;
          //document.querySelector('#type').innerHTML= producer.type;
          let anime = producers.anime;
          // let ul=document.createElement('ul');
          // ul.setAttribute("class","text-content long-list");
          // var arrayProducers = [];
          // let i=0;
          anime.forEach(element => {
              // let li = document.createElement('li');
              // li.innerHTML = element.title;
              // li.dataset.producer_anime= i;
              // ul.appendChild(li);
              let description = tronque_description(element.synopsis, 100);
              document.querySelector('.main').appendChild(Card.create(element.title, null, element.image_url, element.score, [['synopsis', description, false]], element.r18, element.source, element.episode,false))

              // arrayProducers.push({
              //     "id_prod": element.producers[0].mal_id,
              //     "type": element.producers[0].type,
              //     "name": element.producers[0].name,
              //     "url": element.producers[0].url,
              //     "title": element.title,
              //
              //     "id_anime": element.mal_id,
              //     "image_animeURL": element.image_url,
              //     "source":element.source,
              // });
              // i++;
          });
          // document.querySelector('.main').appendChild(pro.generateCard());
          // document.querySelector('.row').appendChild(ul);
          // document.querySelector('.url').innerHTML= `<a href=${producer.url}>cliquez ici pour plus d'infos</a>`;
          // console.log(arrayProducers);
      });
}

document.querySelector('.aside-menu').addEventListener('click', (el) => {
    el = el.target;
    if(el.dataset.producer){
        document.querySelector('.main').innerHTML = '';
        createProd(1);
        console.log('arrayProducers');


    }
    if(el.dataset.producer_anime){
        let prodAnime = new Card('Mon anime', 12, null, 2, [['Genre', 'les genres de mon anime', false],['Description', 'lorem ipsum lorem lorem ipsum', false]], true, 'TV', 22)
        document.querySelector('.main').appendChild(prodAnime.generateCard());
    }
});

// createProd(1);
