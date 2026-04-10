import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my expertise across different domains of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div 
              key={group.category} 
              className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all group"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: group.color }}>
                <span className="w-2 h-8 rounded-full" style={{ backgroundColor: group.color }} />
                {group.category}
              </h3>
              
              <div className="space-y-6">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`, 
                          backgroundColor: group.color,
                          boxShadow: `0 0 10px ${group.color}40`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
