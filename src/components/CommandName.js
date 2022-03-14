import React, { useEffect, useState } from "react";

const CommandName = ({elem, className, widthParrent }) => {
  const [ trigger, setTrigger ] = useState(false)

  useEffect(() => {
    const nowWidth = document.querySelector(`.${className}`).getBoundingClientRect().width;
    (nowWidth + 10 > widthParrent) ? setTrigger(true) : setTrigger(false)
  }, [widthParrent])


  return (
    <div className={trigger
      ? "blur-effect"
      : ""
    }>
      <span
        className={trigger
          ? `${className} blur-effect`
          : `${ className }`
        }>
        {elem}
      </span>
    </div>
  );
};

export default CommandName;