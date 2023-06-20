import ExpressDate from "./ExpressDate";
import React, { useState } from "react";
import Card from "./Card"
function ExpressCombine(props){
    
    const Update=()=>{
        alert("Updated")
    }
    return (
        <div className="row vbg-grey m-2 rounded-3">
            <ExpressDate date={props.date}></ExpressDate>
            <div className="col-4 col-lg-7 col-xxl-8 col-xl-8 col-md-5 col-sm-5 fs-4 fw-semibold p-3 text-start mt-2 mb-2">{props.username}</div>
            <div className="col-3 col-lg-2  col-xl-2 col-sm-3 col-xs-2 fs-4 fw-semibold p-3 text-start mt-2 mb-2 m-auto btn btn-outline-info rounded-4 text-center me-4  me-md-4 m-xl-3">${props.price}</div>
            <div className="btn btn-warning" onClick={Update} >EDIT</div>
        </div>
    )
}
export default ExpressCombine;