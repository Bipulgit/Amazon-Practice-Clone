import React from "react";
import { NavLink } from "react-router-dom";

const sign_up = () => {
  // defin hook
  const [udata, setUdata] = React.useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    apassword: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUdata((pre) => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };

  return (
    <section>
      <div className="sign_container">
        {/* <div className="sign_header">
            <img src="./Vs_mall2.jpeg" alt="mall_logo" />
          </div> */}
        <div className="sign_form">
          <form>
            <h1>Sign-Up</h1>
            <div className="form_data">
              <label htmlFor="fname">Your name</label>
              <input
                type="text"
                name="fname"
                onChange={adddata}
                value={udata.fname}
                id="fname"
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                onChange={adddata}
                value={udata.email}
                id="email"
              />
            </div>

            <div className="form_data">
              <label htmlFor="number">Mobile</label>
              <input
                type="text"
                name="mobile"
                onChange={adddata}
                value={udata.mobile}
                id="mobile"
              />
            </div>

            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="At least 6 char"
                onChange={adddata}
                value={udata.password}
                id="password"
              />
            </div>
            <div className="form_data">
              <label htmlFor="apassword">Password Again</label>
              <input
                type="password"
                name="apassword"
                onChange={adddata}
                value={udata.apassword}
                // placeholder="At least 6 char"
                id="password"
              />
            </div>
            <button className="signin_btn">Continue</button>
          </form>

          <div className="signin_info">
            <p>Already have account?</p>
            <NavLink to="/login">Sign_in</NavLink>
          </div>
        </div>

        {/* <div className="signin_info">
          <p>Already have account?</p>
          <NavLink to="/login">Sign_in</NavLink>
        </div> */}
        {/* <div className="create_accountinfo">
          <p>New To VS.Mall</p>
          <button>Create Your VS.Mall account</button>
        </div> */}
      </div>
    </section>
  );
};

export default sign_up;
