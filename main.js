//********************************** EMAIL CONFIRMATION SECTION ****************************************

//----------***-------   Send Button  ---------***------------

function bgColorSubmit(bsbtn){
    bsbtn.target.style.backgroundColor = 'lightgreen'
    bsbtn.target.style.color ='green'
    bsbtn.target.style.fontWeight ='bold'
    bsbtn.target.style.borderRadius ='10px'
    bsbtn.target.style.fontSize ='25px'
}
function cancelBgColor(bsbtn){
    bsbtn.target.style.backgroundColor ='white'
    bsbtn.target.style.color ='black'
    bsbtn.target.style.fontWeight ='bold'
    bsbtn.target.style.borderRadius ='1px'
    bsbtn.target.style.fontSize ='15px'
}

function submitBtn(){
    let btn = document.querySelector('#submit')
    btn.addEventListener('mouseover', bgColorSubmit)
    btn.addEventListener('mouseleave', cancelBgColor)
}
submitBtn()


    //          -----------------   Message Confirmation  -------------

function confirmMessage(){
    const list2 = document.getElementById("fill");
    list2.innerHTML = 'THANKS FOR CONTACTING US TODAY! WE WILL RESPOND WITHIN 2 BUSINESS DAYS.'
    list2.style.color = 'white'
    list2.style.backgroundColor = 'gray'
    list2.style.fontSize = '20px'
    list2.style.fontFamily = 'cursive'
    list2.style.width = '400px'
}

function jeconfirm(){
    let confirmer = document.getElementById('submit');
    confirmer.addEventListener('click', confirmMessage);
}
jeconfirm();


//--------------*   Reset Button Section  *--------------

function bgColorReset(brbtn){
    brbtn.target.style.backgroundColor = 'orange'
    brbtn.target.style.color ='red'
    brbtn.target.style.fontWeight ='bold'
    brbtn.target.style.borderRadius ='10px'
    brbtn.target.style.fontSize ='25px'
}
function cancelResetBgColor(brbtn){
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
    btn.addEventListener('mouseleave', cancelResetBgColor)
    btn.addEventListener('click', handleDelete)
}
resetBtn()
