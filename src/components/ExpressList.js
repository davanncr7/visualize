import ExpressCombine from "./ExpressCombine";

const ExpressList=(props)=>{
    if(props.items.length===0){
        return <p className="text-light text-center fw-semibold">No Item not yet here!😆</p>
    }
    return props.items.map(dt=><ExpressCombine username={dt.name} price={dt.price} date={dt.date} key={dt.id}/>)
}
export default ExpressList;