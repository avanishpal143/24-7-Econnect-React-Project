import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/utils';
import SEOMeta from '../components/shared/SEOMeta';

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      {
        subtitle: '1.1 Information You Provide',
        text: 'When you contact us, request a routing test, or fill out our inquiry form, we collect information such as your name, company name, email address, phone number, country, and details about your messaging requirements.',
      },
      {
        subtitle: '1.2 Technical & Usage Data',
        text: 'When you access our platform or API, we automatically collect technical data including IP addresses, browser type, device information, pages visited, timestamps, and API request logs. This data is used for security monitoring, fraud prevention, and service optimization.',
      },
      {
        subtitle: '1.3 Messaging Traffic Data',
        text: 'As part of providing SMS termination, OTP delivery, and voice routing services, we process message content, sender IDs, destination numbers, delivery receipts (DLRs), and routing metadata. This data is processed solely to deliver the service and is not used for any other purpose.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      {
        subtitle: '',
        text: 'We use the information we collect to: (a) provide, operate, and maintain our messaging and voice infrastructure services; (b) respond to your inquiries and process business requests; (c) send service-related communications such as delivery reports, invoices, and technical alerts; (d) detect, prevent, and investigate fraud, spam, grey routes, and abuse on our network; (e) comply with applicable laws, regulations, and TRAI DLT requirements; and (f) improve our platform, routing algorithms, and customer experience.',
      },
    ],
  },
  {
    title: '3. Legal Basis for Processing',
    content: [
      {
        subtitle: '',
        text: 'We process your personal data on the following legal bases: (a) Contract: processing is necessary to perform the services you have requested or to take steps prior to entering into a contract; (b) Legitimate Interests: for fraud prevention, network security, and service improvement; (c) Legal Obligation: to comply with applicable laws including TRAI regulations, IT Act 2000, and other Indian telecommunications regulations; and (d) Consent: where you have explicitly provided consent for specific processing activities.',
      },
    ],
  },
  {
    title: '4. Data Sharing & Disclosure',
    content: [
      {
        subtitle: '4.1 Carrier Partners',
        text: 'To deliver messages and voice calls, we share necessary routing data (such as destination numbers and sender IDs) with our carrier partners and telecom operators. This sharing is strictly limited to what is required for service delivery.',
      },
      {
        subtitle: '4.2 Regulatory Authorities',
        text: 'We may disclose information to TRAI, DOT, law enforcement agencies, or other regulatory bodies when required by law, court order, or to protect the integrity of our network and comply with DLT regulations.',
      },
      {
        subtitle: '4.3 Service Providers',
        text: 'We engage trusted third-party service providers for hosting, analytics, and customer support. These providers are contractually bound to process data only on our instructions and in accordance with this policy.',
      },
      {
        subtitle: '4.4 No Sale of Data',
        text: 'We do not sell, rent, or trade your personal information to any third party for marketing or commercial purposes.',
      },
    ],
  },
  {
    title: '5. Data Retention',
    content: [
      {
        subtitle: '',
        text: 'We retain personal data for as long as necessary to provide our services and comply with legal obligations. Message logs and delivery records are retained for a minimum of 90 days for operational purposes and up to 3 years for compliance with TRAI DLT regulations. Account and business contact information is retained for the duration of the business relationship and for 5 years thereafter. You may request deletion of your data subject to our legal retention obligations.',
      },
    ],
  },
  {
    title: '6. Data Security',
    content: [
      {
        subtitle: '',
        text: 'We implement industry-standard security measures to protect your data, including TLS encryption for data in transit, AES-256 encryption for data at rest, role-based access controls, regular security audits, and 24/7 network monitoring. Our infrastructure is ISO 27001 aligned. While we take all reasonable precautions, no system is completely immune to security risks, and we encourage you to use strong credentials and report any suspected security issues to sales@24x7econnect.com.',
      },
    ],
  },
  {
    title: '7. Cookies & Tracking',
    content: [
      {
        subtitle: '',
        text: 'Our website uses essential cookies required for basic functionality such as session management and security. We may also use analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.',
      },
    ],
  },
  {
    title: '8. Your Rights',
    content: [
      {
        subtitle: '',
        text: 'Subject to applicable law, you have the right to: (a) access the personal data we hold about you; (b) request correction of inaccurate or incomplete data; (c) request deletion of your personal data where we no longer have a legal basis to retain it; (d) object to or restrict certain processing activities; (e) data portability to receive your data in a structured, machine-readable format; and (f) withdraw consent at any time where processing is based on consent. To exercise any of these rights, contact us at sales@24x7econnect.com.',
      },
    ],
  },
  {
    title: '9. International Data Transfers',
    content: [
      {
        subtitle: '',
        text: 'As a global messaging infrastructure provider, your data may be processed in countries outside India where our carrier partners and infrastructure providers operate. We ensure that any international transfer of personal data is subject to appropriate safeguards, including contractual protections consistent with applicable data protection laws.',
      },
    ],
  },
  {
    title: '10. Children\'s Privacy',
    content: [
      {
        subtitle: '',
        text: 'Our services are intended for businesses and are not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected such data, please contact us immediately.',
      },
    ],
  },
  {
    title: '11. Changes to This Policy',
    content: [
      {
        subtitle: '',
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes by posting the updated policy on this page with a revised effective date. Continued use of our services after such changes constitutes your acceptance of the updated policy.',
      },
    ],
  },
  {
    title: '12. Contact Us',
    content: [
      {
        subtitle: '',
        text: 'For any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at: 24x7 EConnect Pvt. Ltd., Majlis Park, New Delhi 110033, India. Email: sales@24x7econnect.com | Phone: +91 82879 36724',
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="overflow-hidden">
      <SEOMeta
        title="Privacy Policy | 24x7 EConnect"
        description="Privacy Policy for 24x7 EConnect Pvt. Ltd. | How we collect, use, and protect your data across our SMS termination, OTP delivery, and voice routing services."
        path="/privacy-policy"
      />

      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="w-14 h-14 bg-indigo-600/20 flex items-center justify-center mx-auto mb-6"
          >
            <Shield className="w-7 h-7 text-indigo-400" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase mb-4"
          >
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed"
          >
            How 24x7 EConnect collects, uses, and protects your information.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-500 text-sm mt-4"
          >
            Effective Date: January 1, 2024 &nbsp;·&nbsp; Last Updated: May 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-10 p-6 bg-indigo-50 border-l-4 border-indigo-500"
          >
            <p className="text-sm text-indigo-800 leading-relaxed">
              <strong>24x7 EConnect Pvt. Ltd.</strong> ("EConnect", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website at <strong>24x7econnect.com</strong> and our carrier-grade messaging and voice infrastructure services. Please read this policy carefully.
            </p>
          </motion.div>

          {/* Sections */}
          <motion.div
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}
            className="space-y-10"
          >
            {sections.map((section) => (
              <motion.div key={section.title} variants={fadeInUp}>
                <h2 className="text-lg font-black text-gray-900 tracking-tight mb-4 pb-2 border-b border-gray-100">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((item, i) => (
                    <div key={i}>
                      {item.subtitle && (
                        <h3 className="text-sm font-bold text-gray-800 mb-1.5">{item.subtitle}</h3>
                      )}
                      <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
