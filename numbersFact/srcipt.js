// declare variables

let truth = document.querySelector('#truth');
let truthText = document.querySelector('#truthText');
let inputNumber = document.querySelector('#inputNumber');


// add input event listener, and call Fetch Api function
// generating fumction for fetch api

inputNumber.addEventListener('input', getTruthFetch);
function getTruthFetch() {
      let num = inputNumber.value;
      console.log(num);
      if(num != ''){ 
            fetch(`http://numbersapi.com/${num}`) 
            .then(response => response.text())
            .then(Truth => { 
              truth.style.display = 'block';
              truthText.innerText = Truth;
            })
            .catch(err => console.log(err)); 
          }
};


// add input event listener, and call ajx function
// generating fumction for Ajx

// inputNumber.addEventListener('input', getTruthAjx);      
