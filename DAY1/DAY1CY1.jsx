import React from "react";
function React()
{
    const name1="Praveen";
    const name2="Mohan";
    const object1={name:"Praveen"};
    const object2={name:"Mohan"};
    console.log(name1===name2);
    console.log(object1===object2);
    console.log(object1===name1);
    console.log(object2===name2);
    alert("Check the console!");
}
const Check = () => {
    return(
        <div>
            <button onClick={compare}>name1</button>
        </div>
    );
};
export default React;
