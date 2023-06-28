import Img from "../img/box-c.png";

/* 3rd box */
export function BoxC(): JSX.Element {
  return (
    <section className="grid items-center justify-between md:grid-cols-2 grid-cols-1 gap-8 text-white box box-c bg-secondary grid-reversed bg-rose-700 mb-7">
      <img
        src={Img}
        alt=""
        className="order-2 max-w-full"
        height={1250}
        width={1440}
      />
      <div className="max-w-md px-0 py-5 mx-auto my-0 text-center box-text justify-self-center">
        <h2
          id="text-xl-BoxC"
          className="sm:text-4xl text-3xl font-semibold leading-snug tracking-widest uppercase "
        >
          Merry moment
        </h2>
        <p
          id="text-md-BoxC"
          className="py-5 mb-5 lg:text-2xl text-xl leading-relaxed tracking-wider mx-1"
        >
          Treat yourself to a festive Sugar Plum Cheese Danish with a nicely
          spiced sugar-plum spread.
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
