"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = profile.tagline;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <div className="h-12 mb-8">
          <p className="text-xl md:text-3xl text-gray-400 font-mono">
            {displayText}
            <span className="inline-block w-[3px] h-6 md:h-8 bg-blue-400 ml-1 animate-blink" />
          </p>
        </div>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          {profile.description}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm transition-all border border-white/20"
          >
            View Projects
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8">
          {Object.entries(profile.socials).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors capitalize text-sm font-medium"
            >
              {platform === "linkedin"
                ? "LinkedIn"
                : platform === "github"
                  ? "GitHub"
                  : "Hackerrank"}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </section>
  );
}
