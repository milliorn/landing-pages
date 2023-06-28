import Img from "../img/box-e.jpg";

/* 5th box */
export function BoxE(): JSX.Element {
  return (
    <section className="grid items-center justify-between md:grid-cols-2 grid-cols-1 gap-8 text-white box box-c bg-secondary grid-reversed bg-rose-700 mb-7">
      <img
        src={Img}
        alt=""
        className="md:order-2 order-none max-w-full"
        height={840}
        width={1440}
      />
      <div className="max-w-md px-0 py-5 mx-auto my-0 text-center box-text justify-self-center">
        <h2
          id="text-xl-BoxE"
          className="sm:text-4xl text-3xl font-semibold leading-snug tracking-widest uppercase "
        >
          Fighting hunger this holiday
        </h2>
        <p
          id="text-md-BoxE"
          className="py-5 mb-5 sm:text-2xl text-xl leading-relaxed tracking-wider mx-3"
        >
          Hunger is affecting millions of people across America this holiday
          season. Join us in our commitment to hunger relief and help feed
          neighbors in need.
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
