import React from "react";
import { ClearButton, SvgButton } from "../theme";

const ShareButton = ({ video }) => {
  return (
    <div>
      <ClearButton>
        <SvgButton src="/share.svg" />
      </ClearButton>
    </div>
  );
};

export default ShareButton;
