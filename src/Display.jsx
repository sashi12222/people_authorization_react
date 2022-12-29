import React from "react";
const Display=({peopleName,peopleAuthenticate})=>{
    return(
        <>
        <ul>
            {peopleAuthenticate ? (
                <li>
                    {peopleName}
                </li>
            ):(<li>{peopleName} not authorized</li>)}
        </ul>
        </>
    )
}

export default Display;