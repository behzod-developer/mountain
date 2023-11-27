import React from 'react'
import "./Home.css"
import Home1 from "../../assets/home1.png"

function Home() {
  return (
    <section className='home'>
      <div className="container">
        <div className="parent">
          <div className="child child_1">
            <h1>Купите автомобиль дешевле на 60%*</h1>
            <p>Привезем автомобиль под ключ со всеми документами. Подбор автомобиля под любой запрос  БЕСПЛАТНО  </p>
            <button>Оставить заявку</button>
          </div>
          <div className="child child_2">
            <img src={Home1} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home