import { profile, projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-xl">
              Selection of my recent work, showcasing real-world problem solving
              and modern technology stacks.
            </p>
          </div>
          <a
            href={profile.socials.github}
            target="_blank"
            className="hidden md:block text-blue-400 hover:text-blue-300 font-medium"
          >
            View all on GitHub →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                {/* Image Placeholder with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white/20 font-bold text-2xl uppercase tracking-widest">
                  {project.title}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-6 flex-1">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-gray-300 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors font-medium text-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
