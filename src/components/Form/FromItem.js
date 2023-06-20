import React,{useState} from "react";
const FromItem = (props)=>{
    const [Name,setName]=useState('')
    const [Price,setPrice]=useState('');
    const [Dates,setDate]=useState('');
    const stateName=(e)=>{
        setName(e.target.value)
    }   
    const statePrice=(e)=>{
        setPrice(e.target.value)
    }
    const stateDate=(e)=>{
        setDate(e.target.value)
    }
    
    const submited=(e)=>{
        e.preventDefault();
        const newData={'name':Name,'price':Price,'date':new Date(Dates),'id':Math.random()}
        props.StateData(newData)
        props.stateClose()
    }
    return (
        <form className="container bg-warning rounded-4 mb-3 pb-4" onSubmit={submited}>
             <div className="mb-3 pb-3 mt-2 p-4 rounded-3">
                <div className="form-group ">
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={stateName} required></input>
                </div>
                <div className="form-group ">
                    <label>Price</label>
                    <input type="number" className="form-control" placeholder="$" onChange={statePrice} required></input>
                </div>
                <div className="form-group ">
                    <label>Date</label>
                    <input type="date" className="form-control" min="2019-01-01" max="2023-12-31" onChange={stateDate} required></input>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary text-center me-2 ps-3 pe-3" onClick={props.stateClose}>Cancel</button>
                <button type="submit" className="btn btn-primary text-center ms-2 ps-4 pe-4">ADD</button>
            </div>
        </form>
    )
}
export default FromItem;
