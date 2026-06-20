import {place} from "../components/places/script/place.js"

const btn=document.querySelector('.navbtn')
const btnLine=document.querySelector('.navebtn__line')
const mobile_menu=document.querySelector('.mobile_menu')

btn.addEventListener('click',()=>{

    btnLine.classList.toggle('active')
    mobile_menu.classList.toggle('active')

})



// llldsd




window.customElements.define("makan-ha",place)


