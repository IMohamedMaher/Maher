
import React from 'react';
import Icon from './Icon';
import { FEATURES } from '../constants';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-maher-primary mb-12 animate-fade-in">
          ماهر بيعمل كل ده لعيادتك... وأكتر!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-medical-light-blue p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-maher-secondary p-4 rounded-full text-white">
                  <Icon name={feature.icon} className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.7s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  );
};

export default FeatureSection;
