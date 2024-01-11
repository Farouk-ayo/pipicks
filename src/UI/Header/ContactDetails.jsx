import { AiOutlineMail } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./ContactDetails.module.css";
import { FaLocationDot } from "react-icons/fa6";

const ContactDetails = () => {
  return (
    <div className={classes.contactDetails}>
      <div className={classes.contact}>
        <div className={classes.call}>
          <MdCall color="#7c287d" />
          <Link to="+2348073946451">+2348073946451</Link>
        </div>
        <div className={classes.mail}>
          <AiOutlineMail color="#7c287d" />
          <a href={+2348073946451}>help@picks.com</a>
        </div>
      </div>
      <ul className={classes.details}>
        <li>
          <Link to="www.facebook/faroukayo">
            <GrFacebook color="#7c287d" />
          </Link>
          <Link to="https://twitter.com/Faroukayo24">
            <BsTwitter color="#7c287d" />
          </Link>
          <Link to="https://www.linkedin.com/in/Faroukayo">
            <BsLinkedin color="#7c287d" />
          </Link>

          <div>
            <Link to="#">
              <FaLocationDot color="#7c287d" />
              Olubadan Avenue Ibadan, Oyo State, Nigeria
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default ContactDetails;
