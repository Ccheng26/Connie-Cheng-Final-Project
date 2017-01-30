// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img1');
var captionText = document.getElementById('c');
img.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get other modals
var modal = document.getElementById('myModal2');
var img = document.getElementById('myImg2');
var modalImg = document.getElementById('img2');
var captionText = document.getElementById('c2');
img.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var modal = document.getElementById('myModal3');
var img = document.getElementById('myImg3');
var modalImg = document.getElementById('img3');
var captionText = document.getElementById('c3');
img.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var modal = document.getElementById('myModal4');
var img = document.getElementById('myImg4');
var modalImg = document.getElementById('img4');
var captionText = document.getElementById('c4');
img.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var modal = document.getElementById('myModal5');
var img = document.getElementById('myImg5');
var modalImg = document.getElementById('img5');
var captionText = document.getElementById('c5');
img.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var modal = document.getElementById('myModal6');
var img = document.getElementById('myImg6');
var modalImg = document.getElementById('img6');
var captionText = document.getElementById('c6');
img.onclick = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var modala = document.getElementById('myModal7');
var imga = document.getElementById('myImg7');
var modalImga = document.getElementById('img7');
var captionTexta = document.getElementById('c7');
imga.onclick = function(){
    modala.style.display = 'block';
    modalImga.src = this.src;
    captionTexta.innerHTML = this.alt;
}

var modala = document.getElementById('myModal8');
var imga = document.getElementById('myImg8');
var modalImga = document.getElementById('img8');
var captionTexta = document.getElementById('c8');
imga.onclick = function(){
    modala.style.display = 'block';
    modalImga.src = this.src;
    captionTexta.innerHTML = this.alt;
}
var modala = document.getElementById('myModal9');
var imga = document.getElementById('myImg9');
var modalImga = document.getElementById('img9');
var captionTexta = document.getElementById('c9');
imga.onclick = function(){
    modala.style.display = 'block';
    modalImga.src = this.src;
    captionTexta.innerHTML = this.alt;
}

var modala = document.getElementById('myModal10');
var imga = document.getElementById('myImg10');
var modalImga = document.getElementById('img10');
var captionTexta = document.getElementById('c10');
imga.onclick = function(){
    modala.style.display = 'block';
    modalImga.src = this.src;
    captionTexta.innerHTML = this.alt;
}
var modala = document.getElementById('myModal11');
var imga = document.getElementById('myImg11');
var modalImga = document.getElementById('img11');
var captionTexta = document.getElementById('c11');
imga.onclick = function(){
    modala.style.display = 'block';
    modalImga.src = this.src;
    captionTexta.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  break modal;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    break modal
    }
}

