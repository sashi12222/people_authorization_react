import React from "react";
import Display from "./Display";
const People=()=>{
    const Peoples=[
        {id:1,name:"Sashi",isAuthenticate:false},
        {id:2,name:"Sunaina",isAuthenticate:true},
        {id:3,name:"Nishma",isAuthenticate:true}
    ]
    return(
        <>
        {Peoples.map((object)=>(
            <Display peopleName={object.name} key={object.id}peopleAuthenticate={object.isAuthenticate}></Display>
        ))}
        </>
    )
    
}
export default People;