import { useEffect, useState } from "react";
import axios from "axios";

const Translator = () =>{
    const [inc, setInc] = useState<number>(0);

    useEffect(() => {
        console.log(`data loaded when ${inc} time`)
    }, [inc])

  
    const increment =()=>{
        setInc(inc + 1)
    }

    return (
        <>
        <div>
            <button onClick={increment}> Button </button>
        </div>
        </>
    )
}

export default Translator;
