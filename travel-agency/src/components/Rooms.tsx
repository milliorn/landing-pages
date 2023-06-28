// Rooms component
function Rooms(): JSX.Element {
  return (
    <div className="max-w-7xl h-[512px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h2 className="text-2xl font-bold">Fine Interior Rooms</h2>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          possimus temporibus maiores assumenda dolor reiciendis fugit! Iusto
          doloribus fuga commodi ex cum atque voluptatem? Dolorem accusamus quos
          possimus fugiat asperiores?
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          loading="lazy"
          src="https://source.unsplash.com/random/2560x1440/?luxury+bathroom"
          alt="/"
        />
        <img
          className="object-cover w-full h-full row-span2"
          loading="lazy"
          src="https://source.unsplash.com/random/2560x1440/?luxury+bedroom"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          loading="lazy"
          src="https://source.unsplash.com/random/2560x1440/?luxury+hotel"
          alt="/"
        />
      </div>
    </div>
  );
}

export default Rooms;
