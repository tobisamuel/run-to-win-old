import Image from "next/image";
import React from "react";

export default function Test() {
  return (
    <header className="overflow-hidden bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)] pt-8 pb-24 text-slate-400 lg:py-16">
      <div className="mx-auto mt-24 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:mt-56 lg:max-w-7xl lg:px-8">
        <div className="lg:flex">
          <div className="flex-auto">
            <h1 className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[4rem] sm:leading-[4.75rem] lg:text-left">
              Learn the secrets to staying consistent on your fitness journey
            </h1>
            <p className="mt-6 max-w-3xl text-2xl leading-[2.5rem] tracking-tight sm:text-center lg:text-left">
              Define the &apos;Why&apos; of your fitness journey and build
              habits for sustainable fitness and wellness
            </p>
            <div className="mt-12 hidden lg:flex">
              <a
                href="#get-refactoring-ui"
                className="rounded-full border border-white/10 bg-slate-700/40 py-2 px-6 font-semibold text-white hover:border-white/20 hover:bg-slate-700/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Buy the book
              </a>
            </div>
          </div>
          <div className="relative mt-24 flex flex-col items-center lg:mt-0 lg:w-[700px]">
            <div className="relative aspect-[360/509] w-3/4 shadow-2xl sm:w-96 lg:absolute lg:top-12 lg:right-0 lg:h-[495px] lg:w-[350px] lg:rotate-6">
              <Image
                src="/images/book.jpeg"
                alt="No excuse guide"
                layout="fill"
                className="object-fill"
              />
            </div>
            <div className="relative mt-16 flex flex-col sm:flex-row sm:justify-center lg:hidden">
              <button
                type="button"
                className="rounded-full bg-sky-300 py-2 px-6 text-center font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Get two free chapters
              </button>
              <a
                href="#get-refactoring-ui"
                className="mt-6 rounded-full border border-white/10 bg-slate-700/40 py-2 px-6 text-center font-semibold text-white hover:border-white/20 hover:bg-slate-700/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 sm:ml-6 sm:mt-0"
              >
                Buy now
              </a>
            </div>
          </div>
        </div>
        <ul className="relative mx-auto mt-24 max-w-sm text-white lg:mt-56 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-8">
          <li className="">
            <figure>
              <div className="flex justify-center space-x-2 text-slate-500">
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
              </div>
              <blockquote className="mt-6 text-center text-xl leading-[2rem] tracking-tight before:content-['“'] after:content-['”']">
                This is the survival kit I wish I had when I was starting out
                building apps.
              </blockquote>
              <figcaption className="mt-6 flex justify-center">
                {/* <img
                  src="/_next/static/media/derrickreimer.e7cfaa82266167a389409f8f52ef02a6.jpg"
                  alt=""
                  className="h-12 w-12 rounded-full"
                /> */}
                <div className="ml-4">
                  <p className="font-semibold">Derrick Reimer</p>
                  <p className="text-sm text-slate-500">
                    Founder of <a href="https://savvycal.com/">SavvyCal</a>
                  </p>
                </div>
              </figcaption>
            </figure>
          </li>
          <li className="hidden lg:block">
            <figure>
              <div className="flex justify-center space-x-2 text-slate-500">
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
              </div>
              <blockquote className="mt-6 text-center text-xl leading-[2rem] tracking-tight before:content-['“'] after:content-['”']">
                This book is fantastic for engineers learning how to design.
              </blockquote>
              <figcaption className="mt-6 flex justify-center">
                {/* <img
                  src="/_next/static/media/maccaw.e2e0208c49e160eb0618ee8ec9789cca.jpg"
                  alt=""
                  className="h-12 w-12 rounded-full"
                /> */}
                <div className="ml-4">
                  <p className="font-semibold">Alex MacCaw</p>
                  <p className="text-sm text-slate-500">
                    Founder of <a href="https://clearbit.com/">Clearbit</a>
                  </p>
                </div>
              </figcaption>
            </figure>
          </li>
          <li className="hidden lg:block">
            <figure>
              <div className="flex justify-center space-x-2 text-slate-500">
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
                <svg width="24" height="24" fill="currentColor">
                  <path d="M11.055 2.717c.312-.895 1.578-.895 1.89 0l1.648 4.742a1 1 0 0 0 .924.672l5.02.102c.947.02 1.339 1.224.583 1.797l-4 3.033a1 1 0 0 0-.353 1.086l1.453 4.806c.275.907-.75 1.652-1.528 1.11l-4.12-2.867a1 1 0 0 0-1.143 0l-4.121 2.867c-.778.541-1.803-.203-1.528-1.11l1.453-4.806a1 1 0 0 0-.353-1.086l-4-3.033c-.756-.573-.364-1.777.584-1.797l5.019-.102a1 1 0 0 0 .924-.672l1.648-4.742Z"></path>
                </svg>
              </div>
              <blockquote className="mt-6 text-center text-xl leading-[2rem] tracking-tight before:content-['“'] after:content-['”']">
                This book Refactoring UI is a no-brainer for anyone in the web
                industry.
              </blockquote>
              <figcaption className="mt-6 flex justify-center">
                {/* <img
                  src="/_next/static/media/mijustin.4693f549d80543014093ebe573944f88.jpg"
                  alt=""
                  className="h-12 w-12 rounded-full"
                /> */}
                <div className="ml-4">
                  <p className="font-semibold">Justin Jackson</p>
                  <p className="text-sm text-slate-500">
                    Co-founder of{" "}
                    <a href="https://transistor.fm/">Transistor</a>
                  </p>
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </header>
  );
}
