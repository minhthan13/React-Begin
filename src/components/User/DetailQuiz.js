import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import Question from "./Question";
import _ from "lodash";
import "./DetailQuiz.scss";
const DetailQuiz = (props) => {
   const params = useParams();
   const location = useLocation();
   const quizID = params.id;

   const [dataQuiz, setDataQuiz] = useState([]);
   const [index, setIndex] = useState(0);

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
                  item.answers.isSelected = false;
                  answers.push(item.answers);
                  // console.log("check item for each: ", item.answers);
               });

               return {
                  questionId: key,
                  answers,
                  questionDescription,
                  image,
               };
            })
            .value();

         setDataQuiz(data);
      }
   };
   console.log("check data quiz: ", dataQuiz);
   const handelPrev = () => {
      if (index - 1 < 0) return;
      setIndex(index - 1);
   };
   const handelNext = () => {
      if (dataQuiz && dataQuiz.length > index + 1) setIndex(index + 1);
   };
   const handleCheckBox = (answerId, questionId) => {
      let dataQuizClone = _.cloneDeep(dataQuiz); //clone toan bo object
      let question = dataQuizClone.find(
         (item) => +item.questionId === +questionId
      );
      if (question && question.answers) {
         question.answers = question.answers.map((item) => {
            if (+item.id === +answerId) {
               item.isSelected = !item.isSelected;
            }
            return item;
         });
         console.log("Check question answers: ", question.answers);
      }
      let index = dataQuizClone.findIndex(
         (item) => +item.questionId === +questionId
      );
      if (index > -1) {
         dataQuizClone[index] = question;
         setDataQuiz(dataQuizClone);
      }
   };
   return (
      <div className="detail-quiz-container">
         <div className="left-content">
            <div className="title">
               Quiz {quizID}: {location?.state?.quizTitle}
            </div>
            <hr />
            <div className="q-body">
               <img src="" alt="" />
            </div>
            <div className="q-content">
               <Question
                  index={index}
                  data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
                  handleCheckBox={handleCheckBox}
               />
            </div>
            <div className="footer">
               <button
                  className="btn btn-primary "
                  onClick={() => handelPrev()}>
                  Prev
               </button>
               <button
                  className="btn btn-secondary"
                  onClick={() => handelNext()}>
                  Next
               </button>
               <button className="btn btn-warning" onClick={() => handelNext()}>
                  Finish
               </button>
            </div>
         </div>
         <div className="right-content">count down</div>
      </div>
   );
};
export default DetailQuiz;
