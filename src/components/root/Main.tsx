import { useEffect, useState } from "react";
import { Router } from "~/components/router/Router";

function Main() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return <>{domLoaded && <Router />}</>;
}

export default Main;
