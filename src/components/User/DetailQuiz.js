import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
const DetailQuiz = (props) => {
  const params = useParams();
  const quizID = params.id;

  useEffect(() => {
    fetchQuestion();
  }, [quizID]);
  const fetchQuestion = async () => {
    let data = await getDataQuiz(quizID);
    console.log("check res :", data);
  };
  return (
    <div className="detail-quiz-container">
      <span></span>detail quiz
    </div>
  );
};
export default DetailQuiz;
