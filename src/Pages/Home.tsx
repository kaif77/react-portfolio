import React from "react";
import NumberBtn from "../Components/NormalBtn";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa"
import SocialBtn from "../Components/SocialBtn";

const Home = () => {
    return (
        <React.Fragment>
            <section className="home-page">
            <h2>Main Page</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sunt assumenda
                facere eius dignissimos accusantium modi earum sit. Eos atque dolores cum velit soluta
                 aperiam, eveniet distinctio delectus perferendis non.</p>

                <div className="download">
                    <NumberBtn url="https://google.com" classname="cv-btn" text="Download CV" />
                    <NumberBtn url="https://facebook.com" classname="cover-btn" text="Download CV" />
                </div>

                <div className="social">
                    <SocialBtn url="https://twitter.com" type={<FaTwitter />} />
                    <SocialBtn url="https://github.com" type={<FaGithub />} />
                    <SocialBtn url="https://linkedin.com" type={<FaLinkedinIn />} />
                </div>

            </section>
        </React.Fragment>
    );
}
export default Home;