console.log("hello");

// declare variables
let truth = document.querySelector('#truth');
let truthText = document.querySelector('#truthText');
let inputNumber = document.querySelector('#inputNumber');

// add input event listener, and call Fetch Api function
inputNumber.addEventListener('input', getTruthFetch);

// generating fumction for fetccccccccccch api
function getTruthFetch() {
      let num = inputNumber.value;
      console.log(num)

};

// add input event listener, and call ajx function
inputNumber.addEventListener('input', getTruthAjx);      
function getTruthAjx() {
      let num = inputNumber.value;
      console.log(num + 1)
}; 