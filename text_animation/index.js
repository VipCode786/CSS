var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 2000 - windowHeight;
var square1 = document.getElementsByClassName('square')[0];
var square2 = document.getElementsByClassName('square')[1];
var square3 = document.getElementsByClassName('square')[2];
var square4 = document.getElementsByClassName('square')[3];
var square5 = document.getElementsByClassName('square')[4];
var square6 = document.getElementsByClassName('square')[5];
var square7 = document.getElementsByClassName('square')[6];
var square8 = document.getElementsByClassName('square')[7];

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;
  
  square1.style.left = scrollPercent*window.innerWidth + 'px';
  square2.style.right = 1200 - scrollPercent*window.innerWidth*0.6 + 'px';
  square3.style.left = 1100 - scrollPercent*window.innerWidth*0.6 + 'px';
  square4.style.right = 1000 - scrollPercent*window.innerWidth*0.6 + 'px';
  square5.style.left = 900 - scrollPercent*window.innerWidth*0.6 + 'px';
  square6.style.right = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
  square7.style.left = 700 - scrollPercent*window.innerWidth*0.6 + 'px';
  square8.style.right = 600 - scrollPercent*window.innerWidth*0.6 + 'px';
  
});