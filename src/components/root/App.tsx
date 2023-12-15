import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "~/components/contexts/UserContext";
import Main from "~/components/root/Main";

export const App = () => {
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
