import { useState } from "react";
import "./Button.css";

function Button({ mainColor, shadeColor, children }) {
  const [mainBlock] = useState({ backgroundColor: mainColor });
  const [shadowBlock] = useState({ backgroundColor: shadeColor });

  return (
    <div className="containerStyle">
      <div className="mainBlock" style={mainBlock}>
        {children}
      </div>
      <div className="shadowBlock" style={shadowBlock} />
    </div>
  );
}

export default Button;
