import FromItem  from "./FromItem";
import React from "react";
function ExpressForm(props){
    const [isOpen,setOpen]=React.useState(false)
    const stateOpen=()=>{
        setOpen(true)
    }
    const stateClose=()=>{
        setOpen(false)
    }
    if(isOpen){
        return (
            <FromItem StateData={props.StateData} stateClose={stateClose}/>
        )
    }else{
        return <div className="btn btn-primary container text-center mt-3 mb-3" onClick={stateOpen}>ADD</div>    
    }


}
export default ExpressForm;