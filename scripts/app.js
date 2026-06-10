let navbtn=document.querySelector('.navbtn')
let navBar=document.querySelector('.nav-line')
let mobileMENU=document.querySelector('.mobile-menu')
navbtn.addEventListener('click',function(){
    mobileMENU.classList.toggle('open-mobile-menu')
navBar.classList.toggle('open_nav')})




const likeBtn=document.querySelectorAll('.like')
console.log(likeBtn);
likeBtn.forEach((item)=>{

item.addEventListener('click',()=>{

    
    item.classList.toggle('like--modifaier')
    
})



})