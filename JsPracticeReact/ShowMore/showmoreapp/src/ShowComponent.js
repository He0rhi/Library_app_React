import { useRef, useState } from "react";

function ShowMore({text}){
    const match = text.match(/[^.!?]*[.!?]/)[0];
const [buttonState,setButtonState] = useState("Показать больше");
const [currentText,setCurrentText] = useState(match);


function changeButtonState(){
if(buttonState==="Показать больше"){

    setButtonState("Скрыть");
    setCurrentText(text);
}
else{
    setButtonState("Показать больше");
    setCurrentText(match);
}
    
}
return(
    <div>
<button type="button"  onClick={changeButtonState}>{buttonState}</button>
<textarea  value={currentText}></textarea>
    </div>
);

}

export default ShowMore;