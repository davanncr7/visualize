import React from "react";
const ChartBar=props=>{
    let high=(props.value/props.maxValue)*100
    return (
        <div className="col-1 collect-graph" style={{height:140}}>
            <div className="collect-graph">
                <div className="text-danger" style={{height:10}}></div>
                <div className="combine-graph" style={{height:100,width:15}}>
                    <div className="chart-graph1" style={{height:100-high,width:20}}></div>
                    <div className="chart-graph2" style={{height:high,width:20}}></div>                         
                </div>
           
            </div>
            <div className="chart-label text-dark vfs-2 fw-bold collect-text">
                {props.label}
            </div>
        </div>
    )
}
export default ChartBar;