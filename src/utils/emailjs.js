import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { siteConfig } from "../config/siteConfig";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const INQUIRY_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_INQUIRY_TEMPLATE_ID ||
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const BUSINESS_EMAIL =
  import.meta.env.VITE_BUSINESS_EMAIL || siteConfig.email;

const emailJsOptions = PUBLIC_KEY ? { publicKey: PUBLIC_KEY } : undefined;

if (PUBLIC_KEY) {
  emailjs.init({ publicKey: PUBLIC_KEY });
}

const buildInquirySummary = (formData) =>
  [
    "New Solar Inquiry - Pandav Solar",
    "",
    `Name: ${formData.name}`,
    `Phone: ${formData.phone}`,
    `Email: ${formData.email}`,
    `Address: ${formData.address}`,
    `Pin Code: ${formData.pincode}`,
    `Property Type: ${formData.propertyType}`,
    `Message: ${formData.message || "N/A"}`,
  ].join("\n");

const buildContactSummary = (formData) =>
  [
    "New Contact Message - Pandav Solar",
    "",
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    `Message: ${formData.message}`,
  ].join("\n");

export const getEmailJsConfig = () => ({
  serviceId: SERVICE_ID,
  contactTemplateId: CONTACT_TEMPLATE_ID,
  inquiryTemplateId: INQUIRY_TEMPLATE_ID,
  publicKey: PUBLIC_KEY,
});

export const isEmailJsConfigured = () =>
  Boolean(SERVICE_ID && CONTACT_TEMPLATE_ID && INQUIRY_TEMPLATE_ID && PUBLIC_KEY);

export const getEmailJsConfigError = () => {
  const missing = [];

  if (!SERVICE_ID) missing.push("VITE_EMAILJS_SERVICE_ID");
  if (!CONTACT_TEMPLATE_ID) missing.push("VITE_EMAILJS_TEMPLATE_ID");
  if (!INQUIRY_TEMPLATE_ID) missing.push("VITE_EMAILJS_INQUIRY_TEMPLATE_ID");
  if (!PUBLIC_KEY) missing.push("VITE_EMAILJS_PUBLIC_KEY");

  if (missing.length === 0) return null;

  return `Missing EmailJS settings: ${missing.join(", ")}. Add them to .env and restart the dev server.`;
};

export const formatEmailJsError = (error) => {
  const configError = getEmailJsConfigError();
  if (configError) return configError;

  const errorText = `${error?.text || ""} ${error?.message || ""}`.toLowerCase();

  if (errorText.includes("invalid grant") || errorText.includes("gmail_api")) {
    return "Gmail connection expired in EmailJS. Go to dashboard.emailjs.com → Email Services → delete the old Gmail service → Add New Service → Gmail → sign in with tusharpandav.mtfi@gmail.com → update Service ID in .env → restart npm run dev.";
  }

  if (error instanceof EmailJSResponseStatus) {
    if (error.status === 400) {
      return "EmailJS rejected the request. Check Service ID, Template ID, and template variables in your EmailJS dashboard.";
    }
    if (error.status === 401 || error.status === 403) {
      return "EmailJS access denied. Verify your Public Key in EmailJS → Account → API Keys.";
    }
    if (error.status === 404) {
      return "EmailJS service or template not found. Confirm the IDs in your .env file match the EmailJS dashboard.";
    }
    if (error.status === 422) {
      return `EmailJS template error. Set To Email to ${BUSINESS_EMAIL} in your EmailJS template settings.`;
    }

    return error.text || `EmailJS error (${error.status}). Check your EmailJS dashboard settings.`;
  }

  return error?.message || "Could not send inquiry. Please call or WhatsApp us directly.";
};

const assertEmailJsConfigured = () => {
  const configError = getEmailJsConfigError();
  if (configError) {
    throw new Error(configError);
  }
};

export const sendContactEmail = async (formData) => {
  assertEmailJsConfigured();

  const contactSummary = buildContactSummary(formData);

  return emailjs.send(
    SERVICE_ID,
    CONTACT_TEMPLATE_ID,
    {
      to_email: BUSINESS_EMAIL,
      reply_to: formData.email,
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      message: contactSummary,
      contact_summary: contactSummary,
    },
    emailJsOptions
  );
};

export const sendInquiryEmail = async (formData) => {
  assertEmailJsConfigured();

  const inquirySummary = buildInquirySummary(formData);

  return emailjs.send(
    SERVICE_ID,
    INQUIRY_TEMPLATE_ID,
    {
      to_email: BUSINESS_EMAIL,
      reply_to: formData.email,
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      pincode: formData.pincode,
      property_type: formData.propertyType,
      // Full details in message — works even if template only has {{name}} and {{message}}
      message: inquirySummary,
      inquiry_summary: inquirySummary,
      user_message: formData.message || "N/A",
    },
    emailJsOptions
  );
};
