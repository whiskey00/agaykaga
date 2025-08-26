import React from 'react';
import { MessageCircle, Instagram, Mail, CheckCircle, ArrowRight } from 'lucide-react';

function HowToOrder() {
  const steps = [
    {
      number: "01",
      title: "Browse Our Collection",
      description: "Explore our beautiful fuzzy wire flowers and find the perfect pieces for your space.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: "02", 
      title: "Contact Us",
      description: "Reach out to us via Facebook Messenger, Instagram DM, or email to place your order.",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Customize & Confirm",
      description: "Discuss your preferences, get a quote, and confirm your order details with us.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Enjoy Your Flowers",
      description: "Receive your handcrafted fuzzy wire flowers and enjoy their lasting beauty!",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const contactMethods = [
    {
      platform: "Facebook Messenger",
      icon: <MessageCircle className="w-5 h-5" />,
      link: "https://facebook.com/agaykaga",
      description: "Chat with us directly",
      color: "bg-blue-600"
    },
    {
      platform: "Instagram DM", 
      icon: <Instagram className="w-5 h-5" />,
      link: "https://instagram.com/agaykaga",
      description: "Send us a message",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      platform: "Email",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:ichacasabar@gmail.com",
      description: "Email us your order",
      color: "bg-red-600"
    }
  ];

  return (
    <section id="how-to-order" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-almond">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cocoa mb-3 sm:mb-4 leading-tight">
            How to Order
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-cocoa/70 max-w-2xl mx-auto px-4">
            Getting your perfect fuzzy wire flowers is simple! Follow these easy steps to place your order.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-lg h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-merlot text-white flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  <div className="text-merlot">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-cocoa mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-cocoa/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-merlot" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Methods */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cocoa mb-3 sm:mb-4">
              Ready to Order?
            </h3>
            <p className="text-sm sm:text-base text-cocoa/70">
              Choose your preferred way to contact us and start your order today!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.platform === "Email" ? "_self" : "_blank"}
                rel={method.platform === "Email" ? "" : "noopener noreferrer"}
                className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border-2 border-transparent hover:border-merlot/30 transition-all duration-300 hover:shadow-md"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${method.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0`}>
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-semibold text-cocoa group-hover:text-merlot transition-colors">
                    {method.platform}
                  </h4>
                  <p className="text-xs sm:text-sm text-cocoa/60">
                    {method.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-stone-200">
            <div className="text-center">
              <p className="text-xs sm:text-sm text-cocoa/70 mb-2">
                <strong>Response Time:</strong> We typically respond within 2-4 hours during business hours
              </p>
              <p className="text-xs sm:text-sm text-cocoa/70">
                <strong>Custom Orders:</strong> We love creating custom pieces! Just let us know your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToOrder;
