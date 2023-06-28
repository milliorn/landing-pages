/* join now button in navbar */
export function JoinNow(): JSX.Element {
  return (
    <li className="sm:mx-4 my-0 font-bold leading-6 table mx-auto">
      <button
        type="button"
        className="inline-block px-4 py-2 leading-5 text-center text-white no-underline bg-black border-2 border-black border-solid rounded-full cursor-pointer btn bg-none btn-dark hover:bg-slate-700"
      >
        Join now
      </button>
    </li>
  );
}
