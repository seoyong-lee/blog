import { useEffect, useState } from "react";
import { Router } from "~/components/router/Router";
import { setupFirebase } from "~/lib/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRecoilState } from "recoil";
import { isLoginStateAtom } from "~/recoil/common";

function Main() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginStateAtom);

  useEffect(() => {
    setupFirebase();

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (!isLogin && user) {
        setIsLogin(true);
      }
    });
  }, []);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return <>{domLoaded && <Router />}</>;
}

export default Main;
