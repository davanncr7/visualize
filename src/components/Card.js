function Card(props){
    let nameClass = props.className
    return (
        <div className={nameClass}>
            {props.children}
        </div>
    )
}
export default Card;