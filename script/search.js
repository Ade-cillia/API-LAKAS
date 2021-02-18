let searchBox = document.querySelector('#search-box');
let searchBtn = searchBox.querySelector('i');
let searchQuery = searchBox.querySelector('input');
let searchType = searchBox.querySelector('select');


searchBtn.addEventListener('click', () => {
  search();
})

searchBox.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    search()
  }
});


function search() {
  document.querySelector('.main').innerHTML = null;
  document.querySelector('.page-title').innerHTML = null;
  let searchValue = searchQuery.value;
  console.log(searchValue)
  let sQuery = searchQuery.value.replace(/\s/g, '%20')

  let query = `https://api.jikan.moe/v3/search/${searchType.value}?q=${sQuery}&page=1`;
  console.log(query);
  fetch(query).then((response) => {
    return response.json();
  }).then((data) => {
    let search = document.createElement('p')
    let searchTitle = document.createElement('h1')
    searchTitle.innerText = "Recherche: "
    if (searchType.selectedIndex === 0) {
      search.innerHTML = 'Animé: ' + searchQuery.value
      for (let result of data.results) {
        document.querySelector('.main').appendChild(
          Card.create(result.title, null, result.image_url, result.score, [['Synopsis', tronque_description(result.synopsis, 100), false]], result.rated, result.type, result.episodes, false, 0)
        )
      }
    } else if (searchType.selectedIndex === 1) {
      search.innerHTML = 'Manga: ' + searchQuery.value
      for (let result of data.results) {
        document.querySelector('.main').appendChild(
          Card.create(result.title, null, result.image_url, result.score, [['Synopsis', tronque_description(result.synopsis, 100), false]], result.rated, result.type, result.volumes, false, 1)
        )
      }
    } else {
      search.innerHTML = 'Personnage: ' + searchQuery.value
      for (let result of data.results) {
        let animeList = ''
        for (let animeItem of result.anime) {
          animeList += '<li>' + animeItem.name + '</li>'
        }
        let mangaList = ''
        for (let mangaItem of result.manga) {
          mangaList += '<li>' + mangaItem.name + '</li>'
        }
        document.querySelector('.main').appendChild(
          Card.create(result.name, null, result.image_url, null, [['Animés :', animeList, true], ['Mangas :', mangaList, true]], null, null, null, false, 0)
        )
      }
    }
    document.querySelector('.page-title').appendChild(searchTitle)
    document.querySelector('.page-title').appendChild(search)

    console.log(data.results);
  })
}

