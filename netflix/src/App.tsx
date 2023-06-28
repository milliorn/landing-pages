import { useState } from "react";

import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { TabContentCurrent } from "./components/TabContentCurrent";
import { TabContentLeft } from "./components/TabContentLeft";
import { TabContentMiddle } from "./components/TabContentMiddle";
import { TabContentRight } from "./components/TabContentRight";
import { TabSelector } from "./components/TabSelector";

import "./styles/app.css";
import { appTabStyles, netflixUrl } from "./util/data";
import { resetBorder } from "./util/helper";

/**
 * Main page
 * @returns {JSX.Element}
 */
export default function App(): JSX.Element {
  const contentLeft = (
    <TabContentLeft
      alt="cancel anytime"
      href={netflixUrl}
      paragraph="If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime."
      rel="noreferrer"
      span="join free for 30 days"
      srcImg="https://i.ibb.co/J2xDJV7/tab-content-1.png"
      target="_blank"
    />
  );

  const contentMiddle = (
    <TabContentMiddle
      anchorText="join free For 30 Days"
      href={netflixUrl}
      p="Watch TV shows and movies anytime, anywhere — personalized for you."
      rel="noreferrer"
      target="_blank"
    />
  );

  const contentRight = (
    <TabContentRight
      href={netflixUrl}
      p="Choose one plan and watch everything on Netflix."
      rel="noreferrer"
      span="join free For 30 Days"
      target="_blank"
      th1="Basic"
      th2="Standard"
      th3="Premium"
    />
  );

  const [tabContent, setTabContent] = useState(contentLeft);
  const [borderBottom, setborderBottom] = useState(appTabStyles);

  /**
   * When clicked reset the border on the tab and then set the border on the tab selected and set the contents of the tab.
   * @param {Event} e
   */
  function onClickSetTab(e: { currentTarget: { id: object } }): void {
    resetBorder({ e });
    setborderBottom(borderBottom);

    switch (e.currentTarget.id.toString()) {
      case "tab-3":
        setTabContent(contentRight);
        break;
      case "tab-2":
        setTabContent(contentMiddle);
        break;
      case "tab-1":
      default:
        setTabContent(contentLeft);
        break;
    }
  }

  return (
    <div className="h-screen p-0 m-0 bg-black">
      <div className="font-sans antialiased text-gray-400 bg-black">
        <Hero
          alt="netflix logo"
          buttonText="join free for a month"
          h1="See what's next."
          href="https://www.netflix.com/"
          p="Watch anywhere. Cancel Anytime."
          rel="noreferrer"
          signInText="sign in"
          src="https://i.ibb.co/r5krrdz/logo.png"
          target="_blank"
        />

        <TabSelector
          borderBottom={borderBottom}
          onClickSetTab={onClickSetTab}
          pLeft="Cancel any time"
          pMiddle="Watch anywhere"
          pRight="Pick your price"
        />

        <TabContentCurrent tabContent={tabContent} />

        <Footer footerParagraph="Questions? Call 1-866-579-7172" />
      </div>
    </div>
  );
}
