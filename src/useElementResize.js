import { useRef, useState, useEffect, useCallback } from "react";

const UseElementResize = () => {
  const [ width, setWidth ] = useState(null);
  const ref = useRef();

  const observer = useRef(
    new ResizeObserver( entries => {
      const { width } = entries[0].contentRect;
      setWidth(width)
    })
  )

  useEffect(() => {
    observer.current.observe(ref.current)
  }, [ref,width])

  return [ ref, width ];
};

export default UseElementResize;