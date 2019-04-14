function randombg(){
  var random = Math.floor(Math.random() * 11) + 0;
  var bigSize = [
    "url('images/bg-1.jpg')",
    "url('images/bg-2.jpg')",
    "url('images/bg-3.jpg')",
    "url('images/bg-4.jpg')",
    "url('images/bg-5.jpg')",
    "url('images/bg-6.jpg')",
    "url('images/bg-7.jpg')",
    "url('images/bg-8.jpg')",
    "url('images/bg-9.jpg')",
    "url('images/bg-10.jpg')",
    "url('images/bg-11.jpg')",
  ];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}