import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from 'react-router-dom';
import API from "../utils/api";

const Home = () => {
  // const { isLoggedIn } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

   useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      console.log('true');
      if (token) {
        try {
          const response = await API.get("/auth/verifyToken", {
              headers: { Authorization: `Bearer ${token}` },
            });

          if (response.data.success) 
            setIsLoggedIn(true);
          else 
            setIsLoggedIn(false);
          
        } catch (error) {
          // navigate('/logout');
        }
      } else {
        setIsLoggedIn(false);
        return;
      }
    };

    verifyToken();
  }, []);

  return (
    <>
    <div className="hero_area">

  <body>
    <div class="hero_area">
      
      <header class="header_section">
        <nav class="navbar navbar-expand-lg custom_nav-container " >
            <a class="navbar-brand" href="index.html">
              <span style={{ marginLeft: "25px",}}>
                ChallengeTracker
              </span>
            </a>
            <ul class="navbar-nav  ">
              {isLoggedIn ? (
                <>
                  <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link" href="why.html"> Why us </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="trainer.html"> trainers</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/logout"> Logout</a>
                  </li>
                </>
              ) : (
                  <>
                    <div class="navbar-1" style={{marginLeft: "200px",
                      display: "flex",
                      justifyContent: "space-between",
                     }}>
                      <li class="nav-item">
                      <a class="nav-link" href="/login"> Login</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/register"> Register</a>
                      </li>
                    </div>
                  </>
              )}
                  
            </ul>
          </nav>
          
      </header>
      
      <section class=" slider_section position-relative">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container">
                <div class="col-lg-10 col-md-11 mx-auto">
                  <div class="detail-box">
                    <div>
                      <h3>
                        Fitness
                      </h3>
                      <h2>
                        Training
                      </h2>
                      <h1>
                        ChallengeTracker
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                      </p>
                      <div class="">
                        <a href="/create-challenge">
                          Create Challenge
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="col-lg-10 col-md-11 mx-auto">
                  <div class="detail-box">
                    <div>
                      <h3>
                        Fitness
                      </h3>
                      <h2>
                        Training
                      </h2>
                      <h1>
                        ChallengeTracker
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                      </p>
                      <div class="">
                        <a href="/get-challenges">
                          Get Challenges
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="col-lg-10 col-md-11 mx-auto">
                  <div class="detail-box">
                    <div>
                      <h3>
                        Fitness
                      </h3>
                      <h2>
                        Training
                      </h2>
                      <h1>
                        ChallengeTracker
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                      </p>
                      <div class="">
                        <a href="/challenges/getAvailableChallenges">
                          Join Challenges
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="col-lg-10 col-md-11 mx-auto">
                  <div class="detail-box">
                    <div>
                      <h3>
                        Fitness
                      </h3>
                      <h2>
                        Training
                      </h2>
                      <h1>
                        ChallengeTracker
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                      </p>
                      <div class="">
                        <a href="">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="col-lg-10 col-md-11 mx-auto">
                  <div class="detail-box">
                    <div>
                      <h3>
                        Fitness
                      </h3>
                      <h2>
                        Training
                      </h2>
                      <h1>
                        ChallengeTracker
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                      </p>
                      <div class="">
                        <a href="">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
        </div>
      </section>
      
    </div>

    <section class="us_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>
            Why Choose Us
          </h2>
        </div>

        <div class="us_container ">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="box">
                <div class="img-box">
                  <img src="images/u-1.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    QUALITY EQUIPMENT
                  </h5>
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="box">
                <div class="img-box">
                  <img src="images/u-4.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    NUTRITION
                  </h5>
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="box">
                <div class="img-box">
                  <img src="images/u-2.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    HEALTHY DIET PLAN
                  </h5>
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="box">
                <div class="img-box">
                  <img src="images/u-3.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    SPORT TRAINING
                  </h5>
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="heathy_section layout_padding">
      <div class="container">

        <div class="row">
          <div class="col-md-12 mx-auto">
            <div class="detail-box">
              <h2>
                HEALTHY MIND, HEALTHY BODY
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              </p>
              <div class="btn-box">
                <a href="">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="trainer_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>
            Our Gym Trainers
          </h2>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 mx-auto">
            <div class="box">
              <div class="name">
                <h5>
                  Smirth Jon
                </h5>
              </div>
              <div class="img-box">
                <img src="images/t1.jpg" alt="" />
              </div>
              <div class="social_box">
                <a href="">
                  <img src="images/facebook-logo.png" alt="" />
                </a>
                <a href="">
                  <img src="images/twitter.png" alt="" />
                </a>
                <a href="">
                  <img src="images/instagram-logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mx-auto">
            <div class="box">
              <div class="name">
                <h5>
                  Jean Doe
                </h5>
              </div>
              <div class="img-box">
                <img src="images/t2.jpg" alt="" />
              </div>
              <div class="social_box">
                <a href="">
                  <img src="images/facebook-logo.png" alt="" />
                </a>
                <a href="">
                  <img src="images/twitter.png" alt="" />
                </a>
                <a href="">
                  <img src="images/instagram-logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mx-auto">
            <div class="box">
              <div class="name">
                <h5>
                  Alex Den
                </h5>
              </div>
              <div class="img-box">
                <img src="images/t3.jpg" alt="" />
              </div>
              <div class="social_box">
                <a href="">
                  <img src="images/facebook-logo.png" alt="" />
                </a>
                <a href="">
                  <img src="images/twitter.png" alt="" />
                </a>
                <a href="">
                  <img src="images/instagram-logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact_section ">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 px-0">
            <div class="img-box">
              <img src="images/contact-img.jpg" alt="" />
            </div>
          </div>
          <div class="col-lg-5 col-md-6">
            <div class="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
              <div class="heading_container">
                <h2>
                  Contact Us
                </h2>
              </div>
              <form action="">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="text" class="message-box" placeholder="Message" />
                </div>
                <div class="d-flex ">
                  <button>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="info_section layout_padding2">
      <div class="container">
        <div class="info_items">
          <a href="">
            <div class="item ">
              <div class="img-box box-1">
                <img src="" alt="" />
              </div>
              <div class="detail-box">
                <p>
                  Location
                </p>
              </div>
            </div>
          </a>
          <a href="">
            <div class="item ">
              <div class="img-box box-2">
                <img src="" alt="" />
              </div>
              <div class="detail-box">
                <p>
                  +02 1234567890
                </p>
              </div>
            </div>
          </a>
          <a href="">
            <div class="item ">
              <div class="img-box box-3">
                <img src="" alt="" />
              </div>
              <div class="detail-box">
                <p>
                  demo@gmail.com
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <footer class="container-fluid footer_section">
      <p>
        &copy; 2020 All Rights Reserved. Design by
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </footer>


    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.js"></script>

  </body>
</div>
</>
  );
};

export default Home;
