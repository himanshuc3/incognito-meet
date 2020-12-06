console = chrome.extension.getBackgroundPage().console;
console.log('hey')
let button = document.getElementById('changeColor')
button.addEventListener('click', function() {
  let container = document.getElementsByClassName("VwfPgd")[1];
  console.log(container)
  if(container){

    container.style.backgroundColor = 'red'
  }

})

