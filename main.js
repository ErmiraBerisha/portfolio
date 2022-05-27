const container = document.querySelector('.container');


container.addEventListener('mouseenter', () => {
    if(!container.classList.contains('hover')){
        container.classList.add('hover');

    }
});

container.addEventListener('mouseleave', () => {
    if(container.classList.contains('hover')){
        container.classList.remove('hover');

    }
});
 


  function toggleMenu() {
    let menuBox = document.getElementById('menu-box');    
    if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
      menuBox.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      menuBox.style.display = "block";
    }
  }
