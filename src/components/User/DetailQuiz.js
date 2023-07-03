import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
const DetailQuiz = (props) => {
   const params = useParams();
   const quizID = params.id;
   const location = useLocation();

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

               return {
                  questionId: key,
                  answers,
                  questionDescription,
                  image,
               };
            })
            .value();
         console.log("data after lodash: ", data);
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
               <div className="question">Question 1: How are you doing </div>
               <div className="answer">
                  <div className="q-a">A. ashdj</div>
                  <div className="q-a">B. isjadji</div>
                  <div className="q-a">C. ishad i</div>
               </div>
            </div>
            <div className="footer">
               <button className="btn btn-primary ">Prev</button>
               <button className="btn btn-secondary">Next</button>
            </div>
         </div>
         <div className="right-content">count down</div>
      </div>
   );
};
export default DetailQuiz;
