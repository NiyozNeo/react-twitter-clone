import { Link, useParams } from "react-router-dom";
import HomeNav from "../../components/HomeNav/HomeNav";
import "./profile.css";
import UserLogo from "../../imgs/user-logo.png";
import Settings from "../../imgs/settings.png";
import Mushtariy from "../../imgs/mushtariy.png";
import Shuhratbek from "../../imgs/shuhratbek.png";
import ProfileImgs from "../../imgs/imgs-profile.png";
import Left from "../../imgs/left.png";
import ProfileImg from "../../imgs/profile-img.png";
import BoburImg from "../../imgs/bobur-img.png";
import Pin from "../../imgs/pin.png";
import Share from "../../imgs/share.png";
import Statistics from "../../imgs/statistics.png";
import Comment from "../../imgs/comment.png";
import ProfileBottomImg from "../../imgs/profile-bottom-img.png";
import useToken from "../../hooks/useToken";

function ProfileP() {
  const { username } = useParams();
  console.log(username);
  let data = JSON.parse(localStorage.getItem("token"));
  const [obj, setobj] = useToken();

  function logOut() {
    setobj(null);
  }
  return (
    <>
      <div className="container">
        <div className="home-site">
          <HomeNav></HomeNav>

          {/* ---------- */}

          <div className="profile">
            <div className="profile-top">
              <Link to="/">
                <img className="left" src={Left} alt="img" />
              </Link>
              <div>
                <h3 className="top-title">{data.name}</h3>
                <p className="top-text">1,070 Tweets</p>
              </div>
            </div>
            <img className="profile-img" src={ProfileImg} alt="img" />

            <div className="bobur-top">
              <img className="bobur-img" src={BoburImg} alt="img" />
              <button className="edit-btn" onClick={logOut}>
                Log out
              </button>
            </div>

            <div className="info">
              <h3 className="name margin">{data.name}</h3>
              <p className="first-name margin">@{data.username}</p>
              <p className="job margin">
                UX & UI designer at{" "}
                <span className="text-blue">@abutechuz</span>
              </p>
            </div>

            <div className="info df-text">
              <p className="gps margin">Mashag’daman</p>
              <p className="user-link margin text-blue">
                t.me/boburjon_mavlonov
              </p>
              <p className="user-text margin">Born November 24, 2000</p>
              <p className="birthday margin">Joined May 2020</p>
            </div>

            <div className="followers">
              <p className="following">
                <span className="text-bold">67</span> Following
              </p>
              <p className="following">
                <span className="text-bold">47</span> Followers
              </p>
            </div>
            <div className="links">
              <p className="text-bold link">Tweets</p>
              <p className="link">Tweets & replies</p>
              <p className="link">Media</p>
              <p className="link">Likes</p>
            </div>

            <div className="user-1">
              <div className="pin-texts">
                <img className="pin" src={Pin} alt="img" />
                <p className="pin-text">Pinned Tweet</p>
              </div>
              <div>
                <div className="user2">
                  <img className="user-logo" src={UserLogo} alt="img" />
                  <div>
                    <div className="user-info">
                      <h4 className="user-name">{data.name}</h4>
                      <p className="first-name">@{data.username} · Apr 1</p>
                    </div>
                    <p className="user-comment">
                      4-kursni tugatgunimcha kamida bitta biznesim bo'lishini,
                      uylanish uchun moddiy jihatdan to'la-to'kis tayyor
                      bo'lishni, sog'lik va jismoniy holatni normallashtirishni
                      reja qildim
                    </p>
                  </div>
                </div>

                <div className="icons">
                  <p className="icon-comment">10</p>
                  <p className="icon-retweet">1</p>
                  <p className="icon-like">8</p>
                  <img className="share" src={Share} alt="img" />
                  <img className="statistics" src={Statistics} alt="img" />
                </div>
              </div>
              <p className="user-1__dots">...</p>
            </div>

            <div className="user-1">
              <div>
                <div className="user2">
                  <img className="user-logo" src={UserLogo} alt="img" />
                  <div>
                    <div className="user-info">
                      <h4 className="user-name">{data.name}</h4>
                      <p className="first-name">@{data.username} · Apr 1</p>
                    </div>
                    <p className="user-comment">
                      Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima
                      deyayotganimizga qarab ham o'tirmaymiz. <br /> <br />
                      Bitta biznes trener nito gapirib qo'ysa, hamma biznes
                      trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida.{" "}
                      <br /> <br />
                      Gap faqat biznes trenerlar haqida emas.
                    </p>
                  </div>
                </div>

                <div className="icons">
                  <img className="comment" src={Comment} alt="img" />
                  <p className="icon-retweet icon-green">5</p>
                  <p className="like-red">9</p>
                  <img className="share" src={Share} alt="img" />
                  <img className="statistics" src={Statistics} alt="img" />
                </div>
              </div>
              <p className="user-1__dots">...</p>
            </div>

            <div className="profile-bottom">
              <div className="user-2">
                <img className="user-logo" src={UserLogo} alt="img" />
                <div>
                  <div className="user-info">
                    <h4 className="user-name">{data.name} </h4>
                    <p className="first-name ">@{data.username} · Apr 1</p>
                  </div>
                  <p className="user-comment">A bo'pti maskamasman</p>
                </div>
              </div>
              <img
                className="profile-bottom__img"
                src={ProfileBottomImg}
                alt="img"
              />
              <div className="icons">
                <p className="icon-comment">10</p>
                <p className="icon-retweet">1</p>
                <p className="like">8</p>
                <img className="share" src={Share} alt="img" />
                <img className="statistics" src={Statistics} alt="img" />
              </div>
            </div>
          </div>

          {/* -------- */}
          <div className="home-right">
            <form className="home-right__search-wrpapper">
              <span className="home__right-search"></span>
              <input
                className="home__rigth-input"
                placeholder="Search Twitter"
                type="search"
              />
            </form>

            <img className="imgs" src={ProfileImgs} alt="img" />

            <div className="right-block">
              <h3 className="right-block__title">You might like</h3>
              <div className="block-texts">
                <img className="block-img" src={Mushtariy} alt="img" />
                <div>
                  <p className="block-title">Mushtariy</p>
                  <p className="block-text">@Mushtar565266</p>
                </div>
                <button className="block-btn" type="submit">
                  Follow
                </button>
              </div>

              <div className="block-texts">
                <img className="block-img" src={Shuhratbek} alt="img" />
                <div>
                  <p className="block-title">Shuhratbek</p>
                  <p className="block-text">@mrshukhrat</p>
                </div>
                <button className="block-btn" type="submit">
                  Follow
                </button>
              </div>
              <p className="text-blue">Show more</p>
            </div>

            <div className="right-card">
              <div className="right-top">
                <h3 className="right-title">Trends for you</h3>
                <img className="right-settings" src={Settings} alt="img" />
              </div>

              <div className="right-texts">
                <p className="right-from">Trending in Germany</p>
                <h4 className="right-type">Revolution</h4>
                <p className="right-text">50.4K Tweets</p>
                <p className="right-dots">...</p>
              </div>

              <div className="right-texts">
                <p className="right-from">Trending in Germany</p>
                <h4 className="right-type">Revolution</h4>
                <p className="right-text">50.4K Tweets</p>
                <p className="right-dots">...</p>
              </div>

              <div className="right-texts">
                <p className="right-from">Trending in Germany</p>
                <h4 className="right-type">Revolution</h4>
                <p className="right-text">50.4K Tweets</p>
                <p className="right-dots">...</p>
              </div>
              <p className="text-blue">Show more</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileP;
