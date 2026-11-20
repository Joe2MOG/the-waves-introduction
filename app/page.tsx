"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const introductionDate = new Date("2026-12-26T11:00:00+01:00");

function getTimeLeft() {
  const difference = introductionDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Home() {
  const [opened, setOpened] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(getTimeLeft());
    };

    const initialTimer = window.setTimeout(updateCountdown, 0);

    const interval = window.setInterval(updateCountdown, 1000);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#101820] text-[#f8f3e8]">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.section
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex min-h-screen items-center justify-center px-6"
          >
            <div className="max-w-xl text-center">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm uppercase tracking-[0.3em] text-[#c8b896]"
              >
                A story that started many years ago...
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.2 }}
                className="mt-6 text-4xl font-semibold sm:text-6xl"
              >
                with a Wave.
              </motion.h1>

              <motion.button
                type="button"
                onClick={() => setOpened(true)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="mt-10 rounded-full border border-[#c8b896] px-6 py-3 text-sm tracking-[0.18em] text-[#f8f3e8] transition hover:bg-[#c8b896] hover:text-[#101820]"
              >
                Open Our Introduction
              </motion.button>
            </div>
          </motion.section>
        ) : (
          <motion.div
            key="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* HERO */}
            <section className="relative min-h-screen overflow-hidden">
              <Image
                src="/images/silhouette-one.jpg"
                alt="Precious and Joseph standing together beside the water"
                fill
                priority
                className="object-cover object-[center_62%]"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  className="max-w-xl text-center"
                >
                  <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#e3d6bd]">
                    Precious & Joseph
                  </p>

                  <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
                    The Waves
                  </h1>

                  <p className="mt-5 text-lg text-[#f0ebe2]">
                    Two people. Two families. One beautiful beginning.
                  </p>

                  <p className="mt-8 text-sm tracking-[0.2em] text-[#d6dde2]">
                    26 · 12 · 2026
                  </p>
                </motion.div>
              </div>
            </section>

            {/* ORIGIN STORY */}
            <section className="bg-[#101820] px-6 py-24 text-[#f8f3e8]">
              <div className="mx-auto max-w-2xl text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8 }}
                  className="text-sm uppercase tracking-[0.3em] text-[#c8b896]"
                >
                  It started with a name
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  className="mt-6 text-3xl font-semibold sm:text-5xl"
                >
                  Wave.
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="mx-auto mt-10 max-w-xl space-y-5 text-lg leading-8 text-[#d8dee3]"
                >
                  <p>
                    Back in secondary school, she gave him a name because he was
                    always disturbing her and looking for one reason or another
                    to play with her.
                  </p>

                  <p>
                    She called him{" "}
                    <span className="text-[#f8f3e8]">Wave.</span>
                  </p>

                  <p>
                    Somewhere along the way, he started calling her Wave too.
                  </p>

                  <p className="pt-4 text-xl text-[#f8f3e8]">
                    The name stayed.
                    <br />
                    And so did they.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* TWO FAMILIES */}
            <section className="overflow-hidden bg-[#0c151d] px-6 py-28 text-[#f8f3e8]">
              <div className="mx-auto max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-[#c8b896]">
                    And now
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
                    Two families move toward one beautiful moment.
                  </h2>
                </motion.div>

                <div className="mt-20">
                  <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-[#a9b6bf] sm:text-sm">
                    <span>His family</span>
                    <span>Her family</span>
                  </div>

                  <div className="relative mt-8 h-32">
                    <motion.div
                      initial={{ x: "-45%", opacity: 0 }}
                      whileInView={{ x: "0%", opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.4, ease: "easeOut" }}
                      className="absolute left-0 top-12 w-[48%]"
                    >
                      <svg
                        viewBox="0 0 500 80"
                        className="h-16 w-full overflow-visible"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 40 C70 0, 130 80, 200 40 S330 0, 500 40"
                          fill="none"
                          stroke="#6f8795"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>

                    <motion.div
                      initial={{ x: "45%", opacity: 0 }}
                      whileInView={{ x: "0%", opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.4, ease: "easeOut" }}
                      className="absolute right-0 top-12 w-[48%]"
                    >
                      <svg
                        viewBox="0 0 500 80"
                        className="h-16 w-full overflow-visible"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 40 C70 0, 130 80, 200 40 S330 0, 500 40"
                          fill="none"
                          stroke="#c8b896"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.55 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      className="absolute left-1/2 top-[3.25rem] h-4 w-4 -translate-x-1/2 rounded-full border border-[#f8f3e8]/70"
                    />

                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 2.6, opacity: 0 }}
                      viewport={{ once: true, amount: 0.55 }}
                      transition={{ duration: 1.1, delay: 1.2 }}
                      className="absolute left-1/2 top-[3.25rem] h-4 w-4 -translate-x-1/2 rounded-full border border-[#c8b896]/70"
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="mt-10 text-center"
                  >
                    <p className="text-sm uppercase tracking-[0.28em] text-[#c8b896]">
                      26 December 2026
                    </p>

                    <h3 className="mt-5 text-3xl font-semibold sm:text-4xl">
                      Two families meet.
                    </h3>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#cbd5dc]">
                      What began between two people now becomes a moment shared
                      by the families who raised them, loved them, and will walk
                      with them into the chapter ahead.
                    </p>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* FRUIT BASKETS */}
            <section className="bg-[#101820] px-6 py-28 text-[#f8f3e8]">
              <div className="mx-auto max-w-4xl text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8 }}
                  className="text-sm uppercase tracking-[0.3em] text-[#c8b896]"
                >
                  A family arrives
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="mt-5 text-3xl font-semibold sm:text-5xl"
                >
                  With love, honour, and joyful hearts.
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:gap-10"
                >
                  {[1, 2].map((basket) => (
                    <div key={basket} className="flex flex-col items-center">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: basket === 1 ? 0.3 : 0.45,
                        }}
                        className="relative h-36 w-40 sm:h-44 sm:w-48"
                      >
                        <div className="absolute left-1/2 top-3 h-20 w-28 -translate-x-1/2 rounded-[50%] border-4 border-[#9e7048] border-b-0 sm:h-24 sm:w-32" />

                        <div className="absolute bottom-3 left-1/2 h-20 w-36 -translate-x-1/2 rounded-b-[2.4rem] rounded-t-xl border border-[#c89d6d] bg-[#7b5235]/80 sm:h-24 sm:w-40">
                          <div className="absolute inset-x-3 top-3 border-t border-[#d2aa7a]/60" />
                          <div className="absolute inset-x-3 top-7 border-t border-[#d2aa7a]/60" />
                          <div className="absolute inset-x-3 top-11 border-t border-[#d2aa7a]/60" />
                        </div>

                        <div className="absolute bottom-[4.7rem] left-[2.1rem] h-8 w-8 rounded-full bg-[#c98b45] sm:left-[2.5rem]" />
                        <div className="absolute bottom-[4.4rem] left-[4.2rem] h-9 w-9 rounded-full bg-[#8a9b56] sm:left-[4.7rem]" />
                        <div className="absolute bottom-[4.8rem] right-[2.1rem] h-8 w-8 rounded-full bg-[#b95c4f] sm:right-[2.5rem]" />
                      </motion.div>

                      <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#a9b6bf]">
                        Basket {basket === 1 ? "One" : "Two"}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  className="mx-auto mt-14 max-w-2xl"
                >
                  <p className="text-lg leading-8 text-[#d8dee3]">
                    Joseph and his family come bearing two baskets of fruit as
                    they formally visit Precious&apos;s family, carrying with
                    them love, respect, and the joy of the journey ahead.
                  </p>

                  <p className="mt-7 text-xl leading-8 text-[#f8f3e8]">
                    A simple gift.
                    <br />
                    A meaningful visit.
                    <br />
                    A beautiful beginning for both families.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* FORMAL INVITATION */}
            <section className="relative overflow-hidden bg-[#efe7da] px-6 py-28 text-[#18222b]">
              <div className="absolute inset-x-0 top-0 h-px bg-[#b99a70]/50" />

              <div className="mx-auto max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.9 }}
                  className="text-center"
                >
                  <p className="text-sm uppercase tracking-[0.32em] text-[#8a6a43]">
                    Together with our families
                  </p>

                  <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#6f7478]">
                    We joyfully invite you to the
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                    Marriage Introduction
                  </h2>

                  <div className="mx-auto mt-10 h-px w-24 bg-[#a8865a]/60" />

                  <div className="mt-10">
                    <p className="text-4xl font-semibold sm:text-6xl">
                      Precious
                    </p>

                    <p className="my-3 text-xl italic text-[#8a6a43]">&</p>

                    <p className="text-4xl font-semibold sm:text-6xl">
                      Joseph
                    </p>
                  </div>

                  <p className="mx-auto mt-9 max-w-xl text-lg leading-8 text-[#59636a]">
                    As our families come together, we would be honoured to have
                    you share in this meaningful beginning with us.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.9, delay: 0.15 }}
                  className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-3"
                >
                  <div className="border border-[#cdbb9f] bg-[#f7f1e8] px-5 py-7 text-center">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#8a6a43]">
                      Date
                    </p>

                    <p className="mt-3 text-xl font-semibold">
                      26 December 2026
                    </p>
                  </div>

                  <div className="border border-[#cdbb9f] bg-[#f7f1e8] px-5 py-7 text-center">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#8a6a43]">
                      Time
                    </p>

                    <p className="mt-3 text-xl font-semibold">11:00 AM</p>
                  </div>

                  <div className="border border-[#cdbb9f] bg-[#f7f1e8] px-5 py-7 text-center">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#8a6a43]">
                      Location
                    </p>

                    <p className="mt-3 text-xl font-semibold">
                      Ibadan, Oyo State
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.9, delay: 0.25 }}
                  className="mx-auto mt-10 max-w-3xl border border-[#cdbb9f] bg-[#f7f1e8] p-6 sm:p-9"
                >
                  <p className="text-center text-xs uppercase tracking-[0.3em] text-[#8a6a43]">
                    Directions
                  </p>

                  <div className="mx-auto mt-7 max-w-2xl space-y-5 text-base leading-7 text-[#4f5a61] sm:text-lg sm:leading-8">
                    <p>
                      From <strong className="text-[#18222b]">Iwo Road</strong>,
                      ask where to get a cab going to{" "}
                      <strong className="text-[#18222b]">Ejioku</strong>.
                    </p>

                    <p>
                      Alight at the last bus stop and take another cab going to{" "}
                      <strong className="text-[#18222b]">Apatere</strong>.
                    </p>

                    <p>
                      Tell the driver you are stopping at{" "}
                      <strong className="text-[#18222b]">Network</strong>.
                    </p>

                    <p className="pt-2 text-center font-medium text-[#18222b]">
                      Please call us when you get there.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* COUNTDOWN */}
            <section className="bg-[#0c151d] px-6 py-28 text-[#f8f3e8]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9 }}
                className="mx-auto max-w-4xl text-center"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8b896]">
                  Until our families meet
                </p>

                <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
                  The beginning is getting closer.
                </h2>

                <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
                  {[
                    ["Days", timeLeft.days],
                    ["Hours", timeLeft.hours],
                    ["Minutes", timeLeft.minutes],
                    ["Seconds", timeLeft.seconds],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="border border-[#42505b] bg-[#121e27] px-4 py-7"
                    >
                      <p className="text-4xl font-semibold sm:text-5xl">
                        {String(value).padStart(2, "0")}
                      </p>

                      <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#a9b6bf]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-sm uppercase tracking-[0.26em] text-[#d7c8ad]">
                  26 December 2026 · 11:00 AM
                </p>

                <p className="mt-3 text-sm text-[#9eabb4]">
                  Ibadan, Oyo State
                </p>
              </motion.div>
            </section>

            {/* CLOSING */}
            <section className="relative min-h-screen overflow-hidden">
              <Image
                src="/images/silhouette-two.jpg"
                alt="Precious and Joseph together beside the water"
                fill
                className="object-cover object-[center_62%]"
              />

              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081017]/80 via-transparent to-[#081017]/30" />

              <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 1 }}
                  className="max-w-2xl text-center"
                >
                  <p className="text-sm uppercase tracking-[0.32em] text-[#d9c8a8]">
                    The Waves
                  </p>

                  <h2 className="mt-7 text-4xl font-semibold leading-tight sm:text-6xl">
                    From two Waves,
                    <br />
                    to two families,
                    <br />
                    to one beautiful future.
                  </h2>

                  <div className="mx-auto mt-10 h-px w-20 bg-[#c8b896]/70" />

                  <p className="mt-8 text-xl text-[#f0ebe2]">
                    Precious & Joseph
                  </p>

                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#d6dde2]">
                    26 · 12 · 2026
                  </p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mx-auto mt-10 w-24"
                  >
                    <svg
                      viewBox="0 0 120 30"
                      className="w-full"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 15 C15 3, 30 27, 45 15 S75 3, 90 15 S105 27, 120 15"
                        fill="none"
                        stroke="#c8b896"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>

                  <p className="mt-8 text-sm italic text-[#d8dee3]">
                    We can&apos;t wait to share this beginning with you.
                  </p>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
