// javascript code for active links
let mainLinks = Array.from(document.querySelectorAll('.mainLinks'));

mainLinks.forEach((links)=>{
  links.addEventListener('click',(e)=>{
    mainLinks.forEach((link)=>{
      link.classList.remove('active')
    })
    e.target.classList = 'active'
  })
})



// javascript code for slideshow for each book

var slideIndex = 1;
  showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block"; };

// event listeners for each box within card element 

let box = document.querySelectorAll('.box');
box.forEach((book)=>{
  book.addEventListener('click',()=>{
    book.classList.toggle('something')
  })
})

// javascript code that points to admin login section
let adminIcon = document.querySelector('.admin');
let modal = document.querySelector('.loginModal');
let close = document.querySelector('.close')

// When the user clicks the button, open the modal 
adminIcon.addEventListener('click',()=>{
  modal.style.display = "block"
})

close.addEventListener('click',()=>{
  modal.style.display = "none"
})


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// rent button action and cart
let rentButtons = document.querySelectorAll('.rentBoook');
let cart = []

rentButtons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    let contents = e.target.parentElement.children
    let image = contents[0].children[0].src;
    let title = contents[1].children[0].innerText ;
    let author = contents[1].children[1].innerText;  
    cart.push({
      image: image,
      title: title,
      author: author
    })
    console.log(cart)
  })
})