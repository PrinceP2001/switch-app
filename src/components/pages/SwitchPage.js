import React,{useState} from "react";
import './SwitchPage.css'

const SwitchPage=()=>{
    var [bulb,setBulb]=useState("On");
    var [bulb2,setBulb2]=useState("On");

    const setSwitchName1=()=>{
        if(bulb==="On"){
        setBulb("Off");
          
        }
        if(bulb==="Off"){
            setBulb("On");
        }
        SetColor();
    }

    const setSwitchName2=()=>{
        if(bulb2==="On"){
        setBulb2("Off");
          
        }
        if(bulb2==="Off"){
            setBulb2("On");
        }
        SetColor2();
    }

    var b=document.getElementById('b');
    var  SetColor=()=>{
        if(bulb==="Off"){
            b.style.backgroundColor="grey";
         }
         else{
              b.style.backgroundColor="yellow";
         }
    }
   
    var b2=document.getElementById('b2');
    var  SetColor2=()=>{
        if(bulb2==="Off"){
            b2.style.backgroundColor="grey";
         }
         else{
              b2.style.backgroundColor="yellow";
         }
    }

    return(
        <div>
            <table border="1">
                <tr>
                    <td>
                    <button className="switch1" onClick={setSwitchName1}>{bulb}</button>
                    </td>
                    <td>
                    <button className="switch2" onClick={setSwitchName2}>{bulb2}</button>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button id="b" className="color-bulb"></button>
                    </td>
                    <td>
                    <button id="b2" className="color-bulb"></button>
                    </td>
                </tr>
            </table>
           
          
           
           
        </div>
    )
}

export default SwitchPage;