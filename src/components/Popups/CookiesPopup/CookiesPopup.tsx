'use client';
import React, {useEffect, useState} from 'react';
import {hasCookie, setCookie} from 'cookies-next';
import {ButtonNavRounded} from '../../ui/buttons/ButtonNavRounded';
import {ButtonRounded} from '../../ui/buttons/ButtonRounded';
import Link from 'next/link';

const CookiesPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (hasCookie('cookies') === false) {
      const timer = setTimeout(() => setShowPopup(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const closePopupHandler = () => {
    setCookie('cookies', 0);
    setShowPopup(false);
  };

  return (
    <div
      className="fixed flex flex-col z-60 bottom-0 left-0 w-screen p-4 bg-white justify-center items-center gap-4 border-orange border-t-2"
      style={{display: showPopup ? 'flex' : 'none'}}
    >
      <p className="text-center">
        Używamy plików cookies, aby zapewnić lepszą obsługę. Kontynuuj
        korzystanie z witryny jeśli się z tym zgadzasz, lub dowiedz się,
        <Link
          className="transition-all duration-500 hover:text-orange border-b-2 border-orange"
          href="https://www.google.com/seLinkrch?q=jak+wy%C5%82%C4%85czy%C4%87+pliki+cookies&sca_esv=5ed3572dacaed608&ei=5VNAaMjJKKawwPAP6eyy6Q0&oq=jak+wy%C5%82%C4%85czy%C4%87+pliki+&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhZqYWsgd3nFgsSFY3p5xIcgcGxpa2kgKgIIADIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I3C5QAFjjJ3AAeAGQAQCYAVWgAYAKqgECMTm4AQPIAQD4AQGYAhOgAtQKwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxjRAxjHAcICBBAuGAPCAggQABiABBixA8ICCxAuGIAEGLEDGIMBwgIIEC4YgAQYsQPCAg4QLhiABBixAxiDARiKBcICChAAGIAEGEMYigXCAgUQLhiABMICCBAuGIAEGNQCwgIOEC4YgAQYsQMYgwEY1ALCAgoQLhiABBhDGIoFwgIOEAAYgAQYsQMYgwEYyQPCAgsQABiABBiSAxiKBcICCxAuGIAEGLEDGNQCwgIKEAAYgAQYyQMYCsICBxAAGIAEGArCAgsQABiABBixAxiLA8ICFxAuGIAEGLEDGIMBGNQCGKQDGKgDGIsDwgIIEAAYgAQYiwOYAwCSBwIxOaAHu9oBsgcCMTm4B9QKwgcEMi0xOcgHTg&sclient=gws-wiz-serp"
        >
          {' '}
          jak wyłączyć pliki cookies
        </Link>
        .
      </p>
      <div className="flex flex-row gap-2">
        <ButtonNavRounded
          href="/assets/statues/Polityka_prywatności.pdf"
          label="Polityka prywatności"
        />
        <ButtonRounded label="Akceptuję" onClick={closePopupHandler} />
        {/* <DefaultLink
          name="Polityka prywatności"
          url="/assets/statues/WebSquirrel_Polityka_prywatności.pdf"
        />
        <DefaultButton name="Akceptuję" onClick={closePopupHandler} /> */}
      </div>
    </div>
  );
};

export default CookiesPopup;
