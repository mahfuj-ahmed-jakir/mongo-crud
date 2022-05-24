import React, { useState } from "react";

const ActivityDetails = () => {
  let [popup, setPopup] = useState(false);

  return (
    <>
      <div className="margin_left">
        <div id="employe_table_list">
          <div className="employe_table_list">
            <div className="employe_table_text_list">Name</div>
            <div className="employe_table_text_list">Time</div>
            <div className="employe_table_text_list">Details</div>
            <div className="employe_table_text_list">Actions</div>
          </div>
          <div className="employe_table_down_list">
            <div className="employe_table_text_down_list">...</div>
            <div className="employe_table_text_down_list">...</div>
            <div className="employe_table_text_down_list">...</div>
            <div className="employe_table_text_down_list">
              <button onClick={() => setPopup(!popup)} className="button">
                Edit
              </button>
              <button className="button">Delete</button>
            </div>
          </div>
        </div>
      </div>
      {popup ? (
        <div id="edit_popup">
          <div className="edit_popup">
            <div className="post_activity post_activity_list">
              <input type="text" placeholder="Activity Name" />
              <input type="text" placeholder="Hour take" />
              <br />
              <input type="text" placeholder="Activity Details" />
              <br />
              <button>Submit</button>
              <button onClick={() => setPopup(!popup)} className="close_btn_list">
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ActivityDetails;
