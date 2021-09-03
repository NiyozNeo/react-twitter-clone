import { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import useToken from "../../hooks/useToken";
import logo from "../../img/twitter-logo-43.png";
import "./modal.css";
function Modal() {
  let [hello, changehello] = useState();
  let [state, changeState] = useToken();
  function formSub(e) {
    e.preventDefault();
    let nickname = name.current.value;
    let mail = email.current.value;
    if (nickname && mail) {
      let obj = {
        name: nickname,
        email: mail,
      };
      changehello(obj);
      let modal2 = document.querySelector(".modal2");
      modal2.style.display = "flex";
    }
  }

  function formSub2(e) {
    e.preventDefault();
    let usern = username.current.value;
    let pass = password.current.value;
    if (usern && pass) {
      console.log(hello);
      let obj = {
        name: hello.name,
        email: hello.email,
        username: usern,
        password: pass,
      };
      changeState(JSON.stringify(obj));
      <Redirect to="/" />;
    }
  }

  let name = useRef();
  let email = useRef();
  let username = useRef();
  let password = useRef();

  return (
    <>
      <div
        onClick={(e) => {
          let modal = document.querySelector(".modal");

          if (e.target === modal) {
            console.log(e.target);
            modal.style.display = "none";
          }
        }}
        className="modal"
      >
        <div className="modal__wrapper">
          <div className="modal__container">
            <div className="modal__secondary-wrapper">
              <img className="modal__logo" src={logo} alt="twitter logo" />
            </div>
            <button
              className="modal__exit"
              onClick={(e) => {
                let modal = document.querySelector(".modal");
                modal.style.display = "none";
              }}
            >
              x
            </button>
            <h2 className="modal__name">Create an account</h2>
            <form onSubmit={formSub} className="modal__form">
              <input
                className="modal__input"
                type="text"
                placeholder="Name"
                ref={name}
                required
              />
              <input
                className="modal__input"
                type="email"
                placeholder="Email"
                ref={email}
                required
              />
              <Link to="/signup" className="signup__extralink">
                Use phone
              </Link>
              <p className="modal__date-birth">Date of birth</p>
              <p className="modal__date-words">
                Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
                sit. Quis bibendum ante phasellus metus, magna lacinia sed
                augue. Odio enim nascetur leo mauris vel eget. Pretium id
                ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa
                in molestie a sit. Elit congue.
              </p>
              <ul className="modal__select-list">
                <li className="modal__select-item">
                  <select className="modal__select-months">
                    <option>Months</option>
                  </select>
                </li>
                <li className="modal__select-item">
                  <select className="modal__select-day">
                    <option>Day</option>
                  </select>
                </li>
                <li className="modal__select-item">
                  <select className="modal__select-year">
                    <option>Year</option>
                  </select>
                </li>
              </ul>
              <button className="modal__submit" type="submit">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        onClick={(e) => {
          let modal2 = document.querySelector(".modal2");
          let modal = document.querySelector(".modal");
          if (e.target === modal2) {
            console.log(e.target);
            modal2.style.display = "none";
            modal.style.display = "none";
          }
        }}
        className="modal2"
      >
        <div className="modal__wrapper">
          <div className="modal__container">
            <div className="modal__secondary-wrapper">
              <img className="modal__logo" src={logo} alt="twitter logo" />
            </div>
            <button
              className="modal__exit"
              onClick={(e) => {
                let modal2 = document.querySelector(".modal2");
                let modal = document.querySelector(".modal");
                modal.style.display = "none";
                modal2.style.display = "none";
              }}
            >
              x
            </button>

            <h2 className="modal__name">Create an account</h2>

            <form onSubmit={formSub2} className="modal__form">
              <input
                className="modal__input"
                type="text"
                placeholder="Username"
                ref={username}
                required
              />
              <input
                className="modal__input"
                type="password"
                placeholder="password"
                ref={password}
                required
              />

              <button className="modal__submit" type="submit">
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
