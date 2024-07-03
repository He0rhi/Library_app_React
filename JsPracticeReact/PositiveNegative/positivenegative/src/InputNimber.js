import { Form } from "react-router-dom";

function InputNumber({checkNumber}){
const handleChange = (event)=>
    {
        let num = parseInt(event.target.value);
        checkNumber(num);
    };
    return(<div>
       <input type="number" onChange={handleChange}></input>
    </div>);
}
export default InputNumber;