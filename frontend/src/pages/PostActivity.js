import React from "react";

const PostActivity = () => {
  return (
    <div className="margin_left">
      <div className="post_activity">
        <input type="text" placeholder="Activity Name" />
        <input type="text" placeholder="Hour take" />
        <br />
        <input type="text" placeholder="Activity Details" />
        <br />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default PostActivity;
