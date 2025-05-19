// toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klik//
document.querySelector('#hamburger-menu').onclick =() => {
    navbarNav.classList.toggle('active');
};

// shoppingcart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick =() =>{
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}


//klik diluar sidebar untuk menghilangkan nav// 
const hamburgerMenu = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button'); 
document.addEventListener('click',function(e){
    if (!hamburgerMenu.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if (!searchButton.contains(e.target)&& !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
});




// toggle class active unutk search-form
const searchForm = document.querySelector('.search-form');
const searchBox = document .querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();

};

