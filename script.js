window.onscroll = () =>{

    searchForm.classList.remove('active');
  
    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
    }
  
  }

window.onload = () =>{

    if(window.scrollY > 80){
      document.querySelector('#header').classList.add('active');
    }else{
      document.querySelector('#header').classList.remove('active');
    }
  
    fadeOut();
  
  }
  
  function loader(){
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut(){
    setTimeout(loader, 2000);
  }