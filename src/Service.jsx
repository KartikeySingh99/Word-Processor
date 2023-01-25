import React from "react";
import Navbar from "./Navbar";
const Service=()=>{
    return(
        <>
            <Navbar></Navbar>
            <h2>This Is Services Page</h2>
            <ul className="services">
                <li>Convert Words To Upper Case</li>
                <li>Convert Words To Lower Case</li>
                <li>Auto-detect Number Of Characters And Words</li>
                <li>Convert Words To Upper Case</li>
            </ul>
        </>
    )
}

export default Service;