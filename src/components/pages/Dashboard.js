import React from "react";
 import "../dcss.css";

export default function Home() {
  return (
    <div>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* displays site properly based on user's device */}
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <title>Statista</title>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="styles.css" />
        {/* Feel free to remove these styles or customise in your own stylesheet 👍 */}
        <style dangerouslySetInnerHTML={{__html: "\n      .attribution {\n        font-size: 11px;\n        text-align: center;\n      }\n      .attribution a {\n        color: hsl(228, 45%, 44%);\n      }\n    " }} />
        <header className="header container">
          <div className="header__title">
            <h1>Statista</h1>
            <span className="header__subtitle">Total Followers: 23,004</span>
          </div>
          
        </header>
        <main>
          <section className="container cards">
            <div className="card card--facebook">
              <div className="card__platform">
                <img className="card__icon" src="/images/icon-facebook.svg" alt="Facebook" />
                <div className="card__username">@nathanf</div>
              </div>
              <div className="card__followers">
                <div className="card__count card__count--big">1987</div>
                <div className="card__label">Followers</div>
              </div>
              <div className="card__change card__change--up">
                <img src="/images/icon-up.svg" alt="up arrow" />
                <div className="card__number">12 Today</div>
              </div>
            </div>
            <div className="card card--twitter">
              <div className="card__platform">
                <img className="card__icon" src="/images/icon-twitter.svg" alt="Twitter" />
                <div className="card__username">@nathanf</div>
              </div>
              <div className="card__followers">
                <div className="card__count card__count--big">1044</div>
                <div className="card__label">Followers</div>
              </div>
              <div className="card__change card__change--up">
                <img src="/images/icon-up.svg" alt="up arrow" />
                <div className="card__number">99 Today</div>
              </div>
            </div>
            <div className="card card--instagram">
              <div className="card__platform">
                <img className="card__icon" src="/images/icon-instagram.svg" alt="Instagram" />
                <div className="card__username">@nathanf</div>
              </div>
              <div className="card__followers">
                <div className="card__count card__count--big">11k</div>
                <div className="card__label">Followers</div>
              </div>
              <div className="card__change card__change--up">
                <img src="/images/icon-up.svg" alt="up arrow" />
                <div className="card__number">1099 Today</div>
              </div>
            </div>
            <div className="card card--youtube">
              <div className="card__platform">
                <img className="card__icon" src="/images/icon-youtube.svg" alt="YouTube" />
                <div className="card__username">@nathanf</div>
              </div>
              <div className="card__followers">
                <div className="card__count card__count--big">8239</div>
                <div className="card__label">Followers</div>
              </div>
              <div className="card__change card__change--down">
                <img src="/images/icon-down.svg" alt="down arrow" />
                <div className="card__number">144 Today</div>
              </div>
            </div>
          </section>
          <section className="container">
            <h2>Overview - Today</h2>
            <div className="cards">
              <div className="card card-grid">
                <div className="card__subtitle">Page Views</div>
                <img className src="/images/icon-facebook.svg" alt="Facebook" />
                <div className="card__count card__count--small">87</div>
                <div className="card__change card__change--up">
                  <img src="/images/icon-up.svg" alt="up arrow" />
                  <div className="card__number">3%</div>
                </div>
              </div>
              <div className="card card-grid">
                <div className="card__subtitle">Likes</div>
                <img className src="/images/icon-facebook.svg" alt="Facebook" />
                <div className="card__count card__count--small">52</div>
                <div className="card__change card__change--down">
                  <img src="/images/icon-down.svg" alt="down arrow" />
                  <div className="card__number">2%</div>
                </div>
              </div>
              <div className="card card-grid">
                <div className="card__subtitle">Likes</div>
                <img className src="/images/icon-instagram.svg" alt="Instagram" />
                <div className="card__count card__count--small">5462</div>
                <div className="card__change card__change--up">
                  <img src="/images/icon-up.svg" alt="up arrow" />
                  <div className="card__number">2257%</div>
                </div>
              </div>
              <div className="card card-grid">
                <div className="card__subtitle">Profile Views</div>
                <img className src="/images/icon-instagram.svg" alt="Instagram" />
                <div className="card__count card__count--small">52k</div>
                <div className="card__change card__change--up">
                  <img src="/images/icon-up.svg" alt="up arrow" />
                  <div className="card__number">1375%</div>
                </div>
              </div>
              <div className="card card-grid">
                <div className="card__subtitle">Retweets</div>
                <img className src="/images/icon-twitter.svg" alt="Twitter" />
                <div className="card__count card__count--small">117</div>
                <div className="card__change card__change--up">
                  <img src="/images/icon-up.svg" alt="up arrow" />
                  <div className="card__number">303%</div>
                </div>
              </div>
              <div className="card card-grid">
                <div className="card__subtitle">Likes</div>
                <img className src="/images/icon-twitter.svg" alt="Twitter" />
                <div className="card__count card__count--small">507</div>
                <div className="card__change card__change--up">
                  <img src="/images/icon-up.svg" alt="up arrow" />
                  <div className="card__number">553%</div>
                </div>
              </div>
              <div className="card card-grid">
                <div className="card__subtitle">Likes</div>
                <img className src="/images/icon-youtube.svg" alt="YouTube" />
                <div className="card__count card__count--small">107</div>
                <div className="card__change card__change--down">
                  <img src="/images/icon-down.svg" alt="down arrow" />
                  <div className="card__number">19%</div>
                </div>
              </div>
              <div className="card card-grid">
                <div className="card__subtitle">Total Views</div>
                <img className src="/images/icon-youtube.svg" alt="YouTube" />
                <div className="card__count card__count--small">1407</div>
                <div className="card__change card__change--down">
                  <img src="/images/icon-down.svg" alt="down arrow" />
                  <div className="card__number">12%</div>
                </div>
              </div>
            </div>
          </section>
        </main>
    </div>
  );
}
