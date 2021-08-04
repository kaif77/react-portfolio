import PortBox from "../Components/PortBox";
import grnimg from "../Images/grnimg.png";
import purpleimg from "../Images/purpleimg.png";
import redimg from "../Images/redimg.png";
import yellowimg from "../Images/yellowimg.png";
import orgimg from "../Images/orgimg.png";
import pinkimg from "../Images/pinkimg.png";


const Portfolio = () => {

    return (
        <div>
            <section className="portfolio">
                <h1>Portfoliio Page</h1>

                <div className="row">
                    <div className="segment">
                      <PortBox imgpath={grnimg} gurl="https://google.com" lurl="https://github.com"/>
                      <PortBox imgpath={redimg} gurl="https://google.com" lurl="https://github.com"/>
                      <PortBox imgpath={purpleimg} gurl="https://google.com" lurl="https://github.com"/>
                    </div>
                    <div className="segment">
                    <PortBox imgpath={pinkimg} gurl="https://google.com" lurl="https://github.com"/>
                    <PortBox imgpath={purpleimg} gurl="https://google.com" lurl="https://github.com"/>
                    <PortBox imgpath={orgimg} gurl="https://google.com" lurl="https://github.com"/>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Portfolio;