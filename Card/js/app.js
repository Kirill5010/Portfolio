let card = Array.from(document.querySelectorAll('.card'))
let mask = document.querySelector('.pop_up_mask')
let addCont = document.querySelector('.add_card')
// Слушает клик по карточки и в зависимость на что кликнули, вызывает функции
card.map(elem => elem.addEventListener('click', (e)=>{
  if (e.target.classList.contains('like')) {
    likes(elem)
  } else if (e.target.classList.contains('del')) {
     deleted(elem)
  }
  else {
    let obj = createObj(elem)
    let content = `<h3>${obj.title}</h3><img class="card_img" src="${obj.img}" alt="Opp"><p>${obj.sub}</p>`
    mask.classList.add('pop_up_mask-active')
    creatCard(mask.children[0], content)
  }
}))
// Функция отвечает за лайк
const likes = (div) =>{
    elem = div.querySelector('.like')
    elem.getAttribute('src') == './img/like_black.png' ? elem.src = './img/like_red.png' : elem.src = './img/like_black.png'
}
// Функция отвечает за удаление карточки
const deleted = (div) =>{
    div.classList.add('remove')
    setTimeout(()=>{
      div.remove()
    }, 200)
}
// Создает ОБЪЕКТ карточки в зависимости от клика (карточка или кнопка создания)
const createObj = (elem) => {
  let obj = {}
  elem.classList.contains('card') ? 
  [obj.title = elem.children[1].innerHTML, obj.img = elem.children[2].src, obj.sub = elem.children[3].innerHTML]
  : [obj.title = elem.children[0].value, obj.img = elem.children[1].value, obj.sub = elem.children[2].value]

  return obj
}
// Выводит карточку
function creatCard(elem, content) {
    elem.classList.add('card')
    elem.innerHTML = content
}
// Функция отвечает за создание новой карточки
const addCard = () => {
  let obj = createObj(addCont)
  let div = document.createElement('div')
      div.classList.add('card')
      const contentCard = `<strong class="del">&#x2716;</strong><h3>${obj.title}</h3><img class="card_img" src="${obj.img}" alt="Opp"><p>${obj.sub}</p><img class="like" src="./img/like_black.png" alt="like">`
      creatCard(div, contentCard)
  document.querySelector('.cards').prepend(div)
// Код ниже необходим, для того что бы весь функционал работал и при создании новой карточки
  div.addEventListener('click', (e)=>{
    if (e.target.classList.contains('like')) {
      likes(div)
    } else if (e.target.classList.contains('del')) {
      deleted(div)
    }
    else {
      const content = `<h3>${obj.title}</h3><img class="card_img" src="${obj.img}" alt="Opp"><p>${obj.sub}</p>`
      mask.classList.add('pop_up_mask-active')
      creatCard(mask.children[0], content)
    }
  })
}

document.querySelector('.btn_add').addEventListener('click', addCard)
//  Закрывает PopUp
mask.addEventListener('click', ()=> mask.classList.remove('pop_up_mask-active'))





