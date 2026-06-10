import React, {type ReactNode} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FooterItem = {
  label: string;
  to?: string;
  href?: string;
  html?: string;
};

type FooterColumn = {
  title?: string;
  items: FooterItem[];
};

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/ku9nov/faynoSync',
    icon: (
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    ),
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@sergeyku9nov',
    icon: (
      <path d="M2.85 6.6c.03-.27-.07-.54-.27-.72L.65 3.55v-.32h5.6l4.33 9.5 3.8-9.5h5.34v.32l-1.65 1.58c-.14.11-.21.29-.18.47v11.8c-.03.18.04.36.18.47l1.61 1.58v.32h-8.1v-.32l1.67-1.62c.16-.16.16-.21.16-.47V8.21l-4.64 11.8h-.63L3.13 8.21v7.9c-.04.34.07.69.31.94l2.17 2.63v.32H.5v-.32l2.17-2.63c.24-.25.35-.6.3-.94V6.6Z" />
    ),
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/faynosync',
    icon: (
      <path d="M7.83 10.2c-.14-.1-.29-.16-.43-.16h-.66v3.94h.66c.15 0 .29-.05.43-.16.14-.1.21-.26.21-.47v-2.69c0-.2-.07-.36-.21-.46ZM19.74 4H4.26C2.46 4 1 5.46 1 7.26v9.48C1 18.54 2.46 20 4.26 20h15.48c1.8 0 3.26-1.46 3.26-3.26V7.26C23 5.46 21.54 4 19.74 4ZM9.4 13.4c0 .91-.56 2.29-2.34 2.28H4.83V8.32h2.28c1.72 0 2.29 1.37 2.29 2.28v2.8Zm4.94-3.78H11.6v1.62h1.67v1.3H11.6v1.62h2.74v1.3h-3.1c-.5.01-.92-.39-.94-.89V9.21c-.01-.5.38-.92.88-.94h3.16l-.01 1.35Zm5.04 4.96c-.65 1.51-1.81.21-2.33-.6L15.39 8.3h1.49l1.5 4.34 1.5-4.34h1.49l-2.49 6.28Z" />
    ),
  },
];

export default function Footer(): ReactNode {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, links = []} = footer as {
    copyright?: string;
    links: FooterColumn[];
  };
  const logoSrc = useBaseUrl('/img/favicon.png');

  return (
    <footer className="footer footer--dark fyno-footer">
      <div className="container">
        <div className="fyno-footer__top">
          <div className="fyno-footer__brand">
            <Link to="/" className="fyno-footer__brand-link">
              <img src={logoSrc} alt="FaynoSync" className="fyno-footer__logo" />
              <span className="fyno-footer__brand-text">FaynoSync</span>
            </Link>
            <p className="fyno-footer__tagline">
              Powerful auto-updater service for modern applications.
            </p>
            <div className="fyno-footer__socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fyno-footer__social"
                  aria-label={s.label}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="fyno-footer__links">
            {links.map((col, i) => (
              <div className="fyno-footer__col" key={i}>
                {col.title && <div className="fyno-footer__col-title">{col.title}</div>}
                <ul className="fyno-footer__col-items">
                  {col.items.map((item, j) => (
                    <li key={j}>
                      {item.to ? (
                        <Link className="fyno-footer__link" to={item.to}>
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          className="fyno-footer__link"
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer">
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="fyno-footer__bottom">
          <div
            className="fyno-footer__copyright"
            dangerouslySetInnerHTML={{
              __html:
                copyright ??
                `Copyright © ${new Date().getFullYear()} FaynoSync.`,
            }}
          />
          <div className="fyno-footer__bottom-links">
            <a href="https://github.com/ku9nov/faynoSync/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
              License
            </a>
            <a href="https://github.com/ku9nov/faynoSync" target="_blank" rel="noopener noreferrer">
              Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
