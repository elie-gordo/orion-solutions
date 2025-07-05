import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <section className="py-20 bg-dark-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="mb-6">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <h2 className="text-2xl font-semibold mb-4">1. Collecte des données</h2>
            <p className="mb-6">
              Nous collectons les informations que vous nous fournissez directement lorsque vous utilisez nos services, notamment :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Nom de l'entreprise</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">2. Utilisation des données</h2>
            <p className="mb-6">
              Nous utilisons les informations collectées pour :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Fournir et améliorer nos services</li>
              <li>Communiquer avec vous</li>
              <li>Personnaliser votre expérience</li>
              <li>Assurer la sécurité de nos services</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">3. Protection des données</h2>
            <p className="mb-6">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisée.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Vos droits</h2>
            <p className="mb-6">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
            <p className="mb-6">
              Pour toute question concernant cette politique ou pour exercer vos droits, contactez-nous à :<br />
              privacy@orion-solutions.fr
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;