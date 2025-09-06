import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contextApi/AuthContext";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const { userLogin, user } = useContext(AuthContext);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // firebase login
    userLogin(data.email, data.password)
      .then((result) => {
        toast.success("User Login  successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,

          theme: "light",
          transition: Bounce,
        });
        console.log("Login User:", result.user);
      })
      .catch((error) => {
        toast.error(error.message || "Login failed!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,

          theme: "light",
          transition: Bounce,
        });
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className="text-center font-bold py-1">User Login!</h2>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset font-semibold">
                  {/* Email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="input border-none"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}

                  {/* Password */}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="input border-none"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}

                  {/* Forgot Password */}
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  {/* Login Button */}
                  <button type="submit" className="btn btn-secondary mt-4">
                    Login
                  </button>
                </fieldset>
              </form>
            </div>
          </div>

          {/* Right Side */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
