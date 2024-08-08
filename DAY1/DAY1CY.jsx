import React from "react";


function React(){

    const checkFunction = ()=>{
        const name1 = "Praveen" ;
        const name2 = "Mohan" ;

        
        const name1Obj = {n1:"Praveen"};
        const name2Obj = {n2:"Mohan"};

        
        console.log(name1 === name1Obj.n1);
        console.log(name2 === name2Obj.n2);

    }


    return(
        <>
            <div>
                <button onClick={checkFunction}>CHECK</button>
            </div>
        </>

    )
}

export default React;
