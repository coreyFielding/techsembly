import React from "react"

// Components
import Pill from "../Core/Pill"

const Banner = (): React.ReactElement => {
  return (
    <div className="h-12 sm:py-0 w-100 justify-between bg-dark">
      <div className="flex justify-center xs:px-5">
        <Pill colour="purple">
          <span className="text-2xs font-semibold leading-0">Announcement</span>
        </Pill>
        <span className="text-white text-2xs mt-4 ml-4">
          Try Techsembly today for a 12 day free trial period. No Additional
          costs/Unexpected fees
        </span>
      </div>
    </div>
  )
}

export default Banner
