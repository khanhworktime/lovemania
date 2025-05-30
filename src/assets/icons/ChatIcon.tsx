import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const ChatIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M21 11.5C21.0034 12.8199 20.695 14.1219 20.1 15.3C19.3944 16.7118 18.3097 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.8781 19.6951 8.69999 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92177 4.44061 8.37487 5.27072 7.03257C6.10082 5.69027 7.28825 4.60559 8.69999 3.90003C9.8781 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47088C20.0052 6.94698 20.885 8.91567 21 11V11.5Z"
        fill={props.fill || "currentColor"}
        stroke={props.stroke || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
};

export default ChatIcon;
