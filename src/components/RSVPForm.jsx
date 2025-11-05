import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const mailto = `mailto:aditiandarjun@example.com?subject=RSVP%20Confirmation&body=${encodeURIComponent(
      `Hello!%0D%0A%0D%0AThis is my RSVP for Aditi & Arjun's wedding.%0D%0A%0D%0AName: ${name}\nGuests: ${guests}\nMessage: ${message}%0D%0A%0D%0ALooking forward to the celebrations!`
    )}`;

    window.location.href = mailto;
  };

  return (
    <section className="relative w-full py-14 sm:py-20 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2">
            <Mail className="h-4 w-4 text-rose-600" />
            <span className="text-xs font-medium text-rose-700">RSVP</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900">
            Let us know you’re coming
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-neutral-700">
            We can’t wait to celebrate with you. Kindly confirm your presence.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-2xl border border-rose-100 bg-rose-50/40 p-6 sm:p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-neutral-700">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-rose-200 bg-white px-3 py-2 text-neutral-900 shadow-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">Number of Guests</label>
              <input
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value || '1', 10))}
                className="mt-1 w-full rounded-lg border border-rose-200 bg-white px-3 py-2 text-neutral-900 shadow-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-neutral-700">Message (optional)</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 w-full rounded-lg border border-rose-200 bg-white px-3 py-2 text-neutral-900 shadow-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                placeholder="Any notes or wishes"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-3 font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
          >
            <Send className="h-4 w-4" />
            Send RSVP
          </button>

          {submitted && (
            <p className="mt-3 text-sm text-rose-700">
              Opening your email app… If it doesn’t open, please email us at aditiandarjun@example.com
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
