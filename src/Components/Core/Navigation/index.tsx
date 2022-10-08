import React from "react"

// Images
import logo from "./Logo.png"

// Navigation component
const Navigation = (): React.ReactElement => {
  const links = ["Products", "Solutions", "Company", "Resources", "Pricing"]

  return (
    <div className="w-full h-8 bg-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.20)]">
      <div className="container my-4">
        <div className="w-1/2 flex">
          <div className="w-1/4 mx-10">
            <img src={logo} />
          </div>
          <ul className="flex text-xs">
            {links.map((link) => {
              return (
                <li className="mx-4">
                  <a href="#">{link}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Navigation
