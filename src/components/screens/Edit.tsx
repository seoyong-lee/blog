import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { Head } from "~/components/shared/Head";
import { multilineToSingleline } from "~/utils/markdown";

function PageEdit() {
  const [markdownValue, setMarkdownValue] = useState<string>();

  console.log(multilineToSingleline(markdownValue));

  return (
    <>
      <Head title={"Editor"}></Head>
      <div className="flex flex-col max-w-[1280px] w-full h-screen px-4 sm:px-10 py-12">
        <h1 className="text-4xl font-bold text-center">Editor</h1>
        <div className="w-full py-12">
          <MDEditor
            height={580}
            value={markdownValue}
            onChange={setMarkdownValue}
          />
        </div>
      </div>
    </>
  );
}

export default PageEdit;
