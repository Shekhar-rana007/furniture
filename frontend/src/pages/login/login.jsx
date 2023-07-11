import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const data = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const { user, isError, isSuccess, isLoading, role } = authState;
  useEffect(() => {
    if (isSuccess) {
      if (role === "admin" || role === "super") {
        toast.success("Login to Admin Panel");
        navigate("/admin");
        window.location.reload();
      } else if (role === "user") {
        toast.success("Loged in Succesfully");
        navigate("/");
        window.location.reload();
      }
    }
  }, [user, isError, isSuccess, isLoading]);
  const [formdata, setFormdata] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formdata));
  };
  return (
    <>
      <div className="w-full p-2 p-md-5 d-flex justify-center">
        <div className="p-3 col-12 col-md-10 py-md-4 border bg-white border rounded-1 shadow-sm d-flex flex-column flex-md-row flex-wrap justify-center gap-2 items-center">
          <div className="col-8 col-md-5 ">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-12 col-md-6 mt-4">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  value={formdata.email}
                  onChange={(e) =>
                    setFormdata({ ...formdata, email: e.target.value })
                  }
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  onChange={(e) =>
                    setFormdata({ ...formdata, password: e.target.value })
                  }
                  value={formdata.password}
                  className="form-control"
                />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Remember me</label>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
