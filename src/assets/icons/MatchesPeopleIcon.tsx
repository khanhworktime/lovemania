import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const MatchesPeopleIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M16 7C16 8.0609 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.0609 8 7C8 5.9391 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.9391 16 7ZM20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21H20Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default MatchesPeopleIcon;
