// ./components/Links.js
import Link from 'next/link';
import React from 'react';


const Links = () => {
  return (
    <div className="mb-32 lg:mb-0 grid grid-cols-1 lg:grid-cols-1 lg:text-left">
      <div className="mb-4">
        <Link
          href="/tasksAndSolutions"
          className="group rounded-lg border border-transparent px-5 py-4 block transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Tasks and solutions{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            The table of tasks and the solutions here.
          </p>
        </Link>
      </div>

      <div className="mb-4">
        <Link
          href="/experimentalTasksAndSolutions"
          className="group rounded-lg border border-transparent px-5 py-4 block transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Experimental page{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            The table of tasks and the solutions here.
          </p>
        </Link>
      </div>

      <div className="mb-4">
        <Link
          href="/author"
          className="group rounded-lg border border-transparent px-5 py-4 block transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About the author{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find out.
          </p>
        </Link>
      </div>

      <div>
        <Link
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 block transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Add your content for the link */}
        </Link>
      </div>
    </div>
  );
};

export default Links;
