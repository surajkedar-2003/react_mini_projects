import { useState } from "react";

function BmiBox() {

    const [weight, setWeight] = useState("");
    const [height, setheight] = useState("");
    const [bmi, setbmi] = useState();
    const [msg, setmsg] = useState("");

    function calculate(e){
        e.preventDefault();

        if(weight===0 || height === 0){
            alert("Enter the values");
            return;
        }

        let h = height/100;
        
        let bmiValue = weight/(h*h)
        setbmi(Math.floor(bmiValue));

        
        if(bmiValue<16){
            setmsg("Severe Thinness");
        }
        else if(bmiValue>=16 && bmiValue<=17){
            setmsg("Moderate Thinness");
        }
        else if(bmiValue>17 && bmiValue<=18.5){
            setmsg("Mild Thinness");
        }
        else if(bmiValue>18.5 && bmiValue<=25){
            setmsg("Normal");
        }
        else if(bmiValue>25 && bmiValue<=30){
            setmsg("Overweight");
        }
        else if(bmiValue>30 && bmiValue <=35){
            setmsg("Obese Class I");
        }
        else if(bmiValue>35 && bmiValue <=40){
            setmsg("Obese Class II");
        }
        else if(bmiValue>40){
            setmsg("Obese Class III");
        }else{
            setmsg("");
        }

        setWeight("");
        setheight("");
    }

    function weightHandler(e){
        let w = e.target.value;
        setWeight(w);
        
    }
    function heightHandler(e){
        let h = e.target.value;
        setheight(h); 
    }

    function resetHandler(){
        setWeight("");
        setheight("");
        setbmi(null);
        setmsg("");
    }
    
  return (
    <>
        <div className="w-[400px] min-h-[400px] border p-4 shadow-xl">
            <h1 className="text-2xl font-semibold mx-[100px]">BMI Calculator</h1>
            <form className="flex flex-col gap-2" onSubmit={calculate}>
                <label htmlFor="weight" className="font-semibold">Weight(Kg)</label>
                <input type="number" id="weight" placeholder="Enter Your Weight" value={weight} onChange={weightHandler} className="border py-2 px-6 text-[16px] outline-none"/>
                <label htmlFor="height" className="font-semibold">Height(cm)</label>
                <input type="number" id="height" placeholder="Enter Your Height" value={height} className="border py-2 px-6 text-[16px] outline-none" onChange={heightHandler}/>
                <input type="submit" value="submit" className="py-2 px-6 mt-7 text-[16px] font-semibold bg-blue-700 text-white cursor-pointer"/>
                <button className="py-2 px-6 my-4 text-[16px] font-semibold border border-slate-600 text-slate-600 hover:bg-blue-700 hover:border-none hover:text-white" onClick={resetHandler} >Reset</button>
            </form>
            <h3 className="text-xl font-semibold mx-[100px]" >Your BMI : {bmi}</h3>
            <p className="text-md  mx-[100px]">{msg}</p>
        </div>
    </>
  )
}

export default BmiBox