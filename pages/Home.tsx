import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Users, Calendar, Trophy } from 'lucide-react';
import { Button, SectionTitle, GridBackground, Card } from '../components/UI';
import { SPONSORS } from '../constants';

export const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden pt-10 md:pt-0">
        <GridBackground />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-32 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6 text-center lg:text-left"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-gray-900 leading-tight">
                  Your Journey as a <br />
                  <span className="marker-highlight inline-block mt-2">Problem Solver</span> <br />
                  Starts Here.
                </h1>
              </motion.div>
              
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 font-lato max-w-lg mx-auto lg:mx-0 leading-relaxed">
                We are a student community aiming to promote learning and competition in the field of problem-solving and algorithmic thinking.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button to="/join" variant="primary">Join Us</Button>
                <Button to="/training" variant="secondary">View Training</Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
               {/* Abstract "Team/Tech" Illustration Placeholder */}
               <div className="relative z-10">
                   <img src="https://picsum.photos/seed/techteam/800/600" alt="Team collaborating" className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
                   <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl border-l-4 border-icpc-yellow animate-bounce">
                      <div className="flex items-center gap-3">
                        <Trophy className="text-icpc-yellow" size={32} />
                        <div>
                          <p className="font-bold font-outfit text-lg">ECPC Finalists</p>
                          <p className="text-sm text-gray-500">2024 - 2025</p>
                        </div>
                      </div>
                   </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <SectionTitle title="What is" highlight="ICPC ?" />
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                ICPC stands for The International Collegiate Programming Contest, an algorithmic programming contest for college students. Teams of three work to solve real-world problems, fostering collaboration, creativity, and innovation.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                At Tanta University, our community bridges the gap between academic theory and practical application through rigorous training and mentorship.
              </p>
              <Button to="/about" variant="outline">Read More</Button>
            </div>
            <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
               <Card className="p-4 md:p-6 bg-blue-50 border-none">
                 <Terminal className="text-icpc-blue mb-4" size={32} />
                 <h3 className="font-bold text-lg md:text-xl mb-2 font-outfit">Training</h3>
                 <p className="text-sm md:text-base text-gray-600">Weekly sessions for all levels.</p>
               </Card>
               <Card className="p-4 md:p-6 bg-yellow-50 border-none mt-8">
                 <Users className="text-icpc-yellow mb-4" size={32} />
                 <h3 className="font-bold text-lg md:text-xl mb-2 font-outfit">Community</h3>
                 <p className="text-sm md:text-base text-gray-600">A network of passionate coders.</p>
               </Card>
               <Card className="p-4 md:p-6 bg-gray-50 border-none">
                 <Calendar className="text-gray-700 mb-4" size={32} />
                 <h3 className="font-bold text-lg md:text-xl mb-2 font-outfit">Events</h3>
                 <p className="text-sm md:text-base text-gray-600">Hackathons and contests.</p>
               </Card>
               <Card className="p-4 md:p-6 bg-blue-50 border-none mt-8">
                 <Trophy className="text-icpc-blue mb-4" size={32} />
                 <h3 className="font-bold text-lg md:text-xl mb-2 font-outfit">Contests</h3>
                 <p className="text-sm md:text-base text-gray-600">Local and national qualifications.</p>
               </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="py-12 md:py-16 bg-icpc-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Members', value: '500+' },
              { label: 'Contests', value: '50+' },
              { label: 'Workshops', value: '120+' },
              { label: 'Years', value: '10' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-5xl font-outfit font-bold mb-2 text-icpc-yellow">{stat.value}</div>
                <div className="text-base md:text-lg font-playfair italic opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Sponsors */}
       <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our" highlight="Sponsors" centered />
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             {SPONSORS.map(sponsor => (
                <img key={sponsor.id} src={sponsor.logo} alt={sponsor.name} className="h-12 md:h-20 object-contain" />
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to start solving?</h2>
           <p className="text-lg md:text-xl text-gray-600 mb-8">Join the community today and take the first step towards becoming a competitive programmer.</p>
           <Button to="/join" variant="primary" className="text-lg px-8 py-4">Join The Community</Button>
        </div>
      </section>
    </>
  );
};