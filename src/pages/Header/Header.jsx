import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";
import { BsFileEarmarkText } from "react-icons/bs";
import { site } from "@/data/sefinContent";

const topCornerLinks = [
  {
    href: site.linkedin,
    label: "LinkedIn",
    Icon: SiLinkedin,
    external: true,
  },
  {
    href: site.github,
    label: "GitHub",
    Icon: SiGithub,
    external: true,
  },
  {
    href: site.leetcode,
    label: "LeetCode",
    Icon: SiLeetcode,
    external: true,
  },
  {
    href: site.resumeUrl,
    label: "Download resume",
    Icon: BsFileEarmarkText,
    download: site.resumeDownloadFilename,
  },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const syncHash = () => {
      const raw = window.location.hash.replace("#", "");
      if (!raw || raw === "top") setActiveLink("home");
      else setActiveLink(raw);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", href: "#top" },
    { id: "skills", icon: FaCode, text: "Skills", href: "#skills" },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      href: "#experience",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", href: "#projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div
        className="fixed z-[60] flex items-center gap-1.5 sm:gap-2 top-3 right-14 md:right-6 md:top-5 pointer-events-none [&>a]:pointer-events-auto"
        aria-label="Social and resume links"
      >
        {topCornerLinks.map(({ href, label, Icon, external, download }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            {...(download ? { download } : {})}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-gray-500/55 text-gray-300 transition-colors duration-200 hover:border-violet-500/65 hover:text-white hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500/80"
          >
            <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
          </a>
        ))}
      </div>

      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">
            <div className="flex justify-between items-center md:hidden px-2">
              <a href="#top" className="text-white font-bold">
                Sefin
              </a>
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                <FaBars />
              </button>
            </div>

            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text, href }) => (
                  <a
                    key={id}
                    href={href}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2
                      hover:bg-white/10 
                      ${
                        activeLink === id
                          ? "bg-white/15 text-white"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base ${
                        activeLink === id ? "scale-110" : ""
                      }`}
                    />
                    <span className="inline">{text}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
