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
  let query = `https://api.jikan.moe/v3/search/${searchType.value}?q=${searchQuery.value}&page=1`;
  console.log(query);
  fetch(query).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data.results);
  })
}

