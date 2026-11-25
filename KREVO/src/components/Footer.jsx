import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Find Creators", href: "#creator-marketplace" },
      { label: "Create a Campaign", href: "#how-it-works" },
      { label: "UGC Content", href: "#creator-marketplace" },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    title: "For Creators",
    links: [
      { label: "Join as a Creator", href: "#" },
      { label: "Creator Benefits", href: "#" },
      { label: "Creator FAQs", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About KREVO", href: "#" },
      { label: "FAQs", href: "#faq" },
      { label: "Contact Us", href: "mailto:hello@krevo.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#22201E] text-[#E6E3D6]">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 sm:pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="KREVO home"
              className="inline-block text-3xl font-semibold tracking-[-0.06em]"
            >
              KREVO<span className="text-[#B8B4A9]">.</span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-[#B8B4A9]">
              Bringing brands and creators together to make meaningful,
              creator-led content. Discover the right talent and make every
              collaboration count.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
              <a
                href="#"
                aria-label="KREVO on Instagram"
                className="text-[#E6E3D6] transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href="#"
                aria-label="KREVO on LinkedIn"
                className="text-[#E6E3D6] transition-colors hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-[#E6E3D6]">
                  {group.title}
                </h2>

                <ul className="mt-5 space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm leading-6 text-[#B8B4A9] transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[#B8B4A9]">
            © {new Date().getFullYear()} KREVO. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="#"
              className="text-xs text-[#B8B4A9] transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-[#B8B4A9] transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
