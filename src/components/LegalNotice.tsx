import React from 'react';
import { motion } from 'framer-motion';

const LegalNotice = () => {
  return (
    <section className="py-20 bg-dark-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
            <p className="mb-6">
              Orion Solutions<br />
              SARL au capital de 10 000€<br />
              RCS Paris B 123 456 789<br />
              42 Rue de l'Innovation, 75001 Paris, France<br />
              Tel : +33 1 23 45 67 89<br />
              Email : contact@orion-solutions.fr
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Directeur de la publication</h2>
            <p className="mb-6">
              Jean Dupont, Président d'Orion Solutions
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. Hébergement</h2>
            <p className="mb-6">
              Ce site est hébergé par :<br />
              Netlify, Inc.<br />
              2325 3rd Street, Suite 215<br />
              San Francisco, California 94107<br />
              United States
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
            <p className="mb-6">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Données personnelles</h2>
            <p className="mb-6">
              Les informations recueillies sur ce site sont traitées selon les dispositions du Règlement Général sur la Protection des Données (RGPD) et de la loi Informatique et Libertés. Pour plus d'informations, consultez notre Politique de confidentialité.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalNotice;