import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </main>
  );
}

/* --------------------------- HERO SECTION --------------------------- */
function ContactHero() {
  return (
    <section className="px-6 lg:px-8 py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-Kairos text-5xl md:text-7xl font-bold mb-6 text-black"
        >
          Get In Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600"
        >
          Let’s collaborate to turn your ideas into powerful digital experiences. 
          We’re excited to hear from you and discuss how we can help.
        </motion.p>
      </div>
    </section>
  );
}

/* --------------------------- CONTACT FORM --------------------------- */
function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Website Development",
    "App Development",
    "AI & ML Services",
    "IoT Solutions",
    "AI Automations",
    "Tech Consultancy",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-Kairos font-bold text-black">
            Let's Start a Conversation
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Have a project in mind, need a consultation, or simply want to explore what’s possible?
            Fill out the form — we’ll get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            {[
              { title: "Quick Response", text: "We respond to all inquiries within 24 hours." },
              { title: "Free Consultation", text: "Get expert advice tailored to your goals." },
              { title: "NDA Available", text: "Your ideas and information remain confidential." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#EAF044]/30">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-10 shadow-sm"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#EAF044]/30">
                <CheckCircle className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-3xl font-Kairos font-bold text-black mb-3">
                Thank You!
              </h3>
              <p className="text-gray-600 text-lg">
                Your message has been received. We’ll be in touch soon!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Full Name *"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  label="Email Address *"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                  placeholder="john@example.com"
                />
                <InputField
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+91 9876543210"
                />
              </div>

              <InputField
                label="Company Name"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
              />

              <SelectField
                label="Service Interested In *"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                options={services}
              />

              <TextAreaField
                label="Message *"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 font-semibold text-black bg-[#EAF044] rounded-xl hover:bg-[#e2eb40] active:scale-95 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------- INPUT COMPONENTS --------------------------- */
function InputField({ label, ...props }: any) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-black mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EAF044] focus:border-transparent transition-all"
      />
    </div>
  );
}

function SelectField({ label, options, ...props }: any) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-black mb-2">
        {label}
      </label>
      <select
        {...props}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EAF044] focus:border-transparent transition-all"
      >
        <option value="">Select a service</option>
        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({ label, ...props }: any) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-black mb-2">
        {label}
      </label>
      <textarea
        {...props}
        rows={5}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EAF044] focus:border-transparent resize-none transition-all"
      />
    </div>
  );
}

/* --------------------------- CONTACT INFO --------------------------- */
function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      primary: "support@initech.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      primary: "+91 7970033564",
      secondary: "+91 8839420226",
      description: "Available from 9am to 6pm",
    },
  ];

  return (
    <section className="px-6 lg:px-8 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-Kairos font-bold text-black mb-4">
          Other Ways to Reach Us
        </h2>
        <p className="text-lg text-gray-600 mb-16">
          Choose the method that works best for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {contactDetails.map((detail, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 rounded-full bg-[#EAF044]/30 text-black">
                {detail.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{detail.title}</h3>
              <p className="text-lg font-medium text-black">{detail.primary}</p>
              {detail.secondary && (
                <p className="text-lg font-medium text-black">{detail.secondary}</p>
              )}
              <p className="text-sm text-gray-500 md-2">{detail.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
