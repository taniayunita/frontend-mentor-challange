import React, { useState } from "react";
import "./Home.scss";
import Logo from "../../assets/images/logo.svg";
import Menu from "../../assets/images/icon-menu.svg";
import Close from "../../assets/images/icon-menu-close.svg";
import Image1 from "../../assets/images/image-web-3-desktop.jpg";
import ImageReviving from "../../assets/images/image-retro-pcs.jpg";
import ImageLaptop from "../../assets/images/image-top-laptops.jpg";
import ImageGaming from "../../assets/images/image-gaming-growth.jpg";

const Home = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const menus = ["home", "menu", "new", "popular", "trending", "categories"];
  const news = [
    {
      title: "Hydrogen vs electric cars",
      desc: "will hydrogen fueled cars ever catch up to EVs",
    },
    {
      title: "The downside of all AI Artistry",
      desc: "what are the possible adverse effects of on demand AI image generation",
    },
    {
      title: "is VC Funding Dying Up?",
      desc: "Private funding VC firms is down is down 50% YOY. We take a lock at what that means ",
    },
  ];

  const product = [
    {
      image: ImageReviving,
      title: "Reviving Retro PC's",
      desc: "what happen when old PC's are given",
    },
    {
      image: ImageLaptop,
      title: "Top Laptop of 2022",
      desc: "our best pic for various needs and budgets",
    },
    {
      image: ImageGaming,
      title: "The Growth of Gaming",
      desc: "how the pandemic has sparked fresh opportunities",
    },
  ];
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu">
          <img src={Menu} alt="burger" onClick={handleOpenSidebar} />
          <ul>
            {menus.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </nav>
      {openSidebar ? (
        <div className="sidebar">
          <div className="container">
            <div className="close-btn">
              <img src={Close} alt="" onClick={handleOpenSidebar} />
            </div>
            <ul>
              {menus.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      <main>
        <section className="section-one">
          <div className="content-left">
            <img src={Image1} alt="pict" />
            <div className="container-text">
              <div className="title">The bright future of web 3.0?</div>
              <div className="text">
                <p>
                  we dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="title">NEW</div>
            <div className="news-container">
              {news.map((item, index) => (
                <div className="item-news">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <div className="line"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-two">
          {product.map((item, index) => (
            <div className="item-card">
              <img src={item.image} alt="pictures" />
              <div className="card-text">
                <h2 className="number">0{index + 1}</h2>
                <h2 className="title">{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
