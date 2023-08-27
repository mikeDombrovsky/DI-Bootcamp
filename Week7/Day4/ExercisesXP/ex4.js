//Create a Bootstrap Navbar in your HTML file.
//In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//The function should add a div in the nabvar, displaying the name of the user and his profile picture.
const nav = document.querySelector('.navbar-brand');

((name, img) => {
    const bar_img = document.createElement('img');
    bar_img.setAttribute('src', img);
    bar_img.style.width = '50px';
    bar_img.style.margin = '10px';
    bar_img.style.borderRadius = '50%';
    nav.append(name, bar_img);
    console.log(nav, img, name)
})("Bib", "bibi.jpg");