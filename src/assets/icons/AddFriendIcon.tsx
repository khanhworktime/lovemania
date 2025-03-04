import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const AddFriendIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C12.79 4 11 5.79 11 8C11 10.21 12.79 12 15 12ZM6 10V7H4V10H1V12H4V15H6V12H9V10H6ZM15 14C12.33 14 7 15.34 7 18V20H23V18C23 15.34 17.67 14 15 14Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default AddFriendIcon;
