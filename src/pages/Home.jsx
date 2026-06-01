import Hero, { HeroMetrics } from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import AboutPreview from '../components/sections/AboutPreview';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyConnect from '../components/sections/WhyConnect';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';
import SEOMeta from '../components/shared/SEOMeta';
import HomeFAQ from '../components/sections/HomeFAQ';

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Bulk WhatsApp Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bulk WhatsApp Marketing is the process of sending promotional or transactional messages to a large number of customers via WhatsApp using the official WhatsApp Business API. EConnect provides a compliant, high-delivery bulk WhatsApp marketing platform for businesses across the world."
        }
      },
      {
        "@type": "Question",
        "name": "Does EConnect provide WhatsApp API services globally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. EConnect is a global official WhatsApp API provider. We offer WhatsApp Business API integration, chatbot automation, bulk messaging, and campaign management for businesses of all sizes across the world."
        }
      },
      {
        "@type": "Question",
        "name": "What bulk SMS services does EConnect offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EConnect offers carrier-grade bulk SMS services including transactional SMS, promotional SMS, OTP delivery, and A2P messaging with direct carrier routes, compliance support, and real-time delivery analytics across the world."
        }
      },
      {
        "@type": "Question",
        "name": "Does EConnect offer voice call automation services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. EConnect provides voice call automation services including IVR systems, outbound voice broadcasting, automated call campaigns, and CLI/non-CLI voice routing for enterprises across the world."
        }
      },
      {
        "@type": "Question",
        "name": "Is EConnect available across the world?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. EConnect serves businesses across the globe, including North America, Europe, Asia, the Middle East, and Africa. While our operations are headquartered in New Delhi, we provide international service with 24/7 support."
        }
      },
      {
        "@type": "Question",
        "name": "What is the pricing for bulk SMS and WhatsApp services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EConnect offers flexible, volume-based pricing starting from ₹999/month (~$12 USD/month) for bulk SMS and WhatsApp services. Enterprise plans with custom pricing are available for high-volume businesses. Contact our sales team for a custom quote."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://24x7econnect.com/#webpage",
    "url": "https://24x7econnect.com",
    "name": "EConnect | Bulk WhatsApp Marketing & Business Communication Platform Global",
    "description": "Global trusted platform for Bulk WhatsApp Marketing, WhatsApp API, Bulk SMS, Voice Call Automation, and Business Communication. Serving enterprises globally.",
    "isPartOf": { "@id": "https://24x7econnect.com/#website" },
    "about": { "@id": "https://24x7econnect.com/#organization" },
    "inLanguage": "en-US"
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SEOMeta
        title="Bulk WhatsApp Marketing & Business Communication Platform Global"
        description="EConnect | Global trusted platform for Bulk WhatsApp Marketing, WhatsApp API, Bulk SMS, Voice Call Automation & Business Communication. Serving enterprises globally."
        path="/"
        keywords="bulk WhatsApp marketing Global, WhatsApp API provider Global, bulk SMS service Global, voice call automation Global, business communication platform Global, WhatsApp marketing company"
        schema={homeSchema}
      />
      <Hero />
      <HeroMetrics />
      <WhyChooseUs />
      <AboutPreview />
      <ServicesGrid />
      <WhyConnect />
      <Features />
      {/* <Testimonials /> */}
      <HomeFAQ />
      <CTASection />
    </div>
  );
}
