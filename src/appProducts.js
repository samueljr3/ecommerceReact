import React from 'react'
import productList from './components/Products/products.json'

const ramList = productList.RAM;
const moboList = productList.Motherboards;
const gpuList = productList.GraphicsCards;

const Products = () => {
  return (

    <main id="product-main">
      <h2 className="product-title">RAM</h2>
      <div className="product-grid">
        {
          ramList.map((card) => {
            return(
              <div className="product-card">
                <figure>
                  <img src={card.image} alt={card.name}/>
                  <figcaption>{card.name} - ${card.price}</figcaption>
                </figure>
                <p>{card.desc}</p>
                <button className="product-button">Buy Now</button>
              </div>
            )
          })
        }
      </div>
      <h2 className="product-title">Motherboards</h2>
      <div className="product-grid">
      {
          moboList.map((card) => {
            return(
              <div className="product-card">
                <figure>
                  <img src={card.image} alt={card.name}/>
                  <figcaption>{card.name} - ${card.price}</figcaption>
                </figure>
                <p>{card.desc}</p>
                <button className="product-button">Buy Now</button>
              </div>
            )
          })
        }
        </div>
        <h2 className="product-title">Graphic Cards</h2>
        <div className="product-grid">
        {
          gpuList.map((card) => {
            return(
              <div className="product-card">
                <figure>
                  <img src={card.image} alt={card.name}/>
                  <figcaption>{card.name} - ${card.price}</figcaption>
                </figure>
                <p>{card.desc}</p>
                <button className="product-button">Buy Now</button>
              </div>
            )
          })
        }
        </div>
      
      
    </main>

//     <main id="product-main">
//     <h2 class="product-title">RAM</h2>
//     <div class="product-grid">
//         <div class="product-card">
//            <figure>
//                <img src="./images/vengeance16gb.png"/>
//                <figcaption>CORSAIR Vengaence 16 GB - $64.99</figcaption>
//            </figure>
//            <p>Blazing fast RAM by CORSAIR is sure to be powerful for majority of needs.</p>
//            <button class="product-button">Buy Now</button>
//        </div>
//        <div class="product-card">
//            <figure>
//                <img src="./images/vengeance16gb.png" alt="gskillRGB"/>
//                <figcaption>G.SKILL Trident Z RGB - $87.99</figcaption>
//            </figure>
//            <p>Combining striking LED lighting with awesome performance, the TridentZ RGB is a great choice for building a modern powerhouse.</p>
//            <button class="product-button">Buy Now</button>
//        </div>
//        <div class="product-card">
//            <figure>
//                <img src="./images/vengeance16gb.png" alt="vengRGB"/>
//                <figcaption>CORSAIR Vengeance RGB Pro 32GB $128.98</figcaption>
//            </figure>
//            <p>Blazing fast RAM by CORSAIR this time in RGB for maximum aesthetic.</p>
//            <button class="product-button">Buy Now</button>
//        </div>
//        <div class ="product-card">
//            <figure>
//                <img src="./images/vengeance16gb.png" alt="ripjaw64"/>
//                <figcaption>G.SKILL Ripjaws V Series 64GB - $274.99</figcaption>
//            </figure>
//            <p>Great for a complete overkill build. 64GB is sure to tackle any problem.</p>
//            <button class="product-button">Buy Now</button>
//        </div>
//     </div>
//     <h2 class="product-title">Motherboards</h2>
//     <div class="product-grid">
//         <div class="product-card">
//            <figure>
//                <img src="./images/vengeance16gb.png" alt="ASUS TUF B550"/>
//                <figcaption>ASUS TUF GAMING B550M - $206.99</figcaption>
//            </figure>
//            <p>This motherboard is AMD AM4 ready. Your Ryzen 5000 series CPUs, be blazing fast.</p>
//            <button class="product-button">Buy Now</button>
//        </div>
//        <div class="product-card">
//            <figure>
//                <img src="./images/vengeance16gb.png" alt="gigabyteX570"/>
//                <figcaption>GIGABYTE X570 AORUS - $225.89</figcaption>
//            </figure>
//            <p>X570 AORUS motherboards provide an all next-generation network and storage to keep you up to speed.</p>
//            <button class="product-button">Buy Now</button>
//        </div>
//        <div class="product-card">
//            <figure>
//                <img src="./images/vengeance16gb.png" alt="msiTOMAHAWK"/>
//                <figcaption>MSI MAG B550 TOMAHAWK - $187.99</figcaption>
//            </figure>
//            <p>Well known for reliable and essential equipment, MSI introduces its well priced AM4 motherboard.</p>
//            <button class="product-button">Buy Now</button>
//        </div>
//        <div class="product-card">
//            <figure>
//                <img src="./images/vengeance16gb.png" alt="gigabyteZ690"/>
//                <figcaption>GIGABYTE Z690 AORUS MASTER - $469.99</figcaption>
//            </figure>
//            <p>GIGABYTE brings us a beefy motherboard ready for the latest and most powerful INTEL CPUs.</p>
//            <button class="product-button">Buy Now</button>
//        </div>
//     </div>

//     <h2 class="product-title">Graphic Cards</h2>
//     <div class="product-grid">
//         <div class="product-card">
//            <figure>
//                <img src="./images/vengeance16gb.png" alt="gigabyte 3070"/>
//                <figcaption>GIGABYTE AORUS RTX 3070 - $859.99</figcaption>
//            </figure>
//            <p>Featuring a 3 fan design, GIGABYTE brings us the high end 3070 with chilling temps.</p>
//            <button class="product-button">Buy Now</button>
//        </div>
//        <div class="product-card">
//            <figure>
//                <img src="./images/vengeance16gb.png" alt="msi 1050"/>
//                <figcaption>MSI Gaming GTX 1050 Ti - $338.99</figcaption>
//            </figure>
//            <p>MSI brings us the budget 1050 Ti for those wanting to enter the hobby.</p>
//            <button class="product-button">Buy Now</button>
//        </div>
//        <div class ="product-card">
//            <figure>
//                <img src="./images/vengeance16gb.png" alt="Sapphire RX6600"/>
//                <figcaption>Sapphire Radeon RX 6600 - $709.67</figcaption>
//            </figure>
//            <p>AMD finest graphics card alongside Sapphire's low noise coolers.</p>
//            <button class="product-button">Buy Now</button>
//        </div>
//        <div class="product-card">
//            <figure>
//                <img src="./images/vengeance16gb.png" alt="gigabyteZ690"/>
//                <figcaption>SAPPHIRE Radeon RX 6900 XT - $1,899.99</figcaption>
//            </figure>
//            <p>For the absolute elitist. Nothing can beat this performance. Say goodbye to your wallet.</p>
//            <button class="product-button">Buy Now</button>
//        </div>
//     </div>
// </main>
  )
}

export default Products