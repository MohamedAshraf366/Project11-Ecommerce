import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCommet } from "../redux/commentSlice";

let Comment = () => {
 let comments = useSelector(state=>state.comment.comments)
 let dispatch = useDispatch()
  let submitComment = useRef(null); // استخدم useRef لتخزين المرجع لحقل الإدخال

  let Add = () => {
    let inputComment = submitComment.current.value.trim(); // احصل على قيمة التعليق

    if (inputComment !== "") { // تحقق من أن الحقل غير فارغ
      let newData = {inputComment }; 
      dispatch(addCommet(newData))
        submitComment.current.value = ""; // مسح الحقل بعد الإرسال
    }
  };

  return (
    <>
    <h1 className="fw-bolder text-center mt-5 ">Comments</h1>
      <div className="container">
      <ul className="divPointer">
      {Array.isArray(comments) ? comments.map((comment, index) => (
  <li key={index}>{comment.inputComment}</li>
)) : <p>No comments available</p>}

      </ul>

        <textarea 
          className="p-2" 
          ref={submitComment}
          placeholder="Write your comment here..."
          style={{ width: "100%", height: "100px" }}
        ></textarea>

        <Button variant="outline-secondary" onClick={Add}>Submit</Button>
      </div>
    </>
  );
};

export default Comment;
