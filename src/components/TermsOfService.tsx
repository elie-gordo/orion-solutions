import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <section className="py-20 bg-dark-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Conditions d'Utilisation</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="mb-6">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <h2 className="text-2xl font-semibold mb-4">1. Acceptation des conditions</h2>
            <p className="mb-6">
              En accédant et en utilisant ce site, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et réglementations applicables, et acceptez que vous êtes responsable du respect des lois locales applicables.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Licence d'utilisation</h2>
            <p className="mb-6">
              La permission d'utiliser les documents de ce site web est accordée, à condition que :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>L'utilisation est à des fins non commerciales</li>
              <li>Toute copie de ces documents inclut cette notice de droit d'auteur</li>
              <li>Les informations ne sont pas modifiées</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">3. Clause de non-responsabilité</h2>
            <p className="mb-6">
              Les documents sur ce site web sont fournis "tels quels". Nous ne donnons aucune garantie, expresse ou implicite, et déclinons par la présente toute garantie, y compris, sans limitation, les garanties implicites ou conditions de qualité marchande.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
            <p className="mb-6">
              En aucun cas, Orion Solutions ou ses fournisseurs ne seront responsables des dommages (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison d'une interruption d'activité) découlant de l'utilisation ou de l'impossibilité d'utiliser les documents sur ce site.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Modifications</h2>
            <p className="mb-6">
              Nous pouvons réviser ces conditions d'utilisation à tout moment sans préavis. En utilisant ce site, vous acceptez d'être lié par la version alors en vigueur de ces conditions d'utilisation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;