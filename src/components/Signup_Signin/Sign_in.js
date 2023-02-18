import React from "react";
import { NavLink } from "react-router-dom";
import "./Sign_in_and_sign_up.css";

const sign_in = () => {
  // defin hook
  const [logdata, setData] = React.useState({
    email: "",
    password: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  return (
    <>
      <section>
        <div className="sign_container">
          {/* <div className="sign_header">
            <img src="./Vs_mall2.jpeg" alt="mall_logo" />
          </div> */}
          <div className="sign_form">
            <form>
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={adddata}
                  value={logdata.email}
                  id="email"
                />
              </div>

              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="At least 6 char"
                  onChange={adddata}
                  value={logdata.password}
                  id="password"
                />
              </div>
              <button className="signin_btn">Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New To VS.Mall</p>
            <NavLink to="/logout">
              <button>Create Your account</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default sign_in;
