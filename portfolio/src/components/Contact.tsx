import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, User } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const COOLDOWN_TIME = 60000;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmissionTime < COOLDOWN_TIME) {
      toast.error(
        `Please wait ${Math.ceil(
          (COOLDOWN_TIME - (now - lastSubmissionTime)) / 1000
        )} seconds before sending another message`
      );
      return;
    }

    if (isSubmitting) return;

    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      form.reset();
      setLastSubmissionTime(now);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            {[
              {
                icon: <Mail className="w-6 h-6" />,
                text: "pranajalan.work@gmail.com",
              },
              { icon: <MapPin className="w-6 h-6" />, text: "BITS Pilani" },
              {
                icon: <Github className="w-6 h-6" />,
                text: "GitHub",
                link: "https://github.com/pranayjalan254",
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                text: "LinkedIn",
                link: "https://www.linkedin.com/in/pranay-jalan254",
              },
              {
                icon: <Twitter className="w-6 h-6" />,
                text: "Twitter",
                link: "https://x.com/pranaytwts",
              },
              {
                icon: <User className="w-6 h-6" />,
                text: "Superteam Profile",
                link: "https://earn.superteam.fun/t/pranayjalan254",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full">
                  {item.icon}
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-gray-400">{item.text}</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Send Email Message Section */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 w-full"
            onSubmit={handleSubmit}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-xl">
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-4 py-3 bg-black rounded-xl focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-xl">
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-4 py-3 bg-black rounded-xl focus:outline-none"
                placeholder="Your Email"
              />
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-xl">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-black rounded-xl focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl transition-all ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
