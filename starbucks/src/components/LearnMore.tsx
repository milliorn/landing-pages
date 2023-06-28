/* link in box A */
export function LearnMore(): JSX.Element {
  return (
    <p className="mb-5 sm:text-2xl text-xl leading-relaxed mx-1">
      Join Starbucks® Rewards for delicious deals &amp; exclusive offers.
      <a aria-label="home" className="flex sm:inline-flex underline " href="/">
        <span className="mt-4 mx-auto">Learn more</span>
      </a>
    </p>
  );
}
