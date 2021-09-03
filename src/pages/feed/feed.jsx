import "./feed.css";

import Settings from "../../imgs/settings.png";
import Mushtariy from "../../imgs/mushtariy.png";
import Shuhratbek from "../../imgs/shuhratbek.png";
import HomeNav from "../../components/HomeNav/HomeNav";
import Home from "../../components/Home/Home";

function FeedP() {
  return (
    <>
      <div className="container">
        <div className="home-site">
          <HomeNav> </HomeNav>
          <Home> </Home>
          

          <div className="home-right">
            <form className="home-right__search-wrpapper">
              <span className="home__right-search"></span>
              <input className="home__rigth-input" placeholder="Search Twitter" type="search"/>
            </form>
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

            <div className="df">
              <p className="text-grey">Terms of Service</p>
              <p className="text-grey text-line">Privacy Policy</p>
              <p className="text-grey">Cookie Policy</p>
            </div>
            <div className="df">
              <p className="text-grey">Imprint</p>
              <p className="text-grey">Ads Info</p>
              <p className="text-grey">More ···</p>
              <p className="text-grey">© 2021 Twitter, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedP;
