import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/utils';
import SEOMeta from '../components/shared/SEOMeta';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      {
        subtitle: '',
        text: 'By accessing our website at 24x7econnect.com or using any services provided by 24x7 EConnect Pvt. Ltd. ("EConnect", "we", "us", or "our"), you agree to be bound by these Terms & Conditions. If you are entering into these terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity. If you do not agree to these terms, you must not use our services.',
      },
    ],
  },
  {
    title: '2. Description of Services',
    content: [
      {
        subtitle: '',
        text: 'EConnect provides carrier-grade telecommunications infrastructure services including A2P SMS termination, OTP messaging, voice routing (CLI and non-CLI), bulk messaging, SMPP/API connectivity, and India DLT compliance management. Services are provided to enterprises, aggregators, and telecom operators on a B2B basis. All services are subject to availability, applicable laws, and the terms set forth herein.',
      },
    ],
  },
  {
    title: '3. Account Registration & Eligibility',
    content: [
      {
        subtitle: '3.1 Eligibility',
        text: 'Our services are available only to businesses and legal entities. You must be at least 18 years of age and have the legal authority to enter into binding contracts on behalf of your organization.',
      },
      {
        subtitle: '3.2 Account Accuracy',
        text: 'You agree to provide accurate, current, and complete information during registration and to keep your account information updated. EConnect reserves the right to suspend or terminate accounts where false or misleading information has been provided.',
      },
      {
        subtitle: '3.3 Account Security',
        text: 'You are responsible for maintaining the confidentiality of your SMPP credentials, API keys, and account passwords. You must notify us immediately at sales@24x7econnect.com if you suspect any unauthorized access to your account.',
      },
    ],
  },
  {
    title: '4. Acceptable Use Policy',
    content: [
      {
        subtitle: '4.1 Permitted Use',
        text: 'You may use our services only for lawful business purposes in compliance with all applicable laws, regulations, and industry standards, including TRAI regulations, the IT Act 2000, and applicable telecom regulations in your jurisdiction.',
      },
      {
        subtitle: '4.2 Prohibited Activities',
        text: 'You must not use our services to: (a) send unsolicited commercial messages (spam) or messages without proper consent; (b) transmit content that is illegal, fraudulent, defamatory, obscene, or harmful; (c) conduct phishing, smishing, or any form of social engineering attack; (d) use grey routes, SIM farms, or any non-compliant routing methods; (e) send messages that impersonate any person, brand, or organization without authorization; (f) violate TRAI DLT regulations including sending messages without registered entity, header, or template; (g) engage in any activity that disrupts, degrades, or overloads our network infrastructure; or (h) resell or sublicense our services without prior written authorization.',
      },
      {
        subtitle: '4.3 Content Responsibility',
        text: 'You are solely responsible for all message content, sender IDs, and templates transmitted through our platform. EConnect acts as a conduit and is not responsible for the content of messages sent by customers.',
      },
    ],
  },
  {
    title: '5. DLT Compliance (India)',
    content: [
      {
        subtitle: '',
        text: 'For messaging traffic destined to Indian mobile subscribers, you are required to comply with TRAI\'s Distributed Ledger Technology (DLT) regulations. This includes registering your entity, headers (Sender IDs), and message templates on the DLT platform before sending any commercial SMS. EConnect provides DLT compliance assistance as a service, but ultimate responsibility for compliance rests with you as the principal entity. Messages sent without valid DLT registration may be blocked by Indian telecom operators, and EConnect shall not be liable for such blocking.',
      },
    ],
  },
  {
    title: '6. Pricing, Billing & Payment',
    content: [
      {
        subtitle: '6.1 Pricing',
        text: 'Service pricing is as agreed in your service agreement, order form, or as published on our pricing page. Prices are subject to change with 30 days\' written notice. Volume-based discounts may be available for high-traffic accounts.',
      },
      {
        subtitle: '6.2 Payment Terms',
        text: 'Unless otherwise agreed, invoices are due within 15 days of the invoice date. Prepaid accounts must maintain a positive balance for uninterrupted service. EConnect reserves the right to suspend services for accounts with overdue payments.',
      },
      {
        subtitle: '6.3 Disputed Charges',
        text: 'If you dispute any charge, you must notify us in writing within 30 days of the invoice date. Undisputed amounts remain due and payable. Disputes raised after 30 days may not be accepted.',
      },
      {
        subtitle: '6.4 Taxes',
        text: 'All prices are exclusive of applicable taxes including GST. You are responsible for all taxes applicable to your use of our services.',
      },
    ],
  },
  {
    title: '7. Service Levels & Uptime',
    content: [
      {
        subtitle: '',
        text: 'EConnect targets the uptime SLAs specified in your service agreement (99.9% for standard plans, 99.99% for enterprise plans). Scheduled maintenance windows will be communicated in advance. SLA credits, where applicable, are the sole remedy for service unavailability and are subject to the terms of your service agreement. EConnect is not liable for outages caused by third-party carrier failures, force majeure events, or issues outside our reasonable control.',
      },
    ],
  },
  {
    title: '8. Intellectual Property',
    content: [
      {
        subtitle: '',
        text: 'All intellectual property rights in our platform, software, APIs, documentation, and website content are owned by or licensed to EConnect. You are granted a limited, non-exclusive, non-transferable license to use our services and documentation solely for your internal business purposes. You must not copy, modify, reverse engineer, decompile, or create derivative works from any part of our platform without prior written consent.',
      },
    ],
  },
  {
    title: '9. Confidentiality',
    content: [
      {
        subtitle: '',
        text: 'Both parties agree to keep confidential any non-public information disclosed in connection with the services, including pricing, technical specifications, routing configurations, and business information. This obligation survives termination of the agreement for a period of 3 years. Confidentiality obligations do not apply to information that is publicly available, independently developed, or required to be disclosed by law.',
      },
    ],
  },
  {
    title: '10. Limitation of Liability',
    content: [
      {
        subtitle: '',
        text: 'To the maximum extent permitted by applicable law, EConnect\'s total liability to you for any claims arising out of or related to these terms or our services shall not exceed the total fees paid by you in the 3 months preceding the claim. EConnect shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or business opportunities, even if advised of the possibility of such damages. Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so some of the above limitations may not apply to you.',
      },
    ],
  },
  {
    title: '11. Indemnification',
    content: [
      {
        subtitle: '',
        text: 'You agree to indemnify, defend, and hold harmless EConnect, its directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to: (a) your use of our services in violation of these terms; (b) your violation of any applicable law or regulation; (c) the content of messages transmitted through our platform; (d) your infringement of any third-party rights; or (e) any DLT non-compliance on your part.',
      },
    ],
  },
  {
    title: '12. Termination',
    content: [
      {
        subtitle: '12.1 Termination by You',
        text: 'You may terminate your account at any time by providing 30 days\' written notice to sales@24x7econnect.com. You remain liable for all charges incurred up to the termination date.',
      },
      {
        subtitle: '12.2 Termination by EConnect',
        text: 'EConnect may suspend or terminate your account immediately without notice if you breach these terms, engage in prohibited activities, fail to pay outstanding invoices, or if required by law or regulatory authority. We may also terminate with 30 days\' notice for any other reason.',
      },
      {
        subtitle: '12.3 Effect of Termination',
        text: 'Upon termination, your right to use our services ceases immediately. Any outstanding balances become immediately due. Provisions that by their nature should survive termination (including payment obligations, confidentiality, and limitation of liability) shall survive.',
      },
    ],
  },
  {
    title: '13. Governing Law & Dispute Resolution',
    content: [
      {
        subtitle: '',
        text: 'These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.',
      },
    ],
  },
  {
    title: '14. Amendments',
    content: [
      {
        subtitle: '',
        text: 'EConnect reserves the right to modify these Terms & Conditions at any time. Material changes will be communicated via email or a prominent notice on our website at least 15 days before taking effect. Your continued use of our services after the effective date of changes constitutes acceptance of the updated terms.',
      },
    ],
  },
  {
    title: '15. Contact',
    content: [
      {
        subtitle: '',
        text: 'For any questions regarding these Terms & Conditions, please contact: 24x7 EConnect Pvt. Ltd., Majlis Park, New Delhi 110033, India. Email: sales@24x7econnect.com | Phone: +91 82879 36724',
      },
    ],
  },
];

export default function Terms() {
  return (
    <div className="overflow-hidden">
      <SEOMeta
        title="Terms & Conditions | 24x7 EConnect"
        description="Terms and Conditions for using 24x7 EConnect's SMS termination, OTP messaging, voice routing, and SMPP/API connectivity services."
        path="/terms"
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
            <FileText className="w-7 h-7 text-indigo-400" />
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
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed"
          >
            Please read these terms carefully before using our services.
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
            className="mb-10 p-6 bg-amber-50 border-l-4 border-amber-500"
          >
            <p className="text-sm text-amber-900 leading-relaxed">
              These Terms & Conditions ("Terms") constitute a legally binding agreement between you and <strong>24x7 EConnect Pvt. Ltd.</strong> governing your access to and use of our website and services. By using our services, you confirm that you have read, understood, and agree to be bound by these Terms.
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
