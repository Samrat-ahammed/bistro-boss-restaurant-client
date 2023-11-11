const HomeAbout = () => {
  return (
    <div className="mb-10">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/hFbTdLc/chef-service.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-black">
          <div className="w-2/3 mx-auto px-24 py-24 bg-white space-y-6">
            <h2 className="uppercase text-4xl ">Bistro Boss</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
