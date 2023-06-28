import Img from "../img/box-b.png";

/* 2nd box */
export function BoxB(): JSX.Element {
  return (
    <section className="grid items-center justify-between sm:grid-cols-2 gap-8 mb-8 text-white bg-rose-600">
      <img
        src={Img}
        alt="BoxB"
        className="max-w-full"
        height={1250}
        width={1440}
      />
      <div className="max-w-md px-0 py-5 mx-auto my-0 mb-8 text-center justify-self-center">
        <h2 className="sm:text-4xl text-3xl font-semibold leading-snug tracking-widest uppercase mx-2">
          New to the nice list
        </h2>
        <p className="py-5 mb-5 sm:text-2xl text-xl leading-relaxed tracking-wider mx-4">
          For a nondairy twist on a holiday cookie classic, try the new Iced
          Sugar Cookie Almond Milk Latte.
        </p>
        <a
          aria-label="home"
          href="/"
          className="inline-block max-w-xl px-4 py-2 leading-5 text-justify no-underline border-2 border-solid rounded-full cursor-pointer btn btn-light-outline bg-none"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
