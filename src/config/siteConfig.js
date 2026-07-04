import solarBg from "../assets/solar-bg.jpg";
import serviceImg from "../assets/service.jpg";
import instalation from "../assets/instalation.jpg";
import rooftop from "../assets/ROOFTOP.jpg";
import waterHeater from "../assets/WATER-HEETER.jpg";
import aboutImg from "../assets/about-man.jpeg";
import newLogo from "../assets/new-logo.jpg";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";

export const siteConfig = {
  companyName: "Pandav Solar",
  ownerName: "Tushar Pandav",
  ownerTitle: "Founder, Pandav Solar",
  tagline:
    "Save on electricity bills with expert solar installation for your home, shop, or factory. Free site visit in Surat & Gujarat.",
  phone: "+917069216551",
  phoneDisplay: "+91 70692 16551",
  email: "tusharpandav.mtfi@gmail.com",
  whatsapp: "917069216551",
  address:
    "Shop 1, FF, Nakshatra Palace, near Kantheriya Hanumanji Mandir, Singanpore Gam, Katargam, Surat - 395004",
  mapsUrl:
    "https://www.google.com/maps/place/MARUTI+CLINIC+%26+CHILD+CARE/@21.2250872,72.8089473,20.71z/data=!4m9!1m2!2m1!1sshops+1+first+floor+nakshatra+palace+near+kantheriya+hanumanji+mandir+singanpore+gam+katargam+surat!3m5!1s0x3be04f6b697a1a81:0x6781bdbb2cc4e514!8m2!3d21.2251811!4d72.8091256!16s%2Fg%2F11rzgnbglw?entry=ttu",
  hours: "Mon - Sat 9AM - 7PM, Sunday 9AM - 1PM",
  social: {
    instagram:
      "https://www.instagram.com/pandav_solar?igsh=bGo0YW16MXdsc21x",
    facebook: "https://www.facebook.com/pandavsolar",
  },
  stats: {
    years: 5,
    workforce: 15,
    customers: 200,
    mw: 2,
  },
  images: {
    hero: solarBg,
    service: serviceImg,
    instalation,
    rooftop,
    waterHeater,
    about: aboutImg,
    logo: newLogo,
  },
  projects: [
    {
      title: "Solar Rooftop System",
      location: "Katargam, Surat, Gujarat 395004",
      image: project1,
    },
    {
      title: "Solar Rooftop System",
      location: "Adajan, Surat, Gujarat 395009",
      image: project2,
    },
    {
      title: "Solar Rooftop System",
      location: "Vesu, Surat, Gujarat 395007",
      image: project3,
    },
    {
      title: "Solar Rooftop System",
      location: "Ring Road, Surat, Gujarat 395002",
      image: project4,
    },
  ],
  whyChooseUs: [
    {
      title: "Expertise",
      description:
        "Years of hands-on experience in designing and executing solar projects across industries.",
    },
    {
      title: "Quality",
      description:
        "High-quality materials and latest technology to ensure durability and efficiency.",
    },
    {
      title: "Support",
      description:
        "End-to-end assistance from consultation to post-installation maintenance.",
    },
    {
      title: "Straightforward Service",
      description:
        "No confusion, no jargon. We explain things clearly and help you make the right choice.",
    },
    {
      title: "Sustainable Future",
      description:
        "Choosing solar saves money and helps build a cleaner earth for future generations.",
    },
  ],
  propertyTypes: ["Residential", "Commercial", "Industrial"],
  processSteps: [
    { step: "01", title: "Free Site Visit", desc: "We visit your property and check roof space, shadow & load." },
    { step: "02", title: "Custom Design", desc: "We plan the right kW system and explain subsidy benefits." },
    { step: "03", title: "Installation", desc: "Our team installs panels, inverter & completes net-meter work." },
    { step: "04", title: "Start Saving", desc: "Your system goes live — lower bills from day one." },
  ],
  testimonials: [
    { name: "Rajesh P.", location: "Katargam, Surat", text: "Very professional team. Installation was on time and my electricity bill dropped significantly." },
    { name: "Priya M.", location: "Adajan, Surat", text: "They helped with subsidy paperwork and explained everything clearly. Highly recommended." },
    { name: "Amit S.", location: "Vesu, Surat", text: "Good quality panels and friendly support after installation. Happy with Pandav Solar." },
  ],
  services: [
    { title: "Solar Rooftop EPC", desc: "Grid-connected rooftop systems for home, shop & industry.", image: rooftop, link: "/services" },
    { title: "Liaisoning & Approvals", desc: "DISCOM registration, net-meter & government paperwork.", image: instalation, link: "/services" },
    { title: "Solar Water Heater", desc: "Hot water solutions for homes, hotels & hostels.", image: waterHeater, link: "/services" },
  ],
};

export const getWhatsAppUrl = (message = "") => {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const getTelUrl = () => `tel:${siteConfig.phone}`;

export const getMailtoUrl = (subject = "", body = "") => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return query
    ? `mailto:${siteConfig.email}?${query}`
    : `mailto:${siteConfig.email}`;
};

export const formatInquiryWhatsAppMessage = (data) => {
  return `New Inquiry Received 👇

🔹 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone}
🏠 Address: ${data.address}
📮 Pin Code: ${data.pincode}
🏢 Property Type: ${data.propertyType}
📝 Message: ${data.message || "N/A"}`;
};
