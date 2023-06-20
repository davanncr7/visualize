// import './output.css'
function ExpressDate(props){
    const dt=props.date;
    const month=dt.toLocaleString('en-US',{month:'long'})
    const year=dt.getFullYear();
    const day=dt.toLocaleString('en-US',{day:'2-digit'})
    return (
        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xs-2 p-2 bg-black text-light rounded-4 text-center mt-2 mb-2 m-4">
            <div className=' vfs-2 fw-bold'>{month}</div>
            <div className=' vfs-1 fw-semibold'>{year}</div>
            <div className=' vfs-6 fw-bold fw-bolder'>{day}</div>
        </div>
    )
    //return React.createElement('div',{className: 'container'},React.createElement('div',{className:'text-primary'}),'Month')
}
export default ExpressDate;