import "./ManageQuiz.scss";
import Select from "react-select";
import { useState } from "react";
import { postCreateNewQuiz } from "../../../../services/apiServices";
import { toast } from "react-toastify";
import TableQuiz from "./TableQuiz";
import Accordion from "react-bootstrap/Accordion";

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

   const handleChageFile = (e) => {
      if (e.target && e.target.files && e.target.files[0]) {
         setImage(e.target.files[0]);
      }
   };
   const handleSubmitQuiz = async () => {
      //validate
      if (!name || !description) {
         toast.error("Name/Description is required");
         return;
      }
      let res = await postCreateNewQuiz(description, name, type?.value, image);
      if (res && res.EC === 0) {
         toast.success(res.EM);
         setName("");
         setDescription("");
         setImage(null);
      } else {
         toast.error(res.EM);
      }
   };
   return (
      <div className="quiz-container">
         <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
               <Accordion.Header>Manage quizz</Accordion.Header>
               <Accordion.Body>
                  <div className="add-new-quizz">
                     <fieldset className="border rounded-3 p-3">
                        <legend className="float-none w-auto px-3">
                           Add New Quizz
                        </legend>
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
                              defaultValue={type}
                              onChange={setType}
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
                        <div className="mt-3">
                           <button
                              className="btn btn-warning"
                              onClick={() => handleSubmitQuiz()}>
                              Save
                           </button>
                        </div>
                     </fieldset>
                  </div>
               </Accordion.Body>
            </Accordion.Item>
         </Accordion>
         <div className="list-detail">
            <TableQuiz />
         </div>
      </div>
   );
};
export default ManageQuiz;
