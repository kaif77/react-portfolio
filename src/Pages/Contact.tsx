import InputBox from "../Components/InputBox";
import Connect from "../Components/Connect";
import {FaPhoneSquareAlt, FaMailBulk} from "react-icons/fa"

const Contact = () => {
  return (
    <>
      <section className="contact-page">
        <h1>Connect With me</h1>

        <div className="con-form">
          <InputBox type={"text"} place={"Enter Your Name"}/>
          <InputBox type={"email"} place={"Enter Your Email"}/>
          <InputBox type={"text"} place={"Enter Subject"}/>
          <textarea className="txt-ar"></textarea>
          <button className="send-btn">Send Message</button>
        </div>


        <div className="con-box">
          <Connect url={"tel-0111111"} icon={<FaPhoneSquareAlt/>} text={"+09239312"}/>
          <Connect url={"abcd@email.ocm"} icon={<FaMailBulk/>} text={"abcdasdsdasdc@email.com"}/>
        </div>

      </section>

    </>
  );
}

export default Contact;