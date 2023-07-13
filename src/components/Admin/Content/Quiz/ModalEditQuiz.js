import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import _ from "lodash";
import { putEditQuiz } from "../../../../services/apiServices";

const ModalEditQuiz = (props) => {
   const { show, setShow, dataEditQuiz } = props;

   const handleClose = () => {
      setShow(false);
      setIdQuiz("");
      setName("");
      setDescription("");
      setType();
      setPreviewImage("");
      props.resetEditQuiz();
   };
   console.log("check data Edit", dataEditQuiz);
   const [idQuiz, setIdQuiz] = useState();
   const [name, setName] = useState();
   const [description, setDescription] = useState();
   const [type, setType] = useState();
   const [image, setImage] = useState();
   const [previewImage, setPreviewImage] = useState("");

   useEffect(() => {
      if (!_.isEmpty(dataEditQuiz)) {
         setIdQuiz(dataEditQuiz.id);
         setName(dataEditQuiz.name);
         setDescription(dataEditQuiz.description);
         setType(dataEditQuiz.difficulty);
         setImage("");
         if (dataEditQuiz.image) {
            setPreviewImage(`data:image/jpeg;base64,${dataEditQuiz.image}`);
         }
      }
   }, [dataEditQuiz]);

   const handleUploadImage = (e) => {
      if (e.target && e.target.files && e.target.files[0]) {
         setPreviewImage(URL.createObjectURL(e.target.files[0]));
         setImage(e.target.files[0]);
      }
   };

   const handleSubmitEditQuiz = async () => {
      let data = await putEditQuiz(
         dataEditQuiz.id,
         description,
         name,
         type,
         image
      );
      console.log("data", data);
      if (data && data.EC === 0) {
         toast.success(data.EM);
         handleClose();
         await props.fecthQuiz();

         //    await props.fetchListUsersWithPaginate(props.currentPage);
      }
      if (data && data.EC !== 0) {
         toast.error(data.EM);
      }
   };

   return (
      <>
         <Modal
            show={show}
            onHide={handleClose}
            size="xl"
            backdrop="static"
            className="modal-add-user">
            <Modal.Header closeButton>
               <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form className="row g-3">
                  <div className="col-md-6">
                     <label className="form-label">Name</label>
                     <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                  </div>
                  <div className="col-md-6">
                     <label className="form-label">Description</label>
                     <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                     />
                  </div>

                  <div className="col-md-4">
                     <label className="form-label">Type</label>
                     <select
                        className="form-select"
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                        <option value="EASY">EASY</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HARD">HARD</option>
                     </select>
                  </div>
                  <div className="col-md-12">
                     <label
                        htmlFor="labelUpload"
                        className="form-label label-upload">
                        <FcPlus />
                        Upload File Image
                     </label>
                     <input
                        id="labelUpload"
                        type="file"
                        hidden
                        onChange={(e) => handleUploadImage(e)}
                     />
                  </div>
                  <div className="col-md-12 img-preview">
                     {previewImage ? (
                        <img src={previewImage} alt="preview img" />
                     ) : (
                        <span>Preview Images</span>
                     )}
                  </div>
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={handleSubmitEditQuiz}>
                  Save
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};
export default ModalEditQuiz;
