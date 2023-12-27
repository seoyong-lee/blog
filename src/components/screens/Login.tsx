import { Head } from "~/components/shared/Head";
import TitleHeader from "../shared/TitleHeader";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function PageLogin() {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleClickGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error("code: ", errorCode, "mesage: ", errorMessage);
      });
  };

  return (
    <>
      <Head title={"Login"}></Head>
      <div className="flex flex-col max-w-[780px] w-full  h-full xl:min-h-[calc(100vh-124px)] min-h-[calc(100vh-68px)] px-6 sm:px-10 lg:py-0 pt-12">
        <TitleHeader title={"Login"} />
        <section className="w-full h-40 flex flex-col justify-center place-items-center">
          <button
            className="btn bg-white w-[18rem] hover:bg-slate-400"
            onClick={handleClickGoogleLogin}
          >
            <img
              src="google.png"
              alt="google login"
              width={211}
              height={24}
              className="object-contain"
            />
          </button>
        </section>
      </div>
    </>
  );
}

export default PageLogin;
