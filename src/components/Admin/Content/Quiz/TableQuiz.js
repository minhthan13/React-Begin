import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiServices";
const TableQuiz = (props) => {
   const [listQuiz, setListQuiz] = useState([]);

   useEffect(() => {
      fecthQuiz();
   }, []);
   const fecthQuiz = async () => {
      let res = await getAllQuizForAdmin();
      console.log("check res: ", res);
      if (res && res.EC === 0) {
         setListQuiz(res.DT);
      }
   };
   return (
      <>
         <div>List Quizzes: </div>
         <table className="table table-hover table-bordered  my-2">
            <thead>
               <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Type</th>
                  <th scope="col">Actions</th>
               </tr>
            </thead>
            <tbody>
               {listQuiz &&
                  listQuiz.map((quiz, index) => {
                     return (
                        <tr key={`table-quiz-${index}`}>
                           <td>{quiz.id}</td>
                           <td>{quiz.name}</td>
                           <td>{quiz.description}</td>
                           <td>{quiz.difficulty}</td>
                           <td className="d-flex justify-content-evenly">
                              <button className="btn btn-warning">Edit</button>
                              <button className="btn btn-danger">Delete</button>
                           </td>
                        </tr>
                     );
                  })}
            </tbody>
         </table>
      </>
   );
};
export default TableQuiz;
