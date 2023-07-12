// ./components/Title.js
import Link from 'next/link';
import React from 'react';

const Title = () => {
  return (
    <div className="relative flex items-center scroll-p-10">
      <div className="absolute h-[300px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl content-[''] dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10 after:absolute after:-z-20 after:h-[180px] after:w-[240px] translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl content-[''] dark:from-sky-900 dark:via-[#0141ff]"></div>
      <Link href = "/">
        <h2 className="mb-3 text-4xl font-bold text-black transition duration-500 transform hover:scale-110">SOLVD.laba</h2>
      </Link>
    </div>
  );
};

export default Title;
