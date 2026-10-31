const navLinks = [
  { label: "產品", href: "#product" },
  { label: "功能", href: "#features" },
  { label: "評價", href: "#reviews" },
];

const features = [
  {
    title: "精準深度感測",
    desc: "高精度壓力感測器，每秒更新深度與上升速率，最深可記錄至 150 公尺。",
    icon: (
      <path d="M12 3v14m0 0-4-4m4 4 4-4M5 21h14" />
    ),
  },
  {
    title: "多氣體潛水模式",
    desc: "支援空氣、高氧（Nitrox 21–100%）與自由潛水模式，水下一鍵切換。",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
  },
  {
    title: "超長續航力",
    desc: "潛水模式可連續使用 40 小時，日常模式長達 14 天，整趟潛旅不必擔心。",
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  },
  {
    title: "藍寶石鏡面",
    desc: "抗刮藍寶石玻璃搭配鈦合金錶殼，100 公尺防水，強光下依然清晰。",
    icon: <path d="M6 3h12l3 6-9 12L3 9l3-6Zm-3 6h18M9 3l3 18 3-18" />,
  },
];

const media = ["Oceanic Daily", "DIVE/LAB", "blue planet", "SEAFARER", "Reefwire"];

const reviews = [
  {
    quote: "第一次用就上手，深度和免減壓時間一眼就看得到，在綠島的流裡也完全不用分心。",
    name: "林小安",
    role: "AOW 潛水員",
  },
  {
    quote: "高氧模式切換很直覺，螢幕在 30 米深還是很亮。終於找到一支能從水下戴到日常的錶。",
    name: "陳宥廷",
    role: "潛水教練",
  },
  {
    quote: "續航真的驚人，一週的潛旅每天三支氣瓶，回台灣還剩一半電量。",
    name: "Mia Huang",
    role: "水下攝影師",
  },
];

// 以 SVG 繪製的潛水電腦錶，用來替代產品照片
function DiveWatch({ className = "" }: { className?: string }) {
  const ticks = Array.from({ length: 60 }, (_, i) => i);
  return (
    <svg viewBox="0 0 400 520" className={className} aria-label="ABYSSAL D1 潛水電腦錶">
      <defs>
        <linearGradient id="strap" x1="0" x2="1">
          <stop offset="0" stopColor="#0f172a" />
          <stop offset="0.5" stopColor="#1e293b" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="bezel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cbd5e1" />
          <stop offset="0.45" stopColor="#64748b" />
          <stop offset="1" stopColor="#1e293b" />
        </linearGradient>
        <radialGradient id="screen" cx="0.4" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#0b2a3c" />
          <stop offset="1" stopColor="#020617" />
        </radialGradient>
      </defs>
      <rect x="140" y="0" width="120" height="150" rx="18" fill="url(#strap)" />
      <rect x="140" y="370" width="120" height="150" rx="18" fill="url(#strap)" />
      {[30, 60, 90, 120].map((y) => (
        <rect key={y} x="185" y={y} width="30" height="6" rx="3" fill="#334155" />
      ))}
      {[400, 430, 460, 490].map((y) => (
        <rect key={y} x="185" y={y} width="30" height="6" rx="3" fill="#334155" />
      ))}
      <rect x="338" y="235" width="22" height="50" rx="6" fill="#94a3b8" />
      <circle cx="200" cy="260" r="150" fill="url(#bezel)" />
      <circle cx="200" cy="260" r="132" fill="#0f172a" />
      {ticks.map((i) => {
        const a = (i * 6 * Math.PI) / 180;
        const long = i % 5 === 0;
        const r1 = 130;
        const r2 = long ? 116 : 123;
        return (
          <line
            key={i}
            x1={200 + r1 * Math.sin(a)}
            y1={260 - r1 * Math.cos(a)}
            x2={200 + r2 * Math.sin(a)}
            y2={260 - r2 * Math.cos(a)}
            stroke={i === 0 ? "#f97316" : "#94a3b8"}
            strokeWidth={long ? 3 : 1.2}
          />
        );
      })}
      <circle cx="200" cy="260" r="108" fill="url(#screen)" />
      <text x="200" y="208" textAnchor="middle" fill="#7dd3fc" fontSize="14" letterSpacing="3">
        DEPTH
      </text>
      <text x="200" y="262" textAnchor="middle" fill="#f8fafc" fontSize="54" fontWeight="700">
        32.4
        <tspan fontSize="20" fill="#7dd3fc"> m</tspan>
      </text>
      <line x1="130" y1="282" x2="270" y2="282" stroke="#1e3a5f" strokeWidth="1.5" />
      <text x="158" y="306" textAnchor="middle" fill="#7dd3fc" fontSize="11" letterSpacing="2">
        TIME
      </text>
      <text x="158" y="328" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="600">
        24&apos;
      </text>
      <text x="242" y="306" textAnchor="middle" fill="#7dd3fc" fontSize="11" letterSpacing="2">
        NDL
      </text>
      <text x="242" y="328" textAnchor="middle" fill="#4ade80" fontSize="20" fontWeight="600">
        18&apos;
      </text>
    </svg>
  );
}

function OutlineButton({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-8 py-3 text-sm tracking-wide transition-colors ${
        dark
          ? "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-[#e4d3b8]"
          : "border-white text-white hover:bg-white hover:text-slate-900"
      }`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col bg-white text-slate-900">
      {/* 導覽列 */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-2 text-xl font-semibold tracking-[0.2em]">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M6 14c2-2 4 2 6 0s4 2 6 0" />
              </svg>
              ABYSSAL
            </a>
            <nav className="hidden gap-8 text-sm md:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="opacity-80 transition-opacity hover:opacity-100">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <OutlineButton href="#product">立即預購</OutlineButton>
        </div>
      </header>

      {/* 主視覺 */}
      <section
        className="relative flex min-h-screen items-end overflow-hidden text-white"
        style={{
          // 大範圍、柔和過渡的漸層疊加，做出不規則的藍、白、灰色塊；底部收深色以銜接下一區
          background: [
            "linear-gradient(180deg, rgba(2,12,20,0) 70%, rgba(2,12,20,0.9) 100%)",
            "radial-gradient(ellipse 45% 40% at 66% 40%, rgba(248,250,252,0.9) 0%, rgba(248,250,252,0) 70%)",
            "radial-gradient(ellipse 40% 55% at 92% 78%, rgba(203,213,225,0.55) 0%, rgba(203,213,225,0) 70%)",
            "radial-gradient(ellipse 55% 45% at 22% 12%, rgba(148,163,184,0.45) 0%, rgba(148,163,184,0) 70%)",
            "radial-gradient(ellipse 50% 50% at 35% 70%, rgba(37,99,170,0.75) 0%, rgba(37,99,170,0) 70%)",
            "linear-gradient(150deg, #0f2a4a 0%, #234d7c 40%, #5d7896 70%, #0c2240 100%)",
          ].join(", "),
        }}
      >
        <DiveWatch className="absolute right-[-10%] top-1/2 h-[75vh] -translate-y-1/2 rotate-12 opacity-90 drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)] md:right-[8%]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 drop-shadow-[0_2px_12px_rgba(15,23,42,0.45)]">
          <p className="mb-4 text-lg text-sky-100">ABYSSAL D1 潛水電腦錶</p>
          <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
            重新定義
            <br />
            水下的每一刻
          </h1>
          <OutlineButton href="#product">立即預購</OutlineButton>
        </div>
      </section>

      {/* 功能特色 */}
      <section id="features" className="bg-[linear-gradient(180deg,#020c14,#0b1c26)] text-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="border-white/15 px-6 pb-16 pt-40 md:border-l md:first:border-l-0">
              <svg
                viewBox="0 0 24 24"
                className="mb-6 h-8 w-8 text-sky-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {f.icon}
              </svg>
              <h3 className="mb-4 text-2xl font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 媒體報導 */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-2xl">媒體報導：</h2>
        <div className="grid grid-cols-2 items-center gap-10 text-slate-800 md:grid-cols-5">
          {media.map((name, i) => (
            <span
              key={name}
              className={`text-center text-2xl font-black ${
                ["italic", "font-serif", "lowercase tracking-tight", "tracking-[0.3em]", "uppercase"][i]
              }`}
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* 產品介紹 */}
      <section id="product" className="bg-[#e4d3b8]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div className="flex justify-center">
            <DiveWatch className="h-[480px] -rotate-6 drop-shadow-[0_30px_40px_rgba(15,23,42,0.35)]" />
          </div>
          <div>
            <h2 className="mb-8 text-5xl leading-tight">
              看得更清楚
              <br />
              潛得更安心
            </h2>
            <p className="mb-10 max-w-md leading-relaxed text-slate-700">
              1.4 吋 AMOLED 高亮度螢幕，深度、潛水時間、免減壓時間（NDL）一目了然。內建
              Bühlmann ZHL-16C 演算法、上升速率警示與安全停留倒數，搭配 App 同步潛水日誌，讓每一次下潛都有紀錄。
            </p>
            <p className="mb-8 text-2xl font-semibold">NT$ 18,800</p>
            <OutlineButton href="#" dark>
              立即預購
            </OutlineButton>
          </div>
        </div>
      </section>

      {/* 使用者評價 */}
      <section id="reviews" className="mx-auto w-full max-w-7xl px-6 py-24 text-center">
        <h2 className="mb-16 text-4xl">潛水員怎麼說</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col items-center">
              <blockquote className="mb-6 text-lg leading-relaxed">「{r.quote}」</blockquote>
              <figcaption className="text-sm text-slate-500">
                {r.name}・{r.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 形象區塊 */}
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,#1b6f8f_0%,#073247_40%,#01070c_100%)] text-white">
        <p className="relative px-6 text-center text-4xl font-light leading-snug md:text-6xl">
          海有多深
          <br />
          我們陪你多深
        </p>
      </section>

      {/* 頁尾 */}
      <footer className="bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm">
            {["使用條款", "運送政策", "退換貨政策", "常見問題"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm">
            {["Instagram", "YouTube", "Facebook"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="mb-4 text-lg">訂閱電子報</h3>
            <div className="flex border-b border-white/40">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-white/50"
              />
              <button type="button" className="text-sm opacity-80 hover:opacity-100">
                訂閱
              </button>
            </div>
          </div>
        </div>
        <p className="border-t border-white/10 py-6 text-center text-xs text-white/50">© 2026 ABYSSAL. All rights reserved.</p>
      </footer>
    </div>
  );
}
