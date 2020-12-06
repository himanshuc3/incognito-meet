let container = document.getElementsByClassName("VwfPgd")[1];
  if(container){

    container.style.backgroundColor = 'red'
  }

// Call it on a hook instead, would be viable for slow internet connections
setTimeout(afterDOMLoaded, 10000)
  function afterDOMLoaded() {
let link = document.getElementsByClassName("VA2JSc")[0];
if(link){

  link.style.display = 'none'
}

      console.log(window,document)
      window.history.pushState("object or string", "Title", "incognito-meet");
      document.title = 'Incognito-meet'
  }
  // classname = VA2JSc