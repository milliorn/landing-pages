/* create footer at the bottom of the page */
export default function Footer(): JSX.Element {
  return (
    <footer className="bottom-0 w-full p-4 font-sans text-sm text-center lowercase bg-red-400 text-red-50 md:text-xl">
      <a
        className="hover:text-red-900 hover:capitalize"
        href="https://github.com/milliorn"
        rel="noreferrer"
        target="_blank"
      >
        <span>source</span>
      </a>
    </footer>
  );
}
