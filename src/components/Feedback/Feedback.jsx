import React, { useEffect, useRef, useState } from "react";
import style from "./Feedback.module.css";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { ref, set, get } from "firebase/database";
import { db } from "../../config";

const Feedback = () => {
  const { user, dbUser } = useOutletContext();

  const [comments, setComments] = useState([]);

  const areaRef = useRef();

  useEffect(() => {
    const configTableRef = ref(db, "Comments");
    get(configTableRef).then((result) => {
      if (result.val()) {
        setComments(result.val());
      }
    });
  }, [comments]);

  const writeToDatabase = (data) => {
    const configTableRef = ref(db, "Comments");
    set(configTableRef, data);
  };

  const sendFeedback = () => {
    const newFeedback = {
      userName: dbUser.userName,
      comment: areaRef.current.value,
    };
    const updatedComments = comments;
    updatedComments.push(newFeedback);
    setComments(updatedComments);
    writeToDatabase(updatedComments);
    areaRef.current.value = "";
    toast.success("Thank you for your feedback!");
  };

  return (
    <div className={style.feedback_wrapper}>
      <h1 className={style.feedback_title}>
        Feedbacks about water control app
      </h1>

      <div>
        <div
          className={
            user
              ? style.feedbacks
              : `${style.feedbacks} ${style.height_feedbacks}`
          }
        >
          {comments.map((feedback, index) => (
            <div className={style.feedback_container} key={index + 1}>
              <span className={style.user_name}>{feedback.userName}</span>
              <p>{feedback.comment}</p>
            </div>
          ))}
        </div>

        {user ? (
          <div>
            <textarea
              type="text"
              className={`form-control ${style.feedback_input}`}
              placeholder="Write your feedback about water control app here"
              ref={areaRef}
            />
            <button
              className={`btn btn-primary ${style.feedback_submit}`}
              type="submit"
              onClick={sendFeedback}
            >
              Send feedback
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Feedback;
