import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity, Bot, BarChart, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Activity className="w-12 h-12 text-primary-500" />,
      title: 'Automatisation n8n',
      description: 'Automatisez vos tâches répétitives avec n8n, une plateforme no-code puissante.',
      features: [
        'Intégration avec plus de 200 services',
        'Workflows personnalisés',
        'Mise en place rapide',
        'Surveillance et alertes en temps réel',
      ],
    },
    {
      icon: <Bot className="w-12 h-12 text-secondary-500" />,
      title: 'IA personnalisée',
      description: 'Développement d\'assistants virtuels et d\'agents IA sur mesure pour votre entreprise.',
      features: [
        'Modèles de langage avancés',
        'Intégration à vos outils existants',
        'Apprentissage continu',
        'Optimisation des performances',
      ],
    },
    {
      icon: <BarChart className="w-12 h-12 text-accent-500" />,
      title: 'Reporting IA',
      description: 'Analyses automatisées et tableaux de bord intelligents pour prendre de meilleures décisions.',
      features: [
        'Visualisation de données en temps réel',
        'Alertes et prédictions',
        'Rapports automatisés',
        'Intégration multi-sources',
      ],
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary-500" />,
      title: 'Formation',
      description: 'Formez vos équipes aux outils d\'automatisation et d\'IA pour maximiser leur efficacité.',
      features: [
        'Programmes sur mesure',
        'Supports pédagogiques exclusifs',
        'Accompagnement personnalisé',
        'Certification Orion',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="solutions" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Découvrez notre gamme de services conçus pour automatiser, optimiser et transformer votre entreprise grâce à l'intelligence artificielle.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card bg-dark-300 rounded-lg p-6 border border-gray-800 h-full relative overflow-hidden"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  height: activeIndex === index ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Fonctionnalités :</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <ChevronRight className="w-4 h-4 text-accent-500 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <Link 
                to="/contact"
                className="inline-flex items-center text-accent-500 text-sm font-medium mt-4 hover:text-accent-400 transition-colors"
              >
                En savoir plus
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>

              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-accent-500/5 filter blur-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transition-all duration-300 group-hover:scale-110"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <span className="relative">Discuter de vos besoins</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;