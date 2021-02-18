let characters;
let list = document.querySelector('#characters');
let infos = document.querySelector('#infos');
let allAnime = "";

function menu(id){
    fetch(`https://api.jikan.moe/v3/character/${id}`)
    .then((response) => {
        return response.json();
    })

    .then((perso) => {
        characters = perso;
        let imagePerso = document.querySelector('#url');
        let image = document.createElement('img');
        image.setAttribute("src", `${perso.image_url}`);
        document.querySelector('#name').innerHTML = perso.name;
        document.querySelector('#about').innerHTML = perso.about;
        imagePerso.appendChild(image);
        document.querySelector('#about').innerHTML = tronque_description(perso.about, 666);
        let world= perso.animeography;
        console.log(world);
        world.forEach(element => {
            console.log(element)
            allAnime += element.name+", ";
        });
        document.querySelector('#book').innerHTML = allAnime;
    });
}
document.querySelector('.aside-menu').addEventListener('click', (el) => {
    el = el.target;
    if (el.dataset.idperso) {

        if(document.querySelector(`${el.dataset.idperso}`)){
            document.querySelector('.main').appendChild(Card.createCard());
            menu(el.dataset.idperso);
        }else{
            document.querySelector(`#${el.dataset.idperso}`).classList.remove('none');
        }
    }
});