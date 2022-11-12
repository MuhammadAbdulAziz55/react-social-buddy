import React from "react";

const CommentDetails = (props) => {
  const { name, email } = props.comment;
  console.log(props.comment);
  return (
    <p>
      {name}: {email}
    </p>
  );
};

export default CommentDetails;
