import React, { useEffect } from "react";
import { useLocation } from "react-router";

// Так же можно использовать ScrollRestoration

interface ScrollProps {
    children?: React.ReactNode
}

const ScrollToTop = (props: ScrollProps) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;