const btn=document.querySelector('.navbtn')
const btnLine=document.querySelector('.navebtn__line')
const mobile_menu=document.querySelector('.mobile_menu')

const hearts=document.querySelectorAll('.destenation__place_svg')

btn.addEventListener('click',()=>{

    btnLine.classList.toggle('active')
    mobile_menu.classList.toggle('active')

})

hearts.forEach(like => {
    like.addEventListener('click',()=>{
        like.classList.toggle('active')
        
        
        
    })
    
});