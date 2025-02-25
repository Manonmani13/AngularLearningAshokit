import { create } from "@mui/material/styles/createTransitions";

let countValue=0;

function incrementCounter(){
    countValue++;
}

function getCounterValue(){
    return countValue;
}

//closurese

function createCounter{
    let counterValue=0;

    return{
        increment: function(){
            counterValue++;
        },
        getValue: function(){
            return counterValue;
        }
    }
}

const counter1=createCounter();
counter1.increment();
console.log(counter1.getValue())