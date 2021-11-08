import React from "react";
import cover from "../images/cover1.jpg";
import introVid from "../videos/frnds3.mp4";
import "./pages.css";

const Home = () => {
  return (
    <>
      <header>
        <div class="intro">
          <div class="bg-video">
            <video src={introVid} loop muted autoPlay></video>
            <img src={cover} alt="" />
          </div>
          <div class="intro-head">
            <div id="intro-head">Mitra</div>
          </div>
        </div>
      </header>
      <section>
        <div class="section1">
            <div class="container">
              <div class="section-heading1">
                <p>Mental Health <i class="fas fa-user-md"></i></p>
              </div>
              <div class="content para1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt nam soluta quis quo placeat voluptatem ad aperiam perspiciatis, doloremque aliquid dolor velit, unde cum voluptatibus impedit. Dolore est voluptate aspernatur dolor delectus accusantium aliquid aliquam, nam magnam deserunt. Aut consequuntur vero possimus quaerat soluta et dolorum nisi quis sit.
              </div>
              <hr/>
              <div class="content para2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ex nam deserunt necessitatibus? Molestias amet consectetur ex maxime, adipisci est iure error cum, exercitationem ullam facilis, consequatur eaque alias quae inventore dolores pariatur reiciendis tempore distinctio sunt id expedita beatae veritatis accusamus. Exercitationem voluptas explicabo, ea consequuntur iste ad. Non.
              </div>
          </div>
        </div>
        <div class="section2">
          <div class="container">
            <div class="section-heading1">
              <p>Random Heading</p>
            </div>
            <div class="para1 content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem eum accusamus sit? Libero cum minus assumenda nulla ad dolore dolores voluptates, doloribus enim praesentium. Blanditiis sequi modi similique, dignissimos optio qui ducimus praesentium labore alias repellendus laborum a, magni dolores, nesciunt expedita repudiandae ea officiis quia vel exercitationem aperiam.
            </div>
            <hr/>
            <div class="para2 content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, ad eum esse deserunt, sint quibusdam rerum autem laborum tempore officia eos, quisquam neque provident eaque dolore libero illo. Praesentium, dolorum! Reprehenderit, est dolore! Quas maiores, explicabo, totam necessitatibus tempore nobis perspiciatis voluptatum amet porro facilis consequatur aliquid quidem quam laboriosam.
            </div>
          </div>  
        </div>
      </section>
    </>
  );
};

export default Home;
