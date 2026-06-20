const template=document.createElement('template')
template.innerHTML=`

    <link rel="stylesheet" href="./styles/app.css">


    <div class="destenation__place_banner">

      <img src="" alt="" class="destenation__place_img">
      <div class="destenation__place_heart">
<svg class="destenation__place_svg" xmlns="http://www.w3.org/2000/svg" width="24.037" height="24.037" viewBox="0 0 24.037 24.037">
  <path id="Path_955" data-name="Path 955" d="M11.822,16.82v.029H0V5.743a5.914,5.914,0,0,1,11.761-.694,5.912,5.912,0,0,1,.061,11.772Z" transform="translate(0 12.123) rotate(-45)" stroke="#E76F51"></path>
</svg>
      </div>
<div class="destenation__place_price">
  <span>$36/night</span>
</div>
    </div>
<h3 class="destenation__place_title">The Hermitage Cabin</h3>
<p class="destenation__place_caption">Book unique camping experiences on over 300,000 campsites.</p>
<a href="#" class="destenation__place_btn btn">Read More</a>
  `


class place extends HTMLElement{

constructor(){

super()

this.attachShadow({mode:"open"})
this.shadowRoot.appendChild(template.content.cloneNode(true))

}

like(){

const hearts=this.shadowRoot.querySelector('.destenation__place_svg')
  hearts.addEventListener('click',()=>{
        hearts.classList.toggle('active')
});

}

connectedCallback(){

let img=this.getAttribute('img')
this.shadowRoot.querySelector('.destenation__place_img').src=img
let title=this.getAttribute('title')
this.shadowRoot.querySelector('h3').innerHTML=title
let span=this.getAttribute('price')
this.shadowRoot.querySelector('span').innerHTML=span
this.like()
}


observedAttributes(){return['img','title','price']}
 

}
export{place}