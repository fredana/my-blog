// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    let captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      let navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      let x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }



//*****************  EMAIL CONFIRMATION SECTION  *****************

//-----  SEND & RESET SECTION  ----

function bgColorSubmit(bsbtn){
    bsbtn.target.style.backgroundColor = 'lightgreen'
    bsbtn.target.style.color ='green'
    bsbtn.target.style.fontWeight ='bold'
    bsbtn.target.style.borderRadius ='10px'
    bsbtn.target.style.fontSize ='25px'
}
function alertNotSubmit(bsbtn){
    bsbtn.target.style.backgroundColor ='white'
    bsbtn.target.style.color ='black'
    bsbtn.target.style.fontWeight ='bold'
    bsbtn.target.style.borderRadius ='1px'
    bsbtn.target.style.fontSize ='15px'
}


function submitBtn(){
    let btn = document.querySelector('#submit')
    btn.addEventListener('mouseover', bgColorSubmit)
    btn.addEventListener('mouseleave', alertNotSubmit)
}
submitBtn()

//******************   RESET BUTTON SECTION  *******************
function bgColorReset(brbtn){
    brbtn.target.style.backgroundColor = 'orange'
    brbtn.target.style.color ='red'
    brbtn.target.style.fontWeight ='bold'
    brbtn.target.style.borderRadius ='10px'
    brbtn.target.style.fontSize ='25px'
}
function alertNoAction(brbtn){
    brbtn.target.style.backgroundColor = 'white'
    brbtn.target.style.color ='black'
    brbtn.target.style.fontWeight ='bold'
    brbtn.target.style.borderRadius ='1px'
    brbtn.target.style.fontSize ='15px'
}

function handleDelete(e){
    e.target.value.remove(); 
}

function resetBtn(){
    let btn = document.querySelector('#reset')
    btn.addEventListener('mouseover', bgColorReset)
    btn.addEventListener('mouseleave', alertNoAction)
    btn.addEventListener('click', handleDelete)
}
resetBtn()

function confirmMessage2(){
    const list2 = document.getElementById("fill");
    list2.innerHTML = 'THANKS! WE WILL RESPOND WITHIN 2 BUSINESS DAYS.'
    list2.style.color = 'green'
    list2.style.backgroundColor = 'cyan'
    list2.style.fontSize = '30px'
    list2.style.fontFamily = 'cursive'
    list2.style.width = '300px'
}

function jeconfirm(){
    let confirmer = document.getElementById('submit');
    confirmer.addEventListener('click', confirmMessage2);
}
jeconfirm();
