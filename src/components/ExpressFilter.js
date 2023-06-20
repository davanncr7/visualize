const ExpressFilter=(props)=>{
    const filterChange = (e)=>{
        props.StateFilterYear(e.target.value)
    }
    return (
        <div className="mt-3 m-2 mb-4">
            <select className="form-select" aria-label=".form-select-lg example" onChange={filterChange}>
                <option value={2023}>2023</option>
                <option value={2022}>2022</option>
                <option value={2021}>2021</option>
                <option value={2020} >2020</option>
                <option value={2019}>2019</option>
            </select>
        </div>
    )
}
export default ExpressFilter;