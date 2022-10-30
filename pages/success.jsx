import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion as m } from 'framer-motion';
import Confetti from 'react-confetti';

export default function Success() {
  const [pieces, setPieces] = useState(200);
  const router = useRouter();

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='container px-6 mx-auto'
    >
      <section className='flex items-center justify-center h-screen'>
        <div className='p-16 font-latoRegular bg-white rounded-lg shadow-xl overflow-hidden text-gray-700'>
          <h1 className='text-3xl mb-4 font-latoBold'>
            Thanks for signing up{' '}
            <span className='text-teal-500'>{router.query.name}</span> ✨
          </h1>
          <p className='text-lg text-gray-500'>
            We have sent you an email over at{' '}
            <span className='text-teal-500 font-bold'>
              {router.query.email}
            </span>{' '}
            . We will get back to you as soon as we can!
          </p>
        </div>
      </section>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </m.main>
  );
}
