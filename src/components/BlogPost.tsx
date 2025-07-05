import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

  // This would typically come from a CMS or API
  const blogPosts = {
    "avenir-automatisation-entreprise": {
      title: "L'avenir de l'automatisation en entreprise",
      date: "2024-03-15",
      readTime: "5 min",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: `
        <h2>L'automatisation : un enjeu majeur pour les entreprises</h2>
        <p>L'automatisation des processus d'entreprise est devenue un enjeu majeur pour les organisations qui souhaitent rester compétitives dans un marché en constante évolution...</p>
        
        <h2>Les tendances à surveiller en 2024</h2>
        <p>Cette année marque un tournant décisif dans l'adoption des technologies d'automatisation. Voici les principales tendances qui façonnent le paysage...</p>
        
        <h2>Comment préparer votre entreprise ?</h2>
        <p>Pour tirer pleinement parti des opportunités offertes par l'automatisation, les entreprises doivent adopter une approche stratégique...</p>
      `
    },
    "cas-usage-ia-pme": {
      title: "5 cas d'usage concrets de l'IA pour les PME",
      date: "2024-03-10",
      readTime: "8 min",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: `
        <h2>1. Service client automatisé</h2>
        <p>Les chatbots et assistants virtuels permettent aux PME d'offrir un service client 24/7...</p>
        
        <h2>2. Analyse prédictive des ventes</h2>
        <p>L'IA peut analyser les données historiques pour prédire les tendances futures...</p>
        
        <h2>3. Automatisation des processus administratifs</h2>
        <p>La reconnaissance automatique de documents et le traitement des factures...</p>
      `
    },
    "optimiser-roi-automatisation": {
      title: "Comment optimiser votre ROI avec l'automatisation",
      date: "2024-03-05",
      readTime: "6 min",
      image: "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: `
        <h2>Mesurer l'impact de l'automatisation</h2>
        <p>Pour optimiser le ROI de vos solutions d'automatisation, il est essentiel de mettre en place des indicateurs pertinents...</p>
        
        <h2>Stratégies d'optimisation</h2>
        <p>Découvrez les meilleures pratiques pour maximiser le retour sur investissement de vos projets d'automatisation...</p>
        
        <h2>Études de cas</h2>
        <p>Exemples concrets d'entreprises ayant réussi à optimiser leur ROI grâce à l'automatisation...</p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="py-20 bg-dark-400">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-accent-500 hover:text-accent-400">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-dark-400">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center text-accent-500 hover:text-accent-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="flex items-center text-sm text-gray-400 mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
              <Clock className="w-4 h-4 ml-4 mr-2" />
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;