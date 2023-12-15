const PostList = () => {
  return (
    <div className="flex flex-col gap-6 py-20">
      <div className="card card-side bg-base-200 shadow-sm max-h-[10rem]">
        <div className="card-body">
          <h2 className="card-title">Title goes here!</h2>
          <p className="text-sm">Click the button to listen on Spotiwhy app.</p>
        </div>
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="blog img"
            className="object-contain w-[13rem]"
          />
        </figure>
      </div>
      <div className="card card-side bg-base-200 shadow-sm max-h-[11rem]">
        <div className="card-body">
          <h2 className="card-title">Title goes here!</h2>
          <p className="text-sm">Click the button to listen on Spotiwhy app.</p>
        </div>
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="blog img"
            className="object-contain w-[13rem]"
          />
        </figure>
      </div>
    </div>
  );
};

export default PostList;
