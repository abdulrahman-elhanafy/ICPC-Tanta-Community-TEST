import React from 'react';
import { ROADMAP_MATERIALS } from '../constants';
import { SectionTitle, Card, Button } from '../components/UI';
import { FileText, PlayCircle, Layers } from 'lucide-react';

export const Roadmaps: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Video': return <PlayCircle size={20} />;
      case 'Sheet': return <FileText size={20} />;
      case 'Slides': return <Layers size={20} />;
      default: return <FileText size={20} />;
    }
  };

  const categories = ['Level 0', 'Level 1', 'Advanced'];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Learning" highlight="Materials" centered subtitle="Curated resources to guide your path." />
        
        <div className="space-y-16">
          {categories.map(category => {
            const items = ROADMAP_MATERIALS.filter(m => m.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-px bg-gray-300 flex-grow"></div>
                   <h2 className="text-3xl font-playfair font-bold text-gray-800">{category}</h2>
                   <div className="h-px bg-gray-300 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map(item => (
                    <Card key={item.id} className="p-6 hover:border-icpc-blue border border-transparent transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-lg ${
                            item.type === 'Video' ? 'bg-red-100 text-red-600' : 
                            item.type === 'Sheet' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                            {getIcon(item.type)}
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.type}</span>
                      </div>
                      <h3 className="text-xl font-bold font-outfit mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500 mb-6">{item.description}</p>
                      <Button variant="outline" className="w-full !py-2 text-sm">View Resource</Button>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
