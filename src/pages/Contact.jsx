import { siteConfig } from "../config/siteConfig";
import BannerSec from "../components/BennerSec";
import ContactSec from "../components/ContactSec";
import PageMeta from "../components/PageMeta";

const Contact = () => {
  return (
    <div>
      <PageMeta pageKey="contact" />
      <BannerSec title="Contact Us" subtitle="Contact" bgImage={siteConfig.images.service} />
      <div className="container-main section-block">
        <p className="text-center text-solar-700 mb-8">
          Call, WhatsApp, or fill the form — we are happy to help with a free solar assessment.
        </p>
        <ContactSec />
      </div>
    </div>
  );
};

export default Contact;
