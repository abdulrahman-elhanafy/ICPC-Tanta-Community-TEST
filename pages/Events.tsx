import React from 'react';
import { EVENTS } from '../constants';
import { SectionTitle, Card, Button } from '../components/UI';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const Events: React.FC = () => {
  const upcomingEvents = EVENTS.filter(e => e.type === 'Upcoming');
  const pastEvents = EVENTS.filter(e => e.type === 'Past');

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle title="Upcoming" highlight="Events" centered />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {upcomingEvents.map(event => (
            <Card key={event.id} className="flex flex-col md:flex-row overflow-hidden border-none shadow-xl">
               <div className="md:w-1/2 h-64 md:h-auto">
                 <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
               </div>
               <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white relative">
                 <div className="absolute top-0 right-0 bg-icpc-yellow text-white px-3 py-1 text-sm font-bold rounded-bl-lg">NEW</div>
                 <h3 className="text-2xl font-playfair font-bold mb-3">{event.title}</h3>
                 <div className="flex items-center text-gray-500 mb-2 text-sm">
                   <Calendar size={16} className="mr-2" /> {event.date}
                 </div>
                 <p className="text-gray-600 mb-6">{event.description}</p>
                 <Button variant="outline" className="w-full md:w-auto">Register Now</Button>
               </div>
            </Card>
          ))}
        </div>

        <SectionTitle title="Past" highlight="Memories" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {pastEvents.map(event => (
             <Card key={event.id} className="group cursor-pointer">
                <div className="relative overflow-hidden h-48">
                   <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-bold border-2 border-white px-4 py-2">View Gallery</span>
                   </div>
                </div>
                <div className="p-6">
                   <h4 className="text-xl font-bold font-playfair mb-2 group-hover:text-icpc-blue transition-colors">{event.title}</h4>
                   <p className="text-sm text-gray-500 mb-3">{event.date}</p>
                   <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
             </Card>
           ))}
        </div>

      </div>
    </div>
  );
};
