import React, { useEffect, useRef, useState } from "react";
import style from "./Feedback.module.css";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { ref, set, get } from "firebase/database";
import { db } from "../../config";
import Title from "../Base/Title/Title";
import Button from "../Base/Button/Button";

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
      <Title titleText={"Feedbacks about water control app"} />
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

        {user && dbUser ? (
          <div>
            <textarea
              type="text"
              className={`form-control ${style.feedback_input}`}
              placeholder="Write your feedback about water control app here"
              ref={areaRef}
            />
            <Button
              buttonText={"Send feedback"}
              onClick={sendFeedback}
              extraClass={style.feedback_submit}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Feedback;
