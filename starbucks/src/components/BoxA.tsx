import { LearnMore } from "./LearnMore";

/* 1st box */
export function BoxA(): JSX.Element {
  return (
    <section className="px-0 text-center text-white box bg-primary mb-7 py-7 bg-emerald-800">
      <div className="max-w-3xl mx-auto my-0 box-inner">
        <h2 className="mb-5 sm:text-4xl text-3xl font-semibold leading-snug tracking-widest uppercase ">
          Jingle all the way to free favorites
        </h2>
        <LearnMore />
      </div>
    </section>
  );
}
