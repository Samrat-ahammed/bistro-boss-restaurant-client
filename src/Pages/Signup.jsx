import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Signup = () => {
  const { createdUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createdUser(data.email, data.password).then((result) => {
      console.log(result.user);
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro-Boss | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              {errors.email && (
                <span className="text-red-700">Email field is required</span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,

                    // pattern: /[A-Z]*$/,
                  })}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-700">
                    Password field is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert">password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p role="alert">password must be less then 20 characters</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
            </form>
            <p>
              <small>
                New Here Please{" "}
                <Link className="text-blue-700" to={"/login"}>
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
