import { siteConfig } from "@/lib/config";

const nav = ["Home", "Services", "Work", "Process", "About", "Technologies", "Contact"];
const servicesList = [
  "Websites",
  "E-Commerce",
  "Web Applications",
  "Mobile Apps",
  "SEO",
  "Google Ads",
  "Maintenance"
];

export default function Footer() {
  const socialEntries = Object.entries(siteConfig.social).filter(([, url]) => url);

  return (
    <footer className="border-t border-white/5 bg-ink/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold tracking-[0.25em] text-cloud">IZON</p>
            <p className="mt-3 text-xs font-medium tracking-[0.2em] text-teal">
              {siteConfig.signature.toUpperCase()}
            </p>
            <p className="mt-4 max-w-xs text-sm text-mist">{siteConfig.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-mist">NAVIGATION</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-mist transition-colors hover:text-cloud"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-mist">SERVICES</p>
            <ul className="mt-4 space-y-2">
              {servicesList.map((item) => (
                <li key={item} className="text-sm text-mist">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-mist">CONTACT</p>
            <ul className="mt-4 space-y-2 text-sm text-mist">
              <li>{siteConfig.contact.phoneDisplay}</li>
              <li className="break-all">{siteConfig.contact.email}</li>
            </ul>
            {socialEntries.length > 0 && (
              <div className="mt-4 flex gap-3">
                {socialEntries.map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs capitalize text-mist hover:text-teal"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-mist/70">
          © {new Date().getFullYear()} IZON. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
