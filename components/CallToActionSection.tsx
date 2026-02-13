
import React from 'react';
import { CALL_TO_ACTION_TEXT, CALL_TO_ACTION_LINK } from '../constants';

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-medical-green text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight animate-fade-in-down">
          مستعد تشوف ماهر وهو بينظّم عيادتك؟
        </h2>
        <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in">
          وفر وقتك ومجهودك، وخلي ماهر هو مساعدك الذكي على واتساب.
        </p>
        <a
          href={CALL_TO_ACTION_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-whatsapp-green hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-xl md:text-2xl shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-grow"
        >
          {CALL_TO_ACTION_TEXT}
        </a>
      </div>
      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulseGrow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; animation-delay: 0.5s; }
        .animate-pulse-grow { animation: pulseGrow 2s infinite ease-in-out; }
      `}</style>
    </section>
  );
};

export default CallToActionSection;
