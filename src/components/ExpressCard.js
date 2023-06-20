import Card from "./Card";
import ExpressFilter from "./ExpressFilter";
import React from "react";
import ExpressList from "./ExpressList";
import ExpressChart from "./ExpressChart";
function ExpressCard(props) {
  const [Year,setYear]=React.useState(2023)
  const stateFilterYear = (currentYear) =>{
      setYear(currentYear)
  }
  
  const afterFilter=props.DATAS.filter((e)=>{
    return e.date.getFullYear().toString() === Year.toString()
  })
  
  return (
    <Card className="rounded-4 bg-dark mt-1 p-2 mb-3">
      <ExpressFilter StateFilterYear={stateFilterYear}/>
      <ExpressChart Datas={afterFilter}/>
      <ExpressList items={afterFilter}/>
    </Card>
  );
}
export default ExpressCard;
