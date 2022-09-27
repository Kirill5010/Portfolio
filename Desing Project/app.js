 // ================== Слайдер =====================================
class Img {
   img = document.createElement('img')
   class = 'slider_img'
   constructor (link) {
        this.link = link
   }
   add() {
      document.querySelector('.slider_see').append(this.img)
      this.img.classList.add(this.class)
      this.img.setAttribute('src', this.link)

  }
}

const srcImg = ['./img/completed.jpg', './img/slider_1.jpg', './img/slider_3.jpg', './img/slider_4.jpg', './img/slider_5.jpg']

for (let i = 0; i < srcImg.length; i++) {
   let  newImg = new Img(srcImg[i])
   newImg.add()

   let dote = document.createElement('div')
   dote.classList.add('dote')
   dote.id = i + 1
   document.querySelector('.slider_nav').append(dote)
}

let imageWidth = document.querySelector('.slider_img').clientWidth
let maxWidth = srcImg.length * imageWidth
let countCard = 1
let arrDote = Array.from(document.querySelectorAll('.dote'))
let prev = document.querySelector('.slider_btn_prev')
let next = document.querySelector('.slider_btn_next')

document.getElementById(countCard).classList.add('click_dote')

function clickDote () {
arrDote.map((elem)=>{
  elem.classList.remove('click_dote')
})
  if (countCard) {
   document.getElementById(countCard).classList.add('click_dote')
  }
}

next.addEventListener('click', ()=>{
   document.querySelector('.slider_see').scroll({top: 0, left: imageWidth * countCard, behavior: 'smooth'})
   ++countCard
   if (countCard == arrDote.length) {
      countCard = 0
   }
   clickDote()
})

prev.addEventListener('click', ()=>{
   document.querySelector('.slider_see').scroll({top: 0, left: imageWidth * (countCard - 2), behavior: 'smooth'})
   --countCard
   if (countCard == 0) {
       countCard = 1
    }
    clickDote()
})

for (let elem of arrDote){
   elem.addEventListener('click', ()=>{
       arrDote.map((item)=>{
           item.classList.remove('click_dote')
       })
       elem.classList.add('click_dote')
       document.querySelector('.slider_see').scroll({top: 0, left: imageWidth * (elem.id - 1), behavior: "smooth"})
       countCard = elem.id - 1
   })
}
// ===================  / Слайдер =============================================

// =================== Слайдер (section-form) =================================
class ImgTwo {
   img = document.createElement('img')
   class = 'slider_img'
   constructor (link){
        this.link = link
   }
   add(){
      document.querySelector('.section-form_slider').append(this.img)
      this.img.classList.add(this.class)
      this.img.setAttribute('src', this.link)

  }
}
const srcImgTwo = ['./img/varians_1.jpg', './img/varians_2.jpg','./img/varians_3.jpg','./img/varians_4.jpg']

for (let i = 0; i < srcImgTwo.length; i++) {
   let  newImgTwo = new ImgTwo(srcImgTwo[i])
   newImgTwo.add()
}

let prevBarForm = document.querySelector('.section-form_control_bar_left')
let nextBarForm = document.querySelector('.section-form_control_bar_right')

nextBarForm.addEventListener('click', ()=>{

   document.querySelector('.section-form_slider').scroll({top: 0, left: imageWidth * countCard, behavior: 'smooth'})
   ++countCard
   if (countCard == arrDote.length) {
      countCard = 0
   }
   clickDote()
})

prevBarForm.addEventListener('click', ()=>{

   document.querySelector('.section-form_slider').scroll({top: 0, left: imageWidth * (countCard - 2), behavior: 'smooth'})
   --countCard
   if (countCard == 0) {
       countCard = 1
    }
    clickDote()
})
// ================== / Слайдер (section-form) ================================

// =================== SCROLL UP ==============================================
let scrollUp = document.querySelector('.scroll_up');
    scrollUp.addEventListener('click', ()=>{
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         })
    })

    window.addEventListener('scroll', ()=>{
         if (window.pageYOffset > 300){
            scrollUp.classList.add('scroll_up--active')
         } else {
            scrollUp.classList.remove('scroll_up--active')
         }
    })
// ===================== /SCROLL UP ==============================================

// ====== CONTROL BAR (мобильная версия) =========================================
let prevBar = document.querySelector('.control_bar_left')
let nextBar = document.querySelector('.control_bar_right')

nextBar.addEventListener('click', ()=>{
       document.querySelector('.slider_see').scroll({top: 0, left: imageWidth * countCard, behavior: 'smooth'})
       document.querySelector('.section-form_slider').scroll({top: 0, left: imageWidth * countCard, behavior: 'smooth'})
       ++countCard
       if (countCard == arrDote.length) {
          countCard = 0
       }
       clickDote()
    })

prevBar.addEventListener('click', ()=>{
   document.querySelector('.slider_see').scroll({top: 0, left: imageWidth * (countCard - 2), behavior: 'smooth'})
   document.querySelector('.section-form_slider').scroll({top: 0, left: imageWidth * (countCard - 2), behavior: 'smooth'})
   --countCard
   if (countCard == 0) {
       countCard = 1
    }
    clickDote()
})
// ====== / CONTROL BAR (мобильная версия) ====================================

// ================= Меню бургер ========================================
document.querySelector('.burger').addEventListener('click', ()=>{
       document.querySelector('.burger_nav').classList.toggle('burger_nav-active')
       document.querySelector('.burger').classList.toggle('burger-active')
       document.querySelector('.section-welcome').classList.toggle('section-welcome-active')
}) 
// ================= / Меню бургер ======================================

// ================= Проверка (отправка) формы ============================
let arrData = Array.from(document.querySelectorAll('.section-form_content_form_centr_inp'))
let form = Array.from(document.querySelectorAll('.section-form_content_form label'))
let btn = document.querySelector('#getdata')

function getData () {
   let data = {}

       for(let i = 0; i < arrData.length; i++){
         data[form[i].innerHTML] = arrData[i].value
       }
      console.log(data)
}
// Проверка заполнения input
let count = {}
arrData.map(el => el.addEventListener('input', (e)=>{

    e.target.value == '' ? delete count[e.target.previousElementSibling.innerHTML] : 
    count[e.target.previousElementSibling.innerHTML] = 'true'

    if (Object.values(count).length == 3){
       btn.classList.add('btn')
       btn.disabled = false
    } else {
      btn.classList.remove('btn')
      btn.style.cursor = 'pointer'
      btn.disabled = true
    }
}))

btn.addEventListener('click', (()=>{getData()}))
// =============== / Проверка (отправка) формы ==================================
