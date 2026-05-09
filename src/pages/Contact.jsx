import service from "../assets/service.jpg";
import Bennersec from "../components/BennerSec";
import ContactSec from "../components/ContactSec";

const Contact = () => {
  return (
    <div>
      <Bennersec title="Contact Us" subtitle="Contact" bgImage={service} />
      <ContactSec />
    </div>
  );
};

export default Contact;
