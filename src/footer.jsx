import React from "react";
import "./styles.css";
function Footer(){
    return(
        <div className="footer">
            <h5><i class="fa-sharp fa-regular fa-copyright"></i>&nbsp; {new Date().getFullYear()}</h5>
        </div>
    )
}
export default Footer;