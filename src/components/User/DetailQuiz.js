import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import _ from "lodash";
const DetailQuiz = (props) => {
  const params = useParams();
  const quizID = params.id;

  useEffect(() => {
    fetchQuestion();
  }, [quizID]);
  const fetchQuestion = async () => {
    let res = await getDataQuiz(quizID);
    if (res && res.EC === 0) {
      let raw = res.DT;
      console.log("check raw data: ", raw);
      let data = _.chain(raw)
        .groupBy("id")
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
            // console.log("check item for each: ", item.answers);
          });
          console.log("value: ", value, "---key: ", key);

          return { questionId: key, answers, questionDescription, image };
        })
        .value();
      console.log(data);
    }
  };
  return (
    <div className="detail-quiz-container">
      <span></span>detail quiz
    </div>
  );
};
export default DetailQuiz;
