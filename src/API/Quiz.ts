import Axios from "./Axios"

export const getTopScorers = () =>{
    return Axios.get("/quiz/scores").then((res)=>{
        return res.data
    })
}
export function getLanguages(){
    return Axios.get("/languages").then((res)=>{
        return res.data;
    })
}

export function getQuestions(){
    return Axios.get("/questions").then((res)=>{
        return res.data;
    })
}
