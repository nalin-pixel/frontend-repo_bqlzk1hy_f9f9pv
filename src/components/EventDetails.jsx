import React from 'react';
import { MapPin, CalendarDays, PartyPopper } from 'lucide-react';

const EventCard = ({ icon: Icon, title, time, description }) => (
  <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50">
        <Icon className="h-5 w-5 text-rose-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <p className="text-sm text-neutral-600">{time}</p>
      </div>
    </div>
    <p className="mt-3 text-sm text-neutral-700">{description}</p>
  </div>
);

const EventDetails = () => {
  return (
    <section className="relative w-full py-14 sm:py-20 bg-rose-50/50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2">
            <PartyPopper className="h-4 w-4 text-rose-700" />
            <span className="text-xs font-medium text-rose-700">Ceremonies & Celebrations</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900">
            Wedding Festivities
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-neutral-700">
            Join us across two beautiful days filled with traditions, colors, and joy.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <EventCard
            icon={CalendarDays}
            title="Sangeet Night"
            time="Dec 13, 2025 • 7:00 PM"
            description="An evening of music and dance — come groove with us as we kickstart the celebrations. Dress code: Ethnic Glam."
          />
          <EventCard
            icon={CalendarDays}
            title="Wedding Ceremony"
            time="Dec 14, 2025 • 10:00 AM"
            description="Sacred vows and blessings followed by a traditional lunch. Dress code: Traditional Indian."
          />
          <EventCard
            icon={MapPin}
            title="Venue"
            time="The Royal Palace, Jaipur"
            description="Amer Road, Jaipur, Rajasthan 302001. Valet parking available. Outstation guests will have shuttle service from the hotel."
          />
          <EventCard
            icon={PartyPopper}
            title="Reception"
            time="Dec 14, 2025 • 7:30 PM"
            description="Celebrate the newlyweds with dinner and dancing under the stars. Dress code: Cocktail Indian."
          />
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
