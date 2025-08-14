import React, { use } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contextApi/AuthContext";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = use(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log("user registration successfully", result);

        toast.success("🦄 Wow so easy!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
          theme: "light",
          transition: Bounce,
        });
        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
      })
      .catch((error) => {
        console.log("something went wrong", error);
        toast.error("Email in already Exist!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div>
      <div className="hero bg-blue-400 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm border-red-700 border-2 shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset" onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input "
                  placeholder="Enter you name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z]).*$/,
                      message:
                        "Password must contain at least one capital letter",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
          <div className="text-center bg-amber-200 lg:text-left">
            <h1 className="text-5xl font-bold">Regiseter!</h1>
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

export default Register;
