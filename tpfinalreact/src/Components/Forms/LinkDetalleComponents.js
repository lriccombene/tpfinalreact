import React from 'react';
import {Link} from "react-router-dom";
function LinkDetalleComponents(props){
    return(

        <Link  to={props.tostring + props.product._id} className="button"  onClick={props.click} >{props.value}</Link>

    )
}

export default LinkDetalleComponents