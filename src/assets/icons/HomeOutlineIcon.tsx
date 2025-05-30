import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const HomeOutlineIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M12 3L4 10V20C4 20.2652 4.12041 20.5196 4.33474 20.7071C4.54906 20.8946 4.83975 21 5.14286 21H8.57143C8.87453 21 9.16522 20.8946 9.37955 20.7071C9.59388 20.5196 9.71429 20.2652 9.71429 20V16C9.71429 15.7348 9.83469 15.4804 10.049 15.2929C10.2633 15.1054 10.554 15 10.8571 15H13.1429C13.446 15 13.7367 15.1054 13.951 15.2929C14.1653 15.4804 14.2857 15.7348 14.2857 16V20C14.2857 20.2652 14.4061 20.5196 14.6205 20.7071C14.8348 20.8946 15.1255 21 15.4286 21H18.8571C19.1602 21 19.4509 20.8946 19.6653 20.7071C19.8796 20.5196 20 20.2652 20 20V10L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </IconBase>
  );
};

export default HomeOutlineIcon;
