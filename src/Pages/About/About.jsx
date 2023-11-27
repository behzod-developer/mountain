import React from 'react'
import card1 from "../../assets/card1.png"
import "./About.css"

function About() {
    return (
        <section className='about'>
            <div className="container">
                <div className="parent">
                    <h1>Поможем вам выгодно купить и привезти автомобиль в любую точку России</h1>
                    <p>Предлагаем Вам купить автомобиль дешевле и лучше, но за тот же бюджет</p>
                    <button>Оставить заявку</button>
                    <div className="cards">
                        <div className="card">
                            <h2>С пробегом</h2>
                            <span>Предлагаем купить автомобиль дешевле до 60%, от рыночной цены на Авито и Авто.ру</span>
                            <img src={card1} alt="" />
                        </div>
                        <div className="card">
                            <h2>С пробегом</h2>
                            <span>Предлагаем купить автомобиль дешевле до 60%, от рыночной цены на Авито и Авто.ру</span>
                            <img src={card1} alt="" />
                        </div>
                        <div className="card">
                            <h2>С пробегом</h2>
                            <span>Предлагаем купить автомобиль дешевле до 60%, от рыночной цены на Авито и Авто.ру</span>
                            <img src={card1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About