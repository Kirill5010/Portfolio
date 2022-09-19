const result = (event) =>{
   let A = document.querySelector('.calculate_A').value
   let B = document.querySelector('.calculate_B').value
   let res = document.querySelector('.resulte')
 
   const obj = {I: 1, II: 2, III: 3, IV: 4,  V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10, XI: 11, XII: 12, XIII: 13, XIV: 14, XV: 15, XVI: 16, XVII: 17, XVIII: 18, XIX: 19, XX: 20}
   const key = Object.keys(obj)
 
   let arr = A.split().map((el)=> obj[el])
   let arr2 = B.split().map((el)=> obj[el])
 
   let A2 = arr.find((elem)=> {return elem})
   let B2 = arr2.find((elem)=> {return elem})
 
 
   res.innerHTML = ''
   if(event.target.innerHTML == '+'){
      let result = +A + +B
      isNaN(result) ? '' : res.append(result)
 
   } if (event.target.innerHTML == '-'){
     let result = +A - +B
     isNaN(result) ? '' : res.append(result)
 
   } if (event.target.innerHTML == '*'){
     let result = +A * +B
     isNaN(result) ? '' : res.append(result)
 
   } if (event.target.innerHTML == '/'){
     let result = +A / +B
     isNaN(result) ? '' : res.append(result)
   }
 
   // РИМСКИЕ ==============================
 
   if(event.target.innerHTML == '+'){
      let rim = key.find((key => obj[key] === Math.floor(A2 + B2)))
      rim === undefined ? '' : res.append(rim)
 
  } if (event.target.innerHTML == '-'){
      let rim = key.find((key => obj[key] === Math.floor(A2 - B2)))
      rim === undefined ? '' : res.append(rim)
 
  } if (event.target.innerHTML == '*'){
      let rim = key.find((key => obj[key] === Math.floor(A2 * B2)))
      rim === undefined ? '' : res.append(rim)
      
  } if (event.target.innerHTML == '/'){
      let rim = key.find((key => obj[key] === Math.floor(A2 / B2)))
      rim === undefined ? '' : res.append(rim)
  }
 
 }
 
 let znac = document.querySelectorAll('.znac')
     znac.forEach((elem)=>{
       elem.addEventListener('click', result)
     })