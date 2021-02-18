// https://api.jikan.moe/v3/search/manga?order_by=score&sort=desc&limit=10

let mangaDiv = document.querySelector(".main");


document.querySelector('.aside-menu').addEventListener('click', (el) => {
    el = el.target;
    if(el.dataset.topmanga){
        console.log("fdsfds")
        document.querySelector('.main').innerHTML = ''
        preparManga();
     
    }
});

function preparManga(){
    fetch("https://api.jikan.moe/v3/search/manga?order_by=score&sort=desc&limit=10").then((response) => {
        return response.json();
    }).then((manga) => {

        manga.results.forEach(mangaElt => {
            let test = new Card(mangaElt.title, null, mangaElt.image_url, mangaElt.score, [['Synopsis', mangaElt.synopsis, false]], null, mangaElt.type, mangaElt.volumes, false, 1);
            document.querySelector('.main').appendChild(test.generateCard())
            //let div = document.createElement("div");

            // let title = document.createElement("h1");
            // title.innerHTML = mangaElt.title;
            // let score = document.createElement("h2");
            // score.innerHTML = "Score : " + mangaElt.score;
            // let header = document.createElement("header");
            // header.appendChild(title);
            // header.appendChild(score);

            // let section = document.createElement("section");
            // let aside = document.createElement("aside");
            // let img = document.createElement("img");
            // img.setAttribute("src", mangaElt.image_url);
            // aside.appendChild(img);
            // section.appendChild(aside);
            // let paragraph = document.createElement("p");
            // paragraph.innerHTML = mangaElt.synopsis;
            // section.appendChild(paragraph);

            // let footer = document.createElement("footer");
            // let url = document.createElement("a");
            // url.setAttribute("href", mangaElt.url);
            // url.innerHTML = mangaElt.url;

            // footer.appendChild(url);

            // div.appendChild(header);
            // div.appendChild(section);
            // div.appendChild(footer);
            
            // mangaDiv.appendChild(div);
        });
    })
}