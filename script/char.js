let characters;
let list = document.querySelector('#characters');
let infos = document.querySelector('#infos');

fetch('https://api.jikan.moe/v3/character/6')
.then((response) => {
    return response.json();
})

.then((perso) => {
    characters = perso.nicknames;
    //let ul = document.createElement('ul');
    //let li = document.createElement('li');
    let imagePerso = document.querySelector('#url');
    let image = document.createElement('img');
    image.setAttribute("src", `${perso.image_url}`);
    document.querySelector('#name').innerHTML = perso.name;
    document.querySelector('#about').innerHTML = perso.about;
    //ul.appendChild(li);
    //list.appendChild(ul);
    imagePerso.appendChild(image);
    document.querySelector('#about').innerHTML = tronque_description(perso.about, 666);
});


