import React from 'react';
import { SectionTitle, GridBackground, Card } from '../components/UI';
import { Target, Eye, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-50 py-20 relative overflow-hidden">
        <GridBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <h1 className="text-5xl font-playfair font-bold text-gray-900 mb-6">About Our Community</h1>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto font-lato">
             Building the next generation of problem solvers and software engineers at Tanta University.
           </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Card className="p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-icpc-blue">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-icpc-blue">
                   <Target size={32} />
                </div>
                <h3 className="text-2xl font-outfit font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide a structured environment where students can learn algorithms, data structures, and problem-solving techniques, preparing them for international contests and top-tier tech careers.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-icpc-yellow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 text-icpc-yellow">
                   <Eye size={32} />
                </div>
                <h3 className="text-2xl font-outfit font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading student community in Egypt for competitive programming, fostering a culture of excellence, innovation, and continuous learning.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-gray-800">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-800">
                   <Heart size={32} />
                </div>
                <h3 className="text-2xl font-outfit font-bold mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Collaboration, Persistence, Knowledge Sharing, and inclusivity. We believe that anyone can become a great problem solver with the right guidance and effort.
                </p>
              </Card>
           </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="w-full md:w-1/2">
                  <img src="https://picsum.photos/seed/aboutgroup/800/600" alt="Community gathering" className="rounded-2xl shadow-lg" />
               </div>
               <div className="w-full md:w-1/2">
                  <SectionTitle title="Our" highlight="History" />
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Founded in 2015 by a group of passionate students, ICPC Tanta Community started as a small study group. Over the years, we have grown into a massive community with hundreds of active members.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We have successfully qualified multiple teams to the ACPC (Arab Collegiate Programming Contest) and have hosted dozens of local contests to discover new talent.
                  </p>
               </div>
            </div>
        </div>
      </section>
    </div>
  );
};
