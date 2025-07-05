import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gauge, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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

  const values = [
    {
      icon: <Gauge className="w-8 h-8 text-primary-500" />,
      title: 'Performance',
      description: 'Nous optimisons vos processus pour une efficacité maximale.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary-500" />,
      title: 'Innovation',
      description: 'Nous intégrons les dernières avancées en IA à vos solutions.',
    },
    {
      icon: <Users className="w-8 h-8 text-accent-500" />,
      title: 'Collaboration',
      description: 'Nous travaillons en étroite collaboration avec vos équipes.',
    },
    {
      icon: <Target className="w-8 h-8 text-primary-500" />,
      title: 'Précision',
      description: 'Nos solutions sont conçues pour répondre précisément à vos besoins.',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-dark-400">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À propos <span className="text-gradient">d'Orion Solutions</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Fondée en 2023, Orion Solutions s'est donnée pour mission de démocratiser l'accès à l'intelligence artificielle pour les entreprises de toutes tailles. Notre équipe d'experts en IA et en automatisation travaille sans relâche pour créer des solutions innovantes qui transforment les processus métier.
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
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-300 p-8 rounded-lg border border-gray-800 hover:border-accent-500/50 transition-all duration-300"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-dark-300 rounded-lg p-8 border border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Notre approche</h3>
              <p className="text-gray-300 mb-4">
                Chez Orion Solutions, nous croyons que l'intelligence artificielle devrait être accessible à toutes les entreprises. C'est pourquoi nous avons développé une méthodologie unique qui permet de mettre en place des solutions d'IA sur mesure rapidement et à moindre coût.
              </p>
              <p className="text-gray-300">
                Nous commençons par comprendre vos défis spécifiques, puis nous concevons et déployons des solutions d'automatisation et d'IA qui s'intègrent parfaitement à votre écosystème existant.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 rounded-lg overflow-hidden bg-dark-200 border border-gray-800 neon-border">
                <div className="absolute inset-0 flex items-center justify-center bg-grid">
                  <div className="text-center">
                    <p className="text-gradient text-3xl font-bold mb-2">+400%</p>
                    <p className="text-gray-300">Gain de productivité moyen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;