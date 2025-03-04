import React from "react";
import IconBase, { IconBaseProps } from "./IconBase";

const GenderNeutralIcon: React.FC<IconBaseProps> = (props) => {
  return (
    <IconBase {...props}>
      <path
        d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12C1.5 17.8 6.2 22.5 12 22.5C17.8 22.5 22.5 17.8 22.5 12C22.5 6.2 17.8 1.5 12 1.5ZM12 20.5C7.31 20.5 3.5 16.69 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 16.69 16.69 20.5 12 20.5Z"
        fill="#4B164C"
      />
      <path
        d="M12 10.5C13.38 10.5 14.5 9.38 14.5 8C14.5 6.62 13.38 5.5 12 5.5C10.62 5.5 9.5 6.62 9.5 8C9.5 9.38 10.62 10.5 12 10.5Z"
        fill="#4B164C"
      />
      <path
        d="M12 12.5C9.33 12.5 4 13.84 4 16.5V18.5H20V16.5C20 13.84 14.67 12.5 12 12.5Z"
        fill="#4B164C"
      />
    </IconBase>
  );
};

export default GenderNeutralIcon;
