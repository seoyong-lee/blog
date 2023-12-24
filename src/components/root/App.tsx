import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "~/components/contexts/UserContext";
import Main from "~/components/root/Main";
import { setupFirebase } from "~/lib/firebase";

export const App = () => {
  setupFirebase();

  return (
    <HelmetProvider>
      <AuthProvider>
        <RecoilRoot>
          <Main />
        </RecoilRoot>
      </AuthProvider>
    </HelmetProvider>
  );
};
