/* sign in button in navbar */
export function SignIn(): JSX.Element {
  return (
    <li className="table my-2 mx-auto sm:mx-1 sm:my-0 font-bold leading-6">
      <button
        type="button"
        className="inline-block px-4 py-2 leading-5 text-center text-black no-underline border-2 border-black border-solid rounded-full cursor-pointer btn bg-none btn-dark-outline"
      >
        Sign in
      </button>
    </li>
  );
}
