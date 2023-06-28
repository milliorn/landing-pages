import { FooterSocialMedia } from "./FooterSocialMedia";

/* footer component below divider */
export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container w-full max-w-7xl my-0 mx-auto pt-0 pb-8">
        <FooterSocialMedia />
        <p className="text-center my-1 mx-0 leading-relaxed	text-sm sm:text-base">
          © {currentYear} Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
