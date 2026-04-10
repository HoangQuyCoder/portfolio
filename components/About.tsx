import { profile } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">About Me</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {profile.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Role', value: profile.role },
                { title: 'Projects', value: '3+ Featured' },
                { title: 'Location', value: profile.location },
                { title: 'Availability', value: 'Open to Work' },
              ].map((card) => (
                <div key={card.title} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                  <h3 className="text-sm text-gray-500 mb-1">{card.title}</h3>
                  <p className="text-xl font-semibold text-blue-400">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            {/* Code Snippet Decoration */}
            <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-white/10 font-mono text-sm">
              <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-400">profile.ts</span>
              </div>
              <div className="p-6 space-y-1">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                <p className="pl-4"><span className="text-gray-300">name:</span> <span className="text-green-400">"{profile.name}"</span>,</p>
                <p className="pl-4"><span className="text-gray-300">role:</span> <span className="text-green-400">"{profile.role}"</span>,</p>
                <p className="pl-4"><span className="text-gray-300">traits:</span> [</p>
                <p className="pl-8"><span className="text-green-400">"Problem Solver"</span>,</p>
                <p className="pl-8"><span className="text-green-400">"Backend Enthusiast"</span>,</p>
                <p className="pl-8"><span className="text-green-400">"Lifelong Learner"</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-gray-300">motto:</span> <span className="text-green-400">"Building efficient & scalable systems"</span></p>
                <p>&#125;;</p>
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
