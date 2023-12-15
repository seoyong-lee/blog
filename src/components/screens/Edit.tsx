import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { Head } from "~/components/shared/Head";

function PageEdit() {
  const [markdownValue, setMarkdownValue] = useState<string>();

  return (
    <>
      <Head title={"Editor"}></Head>
      <div className="flex flex-col max-w-[1560px] w-full h-screen px-4 sm:px-10 py-10">
        <h1 className="text-4xl font-bold">Editor</h1>
        <div className="w-full py-8">
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
