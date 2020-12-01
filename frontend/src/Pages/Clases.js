import React from "react"
import Header from "../Components/Header"
import Descriptions from "../Components/Descriptions"
import Cards from "../Components/Cards"
import dataPricing from "../Utils/mocks/dataPricing"


function Clases() {

  return (
    <>
      <Header
      />
      <Descriptions
        title="Clases" 
      />
      <Cards
        data={dataPricing} />

      
    </>
  )
}

export default Clases;
