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
    for(let i=0; i<100; i++){
        console.log(anime[i].title);
        let p = document.createElement('p');
        p.id= "title";
        p.innerHTML = "titre :"+ anime[i].title;
        document.querySelector('#infosAnime').appendChild(p);
    }
   
   
});  
