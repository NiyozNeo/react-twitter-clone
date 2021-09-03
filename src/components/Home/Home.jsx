import "./Home.css";
import UserLogo from "../../imgs/user-logo.png";
import Star from "../../imgs/star.png";
import Image from "../../imgs/image.png";
import Gif from "../../imgs/gif.png";
import Stats from "../../imgs/stats.png";
import Smile from "../../imgs/smile.png";
import Schedule from "../../imgs/schedule.png";
import SecondUser from "../../imgs/user-designsta.png";
import Share from "../../imgs/share.png";
import Statistics from "../../imgs/statistics.png";
import User3 from "../../imgs/user-3.png";
import User4 from "../../imgs/user-4.png";
import FoodImg from "../../imgs/home-eat-img.png";
import useToken from "../../hooks/useToken";

function Home() {
  let [obj, setobj] = useToken()

  let data = JSON.parse(obj);

  return (
    <div className="home">
            <div className="center-top" >
              <h2 className="center-top__title">Home</h2>
              <img className="logo-star" src={Star} alt="Star" />
            </div>
            <div className="home__new-tweet">
                <div className="home__new-tweet-container">
                    <img className="center-user__logo" src={UserLogo} alt="Logo" />
                    <div className="home__new-tweet-wrapper">
                        <input type="text" className="home__new-tweet-input" placeholder="What’s happening" />
                        <div className="home__new-tweet-tools">
                            <div className="homw__new-tweet-btns">
                              <img className="center-logo" src={Image} alt="logo" />
                              <img className="center-logo" src={Gif} alt="logo" />
                              <img className="center-logo" src={Stats} alt="logo" />
                              <img className="center-logo" src={Smile} alt="logo" />
                              <img className="center-logo" src={Schedule} alt="logo" />
                            </div>
                            <button className="logos-btn" type="submit" disabled>
                              Tweet
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="center-second__info">
              <div className="second-user">
                <img
                  className="second-user__logo"
                  src={SecondUser}
                  alt="Logo"
                />

                <div className="second-user__name">
                  <p className="user-name">
                    Designsta{" "}
                    <span className="user-name__span">@inner · 25m</span>
                  </p>
                  <p className="user-comment">
                    Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
                    zerikmadinglarmi?
                  </p>
                </div>
              </div>
              <div className="instruments">
                <p className="comment">10</p>
                <p className="retweet">1</p>
                <p className="like">8</p>
                <img className="share" src={Share} alt="img" />
                <img className="statistics" src={Statistics} alt="img" />
              </div>
              <p className="second-user__other">...</p>
            </div>

            <div className="center-second__info user-3__info">
              <div className="second-user">
                <img className="second-user__logo" src={User3} alt="Logo" />

                <div className="second-user__name">
                  <p className="user-name">
                    cloutexhibition{" "}
                    <span className="user-name__span">@RajLahoti · 22m</span>
                  </p>
                  <p className="user-comment">
                    YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga
                    yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni
                    o’sayotganini ko’rib hursand bo’ladi odam.
                  </p>
                </div>
              </div>

              <div className="instruments">
                <p className="comment"></p>
                <p className="retweet green">5</p>
                <p className="like red">9</p>
                <img className="share" src={Share} alt="img" />
                <img className="statistics" src={Statistics} alt="img" />
              </div>
              <p className="second-user__other">...</p>
            </div>

            <div className="four-user__info">
              <div className="four-user">
                <img className="four-user__img" src={User4} alt="img" />
                <div className="four-user__comment">
                  <p className="four-user__name">
                    CreativePhoto{" "}
                    <span className="user-name__span">
                      @cloutexhibition · 1h
                    </span>
                  </p>
                  <p className="four-user__text">Обетда.....</p>
                  <p className="four-user__text">Кечиринглар</p>
                </div>
              </div>
              <img className="food-img" src={FoodImg} alt="img" />

              <div className="instruments">
                <p className="comment">10</p>
                <p className="retweet">1</p>
                <p className="like">8</p>
                <img className="share" src={Share} alt="img" />
                <img className="statistics" src={Statistics} alt="img" />
              </div>
            </div>
          </div>
  );
}
export default Home;
