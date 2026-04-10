import { education } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Education</h2>
        
        <div className="space-y-12">
          {education.map((edu) => (
            <div key={edu.institution} className="relative pl-8 border-l-2 border-white/10">
              <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                    <p className="text-blue-400 font-medium">{edu.degree}</p>
                  </div>
                  <span className="px-4 py-1 bg-white/5 rounded-full text-sm text-gray-500 border border-white/10 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-6">{edu.description}</p>

                {edu.graduationProject && (
                  <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest">Graduation Project</h4>
                    </div>
                    <h5 className="text-lg font-bold text-white mb-2">{edu.graduationProject.title}</h5>
                    <p className="text-sm text-gray-400">
                      {edu.graduationProject.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
