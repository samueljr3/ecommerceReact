import React from 'react'
import HeroImg from './hero2.gif'
import Slideshow from './slideshow';

const heroStyle = {
  backgroundImage:`url(${HeroImg})`
}

class HomePage extends React.Component{

  render(){
    let set1 = [
      "./images/msi1050.png",
      "./images/rams/gskillRGB.png",
      "./images/gpu/gigabyte3070.png",
      "msi1050",
      "gskillRGB",
      "gigabyte3070"
    ];
  
    let set2 = [
      "./images/mobo/gigabyteZ690.png",
      "./images/rams/vengRGB.png",
      "./images/gpu/sapphireRX6900.png",
      "gigabyteZ690",
      "vengRGB",
      "sapphireRX6900"
    ]
    return(
    <main>
      
        <section className="hero-image" style={heroStyle}>
            <h1>Sugoi PC</h1>
         </section>
         <div className="index-main">
            <aside className="sale-background">
              <img src="./images/sale.png" alt="sale"/>
              <Slideshow data = {set1}/>
              <p>Limited Supply!!!</p>
            </aside>
            <article>
                <h2>Simply すごい。</h2>
                <img src="./images/rgb.gif" alt="rgb ram"/>
                <p id="index-bio">Founded as a way for people to find amazing deals on the web, Sugoi PC provides you with fair prices compared to competitors.</p>
            </article>
            <aside className="sale-background">
              <img src="./images/sale.png" alt="sale"/>
              <Slideshow data = {set2}/>
              <p>Limited Supply!!!</p>
            </aside>
        </div>
        
     </main>
     
    )
  }
  
}

export default HomePage