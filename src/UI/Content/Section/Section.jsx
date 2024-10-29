import React from 'react'
import "./Section.css"
import pin from "../../img/no-pin.svg"
export default function Section() {
  return (
    <section className="section">
    <div className="section__header">
      <input type="search" className="section__search search" placeholder="Поиск по меню" />
      <img src={pin} alt="no-pin" className="iconBorder" />
    </div>
    <div className="section__body">
      <ul className="section__list">
        <li className="section__item">Моя работа</li>
        <li className="section__item">Структура портала</li>
        <li className="section__item">Личное расписание</li>
        <li className="section__item">Отсутствие на рабочем месте</li>
        <li className="section__item">Портфель услуг</li>
        <li className="section__item">Дашборды</li>
        <li className="section__item">Доски задач</li>
        <li className="section__item">Обращения</li>
        <li className="section__item">События</li>
        <li className="section__item">Инциденты</li>
        <li className="section__item">Проблемы</li>
        <li className="section__item">Настройка каталогов</li>
        <li className="section__item">Запросы на обслуживание</li>
        <li className="section__item">Запросы на изменение</li>
        <li className="section__item">Управление конфигурациями</li>
        <li className="section__item">Управление уровнем услуг</li>
        <li className="section__item">Настройка соответствий</li>
      </ul>
    </div>
  </section>
  )
}
