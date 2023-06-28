// Plans component
export default function Plan(): JSX.Element {
  return (
    <div className="max-w-7xl m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <PlanLeftSide />
      <PlanRightSide />
    </div>
  );
}

// right side of component
function PlanRightSide(): JSX.Element {
  return (
    <div className="flex flex-col h-full justify-center">
      <span className="text-5xl md:text-6xl font-bold">
        Plan Your Next Trip
      </span>
      <p className="text-2xl py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in ab
        architecto? Impedit facilis, natus consectetur molestias porro minima
        laudantium. Nisi atque cumque beatae praesentium ducimus maiores neque
        iusto aliquid.
      </p>
      <p className="pb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores
        veniam odit quis? Dolorum magnam excepturi dignissimos alias deleniti
        eveniet nihil! Eos, non modi beatae architecto consequuntur asperiores
        fuga adipisci.
      </p>
      <div>
        <button
          type="button"
          className="border-black sm:mr-4 m-2 hover:shadow-xl"
        >
          Learn More
        </button>
        <button
          type="button"
          className="bg-black text-white border-black hover:shadow-xl"
        >
          Reserve Your Excursion
        </button>
      </div>
    </div>
  );
}

// left side of component
function PlanLeftSide(): JSX.Element {
  return (
    <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
      <img
        alt="/"
        className="row-span-3 object-cover w-full h-full p-2"
        loading="lazy"
        src="https://source.unsplash.com/random/2560x1440/?Hawaii"
      />
      <img
        alt="/"
        className="row-span-2 object-cover w-full h-full p-2"
        loading="lazy"
        src="https://source.unsplash.com/random/2560x1440/?Paradise"
      />
      <img
        alt="/"
        className="row-span-2 object-cover w-full h-full p-2"
        loading="lazy"
        src="https://source.unsplash.com/random/2560x1440/?Maldives"
      />
      <img
        alt="/"
        className="row-span-3 object-cover w-full h-full p-2"
        loading="lazy"
        src="https://source.unsplash.com/random/2560x1440/?island"
      />
      <img
        alt="/"
        className="row-span-2 object-cover w-full h-full p-2"
        loading="lazy"
        src="https://source.unsplash.com/random/2560x1440/?resort"
      />
    </div>
  );
}
