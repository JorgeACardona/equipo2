import React from "react";
import "../Style/Class.css"

function Descriptions (props) {
    return (
        <div  class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4 font-weight-bold">{props.title}</h1>
      </div>
    )
}

export default Descriptions;