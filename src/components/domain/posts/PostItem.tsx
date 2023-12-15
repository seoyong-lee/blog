const PostItem = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl cursor-pointer hover:bg-base-200">
      <figure>
        <img
          src="https://www.epicweb.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fepic-web%2Fimage%2Fupload%2Fv1696396088%2Fepicweb.dev%2Fblog%2Fvojtaholik_Abstract_header_image_for_article_talking_about_Acce_b7a59bb9-aca6-42fa-9fef-665f838d685e-Enhanced-SR.jpg&w=1080&q=100"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">
          Accessible, Typesafe, Progressively Enhanced Modern Web Forms
        </h2>
        <p className="text-base leading-6">
          The main thing that makes end-to-end type safety difficult is simple:
          boundaries. The secret to fully typed web apps is typing the
          boundaries.
        </p>
        <br />
        <div className="flex gap-9 place-items-center">
          <div className="flex place-items-center">
            <div className="avatar mr-3">
              <div className="w-12 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Author</span>
              <span>Drew Lee</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Date</span>
            <span>October 24, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;