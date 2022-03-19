import React from 'react'
import HeroImg from './hero2.gif'
//rnfe

const heroStyle = {
  backgroundImage:`url(${HeroImg})`
}
const HomePage = () => {
  return (
    <main>
        <section className="hero-image" style={heroStyle}>
            <h1>Sugoi PC</h1>
         </section>
         <div className="index-main">
            <aside className="sale-background">
                <figure>
                    <img src="./images/sale.png" alt="sale"/>
                    <img src="./images/vengeance16gb.png" alt ="vengaence 16 gb"/>
                    <figcaption>ACT FAST 25% OFF!!!</figcaption>
                </figure>
                <p>CORSAIR Vengaence 16 GB</p>
            </aside>
            <article>
                <h2>Simply すごい。</h2>
                <img src="./images/rgb.gif" alt="rgb ram"/>
                <p id="index-bio">Founded as a way for people to find amazing deals on the web, Sugoi PC provides you with fair prices compared to competitors.</p>
            </article>
            <aside className="sale-background">
                <figure >
                    <img src="./images/sale.png" alt="sale"/>
                    <img src="./images/msi1050.png" alt ="msi 1050"/>
                    <figcaption>ACT FAST 10% OFF!!!</figcaption>
                </figure>
                <p>MSI GTX 1050 Ti</p>
            </aside>
        </div>
     </main>
  )
}

export default HomePage