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


  document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        confirmBookingText(`Name: ${e.target.fname.value}`);
        confirmBookingText(`Email: ${e.target.email.value}`);
        confirmBookingText(`Message: ${e.target.message.value}`);
        // confirmBookingText(`Guest(s) : ${e.target.adult.value} adult(s)`)
        // confirmBookingText(`And : ${e.target.child.value} kid(s)`)
        // confirmBookingText(`Room Size : ${e.target.typeRoom.value}`)
        // confirmBookingText(`Check-in Date : ${e.target.comeIn.value}`)
        // confirmBookingText(`Check-out Date : ${e.target.goOut.value}`)
        // confirmationHeading(e.target.value)
        bookingConfirmationBtn(e.target.value)   
        // form.reset();
    })
})

//*****************  BOOKING CONFIRMATION SECTION  *****************
function confirmationHeading(){
    let h3 = document.createElement('h2')
    h3.textContent = 'EMAIL CONFIRMATION'
    h3.style.textDecoration = 'underline'
    h3.style.padding = '10px'
    h3.style.marginTop = '5px'
    h3.style.color = 'blue'
    h3.style.backgroundColor = 'yellow'
    h3.style.width = '340px'
    document.querySelector('#h3').appendChild(h3)
}
confirmationHeading()

//-------  CONFIRMATION TEXT  ---------
function confirmBookingText(text){    
    let p = document.createElement('p')
    p.textContent = text 
    p.style.fontWeight='bold'  
    p.style.fontSize='25px'
    p.style.backgroundColor = 'lightgray'
    document.querySelector('#confirmation').appendChild(p)
}

//-----  CONFIRM & ResetAll SECTION  ----
function bookingConfirmationBtn(){
    let btn = document.createElement('button')
    btn.textContent = 'Confirm'
    btn.style.color ='green'
    btn.style.fontWeight ='bold'
    btn.style.fontSize ='25px'
    btn.style.borderRadius ='10px'
    btn.addEventListener('mouseover', bgColorSubmit)
    btn.addEventListener('mouseleave', alertNotSubmit)
    btn.addEventListener('click', confirmMessage)

    //.... RESET ALL BUTTON ....
    let resetAllBtn = document.createElement('button')
    resetAllBtn.textContent = 'Reset All'
    resetAllBtn.style.fontSize = '20px'
    resetAllBtn.style.borderRadius ='7px'
    resetAllBtn.addEventListener('mousemove', bgColorReset)
    resetAllBtn.addEventListener('mouseleave', alertNoAction)
    resetAllBtn.addEventListener('click', handleDelete2)
    
    document.querySelector('#confirmation').appendChild(btn)
    document.querySelector('#confirmation').appendChild(resetAllBtn)
}

function confirmMessage(){
    const list2 = document.getElementById("confirmation");
    list2.innerHTML = 'THANKS! WE WILL RESPOND WITHIN 2 BUSINESS DAYS.'
    list2.style.color = 'green'
    list2.style.backgroundColor = 'cyan'
    list2.style.fontSize = '30px'
    list2.style.fontFamily = 'cursive'
    list2.style.width = '300px'
    
}

function handleDelete2(){
    const list = document.getElementById("confirmation");

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

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


function resetAll(){

}

function submitBtn(){
    let btn = document.querySelector('#submit')
    btn.addEventListener('mouseover', bgColorSubmit)
    btn.addEventListener('mouseleave', alertNotSubmit)
}
submitBtn()

//******************   RESET BUTTON IN BOOKING A ROOM SECTION  *******************
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
