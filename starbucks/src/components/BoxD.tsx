import Img from "../img/box-d.png";

/* 4th box */
export function BoxD(): JSX.Element {
  return (
    <section className="grid items-center justify-between md:grid-cols-2 grid-cols-1 gap-8 mb-8 text-white bg-emerald-800">
      <img
        src={Img}
        alt="BoxD"
        className="max-w-full "
        height={1250}
        width={1440}
      />
      <div className="max-w-md px-0 py-5 mx-auto my-0 mb-8 text-center box-text justify-self-center">
        <h2 className="sm:text-4xl text-3xl font-semibold leading-snug tracking-widest uppercase ">
          Starbucks Thanksgiving Blend
        </h2>
        <p className="py-5 mb-5 sm:text-2xl text-xl leading-relaxed tracking-wider mx-1">
          This elegant dark roast returns, showcasing flavors from some of the
          world’s major coffee-growing regions.
        </p>
        <a
          aria-label="home"
          href="/"
          className="inline-block max-w-xl px-4 py-2 leading-5 text-center no-underline border-2 border-solid rounded-full cursor-pointer btn btn-light-outline bg-none"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
