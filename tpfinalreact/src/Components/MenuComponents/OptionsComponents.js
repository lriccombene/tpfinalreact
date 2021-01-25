import React from 'react'
import '../../style.css';
import {Link} from "react-router-dom";

const styles={
    link:{
        textDecoration: 'none',
        color: '#5BA689'
    }
}

function OptionsComponents (props) {

    return (<li ><Link to={props.option.path} style={styles.link}>{props.option.label}</Link></li>)


}
export default OptionsComponents
