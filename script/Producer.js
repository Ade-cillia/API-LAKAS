let producers;
let list = document.querySelector('#producers');
let infos = document.querySelector('#infos');
let infosAnime = document.querySelector('#infosAnime');
fetch(`https://api.jikan.moe/v3/producer/1/1`)
.then((response) => {
    return response.json();
})
.then((producers) => {
    let producer = producers.meta;
    console.log(producer);
    document.querySelector('#name').innerHTML = producer.name;
    document.querySelector('#type').innerHTML= producer.type;
    let anime = producers.anime;
    let ul=document.createElement('ul');
    ul.setAttribute("class","text-content long-list"); 
    var arrayProducers = [];
    
    anime.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = element.title;
        ul.appendChild(li);
        arrayProducers.push({
            "id_prod": element.producers[0].mal_id,
            "type": element.producers[0].type,
            "name": element.producers[0].name,
            "url": element.producers[0].url,
            "title": element.title,
            "id_anime": element.mal_id,
            "image_animeURL": element.image_url,
            "source":element.source,
        });
        
    });
    document.querySelector('.row').appendChild(ul);
    document.querySelector('.url').innerHTML= `<a href=${producer.url}>cliquez ici pour plus d'infos</a>`;
    console.log(arrayProducers);
    

});  