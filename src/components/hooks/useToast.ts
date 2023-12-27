import { useSetRecoilState } from "recoil";
import { showToastStateAtom, toastTextStateAtom } from "~/recoil/toast";

export const useToast = () => {
  const setIsShowToast = useSetRecoilState(showToastStateAtom);
  const setToastText = useSetRecoilState(toastTextStateAtom);

  const toast = (text: string) => {
    setIsShowToast(true);
    setToastText(text);
    return;
  };

  return toast;
};
