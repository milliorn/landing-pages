import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const solutions = [
  "Booking",
  "Cruises",
  "Flights",
  "Ground",
  "Travel",
] as const;
const support = ["Documentation", "Pricing", "Refunds", "Tours"] as const;
const company = ["About", "Blog", "Jobs", "Partners", "Press"] as const;
const legal = ["Claims", "Conditions", "Policies", "Privacy", "Terms"] as const;

// Footer component
export default function Footer(): JSX.Element {
  return (
    <div className="w-full mt-24 bg-blue-900 text-blue-50 py-2 px-2">
      <TopFooter />
      <BottomFooter />
    </div>
  );
}

// generate links in footer list
function FooterListGenerator(props: { array: readonly string[] }): JSX.Element {
  const { array } = props;
  return (
    <ul>
      {array.map(
        (item: string): JSX.Element => (
          <li className="py-1" key={item}>
            {item}
          </li>
        )
      )}
    </ul>
  );
}

// top section of footer
function TopFooter(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-6 border-b-2 border-blue-600 py-8 px-4">
      <GenerateFootHeading text={"Company"} element={company} />
      <GenerateFootHeading text={"Legal"} element={legal} />
      <GenerateFootHeading text={"Solutions"} element={solutions} />
      <GenerateFootHeading text={"Support"} element={support} />
      <Newsletter />
    </div>
  );
}

// generate footer headings for list
function GenerateFootHeading(props: {
  text: string;
  element: readonly string[];
}): JSX.Element {
  const { text, element } = props;
  return (
    <div>
      <h2 className="font-bold uppercase pt-2">{text}</h2>
      <FooterListGenerator array={element} />
    </div>
  );
}

// newsletter in top footer
function Newsletter(): JSX.Element {
  return (
    <div className="col-span-2 py-8 md:pt-2">
      <p className="font-bold uppercase">Subscribe to our newsletters</p>
      <p className="py-4">
        The Latest deals, articles and resources sent to your inbox weekly.
      </p>
      <form className="flex flex-col sm:flex-row">
        <input
          className="w-full p-2 mr-4 rounded-md mb-4"
          type="email"
          placeholder="Enter email"
        />
        <button type="button" className="p-2 mb-4 rounded-md">
          Subscribe
        </button>
      </form>
    </div>
  );
}

// bottom section of footer
function BottomFooter(): JSX.Element {
  return (
    <div className="flex flex-col max-w-7xl px-2 py-4 mx-auto justify-between sm:flex-row text-center text-blue-50">
      <Copyright />
      <SocialMedia />
    </div>
  );
}

// copyright code
function Copyright(): JSX.Element {
  return (
    <p className="p-4">
      &copy;{new Date().getFullYear()} Excursions All Rights Reserved
    </p>
  );
}

// social media buttons
function SocialMedia(): JSX.Element {
  return (
    <div className="flex justify-evenly  sm:w-96	pt-4 text-2xl">
      <FaGithub />
      <FaLinkedin />
      <FaTwitter />
    </div>
  );
}
