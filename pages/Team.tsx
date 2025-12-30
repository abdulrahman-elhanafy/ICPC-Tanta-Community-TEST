import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEAM_MEMBERS } from '../constants';
import { SectionTitle, Card, GridBackground } from '../components/UI';
import { TeamMember } from '../types';

export const Team: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  
  const committees = ['All', 'High Board', 'Tech', 'Media', 'PR', 'HR', 'Logistics'];

  const filteredMembers = useMemo(() => {
    if (activeTab === 'All') return TEAM_MEMBERS;
    return TEAM_MEMBERS.filter(m => m.committee === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen py-16 md:py-20 bg-white relative">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Meet Our" 
          highlight="Heroes" 
          subtitle="The dedicated students working behind the scenes to make everything happen."
          centered 
        />

        {/* Filter Tabs - Horizontal Scroll on Mobile */}
        <div className="mb-12 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex md:flex-wrap overflow-x-auto md:overflow-visible gap-2 md:justify-center pb-4 md:pb-0 scrollbar-hide snap-x">
            {committees.map(committee => (
              <button
                key={committee}
                onClick={() => setActiveTab(committee)}
                className={`whitespace-nowrap px-5 py-2 rounded-full font-outfit font-medium transition-all duration-300 snap-center flex-shrink-0 ${
                  activeTab === committee 
                  ? 'bg-icpc-blue text-white shadow-lg scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {committee}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                layout
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-bold">{member.committee}</span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-playfair font-bold text-gray-800">{member.name}</h3>
                    <p className="text-icpc-blue font-lato text-sm uppercase tracking-wide mt-1">{member.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredMembers.length === 0 && (
           <div className="text-center py-20 text-gray-500">
             No members found in this committee.
           </div>
        )}
      </div>
    </div>
  );
};