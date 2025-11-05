import React, { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return (
    <section className="relative w-full py-14 sm:py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2">
            <Calendar className="h-4 w-4 text-rose-600" />
            <span className="text-xs font-medium text-rose-700">Save the Date</span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900">
            Counting down to our big day
          </h2>

          {timeLeft ? (
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-rose-100 bg-rose-50/50 p-6 shadow-sm"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-rose-700">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-rose-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2">
              <Clock className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                The celebration is live — see you there!
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
