import solarBg from "../assets/solar-bg.jpg";
import serviceImg from "../assets/service.jpg";
import instalation from "../assets/instalation.jpg";
import rooftop from "../assets/ROOFTOP.jpg";
import waterHeater from "../assets/WATER-HEETER.jpg";
import aboutImg from "../assets/about-man.jpeg";
import mainLogo from "../assets/Main-logo-ps.png";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";
import OwnerImage from "../assets/Owner.jpeg";

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
    years: 9,
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
    logo: mainLogo,
  },
  /** Home hero slider slides (Meghji-style auto-rotate) */
  heroSlides: [
    {
      image: solarBg,
      badge: "Trusted Solar Company in Surat",
      title: "Switch to Solar &",
      highlight: "Save on Electricity Bills",
      text: "Save on electricity bills with expert solar installation for your home, shop, or factory. Free site visit in Surat & Gujarat.",
    },
    {
      image: rooftop,
      badge: "Residential & Commercial EPC",
      title: "Clean Energy for",
      highlight: "Every Roof in Surat",
      text: "Custom rooftop systems designed for homes, shops, hotels, and factories — from survey to net-meter commissioning.",
    },
    {
      image: instalation,
      badge: "Expert Installation Team",
      title: "Quality Install with",
      highlight: "Local Support You Trust",
      text: "Professional mounting, wiring, and after-sales care from a Katargam-based team that stays with you.",
    },
    {
      image: serviceImg,
      badge: "Subsidy & Approvals Help",
      title: "From Paperwork to",
      highlight: "Power On Your Meter",
      text: "We guide subsidy eligibility and handle DISCOM paperwork so you can focus on savings, not forms.",
    },
  ],
  projects: [
    {
      title: "Residential Rooftop Solar",
      location: "Katargam, Surat, Gujarat",
      capacity: "5 kW",
      type: "Residential",
      image: project1,
    },
    {
      title: "Commercial Rooftop System",
      location: "Adajan, Surat, Gujarat",
      capacity: "25 kW",
      type: "Commercial",
      image: project2,
    },
    {
      title: "Industrial Solar Installation",
      location: "Vesu, Surat, Gujarat",
      capacity: "100 kW",
      type: "Industrial",
      image: project3,
    },
    {
      title: "Shop & Office Rooftop",
      location: "Ring Road, Surat, Gujarat",
      capacity: "10 kW",
      type: "Commercial",
      image: project4,
    },
    {
      title: "Home Solar with Net Meter",
      location: "Singanpore, Surat, Gujarat",
      capacity: "3 kW",
      type: "Residential",
      image: project1,
    },
    {
      title: "Factory Rooftop EPC",
      location: "Sachin, Surat, Gujarat",
      capacity: "200 kW",
      type: "Industrial",
      image: project2,
    },
  ],
  team: [
    {
      name: "Tushar Pandav",
      role: "Founder",
      image: OwnerImage,
    },
    {
      name: "Installation Team",
      role: "Field Engineers",
      image: null,
    },
    {
      name: "Support Desk",
      role: "Customer Care",
      image: null,
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
    {
      title: "Local Surat Team",
      description:
        "Based in Katargam — fast site visits, quick support, and projects delivered across Gujarat.",
    },
  ],
  subsidyHighlights: [
    {
      title: "Central & state rooftop benefits",
      description:
        "We guide you through eligible residential rooftop subsidy schemes and help you understand what applies to your property in Gujarat.",
    },
    {
      title: "DISCOM & net-meter support",
      description:
        "From application to net-meter commissioning, we handle paperwork so you are not stuck in approval delays.",
    },
    {
      title: "Clear cost breakdown",
      description:
        "Before you decide, we explain system size, estimated generation, and expected bill savings in simple language.",
    },
    {
      title: "Free site visit",
      description:
        "Our team visits your roof in Surat & nearby areas, checks shadow and load, then recommends the right kW system.",
    },
  ],
  warrantyHighlights: [
    {
      title: "Panel performance warranty",
      description:
        "We install brand panels backed by manufacturer performance warranty (typically up to 25 years as per brand terms).",
    },
    {
      title: "Inverter & workmanship cover",
      description:
        "Inverter warranty follows the brand policy. Our installation workmanship is supported with responsive after-sales service.",
    },
    {
      title: "AMC & maintenance options",
      description:
        "Optional cleaning and health-check visits keep generation high and catch issues early.",
    },
    {
      title: "Dedicated local support",
      description:
        "Call or WhatsApp Pandav Solar for troubleshooting — a local Surat team that knows your installation.",
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
    {
      title: "Residential Rooftop Solar",
      desc: "Clean power for homes — lower bills with a grid-tied rooftop system sized for your load.",
      image: rooftop,
      link: "/services",
      bullets: [
        "Custom kW design for your roof",
        "Subsidy guidance & net-meter help",
        "Neat wiring and safe mounting",
      ],
    },
    {
      title: "Commercial & Industrial Solar",
      desc: "Scalable rooftop EPC for shops, factories, hotels, and commercial buildings.",
      image: serviceImg,
      link: "/services",
      bullets: [
        "High-efficiency commercial systems",
        "Reduced operating electricity cost",
        "Turnkey survey to commissioning",
      ],
    },
    {
      title: "Ground-Mounted Solutions",
      desc: "Ground-mounted plants for larger plots needing reliable long-term generation.",
      image: solarBg,
      link: "/services",
      bullets: [
        "Structure & layout planning",
        "Suitable for open land projects",
        "Durable mounting & cabling",
      ],
    },
    {
      title: "Complete Installation Services",
      desc: "Professional panel, inverter, and electrical setup with quality materials.",
      image: instalation,
      link: "/services",
      bullets: [
        "Certified installation practices",
        "Inverter & ACDB/DCDB setup",
        "Safety-first commissioning",
      ],
    },
    {
      title: "Maintenance & AMC Support",
      desc: "Keep generation high with cleaning, inspections, and quick fault support.",
      image: aboutImg,
      link: "/services",
      bullets: [
        "Panel cleaning schedules",
        "Performance health checks",
        "Local Surat response team",
      ],
    },
    {
      title: "Liaisoning & Consulting",
      desc: "DISCOM approvals, documentation, and honest consulting for the right system.",
      image: waterHeater,
      link: "/services",
      bullets: [
        "New connection & registrations",
        "Government paperwork support",
        "Solar water heater options",
      ],
    },
  ],
  pageMeta: {
    home: {
      title: "Pandav Solar | Best Solar Company in Surat & Gujarat",
      description:
        "Pandav Solar — expert rooftop solar installation, subsidy help, and free site visit in Surat & Gujarat. Call +91 70692 16551.",
    },
    services: {
      title: "Solar Services in Surat | Pandav Solar",
      description:
        "Residential, commercial & industrial solar rooftop EPC, liaisoning, maintenance, and solar water heaters in Surat.",
    },
    about: {
      title: "About Pandav Solar | Trusted Solar Experts in Surat",
      description:
        "Meet Pandav Solar — local Katargam team delivering honest solar installations across Surat and Gujarat.",
    },
    projects: {
      title: "Solar Projects in Surat | Pandav Solar Gallery",
      description:
        "See recent residential, commercial, and industrial solar installations completed by Pandav Solar in Surat & Gujarat.",
    },
    contact: {
      title: "Contact Pandav Solar | Free Solar Assessment",
      description:
        "Call, WhatsApp, or message Pandav Solar for a free solar assessment in Surat. We reply within 24 hours.",
    },
    inquiry: {
      title: "Get a Free Solar Quote | Pandav Solar Inquiry",
      description:
        "Request a free site visit and solar quote from Pandav Solar. Home, shop, and factory installations in Surat.",
    },
    faq: {
      title: "Solar FAQ | Pandav Solar Surat",
      description:
        "Answers about solar cost, subsidy, net meter, warranty, and installation timeline from Pandav Solar.",
    },
    warranty: {
      title: "Solar Warranty & Support | Pandav Solar",
      description:
        "Learn about panel, inverter, and workmanship support from Pandav Solar — local after-sales care in Surat.",
    },
    subsidy: {
      title: "Solar Subsidy Help in Gujarat | Pandav Solar",
      description:
        "Get guidance on rooftop solar subsidy, DISCOM paperwork, and net-meter support with Pandav Solar in Surat.",
    },
  },
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
