import React from "react";
import "./styles.css";
function Footer(){
    return(
        <div className="footer" style={{ textAlign: 'center' }}>
            <h5 className="copyright"><i className="fa-sharp fa-regular fa-copyright"></i>&nbsp; {new Date().getFullYear()}</h5>
        </div>
    )
}
export default Footer;