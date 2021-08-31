(function(){
    const header = document.querySelector(".header");
    window.onscroll = ()=>{
      if(window.pageYOffset > 50){
          header.classList.add("header_active");
      }else{
          header.classList.remove('header_active');
      }
    };
}());

//Burger handler

(function (){
    const burgerItem = document.querySelector('.burger');
    const burgerItemClose = document.querySelector('.header_nav-close');
    const menu = document.querySelector('.header_nav');

    burgerItem.addEventListener('click',()=>{
       menu.classList.add('header_nav-active');
    });
    burgerItemClose.addEventListener('click',()=>{
        menu.classList.remove('header_nav-active');
    });
}());