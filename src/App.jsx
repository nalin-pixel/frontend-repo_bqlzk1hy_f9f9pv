import React from 'react';
import Hero3D from './components/Hero3D';
import CountdownTimer from './components/CountdownTimer';
import EventDetails from './components/EventDetails';
import RSVPForm from './components/RSVPForm';

function App() {
  // Target wedding date for the countdown
  const targetDate = 'December 14, 2025 10:00:00';

  return (
    <div className="min-h-screen w-full bg-white text-neutral-900">
      <Hero3D />
      <CountdownTimer targetDate={targetDate} />
      <EventDetails />
      <RSVPForm />

      <footer className="w-full bg-rose-50 py-8 text-center text-sm text-neutral-600">
        Made with love for family and friends • Aditi & Arjun
      </footer>
    </div>
  );
}

export default App;
