import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Marie Dupont',
      position: 'Directrice Marketing, TechVision',
      quote: 'Grâce à Orion Solutions, nous avons automatisé notre processus de génération de leads et d\'analyse de données. Le résultat ? Une augmentation de 40% de nos conversions en seulement 3 mois.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Thomas Girard',
      position: 'CEO, InnoServ',
      quote: 'L\'assistant IA développé sur mesure par Orion Solutions a révolutionné notre service client. Nos temps de réponse ont été réduits de 70% et la satisfaction client a augmenté de 35%.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Sophie Lemaire',
      position: 'COO, DataFlex',
      quote: 'Le tableau de bord IA conçu par Orion Solutions nous a permis de visualiser des tendances que nous n\'aurions jamais détectées. Nous avons pu anticiper les changements du marché et adapter notre stratégie en conséquence.',
      image: 'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="case-studies" className="py-20 bg-dark-400">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos <span className="text-gradient">Clients</span> Témoignent
            </h2>
            <p className="text-gray-300 text-lg">
              Découvrez comment nos solutions d'IA transforment les entreprises et créent un impact réel.
            </p>
          </motion.div>
        </div>

        <div
          ref={ref}
          className="relative max-w-4xl mx-auto"
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Testimonial Slider */}
              <div className="relative h-[500px] overflow-hidden rounded-xl bg-dark-300 border border-gray-800">
                <div className="flex h-full">
                  <div className="w-2/5 relative">
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-dark-300/0 to-dark-300 z-10"></div>
                      <img 
                        src={testimonials[currentSlide].image} 
                        alt={testimonials[currentSlide].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-3/5 p-8 flex flex-col justify-center">
                    <div className="mb-6 text-secondary-500">
                      <Quote className="w-10 h-10" />
                    </div>
                    <blockquote className="text-xl font-medium text-gray-300 mb-6">
                      {testimonials[currentSlide].quote}
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <p className="font-bold text-white">{testimonials[currentSlide].name}</p>
                        <p className="text-gray-400">{testimonials[currentSlide].position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-dark-200 hover:bg-dark-100 transition-colors text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex space-x-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-accent-500' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-dark-200 hover:bg-dark-100 transition-colors text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-dark-300 rounded-lg p-8 border border-gray-800 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Résultats concrets</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <p className="text-4xl font-bold text-gradient mb-2">+300%</p>
              <p className="text-gray-400">Retour sur investissement moyen</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient mb-2">-70%</p>
              <p className="text-gray-400">Réduction des tâches manuelles</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient mb-2">+45%</p>
              <p className="text-gray-400">Augmentation de la productivité</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;