import Img1 from "../img/box-f1.jpg";
import Img2 from "../img/box-f2.jpg";

/* box f left side button */
function OrderNowLeft(): JSX.Element {
  return (
    <div className="px-0 py-10 bg-gray-200">
      <div className="max-w-xl px-0 py-5 mx-auto my-0 text-center justify-self-center">
        <h2 id="text-sm_BoxF" className="mb-5 lg:text-2xl text-xl font-bold">
          Let the holiday cheer come to you
        </h2>
        <p id="text-sm_BoxF" className="mx-1 my-1 mb-5 text-lg ">
          Make the moment merry. Order Starbucks® holiday favorites on Uber
          Eats.*
        </p>
        <a
          aria-label="home"
          href="/"
          className="inline-block max-w-xl px-4 py-2 mt-5 leading-5 text-center text-black no-underline border-2 border-black border-solid rounded-full cursor-pointer btn bg-none btn-dark-outline"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

/* box f right side button */
function OrderNowRight() {
  return (
    <div className="px-0 py-10 bg-emerald-800 text-white">
      <div className="max-w-xl px-0 py-5 mx-auto my-0 text-center justify-self-center">
        <h2 id="text-sm_BoxF" className="mb-5 lg:text-2xl text-xl font-bold">
          Loved Passing on Netflix?
        </h2>
        <p id="text-sm_BoxF" className="mx-1 my-1 mb-5 text-lg ">
          Our new social series about film adaptations kicks off with the actors
          and directors who brought the book to life.
        </p>
        <a
          aria-label="home"
          href="/"
          className="inline-block max-w-xl px-4 py-2 mt-5 leading-5 text-center no-underline border-2 border-white border-solid rounded-full cursor-pointer btn bg-none btn-dark-outline"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}
/* box f left side */
function BoxLeft(): JSX.Element {
  return (
    <div>
      <img className="max-w-full" src={Img1} alt="" height={820} width={1440} />
      <OrderNowLeft />
    </div>
  );
}

/* box f right side */
function BoxRight(): JSX.Element {
  return (
    <div>
      <img className="max-w-full" src={Img2} alt="" height={820} width={1440} />
      <OrderNowRight />
    </div>
  );
}

/* sixth box */
export function BoxF(): JSX.Element {
  return (
    <section className="grid items-center lg:grid-cols-2 grid-cols-1 gap-8 mb-8">
      <BoxLeft />
      <BoxRight />
    </section>
  );
}
