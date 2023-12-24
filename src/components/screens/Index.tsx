import { Fragment, useEffect } from "react";
import { Head } from "~/components/shared/Head";

import PostsMain from "~/components/domain/posts/PostsMain";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useFirestore } from "~/lib/firebase";
import { isLoginStateAtom, currentUserAtom } from "~/recoil/user";
import { getUser } from "~/services/auth";

function Index() {
  const db = useFirestore();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(isLoginStateAtom);
  const setUser = useSetRecoilState(currentUserAtom);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      console.log(user);

      if (!user) {
        return;
      }

      const userData = await getUser(db, user.uid);

      if (!isLogin && userData) {
        console.log("user data: ", userData);
        setIsLogin(true);
        setUser(userData);
        navigate("/");
      }
    });
  }, []);

  return (
    <Fragment>
      <Head title="Posts" />
      <PostsMain />
    </Fragment>
  );
}

export default Index;
