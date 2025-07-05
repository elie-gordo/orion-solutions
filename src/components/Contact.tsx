import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot } from 'lucide-react';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    challenges: '',
    goals: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit form
      console.log('Form submitted:', formData);
      // Here would be the actual form submission
      setStep(4);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent focus:outline-none text-white"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email professionnel
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent focus:outline-none text-white"
                placeholder="vous@entreprise.com"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                Nom de l'entreprise
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent focus:outline-none text-white"
                placeholder="Votre entreprise"
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="employees" className="block text-sm font-medium text-gray-300 mb-1">
                Nombre d'employés
              </label>
              <select
                id="employees"
                name="employees"
                value={formData.employees}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent focus:outline-none text-white"
                required
              >
                <option value="">Sélectionnez</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501+">501+</option>
              </select>
            </div>
            <div>
              <label htmlFor="challenges" className="block text-sm font-medium text-gray-300 mb-1">
                Quels sont vos principaux défis actuels ?
              </label>
              <textarea
                id="challenges"
                name="challenges"
                value={formData.challenges}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent focus:outline-none text-white"
                placeholder="Décrivez les défis auxquels votre entreprise fait face"
                required
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-gray-300 mb-1">
                Quels sont vos objectifs d'automatisation ?
              </label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent focus:outline-none text-white"
                placeholder="Décrivez ce que vous souhaitez accomplir"
                required
              />
            </div>
            <div className="bg-dark-200 p-4 rounded-lg border border-gray-700 flex items-start">
              <Bot className="w-5 h-5 text-accent-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-300">
                  <span className="font-bold">Assistant IA :</span> Basé sur vos réponses, nous pouvons déjà identifier plusieurs opportunités d'automatisation pour votre entreprise. Notre équipe vous contactera dans les 24h pour discuter de solutions personnalisées.
                </p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/20 rounded-full mb-6">
              <Send className="w-8 h-8 text-accent-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Demande envoyée avec succès !</h3>
            <p className="text-gray-300 mb-6">
              Merci pour votre demande d'audit. Notre équipe examinera vos informations et vous contactera dans les 24 heures pour discuter des prochaines étapes.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-dark-400">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Audit <span className="text-gradient">Gratuit</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Obtenez un audit personnalisé de vos processus et découvrez comment l'IA peut transformer votre entreprise.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-dark-300 rounded-xl border border-gray-800 overflow-hidden"
        >
          {step < 4 && (
            <div className="px-6 py-4 bg-dark-200 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Demande d'audit</h3>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-2 h-2 rounded-full ${
                        s === step ? 'bg-accent-500' : s < step ? 'bg-gray-400' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="p-8">
            {renderStepContent()}

            {step < 4 && (
              <div className="mt-8 flex justify-between">
                {step > 1 ? (
                  <button
                    onClick={prevStep}
                    className="px-5 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-dark-200 transition-colors"
                  >
                    Précédent
                  </button>
                ) : (
                  <div></div>
                )}
                <button
                  onClick={nextStep}
                  className="px-6 py-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-accent-500/20 transition-all"
                >
                  {step === 3 ? 'Envoyer' : 'Suivant'}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;