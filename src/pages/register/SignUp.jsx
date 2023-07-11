import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const SignUP = () => {
  const data = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };
  const sucess = useSelector((state) => state.auth.orders.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState(data);
  console.log(sucess);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registration(formdata));
    navigate("/login");
  };
  return (
    <>
      <div className="w-full p-2 p-md-5 d-flex justify-center">
        <div className="p-2 col-12 col-md-10 py-md-4 border bg-white border rounded-1 shadow-sm d-flex flex-column flex-md-row flex-wrap justify-center gap-2 items-center">
          <div className="col-12 col-md-5 ">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label className="form-label">Enter Your name :</label>
                <input
                  type="text"
                  value={formdata.name}
                  className="form-control"
                  onChange={(e) =>
                    setFormdata({ ...formdata, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile Number :</label>
                <input
                  type="number"
                  className="form-control"
                  value={formdata.mobile}
                  onChange={(e) =>
                    setFormdata({ ...formdata, mobile: e.target.value })
                  }
                />
              </div>
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
                <div id="emailHelp" className="form-text">
                  We will never share your email with anyone else.
                </div>
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

export default SignUP;
