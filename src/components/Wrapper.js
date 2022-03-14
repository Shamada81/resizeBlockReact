import React from "react";
import CommandName from "./CommandName";
import useElementResize from "../useElementResize";

const Wrapper = ({array}) => {

  const [ ref, width ] = useElementResize();

  console.log('width: ', width)


  return (
    <div ref={ref}  className="wrapper">
      {
        array.map((elem, index) => (
          <CommandName widthParrent={width} className={`name${index} `} elem={elem} />
        ))
      }
    </div>
  );
};

export default Wrapper;