import { useRef, useState } from "react";
import { useAuthState } from "~/components/contexts/UserContext";
import { Head } from "~/components/shared/Head";
import Footer from "../shared/Footer";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  const markdown = `Just a link: www.nasa.gov.`;

  return (
    <>
      <Head title="MAIN" />
      <div className="hero min-h-screen">
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      </div>
      <Footer />
    </>
  );
}

export default Index;
