import React from 'react';


const ChangePassword = () => {

  const gridContainerStyle = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "10px",
        padding:"0 10px"
  };

  return (
    <div style={gridContainerStyle}>
     
            <div>
            <label class="label-email">
              <input type="password" class="text" name="CurrentPassword" placeholder="Current Password" required />
              <span class="required">Current Password</span>
            </label>
            </div>


            <div>
            <label class="label-email">
              <input type="password" class="text" name="NewPassword" placeholder="New Password" required />
              <span class="required">New Password</span>
            </label>
            </div>


            <div>
            <label class="label-email">
              <input type="password" class="text" name="ConfirmPassword" placeholder="Confirm Password" required />
              <span class="required">Confirm Password</span>
            </label>
            </div>

    </div>
  );
};

export default ChangePassword;