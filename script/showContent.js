class Card {
  constructor() {

  }

  static createCard(){
    let article = document.createElement('article')
    article.classList.add('card')

    let illustration = document.createElement('img')
    illustration.src = '#';
    illustration.classList.add('illustration')
    article.appendChild(illustration)

    let content = document.createElement('div')
    content.classList.add('content')

    let div = document.createElement('div')
    let header = document.createElement('header')

    let titleDiv = document.createElement('div')
    titleDiv.classList.add('title')

    let h2 = document.createElement('h2');
    h2.innerText = 'Titre'
    let state = document.createElement('p')
    state.innerText = 'Etat'
    titleDiv.appendChild(h2)
    titleDiv.appendChild(state)

    let noteDiv = document.createElement('p')
    noteDiv.classList.add('note')
    let noteNbr = document.createElement('span')
    noteNbr.innerText = '8'
    let noteTotal = document.createElement('span')
    noteTotal.innerText = '/10'
    noteTotal.classList.add('note-max')
    noteDiv.appendChild(noteNbr)
    noteDiv.appendChild(noteTotal)

    header.appendChild(titleDiv)
    header.appendChild(noteDiv)
    div.appendChild(header)

    function createRow(label, content, long = false) {
      let row = document.createElement('div')
      row.classList.add('row')

      let title = document.createElement('h3')
      title.classList.add('label')
      title.innerText = 'label'

      let p = document.createElement('p')
      p.classList.add('text-content')
      if (long) {p.classList.add('long-list')}
      p.innerText = 'content'

      row.appendChild(title)
      row.appendChild(p)

      return row;

    }

    div.appendChild(createRow('Titre', 'Contenu lorem ipsum'))

    content.appendChild(div)

    let footer = document.createElement('footer')
    let support = document.createElement('p')
    support.classList.add('support')
    support.innerText = 'TV'

    let rating = document.createElement('p')
    rating.classList.add('rating')
    rating.innerText = '17+'
    let ratingSpan = document.createElement('span')
    ratingSpan.innerText = 'rating'
    rating.prepend(ratingSpan)

    let number = document.createElement('p')
    number.classList.add('number')
    number.innerText = '25ep'

    footer.appendChild(support)
    footer.appendChild(rating)
    footer.appendChild(number)

    content.appendChild(footer)

    article.appendChild(content)

    return article

  }
}