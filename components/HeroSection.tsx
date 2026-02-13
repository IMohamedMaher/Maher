
import React from 'react';
import { HERO_HEADLINE, HERO_SUBHEADLINE, CALL_TO_ACTION_TEXT, CALL_TO_ACTION_LINK, BRANDING_SLOGANS } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-maher-primary to-medical-blue text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between text-center lg:text-right">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:ml-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-down">
            {HERO_HEADLINE}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            {HERO_SUBHEADLINE}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-end gap-2 mb-10">
            {BRANDING_SLOGANS.map((slogan, index) => (
              <span key={index} className="bg-white text-maher-primary text-sm md:text-base font-semibold px-4 py-2 rounded-full shadow-md animate-fade-in-up" style={{ animationDelay: `${0.2 * index}s` }}>
                {slogan}
              </span>
            ))}
          </div>
          <a
            href={CALL_TO_ACTION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-whatsapp-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl shadow-lg transition-all duration-300 transform hover:scale-105 animate-bounce-in"
          >
            {CALL_TO_ACTION_TEXT}
          </a>
        </div>

        {/* Mobile Phone Mockup */}
        <div className="relative lg:w-1/2 flex justify-center items-center">
          <div className="relative w-72 h-auto md:w-96 transform rotate-3 scale-95 md:scale-100 lg:rotate-6 xl:rotate-12 animate-float">
            <img
              src="https://picsum.photos/400/800?random=1"
              alt="Maher WhatsApp Chatbot on Mobile Phone"
              className="rounded-[2.5rem] shadow-2xl border-8 border-gray-800 w-full h-auto object-cover"
            />
            {/* WhatsApp overlay/mockup details can be added here */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-whatsapp-light rounded-lg p-3 shadow-md transform -translate-x-1/4 -translate-y-1/4 rotate-[-10deg] opacity-90">
                <p className="text-gray-800 text-sm">مرحباً يا دكتور، ماهر جاهز لاستقبال مرضاك!</p>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-md transform translate-x-1/4 translate-y-1/4 rotate-[10deg] opacity-90">
                <p className="text-gray-800 text-sm">أهلاً بك في عيادتنا، كيف يمكنني مساعدتك؟</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind animation styles */}
      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0%, 20%, 40%, 60%, 80%, 100% {
            -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
            transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
          }
          0% { opacity: 0; -webkit-transform: scale3d(.3, .3, .3); transform: scale3d(.3, .3, .3); }
          20% { -webkit-transform: scale3d(1.1, 1.1, 1.1); transform: scale3d(1.1, 1.1, 1.1); }
          40% { -webkit-transform: scale3d(.9, .9, .9); transform: scale3d(.9, .9, .9); }
          60% { opacity: 1; -webkit-transform: scale3d(1.03, 1.03, 1.03); transform: scale3d(1.03, 1.03, 1.03); }
          80% { -webkit-transform: scale3d(.97, .97, .97); transform: scale3d(.97, .97, .97); }
          100% { opacity: 1; -webkit-transform: scale3d(1, 1, 1); transform: scale3d(1, 1, 1); }
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate-3; }
          50% { transform: translateY(-10px) rotate-6; }
          100% { transform: translateY(0px) rotate-3; }
        }
        .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; animation-delay: 0.5s; }
        .animate-fade-in-up { animation: fadeInUp 0.7s ease-out forwards; opacity: 0; } /* Initial opacity 0 for staggered */
        .animate-bounce-in { animation: bounceIn 1s forwards; animation-delay: 1.5s; opacity: 0; } /* Initial opacity 0 */
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection;
