import ExpressCard from './components/ExpressCard'
import ExpressForm from './components/Form/ExpressForm'
import React from 'react'
const DATAS = [
  {'name': 'John','price':220,'date':new Date(2023,3,23) ,id:'e1'},
  {'name': 'Messi','price':430,'date':new Date(2020,4,24),id:'e2'},
  {'name': 'Ronaldo','price':360,'date':new Date(2021,5,25),id:'e3'},
  {'name': 'Davann','price':590,'date':new Date(2020,6,26),id:'e4'},
  {'name': 'Trump','price':250,'date':new Date(2022,7,27),id:'e5'}
]
function App(){
  const [Data,setData]=React.useState(DATAS)
  const stateData=(newData)=>{
    setData((defaultData)=>{
      return [newData,...defaultData]
    })
  }
  return(  
    <div className="">
          <ExpressForm StateData={stateData}/>
          <ExpressCard DATAS={Data}></ExpressCard>
    </div>
  );
}
export default App;