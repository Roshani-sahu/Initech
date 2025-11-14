import { Zap, Users, Leaf, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Impact() {
  const [activeCard, setActiveCard] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      icon: Zap,
      title: 'Empowering Businesses',
      description: 'We deliver cutting-edge solutions that transform operations, drive growth, and unlock new opportunities for businesses worldwide.',
      stat: '200+',
      statLabel: 'Projects',
      color: '#111111',
      number: '01',
    },
    {
      icon: Users,
      title: 'Enabling Communities',
      description: 'Through innovation and collaboration, we create accessible technology that enriches lives and strengthens communities.',
      stat: '15+',
      statLabel: 'Countries',
      color: '#111111',
      number: '02',
    },
    {
      icon: Leaf,
      title: 'Sustainable Innovation',
      description: 'Our commitment to sustainability drives every decision, ensuring technology that benefits both people and planet.',
      stat: '100%',
      statLabel: 'Carbon Neutral',
      color: '#111111',
      number: '03',
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <div className="max-w-3xl">
            <p className="text-sm font-black text-[#999999] tracking-widest uppercase mb-4">
              IMPACT & INFLUENCE
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#111111] mb-8 leading-tight" style={{ letterSpacing: '-0.03em' }}>
              Our Impact Across Industries
            </h1>
            <div className="w-20 h-1 bg-[#111111] mb-8" />
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Transforming how businesses operate, empowering communities, and building a sustainable future through innovation and collaboration.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-stretch">
          <div className="space-y-6">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveCard(idx)}
                  className="group cursor-pointer"
                >
                  <div
                    className={`p-8 rounded-2xl border-2 transition-all duration-500 relative overflow-hidden ${
                      activeCard === idx
                        ? 'bg-[#111111] border-[#111111] text-white'
                        : 'bg-white border-[#F3F3F3] hover:border-[#D9D9D9]'
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-start gap-6 mb-6">
                        <span className={`text-6xl font-black transition-colors duration-500 ${activeCard === idx ? 'text-gray-400' : 'text-[#F3F3F3]'}`}>
                          {card.number}
                        </span>
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          activeCard === idx
                            ? 'bg-white'
                            : 'bg-[#F3F3F3] group-hover:bg-[#E8E8E8]'
                        }`}>
                          <Icon className={`w-7 h-7 transition-colors duration-500 ${activeCard === idx ? 'text-[#111111]' : 'text-[#111111]'}`} strokeWidth={2} />
                        </div>
                      </div>
                      <h3 className={`text-2xl font-black mb-3 transition-colors duration-500 ${activeCard === idx ? 'text-white' : 'text-[#111111]'}`}>
                        {card.title}
                      </h3>
                      <p className={`text-base leading-relaxed font-light transition-colors duration-500 ${activeCard === idx ? 'text-gray-200' : 'text-gray-600'}`}>
                        {card.description}
                      </p>

                      {activeCard === idx && (
                        <div className="mt-8 pt-8 border-t border-gray-600 flex items-center gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                          <div>
                            <div className="text-4xl font-black text-white">{card.stat}</div>
                            <div className="text-sm text-gray-300 font-light mt-2">{card.statLabel}</div>
                          </div>
                          <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={1.5} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="sticky top-32 h-96 rounded-3xl bg-linear-to-br from-[#F3F3F3] to-[#E8E8E8] p-12 flex flex-col items-center justify-center text-center border-2 border-[#D9D9D9]">
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-linear-to-tr from-[#F3F3F3] via-white to-[#F3F3F3]" style={{ opacity: 0.5 }} />
              </div>

              <div className="relative z-10">
                {cards[activeCard] && (
                  <>
                    <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
                      {cards[activeCard].icon === Zap && <Zap className="w-12 h-12 text-[#111111]" strokeWidth={1.5} />}
                      {cards[activeCard].icon === Users && <Users className="w-12 h-12 text-[#111111]" strokeWidth={1.5} />}
                      {cards[activeCard].icon === Leaf && <Leaf className="w-12 h-12 text-[#111111]" strokeWidth={1.5} />}
                    </div>
                    <h2 className="text-3xl font-black text-[#111111] mb-4">
                      {cards[activeCard].title}
                    </h2>
                    <div className="text-6xl font-black text-[#111111] mb-2">
                      {cards[activeCard].stat}
                    </div>
                    <p className="text-gray-600 font-light">
                      {cards[activeCard].statLabel}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-[#111111] to-[#2a2a2a] rounded-3xl px-12 py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <p className="text-xl text-gray-300 font-light mb-6 tracking-wider">OUR VISION</p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight" style={{ letterSpacing: '-0.03em' }}>
              Together, we're shaping a smarter, more connected, and sustainable future
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;