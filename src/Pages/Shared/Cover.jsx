import { Parallax } from "react-parallax";
const Cover = ({ img, title }) => {
  return (
    <div className="space-y-10">
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="hero h-[600px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-3/4 bg-black opacity-50 px-5 py-10">
              <h1 className="mb-5 text-5xl font-bold uppercase text-white">
                {title}
              </h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
