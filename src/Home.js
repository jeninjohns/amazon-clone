import React from 'react'
import './Home.css'
import Products from './Products'

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='banner'
      />

      {/* Products id, title, price, rating, image */}
      <div className='home__row'>
        <Products
          id='12321341'
          title='A Promised Land Hardcover – November 17, 2020'
          price={23.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._AC_SX184_.jpg'
        />
        <Products
          id='12321341'
          title='Becoming Hardcover – November 13, 2018'
          price={10.69}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/414JfiBCutL._AC_SX184_.jpg'
        />
      </div>

      <div className='home__row'>
        <Products
          id='12321341'
          title='Concept Kart™ Tranya H10 Hybrid Digital Active Noise Cancelling Wireless Headphones, Bluetooth Over Ear Headphones with Deep Bass, aptX HD'
          price={94.86}
          rating={5}
          image='https://m.media-amazon.com/images/I/610KNrM+UqL._AC_UY218_.jpg'
        />
        <Products
          id='12321341'
          title='HP Pavilion Gaming DK0268TX  (Core i5-9300H/8GB/512GB SSD/4GB NVIDIA GeForce GTX 1650 Graphics)'
          price={863.37}
          rating={5}
          image='https://m.media-amazon.com/images/I/81pezrPSgOL._AC_UY218_.jpg'
        />
        <Products
          id='12321341'
          title='Lenovo IdeaCentre G5 Gaming Desktop (10th Gen Intel Core i7/8GB/1TB HDD + 256GB SSD/NVIDIA RTX 2060 6GB Graphics)'
          price={1300.87}
          rating={5}
          image='https://m.media-amazon.com/images/I/51+wMKOcDOL._AC_UY218_.jpg'
        />
      </div>
      <div className='home__row'>
        <Products
          id='12321341'
          title='Acer Predator CG437K 42.5 Inch 4K UHD 3840 X 2160 Resolution Gaming Monitor, G-Sync Compatible, VESA Certified DisplayHDR 1000, 144Hz, 1MS VRB'
          price={1246.66}
          rating={5}
          image='https://m.media-amazon.com/images/I/712CtWTuqnL._AC_UY218_.jpg'
        />
      </div>

      {/* Products */}
    </div>
  )
}

export default Home
