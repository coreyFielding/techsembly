import React from "react"

// Components
import Banner from "../Components/Banner"
import Hero from "../Components/Hero"
import Navigation from "../Components/Core/Navigation"
import ProductCard from "../Components/Common/ProductCard"

// Data
import data from "./data.json"

const Home = (): React.ReactElement => {
  const { products } = data

  return (
    <>
      {/* BANNER section */}
      <Banner />

      {/* NAVIGATION section */}
      <Navigation />

      {/* HERO section */}
      <Hero />

      {/* PRODUCT section */}
      <section className="mt-2 mb-10">
        <div className="flex xs:flex-col lg:flex-row justify-center ml-10">
          {products?.map((card) => {
            return (
              <div className="md:w-1/3 h-100 mt-16 lg:first:ml-56 lg:last:mr-56">
                <ProductCard
                  heading={card.heading}
                  description={card.description}
                  price={card.price}
                  cta={card.cta}
                  fee={card.fee}
                  additionalInfo={card.additionalInfo}
                  addons={card.addons}
                  benefits={card.benefits}
                  theme={card.theme}
                />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Home
