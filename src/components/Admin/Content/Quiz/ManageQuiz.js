import "./ManageQuiz.scss";
import Select from "react-select";
import { useState } from "react";
const options = [
   { value: "EASY", label: "EASY" },
   { value: "MEDIUM", label: "MEDIUM" },
   { value: "HARD", label: "HARD" },
];
const ManageQuiz = (props) => {
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [type, setType] = useState("EASY");
   const [image, setImage] = useState(null);

   const handleChageFile = (e) => {};
   return (
      <div className="quiz-container">
         <div className="title">Manage quizz</div>
         <hr />
         <div className="add-new-quizz">
            <fieldset className="border rounded-3 p-3">
               <legend className="float-none w-auto px-3">Add New Quizz</legend>
               <div className="form-floating mb-3">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Your Quizz Name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
                  <label>Name</label>
               </div>
               <div className="form-floating">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Description..."
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}
                  />
                  <label>Description</label>
               </div>
               <div className="my-3">
                  <Select
                     options={options}
                     placeholder={"Quizz type..."}
                     value={type}
                  />
               </div>
               <div className="more-actions form-group">
                  <label className="mb-1">Upload Image</label>
                  <input
                     type="file"
                     className="form-control"
                     onChange={(e) => handleChageFile(e)}
                  />
               </div>
            </fieldset>
         </div>
         <div className="list-detail">table</div>
      </div>
   );
};
export default ManageQuiz;
