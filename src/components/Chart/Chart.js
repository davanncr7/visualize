import ChartBar from './ChartBar';
const Chart=props=>{
    let collectValue=props.Datas.map(data=>data.price)
    let maxValue=Math.max(...collectValue)
    const existanceValue=[
        {'month':'Jan','value':0},
        {'month':'Feb','value':0},
        {'month':'Mar','value':0},
        {'month':'Apr','value':0},
        {'month':'May','value':0},
        {'month':'Jun','value':0},
        {'month':'Jul','value':0},
        {'month':'Aug','value':0},
        {'month':'Sep','value':0},
        {'month':'Oct','value':0},
        {'month':'Nov','value':0},
        {'month':'Dec','value':0}
    ]
    for(let val of props.Datas){
        existanceValue[val.date.getMonth()].value+=val.price
    }

    return (
    <div className='row  m-1 mb-5 bg-dark final-graph rounded-4'>
        {
            existanceValue.map(data=>{
                return <ChartBar label={data.month} value={data.value} maxValue={maxValue} key={data.month}/>
                //return <div className='col-1 text-primary'>{data.month}</div>
            })

        }

    </div>
    )
}
export default Chart;