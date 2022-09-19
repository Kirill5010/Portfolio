const hours = document.querySelector('.timer_block_watch')
const minuts = document.querySelector('.timer_block_minuts')
const seconds = document.querySelector('.timer_block_second')

let intervalBtn = document.querySelector('.interval')
let interval = document.querySelector('.block_interval')
let btnStop = document.querySelector('.stop')



    btnStop.addEventListener('click', ()=>{
    btnStop.innerHTML == 'Play' ? btnStop.innerHTML = 'Stop' : btnStop.innerHTML = 'Play'

    btnStop.innerHTML == 'Play' ? stop() : play()

    })



    function time () {
      const watch = new Date()
      hours.innerHTML = watch.getHours()
      minuts.innerHTML = watch.getMinutes()
      seconds.innerHTML = watch.getSeconds()
   }

   function removeInterval (){
      let bloclRow = Array.from(document.querySelectorAll('.block_interval_row'))

      bloclRow.map((el)=> {
         el.addEventListener('click', (e)=>{
             el.remove()
         })
       })
   }

   function hint (){
      let bloclRow = Array.from(document.querySelectorAll('.block_interval_row'))
      let hint = document.querySelector('.hint')

      bloclRow.forEach((el)=> {
         el.addEventListener('mouseover', ()=>{
            hint.classList.add('hint-active')
            setTimeout(()=>{
               hint.classList.remove('hint-active')
            }, 2500)
         })
       })
   }

    function play (){
       timer = setInterval(()=>{
         time()
      }, 1000)
    }

    function createInterval (){

      interval.insertAdjacentHTML('beforeend',

      `<div class="block_interval_row">
         <div class="black_interval_hours">${hours.innerHTML}h</div>
         <div class="block_interval_minuts">${minuts.innerHTML}m</div>
         <div class="block_interval_seconds">${seconds.innerHTML}s</div>
      </div>`)
      removeInterval(),
      hint()
    }

    intervalBtn.addEventListener('click', ()=>{
      createInterval()
    })

    function stop() {
      clearInterval(timer)
    }




