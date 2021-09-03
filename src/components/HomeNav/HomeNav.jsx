import UserLogo from "../../imgs/user-logo.png";
import LogoTwitter from "../../imgs/logo-twitter.png";

import "./HomeNav.css";
import useToken from "../../hooks/useToken";
import { Link, NavLink } from "react-router-dom";

function HomeNav() {
  let [obj] = useToken();

  let data = JSON.parse(obj);

  return (
    <div className="home-nav">
      <ul className="home-nav-list">
        <Link to="/">
          <img
            className="home-nav__twitter-logo"
            src={LogoTwitter}
            alt="Logo"
          />
        </Link>
        <li className="home-nav__list-item">
          <NavLink
            activeClassName="home-link--active"
            to="/"
            exact
            className="home-nav__list-link"
          >
            Home
          </NavLink>
        </li>
        <li className="home-nav__list-item">
          <NavLink to="/" className="home-nav__list-link explore-link">
            Explore
          </NavLink>
        </li>
        <li className="home-nav__list-item">
          <NavLink to="/" className="home-nav__list-link not-link">
            Notifications
          </NavLink>
        </li>
        <li className="home-nav__list-item">
          <NavLink to="/" className="home-nav__list-link messages-link">
            Messages
          </NavLink>
        </li>
        <li className="home-nav__list-item">
          <NavLink to="/" className="home-nav__list-link bookmarks-link">
            Bookmarks
          </NavLink>
        </li>
        <li className="home-nav__list-item">
          <NavLink to="/" className="home-nav__list-link lists-link">
            Lists
          </NavLink>
        </li>
        <li className="home-nav__list-item">
          <NavLink
            activeClassName="profile-link--active"
            to={`/profile/${data.username}`}
            className="home-nav__list-link profile-link"
          >
            Profile
          </NavLink>
        </li>
        <li className="home-nav__list-item">
          <NavLink to="/" className="home-nav__list-link more-link">
            More
          </NavLink>
        </li>
        <button className="home-btn" type="submit">
          Tweet
        </button>
      </ul>
      <div className="home-nav__user">
        <img className="home-nav__user-logo" src={UserLogo} alt="Logo" />
        <div className="home-nav__user-info">
          <p className="home-nav__user-title">{data.name}</p>
          <p className="home-nav__user-adress">@{data.username}</p>
        </div>
        <button className="home-nav__user-other">...</button>
      </div>
    </div>
  );
}
export default HomeNav;
