import { Head } from "~/components/shared/Head";

function Page404() {
  return (
    <>
      <Head title={"The page is not found"}></Head>
      <div className="flex flex-col place-items-center justify-center text-center h-screen text-3xl w-full font-bold bg-base-200">
        <h1>The page is not found.</h1>
        <div className="mt-4">
          <a href="/" className="link-primary">
            Home
          </a>
        </div>
      </div>
    </>
  );
}

export default Page404;
