import { useRef, useEffect } from "react";

function useEffectUpdate(effect, deps) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      effect();
    }
  }, deps);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);
}

export default useEffectUpdate;
