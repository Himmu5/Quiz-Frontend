import Axios from "./Axios";

export const getTopScorers = () => {
  return Axios.get("/quiz/scores").then((res) => {
    return res.data;
  });
};
export function getLanguages() {
  return Axios.get("/languages").then((res) => {
    return res.data;
  });
}

export function getQuestions(lang: string) {
  return Axios.get("/questions", { params: { lang } }).then((res) => {
    return res.data;
  });
}

export const submitQuiz = (quizResponse: { [qId: string]: number }) => {
  return Axios.post(
    "/quiz/submit",
    { userResponse : quizResponse },
    { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
  ).then((res) => {
    return res.data;
  });
};
