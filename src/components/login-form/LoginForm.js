import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";
import "./LoginForm.css";

export const LoginForm = ({ login }) => {
  
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actions.login(state));
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  //rendering the login screen to page with signup and login with google(unfinished)
  return (
    <React.Fragment>
      <div className="container">
        <div className='row'>
          <div className='twitter-column'>
          </div>
          <div className='login-form'>
            <form id="login-form" onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={state.username}
                autoFocus
                required
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={state.password}
                required
                onChange={handleChange}
              />
              <button className="login" type="submit" disabled={loading}>
                Login
        </button>
            </form>
            <ul className="buttons"><nav><button>sign up</button></nav></ul>
            <ul className="buttons"><nav><button>Login with Google</button></nav></ul>
          </div>
        </div>
        {loading && <Loader />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
      <vl></vl>
    </React.Fragment>
    


  );
}

export default LoginForm;

