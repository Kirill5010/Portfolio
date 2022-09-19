class Img {
   img = document.createElement('img')
   class = 'images'
   constructor(link){
       this.link = link
   }
   add(){
       document.querySelector('.content').append(this.img)
       this.img.classList.add(this.class)
       this.img.setAttribute('src', this.link)

   }
}


const srcImg = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg', './img/8.jpg', './img/9.jpg', './img/10.jpg',]



   for (let i = 0; i < srcImg.length; i++) {
       let  newImg = new Img(srcImg[i])
       newImg.add()

       let dote = document.createElement('div')
       dote.classList.add('dote')
       dote.id = i + 1
       document.querySelector('.nav').append(dote)
   }
   
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

let imageWidth = document.querySelector('.images').clientWidth
let maxWidth = srcImg.length * imageWidth
let countCard = 1
let arrDote = Array.from(document.querySelectorAll('.dote'))

document.getElementById(countCard).classList.add('click_dote')

function clickDote () {
   arrDote.map((elem)=>{
      elem.classList.remove('click_dote')
   })
      if (countCard){
        document.getElementById(countCard).classList.add('click_dote')
      }
 }


   next.addEventListener('click', ()=>{
       document.querySelector('.content').scroll({top: 0, left: imageWidth * countCard, behavior: 'smooth'})
       ++countCard
       if (countCard == arrDote.length) {
          countCard = 0
       }
       clickDote()
   })


   prev.addEventListener('click', ()=>{
       document.querySelector('.content').scroll({top: 0, left: imageWidth * (countCard - 2), behavior: 'smooth'})
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
           document.querySelector('.content').scroll({top: 0, left: imageWidth * (elem.id - 1), behavior: "smooth"})
           countCard = elem.id - 1
       })
   }
