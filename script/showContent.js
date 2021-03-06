class Card {
  /*
  ANIME :
    Titre
    Image
    Etat
    Note
    Genre
    Synopsis
    type
    rating
    Nbr d'episode

  Manga
    Nom
    Image
    score
    Description

  Character
    Nom
    Image
    origine
    description

  Producer
    nom
   */

  cardNode = null;
  cardIllustration = null;
  cardHeader = null;
  cardRows = [];
  cardFooter = null;

  constructor(title, id, picture = null, note = null,
              rows = [], rating = null, type = null,
              episode = null, trailer = false,
              contentType = 0) {


    this.title = title;
    this.id = id;
    this.picture = picture;
    this.note = note;
    this.rows = rows;
    this.type = type;
    this.rating = rating;
    this.episode = episode;
    this.trailer = trailer;
    this.contentType = contentType;

    if (picture) {
      this.addIllustration(picture)
    }

    this.addheader(title, note)

    for (let row of rows) {
      this.addRow(row[0], row[1], row[2])
    }

    this.addFooter(type, rating, episode)

    let temp = document.createElement('article')
    temp.classList.add('card');
    this.cardNode = temp;
  }

  addIllustration(link) {
    let leftDiv = document.createElement('div')
    let illustration = document.createElement('img')
    illustration.src = link;
    leftDiv.classList.add('illustration')


    if (this.trailer) {
      let modal = document.createElement('div')
      modal.classList.add('card-modal')
      let icon = document.createElement('i')
      icon.classList.add('far', 'fa-play-circle')
      icon.dataset.trailer = this.id
      modal.dataset.trailer = this.id
      modal.appendChild(icon)

      leftDiv.appendChild(modal)
    }


    leftDiv.appendChild(illustration)
    this.cardIllustration = leftDiv

  }

  addheader(title, note = null) {
    let header = document.createElement('header')

    let titleDiv = document.createElement('div')
    titleDiv.classList.add('title')

    let h2 = document.createElement('h2')
    h2.innerText = title
    titleDiv.appendChild(h2)
    header.appendChild(titleDiv)

    if(note) {
      let noteDiv = document.createElement('p')
      noteDiv.classList.add('note')
      let noteNbr = document.createElement('span')
      noteNbr.innerText = note
      if (note >= 8) {
        noteNbr.classList.add('high')
      } else if (note <= 3) {
        noteNbr.classList.add('low')
      } else {
        noteNbr.classList.add('medium')
      }

      let noteTotal = document.createElement('span')
      noteTotal.innerText = '/10'
      noteTotal.classList.add('note-max')
      noteDiv.appendChild(noteNbr)
      noteDiv.appendChild(noteTotal)
      header.appendChild(noteDiv)
    }

    this.cardHeader = header
  }

  addRow(label, content, long = false) {
    let row = document.createElement('div')
    row.classList.add('row')

    let title = document.createElement('h3')
    title.classList.add('label')
    title.innerText = label


    if (long) {
      let p = document.createElement('ul')
      p.classList.add('text-content')
      p.classList.add('long-list')

      p.innerHTML = content
      row.appendChild(title)
      row.appendChild(p)
    } else {
      let p = document.createElement('p')
      p.classList.add('text-content')
      p.innerText = content
      row.appendChild(title)
      row.appendChild(p)
    }




    this.cardRows.push(row)

  }

  addFooter(support, rating, episodesNbr) {
    let footer = document.createElement('footer')

    if (support != null || support != 'null') {
      let supportVar = document.createElement('p')
      supportVar.classList.add('support')
      supportVar.innerText = support
      footer.appendChild(supportVar)
    }

    if (rating != null || rating != 'null') {
      let ratingVar = document.createElement('p')
      ratingVar.classList.add('rating')
      if (rating) {
        ratingVar.innerText = '18+'
      } else {
        ratingVar.innerText = 'Tout public'
      }

      let ratingSpan = document.createElement('span')
      ratingSpan.innerText = 'rating'
      ratingVar.prepend(ratingSpan)
      footer.appendChild(ratingVar)
    }

    if (episodesNbr != null || episodesNbr != 'null') {
      let numberVar = document.createElement('p')
      numberVar.classList.add('number')
      numberVar.innerText = episodesNbr
      footer.appendChild(numberVar)
    }


    this.cardFooter = footer;

  }

  generateCard(){

    let article = document.createElement('article')
    article.classList.add('card');

    let content = document.createElement('div')
    content.classList.add('content')

    if (this.cardIllustration != null) {
      article.appendChild(this.cardIllustration)
    } else {
      content.classList.add('large-content')
    }

    let div = document.createElement('div')
    div.appendChild(this.cardHeader)
    for (let row of this.cardRows) {
      div.appendChild(row)
    }

    content.appendChild(div)

    if (this.cardFooter != null) {
      content.appendChild(this.cardFooter)
    }

    article.appendChild(content)

    return article
  }

  static create(title, id, picture = null, note = null, rows = [], rating = null,
    type = null, episode = null, trailer = false) {

    let card = new Card(title, id, picture, note, rows, rating, type, episode, trailer)

    return card.generateCard()
  }

}


let test = new Card('Mon anime', 12, null, 2, [['Genre', 'les genres de mon anime', false],['Description', 'lorem ipsum lorem lorem ipsum', false]], true, 'TV', 22, true)
// document.querySelector('.main').appendChild(test.generateCard())

let static = Card.create('Mon anime', 12, null, 2, [['Genre', 'les genres de mon anime', false],['Description', 'lorem ipsum lorem lorem ipsum', false]], true, 'TV', 22, true)
// document.querySelector('.main').appendChild(static)