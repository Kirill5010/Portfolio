

let arrColor = ['red', 'blue', 'violet', 'brown', 'yellow', 'green', 'wheat']
class Game {
    elem = document.createElement('div')
    className = 'imgCard'
    id = 0
    count = document.querySelector('.game_scoup_count')
    start = document.querySelector('.start')
    mask = document.querySelector('.mask')
    attempt = document.querySelector('.game_scoup_attempt')
    victory = document.querySelector('.victory')
    defeat = document.querySelector('.defeat')
    final = document.querySelector('.final')
    volume = document.querySelector('.game_scoup_volume')
    btn = document.querySelector('.game_scoup_btn')
    melody = new Audio('./music/melody.mp3')
    lop = new Audio('./music/lop.mp3')
    victoryMelody = new Audio ('./music/victory.mp3')
    defeatMelody = new Audio ('./music/defeat.mp3')
    constructor (src, id){
      this.id = id
      this.src = src
    }
    createBalls(){ 
      this.elem.classList.add(this.className)
      this.elem.style.backgroundColor = this.src
      this.elem.setAttribute('id', `${this.id}`)
      document.querySelector('.conteiner').append(this.elem)
    }
    removeBalls  (result){
      this.elem.addEventListener('click', (e)=>{
           e.target.classList.add('remove')
           setTimeout(()=>{e.target.remove()}, 1200)
               this.lop.volume = 0.2
               this.lop.play()
           this.elem.append(+e.target.getAttribute('id'))
           result += +e.target.id

           this.count.innerHTML = +result + +this.count.innerHTML
      })
    }
    closeStart (){
        this.mask.addEventListener('click', ()=>{
        this.start.classList.add('start-close')
        this.mask.classList.add('mask-close')
        setTimeout(()=>{
          this.start.classList.add('start-none') 
          this.mask.classList.add('mask-none')}, 1000)
      })
    }
    attempts (){
       this.elem.addEventListener('click', ()=>{
         this.attempt.innerHTML = this.attempt.innerHTML - 1
       })
    }
    sound (){
          this.melody.volume = 0.002
          this.melody.autoplay = false
          this.melody.loop = true

          this.volume.addEventListener('click', ()=>{
           this.melody.paused ? this.melody.play() : this.melody.pause();
          })
    }
    addBalls (){
       this.btn.addEventListener('click', ()=>{
        let result = 0
        let attempt = 5
        console.log('hello!')
          let random = Math.floor(Math.random() * arrColor.length)
          let obj = new Game(arrColor[random], Math.floor(Math.random() * 1000))
          obj.createBalls()
          obj.removeBalls(result)
          obj.closeStart()
          obj.attempts()
          obj.gameOver(attempt)
          obj.sound()
       })

      //  this.btn.addEventListener('click', ()=>{
      //   fetch(url)
      //   .then(response => response.json())
      //   .then(json => {
      //    json.length = 5
      //    let result = 0
      //    let attempt = 5
      //    for (let elem of json) {
      //       let obj = new Game(elem.url, Math.floor(Math.random() * 1000))
      //       obj.createBalls()
      //       obj.removeBalls(result)
      //       obj.attempts()
      //       obj.gameOver(attempt)
      //       obj.addBalls()
      //    }
      //  })
      // })
    }
    gameOver (attempt){
      this.elem.addEventListener('click', ()=>{
        if (this.attempt.innerHTML == 0 && +this.count.innerHTML < 2500){

          this.defeatMelody.volume = 0.03
          this.defeatMelody.play()
          this.victory.innerHTML = `Вы ПРОИГРАЛИ, Ваш счет: ${this.count.innerHTML}`
          this.victory.classList.add('victory-active')
          setTimeout(()=>{

            this.defeatMelody.pause()
            this.victory.innerHTML = ''
            this.victory.classList.remove('victory-active')
          }, 5000)
          this.attempt.innerHTML = attempt
          this.count.innerHTML = 0
         } else if (this.count.innerHTML >= 2500){

              this.victoryMelody.volume = 0.03
              this.victoryMelody.play()
          this.defeat.innerHTML = `Вы ВЫГРАЛИ, Ваш счет: ${this.count.innerHTML}`
          this.defeat.classList.add('defeat-active')
          setTimeout(()=>{

            this.victoryMelody.pause()
            this.defeat.innerHTML = ''
            this.defeat.classList.remove('defeat-active')
          }, 5000)
            this.attempt.innerHTML = attempt
            this.count.innerHTML = 0
         }
      })
    }
}

const generation = () =>{
  let result = 0
  let attempt = 5
  console.log('hello')
   for (let index = 0; index < 15; index++) {
      let random = Math.floor(Math.random() * arrColor.length)
      let obj = new Game(arrColor[random], Math.floor(Math.random() * 1000))
      obj.createBalls()
      obj.removeBalls(result)
      obj.closeStart()
      obj.attempts()
      obj.gameOver(attempt)
      obj.sound()
      obj.addBalls()
   }
}

window.onload = generation()

// fetch(url)
//   .then(response => response.json())
//   .then(json => {
//    json.length = 10
//    let result = 0
//    let attempt = 5
//    for (let elem of json) {
//       let obj = new Game(elem.url, Math.floor(Math.random() * 1000))
//       obj.createBalls()
//       obj.removeBalls(result)
//       obj.closeStart()
//       obj.attempts()
//       obj.gameOver(attempt)
//       obj.sound()
//       obj.addBalls()
//    }
// })


// function request (url, method, body) {
//    return fetch(url, {
//        method : method,
//        body : JSON.stringify(body),
//        headers: {'Content-Type' : 'application/json'}
//    }).then((response) => {
//        return response.json()
//    })
// }
