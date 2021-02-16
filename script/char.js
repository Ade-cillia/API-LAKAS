fetch('https://api.jikan.moe/v3/character/6')
.then((response) => {
    return response.json();
})

.then((perso) => {
    let ul = document.createElement('ul');
    characters.forEach(character => {
        let li = document.createElement('li');
        li.innerHTML = character.name;
        li.dataset.about = character.about;
        ul.appendChild(li);
})


/*.dataset.birth_year = character.birth_year;
        li.dataset.hair_color = character.hair_color;
        li.dataset.eye_color = character.eye_color;
        li.dataset.mass = character.mass;
        li.dataset.height = character.height;
        li.dataset.skin_color = character.skin_color;
        li.dataset.gender = character.gender;