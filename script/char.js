let allAnime;

function menuChar(id){
    fetch(`https://api.jikan.moe/v3/anime/${id}/characters_staff`).then((response) => {
        return response.json();
    }).then((perso) => {
        perso = perso.characters
        console.log(perso)
        perso.forEach(element => {
            fetch(`https://api.jikan.moe/v3/character/${element.mal_id}`).then((response) => {
                return response.json();
            }).then((data) => {
                description = tronque_description(data.about, 300);
                let world = data.animeography;
                allAnime = "";
                world.forEach(element => {
                    allAnime += element.name+", ";
                });
                let charCard = new Card(data.name, id, data.image_url, null, [['Vus dans les animes/mangas:', allAnime, true],['Description :', data.about, true]], null, null, null)
                document.querySelector('.main').appendChild(charCard.generateCard())
            });
        });  
    });
}

