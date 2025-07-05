import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "L'avenir de l'automatisation en entreprise",
      slug: "avenir-automatisation-entreprise",
      excerpt: "Découvrez comment l'IA et l'automatisation transforment le paysage entrepreneurial en 2024.",
      date: "2024-03-15",
      readTime: "5 min",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "5 cas d'usage concrets de l'IA pour les PME",
      slug: "cas-usage-ia-pme",
      excerpt: "Exemples pratiques d'intégration de l'IA dans les petites et moyennes entreprises.",
      date: "2024-03-10",
      readTime: "8 min",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Comment optimiser votre ROI avec l'automatisation",
      slug: "optimiser-roi-automatisation",
      excerpt: "Guide complet pour maximiser le retour sur investissement de vos solutions d'automatisation.",
      date: "2024-03-05",
      readTime: "6 min",
      image: "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="py-20 bg-dark-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Notre <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Découvrez nos derniers articles sur l'IA, l'automatisation et l'innovation en entreprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-300 rounded-lg overflow-hidden border border-gray-800 hover:border-accent-500/50 transition-all duration-300"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-accent-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-accent-500 hover:text-accent-400 transition-colors">
                    Lire la suite
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;