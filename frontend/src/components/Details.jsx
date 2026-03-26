import { useState } from "react";
function Details(props)
{
const [showDetails,setShowDetails]=useState(false);
const{build_year, time_period, location}=props.informations;
return(
<>
<button className="btn btn-outline-primary"
onClick={()=>setShowDetails(!showDetails)}>{showDetails ? "Hide details" :
"Show details"}</button>
{showDetails &&
<ul className="list-group">
<li className="list-group-item" ><strong>build year : {build_year}</strong></li>
<li className="list-group-item"><strong>time period : {time_period}</strong></li>
<li className="list-group-item" ><strong>location :{location}</strong></li>
</ul>
}</>
)
}
export default Details;