import React, { useState, useEffect } from 'react';
import { MapPin, Utensils, Instagram, ChevronRight, Droplets, Flame, Beer, Navigation, Clock, Thermometer, ArrowLeft, Coffee, Soup, Train, Sun, Moon, Sparkles, Megaphone, Tag } from 'lucide-react';

// --- Custom Illustrations (SVG Components) ---

const SaunaHatIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 10 L85 80 Q85 90 50 90 Q15 90 15 80 Z" />
    <path d="M50 5 L50 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <circle cx="50" cy="5" r="3" />
  </svg>
);

const SaunaBucketIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M20 40 L80 40 L75 90 L25 90 Z" />
    <path d="M20 45 L80 45 L82 35 L18 35 Z" />
    <path d="M50 10 L50 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <rect x="40" y="10" width="20" height="5" rx="2" />
  </svg>
);

const VihtaIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 80 L50 95" stroke="currentColor" strokeWidth="5" />
    <ellipse cx="40" cy="60" rx="15" ry="25" transform="rotate(-20 40 60)" />
    <ellipse cx="60" cy="60" rx="15" ry="25" transform="rotate(20 60 60)" />
    <ellipse cx="50" cy="40" rx="15" ry="25" />
  </svg>
);

const SaunaPerson = ({ className, color = "#0072BC" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="35" r="15" fill={color} />
    <path d="M50 20 L50 10" stroke={color} strokeWidth="3" />
    <path d="M35 50 Q50 45 65 50 L70 85 Q50 90 30 85 Z" fill={color} />
    <path d="M35 28 L65 28 L50 12 Z" fill="#FFD700" />
  </svg>
);

const App = () => {
  const [view, setView] = useState('home'); // 'home' or 'gourmet-list'
  const [selectedCategory, setSelectedCategory] = useState(null);

  const saunas = [
    { id: 1, name: "SHIZUKU 大井町", type: "カプセル・サウナ", temp: "95℃", water: "15℃", tags: ["駅近", "オートロウリュ"], pos: { top: '35%', left: '42%' } },
    { id: 2, name: "品川サウナ", type: "サウナ専門店", temp: "100℃", water: "12℃", tags: ["没入型", "外気浴"], pos: { top: '58%', left: '65%' } },
    { id: 3, name: "大井町 銭湯サウナ", type: "銭湯", temp: "90℃", water: "18℃", tags: ["レトロ", "地域密着"], pos: { top: '75%', left: '35%' } },
  ];

  const categories = [
    { id: 'stamina', label: 'ガッツリ系', icon: <Flame className="w-12 h-12" />, color: 'bg-[#FFD700]', textColor: 'text-black', desc: 'ととのった体には脂とニンニクが正義！' },
    { id: 'light', label: 'サッパリ系', icon: <Soup className="w-12 h-12" />, color: 'bg-[#0072BC]', textColor: 'text-white', desc: '繊細な出汁と涼を味わう究極の水分補給。' },
    { id: 'chill', label: 'チル・カフェ', icon: <Coffee className="w-12 h-12" />, color: 'bg-white', textColor: 'text-gray-900', desc: 'ゆっくり流れる時間。甘いご褒美を添えて。' },
  ];

  const restaurants = [
    { id: 1, name: "大井町スタミナ餃子", category: 'stamina', time: "徒歩3分", desc: "ニンニクたっぷりの餃子がととのい後の体に染みる！", color: "bg-[#FFD700]" },
    { id: 2, name: "麺屋 ととのい", category: 'light', time: "徒歩5分", desc: "あっさり煮干しスープで水分補給もバッチリ。", color: "bg-[#0072BC]" },
    { id: 3, name: "路地裏イタリアン", category: 'chill', time: "徒歩8分", desc: "隠れ家的なお店で、ととのい後のワインを楽しむ。", color: "bg-white" },
    { id: 4, name: "昭和焼肉 大井町", category: 'stamina', time: "徒歩2分", desc: "肉とホルモン。これぞ究極のサ飯体験。", color: "bg-[#FFD700]" },
    { id: 5, name: "手打ち蕎麦 井上", category: 'light', time: "徒歩4分", desc: "キリッと冷えた十割蕎麦でととのいを締めくくる。", color: "bg-[#0072BC]" },
    { id: 6, name: "Oimachi Chill House", category: 'chill', time: "徒歩6分", desc: "こだわりの浅煎りコーヒーと自家製プリン。", color: "bg-white" },
  ];

  const newsItems = [
    { id: 1, date: "2026.04.14", category: "NEW SAUNA", title: "「品川サウナ」待望のグランドオープン！都会の真ん中で究極の没入体験を。", badge: "HOT" },
    { id: 2, date: "2026.04.10", category: "GOURMET", title: "サ飯カテゴリーに「ガッツリ系」の新店舗が3店追加されました。ととのい後の栄養補給に！", badge: "UPDATE" },
    { id: 3, date: "2026.04.05", category: "EVENT", title: "【告知】大井町サウナスタンプラリー開催決定！コンプリートで限定サウナハットをプレゼント。", badge: "INFO" },
  ];

  const coursePlans = [
    {
      id: 'A',
      title: "コースA: 仕事帰りのクイックリセット旅",
      target: "働くサウナーへ",
      accent: "#0072BC",
      icon: <Moon />,
      steps: [
        { time: "18:30", title: "大井町駅に到着", desc: "ネオン輝く大井町駅。仕事の重圧を脱ぎ捨て、期待に胸を膨らませて改札を抜ける。", icon: <Train />, img: "https://images.unsplash.com/photo-1555854811-662552107acc?auto=format&fit=crop&q=80&w=600" },
        { time: "18:45", title: "サウナでリセット", desc: "ロウリュの熱気とアロマの香りに包まれる。水風呂の冷たさが思考を鮮明に変えていく。", icon: <Flame />, img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600" },
        { time: "20:00", title: "最高の水分補給", desc: "火照った身体に「オロポ」を流し込む。喉を通る爽快感が、全ての疲れを溶かしていく。", icon: <Droplets />, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600" },
        { time: "20:30", title: "スタミナサ飯で完結", desc: "名物の餃子とビール。ととのった後の味覚で味わう至高の一皿に感謝。", icon: <Utensils />, img: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600" }
      ]
    },
    {
      id: 'B',
      title: "コースB: 休日午後の満喫ハシゴ旅",
      target: "自分へのご褒美に",
      accent: "#FFD700",
      icon: <Sun />,
      steps: [
        { time: "13:00", title: "昼下がりのチルタイム", desc: "喧騒を離れたカフェで読書を楽しみながら、サウナ前の贅沢なひとときを。", icon: <Coffee />, img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600" },
        { time: "15:00", title: "ゆったり没入サウナ", desc: "昼間の外気浴は大井町の空と一体になる感覚。時間を忘れて、深く、心地よくととのう。", icon: <Sparkles />, img: "https://images.unsplash.com/photo-1596131397999-bb0159495033?auto=format&fit=crop&q=80&w=600" },
        { time: "17:30", title: "路地裏のハシゴ酒", desc: "夕暮れ時の東小路へ。提灯の明かりに誘われて、大井町ディープな食文化をハシゴする。", icon: <Navigation />, img: "https://images.unsplash.com/photo-1583155102374-f25769742512?auto=format&fit=crop&q=80&w=600" },
        { time: "20:00", title: "最高の気分で家路に", desc: "全身が幸福感で満たされる。明日へのエネルギーを大井町の街から受け取って終了。", icon: <Moon />, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600" }
      ]
    }
  ];

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    setView('gourmet-list');
    window.scrollTo({ top: document.getElementById('gourmet').offsetTop - 100, behavior: 'smooth' });
  };

  const backToHome = () => {
    setView('home');
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#F0F7FF] selection:bg-[#FFD700]">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none opacity-5 overflow-hidden">
        <SaunaHatIcon className="absolute top-20 left-[10%] w-40 text-[#0072BC]" />
        <SaunaBucketIcon className="absolute bottom-40 right-[5%] w-60 text-[#FFD700]" />
        <VihtaIcon className="absolute top-1/2 left-[5%] w-32 text-green-600" />
      </div>

      {/* Header */}
      <header className="fixed top-4 left-4 right-4 z-50">
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border-4 border-[#0072BC] rounded-full px-6 py-2 flex justify-between items-center shadow-xl">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <SaunaHatIcon className="text-[#0072BC] w-8 h-8" />
            <span className="font-black text-lg md:text-xl tracking-tighter text-[#0072BC]">大井町サウナプロジェクト</span>
          </div>
          <nav className="hidden lg:flex gap-6 font-black text-xs uppercase tracking-tighter">
            <a href="#concept" className="hover:text-[#FFD700] transition-colors">Concept</a>
            <a href="#map" className="hover:text-[#FFD700] transition-colors">Sauna Map</a>
            <a href="#gourmet" className="hover:text-[#FFD700] transition-colors">Sa-Meshi</a>
            <a href="#course" className="hover:text-[#FFD700] transition-colors">Model Course</a>
            <a href="#news" className="hover:text-[#FFD700] transition-colors">News</a>
            <a href="#sns" className="hover:text-[#FFD700] transition-colors">Social</a>
          </nav>
          <button className="bg-[#FFD700] border-2 border-black px-4 py-1.5 rounded-full font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-none transition-all">
            ととのいMAP
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-none tracking-tighter">
            大井町で、<br />
            <span className="text-[#0072BC] relative">
              ととのい
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#FFD700" strokeWidth="8" fill="none" />
              </svg>
            </span>
            、<br />満たされる。
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold text-gray-600 max-w-2xl mx-auto">
            極上のサウナ施設と、ディープな飲食店街が交差する。<br className="hidden md:block" />
            ここは、サウナーのために用意された「品川の楽園」。
          </p>
        </div>
      </section>

      {/* Concept Section (SA-U-NA) */}
      <section id="concept" className="relative py-24 overflow-hidden border-y-4 border-black">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=2000" 
            alt="Oimachi Cityscape" 
            className="w-full h-full object-cover grayscale opacity-20"
           />
           <div className="absolute inset-0 bg-[#0072BC]/40 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="bg-white/90 backdrop-blur-sm border-4 border-black rounded-[40px] p-6 md:p-12 shadow-[16px_16px_0px_0px_rgba(255,215,0,1)]">
            <div className="mb-10 text-center md:text-left">
              <span className="text-[#0072BC] font-black text-xl md:text-2xl mb-2 block tracking-tight">＃サウナーの多い街</span>
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-snug">
                このプロジェクトの掛け声は…<br className="md:hidden" />
                <span className="text-[#0072BC] text-4xl md:text-6xl ml-2 inline-block">サ・ウ・ナ！</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 space-y-6">
                {[
                  { char: 'サ！', text: '再開発で生まれ変わる街' },
                  { char: 'ウ！', text: 'ウェルビーイングが日常にある暮らし' },
                  { char: 'ナ！', text: '何度も通いたくなる回遊都市' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-white border-4 border-[#0072BC] rounded-full flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,114,188,1)] group-hover:scale-110 transition-transform">
                      <span className="text-[#0072BC] font-black text-xl md:text-3xl">{item.char}</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-[1.2rem] sm:text-2xl lg:text-[2.6rem] font-black text-gray-800 tracking-tighter leading-none whitespace-nowrap">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="md:col-span-2 flex justify-center items-center relative">
                <div className="relative w-full aspect-square max-w-[300px]">
                  <div className="absolute inset-0 bg-[#D8B4FE] rounded-full opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center transform translate-y-4">
                    <SaunaPerson className="w-4/5 h-4/5 drop-shadow-2xl" />
                  </div>
                  <div className="absolute bottom-10 left-0 right-0 h-10 border-t-2 border-black/20 flex justify-between px-4">
                    <div className="w-0.5 h-full bg-black/10"></div>
                    <div className="w-0.5 h-full bg-black/10"></div>
                    <div className="w-0.5 h-full bg-black/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-4 mb-2">
              <SaunaHatIcon className="w-12 h-12 text-[#0072BC]" />
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase">Sauna Map</h2>
              <SaunaBucketIcon className="w-12 h-12 text-[#FFD700]" />
            </div>
            <p className="font-bold text-gray-500">大井町周辺の「ととのい」スポットを網羅。</p>
          </div>

          <div className="bg-white border-4 border-black rounded-[40px] p-4 md:p-8 min-h-[600px] relative shadow-[16px_16px_0px_0px_rgba(0,114,188,1)] overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" className="fill-none stroke-[#0072BC]" strokeWidth="2" strokeDasharray="8 8">
                <circle cx="50%" cy="50%" r="30%" />
                <path d="M0,0 L1000,1000 M1000,0 L0,1000" />
              </svg>
            </div>
            
            {saunas.map((sauna) => (
              <div 
                key={sauna.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group z-10"
                style={{ top: sauna.pos.top, left: sauna.pos.left }}
              >
                <div className="relative">
                  <div className="bg-[#0072BC] p-3 rounded-2xl shadow-lg border-2 border-black group-hover:-translate-y-2 transition-transform">
                    <MapPin className="text-white w-8 h-8 mx-auto" />
                    <div className="absolute top-0 left-full ml-3 bg-white border-2 border-black p-3 rounded-xl shadow-xl whitespace-nowrap hidden group-hover:block transition-all">
                      <p className="font-black text-[#0072BC] text-sm">{sauna.name}</p>
                      <div className="flex gap-2 mt-1">
                        <span className="flex items-center gap-1 text-[10px] font-black bg-red-50 text-red-500 px-1.5 rounded border border-red-200">
                          <Thermometer size={10} /> {sauna.temp}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] font-black bg-blue-50 text-blue-500 px-1.5 rounded border border-blue-200">
                          <Droplets size={10} /> {sauna.water}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="font-black text-xs bg-white px-2 py-0.5 rounded-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {sauna.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute bottom-8 left-8 flex items-end gap-2 opacity-40">
               <SaunaPerson className="w-16 h-16" />
               <div className="bg-gray-100 p-2 rounded-t-xl rounded-r-xl text-[10px] font-black border border-black">
                 今日も最高のととのいを...
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gourmet Section (Sa-Meshi) */}
      <section id="gourmet" className="py-24 bg-[#FFD700]/5 border-y-4 border-black min-h-[600px] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          {view === 'home' ? (
            <div className="animate-in fade-in duration-500">
              <div className="flex flex-col items-center mb-16 text-center relative">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black text-[#0072BC] opacity-[0.06] tracking-[0.2em] pointer-events-none select-none uppercase whitespace-nowrap">
                  Sa-Meshi
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-4 relative z-10 whitespace-nowrap">
                  サ飯を探す
                </h2>
                <div className="w-24 h-2 bg-[#FFD700] rounded-full mb-4 relative z-10"></div>
                <p className="font-bold text-gray-600 max-w-xl relative z-10">
                  大井町の街が、あなたのととのいを完結させる。<br/>
                  ジャンルを選んで、最高のサ飯を見つけよう。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((cat) => (
                  <div 
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`${cat.color} border-4 border-black rounded-[40px] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group flex flex-col items-center text-center`}
                  >
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      {cat.icon}
                    </div>
                    <h3 className={`text-3xl font-black mb-4 ${cat.textColor}`}>{cat.label}</h3>
                    <p className={`text-sm font-bold opacity-80 mb-8 ${cat.textColor}`}>
                      {cat.desc}
                    </p>
                    <div className={`mt-auto bg-black ${cat.id === 'light' ? 'bg-white text-black' : 'text-white'} px-6 py-2 rounded-full font-black text-xs flex items-center gap-2`}>
                      一覧を見る <ChevronRight size={14} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="animate-in slide-in-from-right duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <button 
                  onClick={backToHome}
                  className="flex items-center gap-2 font-black text-[#0072BC] hover:translate-x-1 transition-transform"
                >
                  <ArrowLeft size={24} /> 戻る
                </button>
                <div className="text-center md:text-right">
                  <h2 className="text-4xl font-black text-gray-900 tracking-tighter">
                    {categories.find(c => c.id === selectedCategory)?.label}の店舗
                  </h2>
                  <p className="text-gray-400 font-bold">大井町のおすすめサ飯リスト</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {restaurants
                  .filter(r => r.category === selectedCategory)
                  .map((res) => (
                  <div key={res.id} className="bg-white border-4 border-black rounded-[32px] p-6 shadow-xl hover:-translate-y-1 transition-all">
                    <div className={`aspect-video rounded-2xl mb-4 flex items-center justify-center border-2 border-black ${res.color}`}>
                       {selectedCategory === 'stamina' ? <Flame className="w-12 h-12 text-white drop-shadow-md" /> : selectedCategory === 'light' ? <Soup className="w-12 h-12 text-white drop-shadow-md" /> : <Coffee className="w-12 h-12 text-gray-400 drop-shadow-md" />}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex items-center gap-1 bg-black text-white text-[10px] font-black px-2 py-0.5 rounded">
                        <Clock size={10} /> {res.time}
                      </span>
                    </div>
                    <h3 className="font-black text-xl mb-3 tracking-tight">{res.name}</h3>
                    <p className="text-gray-500 text-xs font-bold leading-relaxed mb-6">
                      {res.desc}
                    </p>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-dashed border-gray-100">
                      <span className="text-[10px] font-black text-[#0072BC]">VIEW MORE</span>
                      <div className="w-8 h-8 bg-[#FFD700] rounded-full border-2 border-black flex items-center justify-center">
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Model Course Section */}
      <section id="course" className="py-24 bg-[#0072BC] text-white overflow-hidden relative">
        <SaunaHatIcon className="absolute top-10 right-[5%] w-32 text-white/10 rotate-12" />
        <SaunaBucketIcon className="absolute bottom-10 left-[5%] w-40 text-white/10 -rotate-12" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-[#FFD700] text-black px-4 py-1 rounded font-black text-xs -rotate-2 inline-block mb-4 shadow-lg uppercase tracking-widest">Model Course</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">おすすめモデルコース</h2>
            <p className="font-bold opacity-80 text-lg">あなたに合わせた「ととのい」の歩き方。</p>
          </div>

          <div className="space-y-24">
            {coursePlans.map((course) => (
              <div key={course.id} className="relative">
                <div className="flex items-center gap-4 mb-10 border-l-8 pl-6" style={{ borderColor: course.accent }}>
                   <div className="p-3 rounded-2xl bg-white text-gray-900 shadow-xl">
                      {course.icon}
                   </div>
                   <div>
                     <h3 className="text-2xl md:text-4xl font-black tracking-tight">{course.title}</h3>
                     <p className="font-bold text-[#FFD700] mt-1">{course.target}</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                  {course.steps.map((step, i) => (
                    <div key={i} className="relative group">
                      {i < 3 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                          <ChevronRight className="text-[#FFD700] w-8 h-8" />
                        </div>
                      )}
                      
                      <div className="bg-white rounded-[32px] overflow-hidden border-4 border-black text-gray-900 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                        <div className="h-44 overflow-hidden relative border-b-4 border-black bg-gray-200">
                          <img 
                            src={step.img} 
                            alt={step.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                          />
                          <div className="absolute top-3 left-3 bg-[#FFD700] border-2 border-black rounded-full w-10 h-10 flex items-center justify-center text-black shadow-md z-10">
                            {step.icon}
                          </div>
                          <div className="absolute bottom-0 right-0 bg-black text-white px-4 py-1 font-black text-xs rounded-tl-xl border-l-2 border-t-2 border-white/20">
                            STEP {i+1}
                          </div>
                        </div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                          <span className="text-[#0072BC] font-black text-lg mb-1">{step.time}</span>
                          <h4 className="font-black text-xl mb-3 leading-tight">{step.title}</h4>
                          <p className="text-gray-500 text-xs font-bold leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <div className="inline-block bg-white/10 backdrop-blur-md px-10 py-6 rounded-[32px] border-2 border-white/20">
                <p className="font-black text-xl text-[#FFD700] italic mb-2">
                  大井町は、何度来ても新しい「ととのい」がある。
                </p>
                <p className="font-bold text-sm opacity-70">
                  各施設や飲食店で、あなただけのサウナストーリーを。
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-16 text-center relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl font-black text-gray-100 opacity-50 tracking-[0.2em] pointer-events-none select-none uppercase">
              What's New
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4 relative z-10">
              お知らせ
            </h2>
            <div className="w-16 h-1.5 bg-[#0072BC] rounded-full mb-4 relative z-10"></div>
          </div>

          <div className="space-y-4">
            {newsItems.map((news) => (
              <div key={news.id} className="group bg-white border-4 border-black rounded-3xl p-6 flex flex-col md:flex-row md:items-center gap-6 shadow-[8px_8px_0px_0px_rgba(0,114,188,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="bg-[#FFD700] border-2 border-black px-3 py-1 rounded-lg font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {news.badge}
                  </div>
                  <span className="font-bold text-gray-400 text-sm tracking-widest">{news.date}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Tag size={12} className="text-[#0072BC]" />
                    <span className="text-[10px] font-black text-[#0072BC] tracking-widest uppercase">{news.category}</span>
                  </div>
                  <h3 className="font-black text-lg md:text-xl leading-tight group-hover:text-[#0072BC] transition-colors">{news.title}</h3>
                </div>
                <div className="flex-shrink-0 flex items-center justify-end">
                   <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border-2 border-black group-hover:bg-[#FFD700] transition-colors">
                     <ChevronRight size={20} />
                   </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="font-black text-sm text-gray-500 hover:text-[#0072BC] flex items-center gap-2 mx-auto transition-colors">
              すべてのお知らせを見る <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <Megaphone className="absolute -bottom-10 -right-10 w-48 h-48 text-[#0072BC]/5 -rotate-12" />
      </section>

      {/* Instagram Section */}
      <section id="sns" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-2 uppercase">Instagram</h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#E1306C] font-black text-xl">
                <Instagram size={24} /> <span>＃サウナーの多い街</span>
              </div>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-xl font-black flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(0,114,188,1)] active:translate-y-1 active:shadow-none transition-all">
              公式アカウントをフォロー
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-white border-4 border-black rounded-[32px] overflow-hidden group relative shadow-lg hover:-translate-y-1 transition-all">
                <div className="absolute inset-0 bg-[#0072BC]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <Instagram className="text-white w-10 h-10" />
                </div>
                <div className="w-full h-full flex items-center justify-center bg-gray-50 p-6">
                  {i % 2 === 0 ? <SaunaHatIcon className="w-full text-gray-200" /> : <SaunaBucketIcon className="w-full text-gray-200" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-8 border-[#0072BC] pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <SaunaHatIcon className="text-[#0072BC] w-12 h-12" />
                <span className="font-black text-3xl tracking-tighter text-[#0072BC]">大井町サウナプロジェクト</span>
              </div>
              <p className="font-bold text-gray-500 leading-relaxed mb-8">
                サウナは単なる入浴施設ではありません。それは、自分自身と向き合い、街の魅力を再発見するための儀式です。
                大井町のサウナと飲食店がタッグを組み、あなたの「ととのい」を全力でサポートします。
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#0072BC] rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Instagram />
                </div>
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white shadow-lg font-black text-xl">
                  X
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="font-black text-[#0072BC] mb-6 border-b-4 border-[#0072BC]/10 inline-block">MENU</h4>
                <ul className="space-y-4 font-black text-gray-600">
                  <li><a href="#" className="hover:text-[#0072BC] flex items-center gap-2" onClick={() => setView('home')}><ChevronRight size={14}/> サウナを探す</a></li>
                  <li><a href="#" className="hover:text-[#0072BC] flex items-center gap-2" onClick={() => setView('home')}><ChevronRight size={14}/> 飲食店を探す</a></li>
                  <li><a href="#" className="hover:text-[#0072BC] flex items-center gap-2" onClick={() => setView('home')}><ChevronRight size={14}/> モデルコース</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-[#0072BC] mb-6 border-b-4 border-[#0072BC]/10 inline-block">CONTACT</h4>
                <ul className="space-y-4 font-black text-gray-600">
                  <li><a href="#" className="hover:text-[#0072BC]">お問い合わせ</a></li>
                  <li><a href="#" className="hover:text-[#0072BC]">運営会社</a></li>
                  <li><a href="#" className="hover:text-[#0072BC]">加盟希望の店舗様へ</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-10 border-t-2 border-dashed border-gray-100">
             <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
               Stay Hydrated. Get Totonoied. <br/>
               © 2024 Oimachi Sauna Project.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
