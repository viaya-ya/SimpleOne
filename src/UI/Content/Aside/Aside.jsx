import React from 'react'
import "./Aside.css"
import iconBlueAside from "../../img/iconBlueAside.svg"
import star from "../../img/star.svg"
export default function Aside() {
  return (
    <aside className="aside">
    <div className="aside__element">
      <img src={iconBlueAside} alt="iconBlueAside" width="24px" height="24px" className="pointer" />
      <img src={star} alt="star" width="24px" height="24px" className="pointer" />
    </div>
  </aside>
  )
}
