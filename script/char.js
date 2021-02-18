let characters;
let list = document.querySelector('#characters');
let infos = document.querySelector('#infos');
let allAnime;

function menuChar(id){
    fetch(`https://api.jikan.moe/v3/character/${id}`).then((response) => {
        return response.json();
    }).then((perso) => {
        description = tronque_description(perso.about, 300);
        let world = perso.animeography;
        allAnime = "";
        world.forEach(element => {
            allAnime += element.name+", ";
        });
        let charCard = new Card(perso.name, id, perso.image_url, null, [['Vus dans les animes/mangas:', allAnime, false],['Description :', description, false]], null, null, null)
        document.querySelector('.main').appendChild(charCard.generateCard())
    });
}

