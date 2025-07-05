import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, HelpCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const plans = [
    {
      name: 'Starter',
      description: 'Idéal pour les petites entreprises et les startups',
      priceMonthly: 499.90,
      priceAnnually: Math.round(499.90 * 0.85 * 100) / 100, // 424.92€
      installationPrice: 499.90,
      features: [
        { name: 'Automatisation de 5 processus', included: true },
        { name: 'Assistant IA standard', included: true },
        { name: 'Dashboard de reporting basique', included: true },
        { name: 'Formation initiale (4h)', included: true },
        { name: 'Support par email', included: true },
        { name: 'Mises à jour mensuelles', included: true },
        { name: 'Développements personnalisés', included: false },
        { name: 'Audit complet et optimisation', included: false },
      ],
    },
    {
      name: 'Enterprise',
      description: 'Pour les entreprises qui souhaitent une solution complète et personnalisée',
      priceMonthly: 1299.90,
      priceAnnually: Math.round(1299.90 * 0.85 * 100) / 100, // 1104.92€
      installationPrice: 1299.90,
      features: [
        { name: 'Automatisation de processus illimitée', included: true },
        { name: 'Assistant IA personnalisé', included: true },
        { name: 'Dashboard de reporting avancé', included: true },
        { name: 'Formation complète (12h)', included: true },
        { name: 'Support prioritaire 24/7', included: true },
        { name: 'Mises à jour hebdomadaires', included: true },
        { name: 'Développements personnalisés', included: true },
        { name: 'Audit complet et optimisation', included: true },
      ],
      featured: true,
    },
    {
      name: 'Sur Mesure',
      description: 'Solution entièrement personnalisée selon vos besoins spécifiques',
      priceMonthly: 'Sur devis',
      priceAnnually: 'Sur devis',
      installationPrice: 'Sur devis',
      isCustom: true,
      features: [
        { name: 'Analyse complète de vos besoins', included: true },
        { name: 'Développement sur mesure', included: true },
        { name: 'Intégrations personnalisées', included: true },
        { name: 'Formation dédiée', included: true },
        { name: 'Support premium', included: true },
        { name: 'Évolutions continues', included: true },
        { name: 'Accompagnement stratégique', included: true },
        { name: 'Garantie de résultats', included: true },
      ],
    },
  ];

  const getInstallationText = (plan: typeof plans[0]) => {
    if (plan.isCustom) {
      return 'Sur devis';
    }
    if (isAnnual) {
      return 'Offerte';
    }
    return `${plan.installationPrice}€`;
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos <span className="text-gradient">Tarifs</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Des solutions adaptées à chaque entreprise, avec un retour sur investissement garanti.
            </p>
            
            <div className="flex items-center justify-center mb-12">
              <div className="bg-dark-300 p-1 rounded-full">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`py-2 px-5 rounded-full transition ${
                    !isAnnual
                      ? 'bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white'
                      : 'text-gray-400'
                  }`}
                >
                  Mensuel
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`py-2 px-5 rounded-full transition ${
                    isAnnual
                      ? 'bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white'
                      : 'text-gray-400'
                  }`}
                >
                  Annuel <span className="text-xs font-normal">(économisez 15%)</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-dark-300 rounded-2xl p-2 ${
                plan.featured 
                  ? 'border-2 border-accent-500' 
                  : plan.isCustom 
                    ? 'border-2 border-secondary-500'
                    : 'border border-gray-800'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-accent-500 text-black font-bold px-4 py-1 rounded-full text-sm">
                  Recommandé
                </div>
              )}
              {plan.isCustom && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-secondary-500 text-white font-bold px-4 py-1 rounded-full text-sm flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Premium
                </div>
              )}
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold">
                    {plan.isCustom ? (
                      <span className="text-gradient">Sur devis</span>
                    ) : (
                      <>
                        {isAnnual ? plan.priceAnnually : plan.priceMonthly}€
                        <span className="text-gray-400 text-base font-normal">/mois</span>
                      </>
                    )}
                  </p>
                  {isAnnual && !plan.isCustom && (
                    <p className="text-sm text-accent-500">Engagement annuel</p>
                  )}
                  <div className="mt-3 p-3 bg-dark-200 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold">Installation :</span> {getInstallationText(plan)}
                      <br />
                      <span className="text-xs text-gray-400">
                        {isAnnual && !plan.isCustom 
                          ? 'Installation offerte avec l\'engagement annuel'
                          : 'Frais d\'installation et de mise en place (une seule fois)'
                        }
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg text-center transition-all font-medium ${
                    plan.featured
                      ? 'bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-accent-500/20'
                      : plan.isCustom
                        ? 'bg-gradient-to-r from-secondary-500 to-primary-500 text-white hover:shadow-lg hover:shadow-secondary-500/20'
                        : 'bg-dark-200 text-white hover:bg-dark-100'
                  }`}
                >
                  {plan.isCustom ? 'Demander un devis' : 'Obtenir un audit'}
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-dark-300 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="w-5 h-5 text-primary-500 mr-2" />
              <h3 className="text-xl font-bold">Questions sur nos tarifs ?</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Tous nos plans incluent un accompagnement personnalisé et une garantie de satisfaction. 
              Contactez-nous pour discuter de la solution la plus adaptée à vos besoins.
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="relative">Demander un devis personnalisé</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;