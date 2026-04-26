import { useState } from 'react'

/* ─── SVG Mockups ─────────────────────────────────────────────── */

function MockupDashboard() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="400" height="280" fill="#0f172a" />
      {/* Sidebar */}
      <rect width="70" height="280" fill="#1e293b" />
      <circle cx="35" cy="30" r="12" fill="#8b5cf6" />
      {[70,105,140,175,210].map((y, i) => (
        <rect key={i} x="14" y={y} width="42" height="8" rx="4" fill={i === 0 ? '#8b5cf6' : '#334155'} />
      ))}
      {/* Top bar */}
      <rect x="70" y="0" width="330" height="44" fill="#1e293b" />
      <rect x="88" y="15" width="90" height="14" rx="7" fill="#334155" />
      <circle cx="370" cy="22" r="10" fill="#334155" />
      <circle cx="345" cy="22" r="10" fill="#334155" />
      {/* Stat cards */}
      {[
        { x: 88, color: '#8b5cf6', label: 'Revenue', val: '$48.2K' },
        { x: 207, color: '#06b6d4', label: 'Users', val: '12,430' },
        { x: 326, color: '#10b981', label: 'Growth', val: '+24%' },
      ].map((c) => (
        <g key={c.x}>
          <rect x={c.x} y="56" width="107" height="62" rx="8" fill="#1e293b" />
          <rect x={c.x + 10} y="66" width="18" height="18" rx="4" fill={c.color} opacity="0.2" />
          <rect x={c.x + 13} y="70" width="12" height="10" rx="2" fill={c.color} />
          <rect x={c.x + 10} y="90" width="50" height="6" rx="3" fill="#64748b" />
          <rect x={c.x + 10} y="100" width="70" height="10" rx="3" fill="#f1f5f9" />
        </g>
      ))}
      {/* Chart area */}
      <rect x="88" y="130" width="220" height="130" rx="8" fill="#1e293b" />
      <rect x="100" y="140" width="80" height="8" rx="4" fill="#f1f5f9" />
      <rect x="100" y="152" width="50" height="6" rx="3" fill="#64748b" />
      {/* Chart lines */}
      <polyline points="100,240 130,210 160,225 190,190 220,200 250,170 280,185" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="100,250 130,240 160,245 190,230 220,238 250,220 280,225" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      {/* Area fill */}
      <polygon points="100,240 130,210 160,225 190,190 220,200 250,170 280,185 280,260 100,260" fill="#8b5cf6" opacity="0.08" />
      {/* Table */}
      <rect x="320" y="130" width="60" height="130" rx="8" fill="#1e293b" />
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <circle cx="334" cy={150 + i * 22} r="7" fill="#334155" />
          <rect x="346" y={145 + i * 22} width="24" height="5" rx="2" fill="#475569" />
          <rect x="346" y={153 + i * 22} width="16" height="4" rx="2" fill="#334155" />
        </g>
      ))}
    </svg>
  )
}

function MockupEcommerce() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="400" height="280" fill="#f8fafc" />
      {/* Header */}
      <rect width="400" height="48" fill="#ffffff" />
      <rect x="16" y="16" width="60" height="16" rx="4" fill="#8b5cf6" />
      <rect x="140" y="19" width="40" height="10" rx="5" fill="#cbd5e1" />
      <rect x="190" y="19" width="40" height="10" rx="5" fill="#cbd5e1" />
      <rect x="240" y="19" width="40" height="10" rx="5" fill="#cbd5e1" />
      <rect x="330" y="12" width="60" height="24" rx="12" fill="#8b5cf6" />
      {/* Search bar */}
      <rect x="16" y="56" width="280" height="30" rx="15" fill="#f1f5f9" />
      <rect x="30" y="67" width="80" height="8" rx="4" fill="#cbd5e1" />
      {/* Filter chips */}
      <rect x="16" y="96" width="48" height="20" rx="10" fill="#8b5cf6" />
      <rect x="70" y="96" width="60" height="20" rx="10" fill="#f1f5f9" />
      <rect x="136" y="96" width="72" height="20" rx="10" fill="#f1f5f9" />
      <rect x="214" y="96" width="54" height="20" rx="10" fill="#f1f5f9" />
      {/* Product grid */}
      {[
        { x: 16, y: 126, color: '#ddd6fe' },
        { x: 142, y: 126, color: '#bfdbfe' },
        { x: 268, y: 126, color: '#bbf7d0' },
        { x: 16, y: 210, color: '#fde68a' },
        { x: 142, y: 210, color: '#fecdd3' },
        { x: 268, y: 210, color: '#e0e7ff' },
      ].map((p, i) => (
        <g key={i}>
          <rect x={p.x} y={p.y} width="116" height="62" rx="8" fill={p.color} />
          <rect x={p.x} y={p.y + 68} width="116" height="8" rx="3" fill="#1e293b" />
          <rect x={p.x} y={p.y + 80} width="60" height="6" rx="3" fill="#94a3b8" />
          <rect x={p.x + 76} y={p.y + 76} width="40" height="14" rx="7" fill="#8b5cf6" />
        </g>
      ))}
    </svg>
  )
}

function MockupBranding() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background split */}
      <rect width="400" height="280" fill="#faf5ff" />
      <rect width="200" height="280" fill="#1e1b4b" />
      {/* Logo area - left */}
      <text x="100" y="110" textAnchor="middle" fontFamily="serif" fontSize="36" fontWeight="bold" fill="#8b5cf6">A</text>
      <text x="100" y="135" textAnchor="middle" fontFamily="sans-serif" fontSize="11" letterSpacing="6" fill="#c4b5fd">AURRA</text>
      <rect x="60" y="145" width="80" height="1" fill="#4c1d95" />
      <text x="100" y="162" textAnchor="middle" fontFamily="sans-serif" fontSize="7" letterSpacing="3" fill="#7c3aed">CREATIVE STUDIO</text>
      {/* Color palette - left bottom */}
      {['#8b5cf6','#a78bfa','#c4b5fd','#ede9fe','#ffffff'].map((c, i) => (
        <rect key={i} x={25 + i * 32} y="190" width="28" height="28" rx="4" fill={c} />
      ))}
      {/* Right side - typography */}
      <text x="225" y="60" fontFamily="serif" fontSize="28" fontWeight="bold" fill="#1e1b4b">Aa</text>
      <rect x="225" y="70" width="150" height="1" fill="#e2e8f0" />
      <text x="225" y="90" fontFamily="sans-serif" fontSize="8" fill="#64748b">PRIMARY TYPEFACE</text>
      <text x="225" y="108" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#1e1b4b">Playfair Display</text>
      <text x="225" y="125" fontFamily="sans-serif" fontSize="9" fill="#94a3b8">ABCDEFGHIJKLMNOPQRSTUVWXYZ</text>
      <text x="225" y="140" fontFamily="sans-serif" fontSize="9" fill="#94a3b8">abcdefghijklmnopqrstuvwxyz</text>
      {/* Brand elements */}
      <rect x="225" y="158" width="150" height="1" fill="#e2e8f0" />
      <text x="225" y="175" fontFamily="sans-serif" fontSize="8" fill="#64748b">BRAND ELEMENTS</text>
      <circle cx="245" cy="200" r="18" fill="#8b5cf6" />
      <rect x="272" y="185" width="36" height="36" rx="4" fill="#1e1b4b" />
      <rect x="317" y="185" width="36" height="36" rx="18" fill="#ede9fe" />
      <text x="245" y="204" textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="bold" fill="white">A</text>
      <text x="290" y="207" textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="bold" fill="white">A</text>
      <text x="335" y="207" textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="bold" fill="#8b5cf6">A</text>
      {/* Bottom tagline */}
      <rect x="225" y="232" width="150" height="32" rx="6" fill="#8b5cf6" />
      <text x="300" y="252" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="white" letterSpacing="1">WHERE ART MEETS IDENTITY</text>
    </svg>
  )
}

function MockupMobileApp() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <defs>
        <linearGradient id="appBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>
      <rect width="400" height="280" fill="url(#appBg)" />
      {/* Phone frame */}
      <rect x="130" y="10" width="140" height="260" rx="22" fill="#1e293b" stroke="#334155" strokeWidth="2" />
      <rect x="137" y="18" width="126" height="244" rx="16" fill="#0f172a" />
      {/* Notch */}
      <rect x="170" y="18" width="60" height="14" rx="7" fill="#1e293b" />
      {/* Status bar */}
      <rect x="148" y="38" width="30" height="5" rx="2" fill="#334155" />
      <rect x="210" y="38" width="30" height="5" rx="2" fill="#334155" />
      {/* Balance card */}
      <rect x="145" y="54" width="110" height="62" rx="12" fill="#8b5cf6" />
      <text x="155" y="73" fontFamily="sans-serif" fontSize="7" fill="rgba(255,255,255,0.7)">Total Balance</text>
      <text x="155" y="90" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="white">$12,840</text>
      <text x="155" y="104" fontFamily="sans-serif" fontSize="6" fill="rgba(255,255,255,0.6)">↑ +2.4% this month</text>
      <circle cx="234" cy="78" r="18" fill="rgba(255,255,255,0.1)" />
      {/* Quick actions */}
      {[
        { x: 148, icon: '↑', label: 'Send' },
        { x: 182, icon: '↓', label: 'Recv' },
        { x: 216, icon: '+', label: 'Top Up' },
        { x: 250, icon: '⋯', label: 'More' },
      ].map(a => (
        <g key={a.x}>
          <circle cx={a.x + 9} cy={133} r="14" fill="#1e293b" />
          <text x={a.x + 9} y={137} textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#8b5cf6">{a.icon}</text>
          <text x={a.x + 9} y={155} textAnchor="middle" fontFamily="sans-serif" fontSize="5" fill="#64748b">{a.label}</text>
        </g>
      ))}
      {/* Transactions */}
      <text x="148" y="172" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#f1f5f9">Recent Transactions</text>
      {[
        { y: 182, color: '#10b981', label: 'Netflix', amt: '-$15' },
        { y: 200, color: '#06b6d4', label: 'Salary', amt: '+$3,200' },
        { y: 218, color: '#f59e0b', label: 'Amazon', amt: '-$89' },
        { y: 236, color: '#8b5cf6', label: 'Transfer', amt: '-$200' },
      ].map(t => (
        <g key={t.y}>
          <circle cx="160" cy={t.y + 6} r="8" fill={t.color} opacity="0.2" />
          <circle cx="160" cy={t.y + 6} r="4" fill={t.color} />
          <rect x="173" y={t.y + 2} width="40" height="5" rx="2" fill="#334155" />
          <rect x="173" y={t.y + 10} width="28" height="4" rx="2" fill="#1e293b" />
          <rect x="225" y={t.y + 4} width="30" height="6" rx="3" fill="#1e293b" />
        </g>
      ))}
      {/* Bottom nav */}
      <rect x="137" y="244" width="126" height="18" rx="0" fill="#1e293b" />
      {['⊞','♡','🔔','◉'].map((ic, i) => (
        <text key={i} x={155 + i * 28} y={256} fontFamily="sans-serif" fontSize="9" fill={i === 0 ? '#8b5cf6' : '#475569'}>{ic}</text>
      ))}
    </svg>
  )
}

function MockupWebsite() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Browser chrome */}
      <rect width="400" height="280" fill="#f1f5f9" />
      <rect width="400" height="32" fill="#e2e8f0" />
      <circle cx="16" cy="16" r="5" fill="#fc8181" />
      <circle cx="30" cy="16" r="5" fill="#fbd38d" />
      <circle cx="44" cy="16" r="5" fill="#9ae6b4" />
      <rect x="60" y="8" width="280" height="16" rx="8" fill="#cbd5e1" />
      <rect x="68" y="12" width="100" height="8" rx="4" fill="#94a3b8" />
      {/* Nav */}
      <rect x="0" y="32" width="400" height="36" fill="#ffffff" />
      <rect x="16" y="42" width="50" height="16" rx="3" fill="#1e1b4b" />
      <rect x="150" y="46" width="30" height="8" rx="4" fill="#64748b" />
      <rect x="194" y="46" width="30" height="8" rx="4" fill="#64748b" />
      <rect x="238" y="46" width="30" height="8" rx="4" fill="#64748b" />
      <rect x="330" y="40" width="56" height="18" rx="9" fill="#0f172a" />
      {/* Hero */}
      <defs>
        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
      </defs>
      <rect x="0" y="68" width="400" height="120" fill="url(#heroGrad)" />
      {/* Hero dots */}
      {Array.from({length: 80}).map((_, i) => (
        <circle key={i} cx={(i % 10) * 44 + 10} cy={Math.floor(i / 10) * 18 + 74} r="0.8" fill="white" opacity="0.15" />
      ))}
      <rect x="20" y="82" width="40" height="8" rx="4" fill="#a78bfa" opacity="0.8" />
      <rect x="20" y="96" width="160" height="16" rx="4" fill="#ffffff" />
      <rect x="20" y="118" width="130" height="12" rx="3" fill="#f1f5f9" />
      <rect x="20" y="134" width="200" height="10" rx="3" fill="#94a3b8" opacity="0.6" />
      <rect x="20" y="152" width="70" height="22" rx="11" fill="#8b5cf6" />
      <rect x="98" y="152" width="70" height="22" rx="11" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      {/* Features */}
      <rect x="0" y="188" width="400" height="92" fill="#ffffff" />
      <rect x="16" y="198" width="80" height="12" rx="4" fill="#1e293b" />
      <rect x="16" y="214" width="120" height="8" rx="4" fill="#cbd5e1" />
      {[16, 148, 280].map((x) => (
        <g key={x}>
          <rect x={x} y="230" width="108" height="42" rx="8" fill="#f8fafc" />
          <rect x={x + 10} y="238" width="16" height="16" rx="4" fill="#ede9fe" />
          <rect x={x + 10} y="258" width="60" height="6" rx="3" fill="#334155" />
          <rect x={x + 10} y="267" width="80" height="4" rx="2" fill="#cbd5e1" />
        </g>
      ))}
    </svg>
  )
}

function MockupSocialKit() {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="400" height="280" fill="#fff7ed" />
      {/* Grid of 4 post mockups */}
      {/* Post 1 - Instagram square */}
      <rect x="12" y="12" width="120" height="120" rx="10" fill="#f97316" />
      <circle cx="72" cy="52" r="22" fill="rgba(255,255,255,0.15)" />
      <text x="72" y="58" textAnchor="middle" fontFamily="serif" fontSize="22" fontWeight="bold" fill="white">B</text>
      <rect x="22" y="82" width="100" height="6" rx="3" fill="rgba(255,255,255,0.6)" />
      <rect x="30" y="92" width="84" height="5" rx="2" fill="rgba(255,255,255,0.4)" />
      <rect x="22" y="106" width="40" height="14" rx="7" fill="rgba(255,255,255,0.2)" />
      {/* Post 1 details */}
      <rect x="12" y="136" width="120" height="20" rx="5" fill="#fff" />
      <circle cx="23" cy="146" r="7" fill="#f97316" />
      <rect x="35" y="142" width="50" height="4" rx="2" fill="#334155" />
      <rect x="35" y="149" width="35" height="3" rx="1" fill="#94a3b8" />
      {/* Post 2 - Story format */}
      <rect x="144" y="12" width="80" height="140" rx="10" fill="#1e1b4b" />
      <rect x="154" y="22" width="60" height="80" rx="6" fill="#312e81" />
      <circle cx="184" cy="52" r="18" fill="#8b5cf6" opacity="0.3" />
      <circle cx="184" cy="52" r="10" fill="#8b5cf6" />
      <rect x="154" y="108" width="60" height="6" rx="3" fill="rgba(255,255,255,0.7)" />
      <rect x="160" y="118" width="48" height="5" rx="2" fill="rgba(255,255,255,0.4)" />
      <rect x="160" y="130" width="48" height="14" rx="7" fill="#8b5cf6" />
      {/* Post 3 - Banner */}
      <rect x="236" y="12" width="152" height="70" rx="10" fill="#0f172a" />
      <rect x="246" y="22" width="80" height="10" rx="3" fill="#f1f5f9" />
      <rect x="246" y="36" width="60" height="8" rx="3" fill="#94a3b8" />
      <rect x="246" y="50" width="50" height="18" rx="9" fill="#8b5cf6" />
      <circle cx="354" cy="42" r="22" fill="#8b5cf6" opacity="0.15" />
      <circle cx="354" cy="42" r="14" fill="#8b5cf6" opacity="0.2" />
      {/* Post 4 - Carousel */}
      <rect x="236" y="94" width="152" height="58" rx="10" fill="#fef3c7" />
      <rect x="246" y="104" width="40" height="40" rx="6" fill="#f59e0b" />
      <rect x="294" y="108" width="80" height="7" rx="3" fill="#92400e" />
      <rect x="294" y="119" width="60" height="5" rx="2" fill="#d97706" />
      <rect x="294" y="128" width="48" height="16" rx="8" fill="#f59e0b" />
      {/* Bottom: Color palette */}
      <rect x="12" y="164" width="376" height="50" rx="10" fill="white" />
      <text x="24" y="180" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#334155" letterSpacing="2">COLOR PALETTE</text>
      {['#f97316','#fb923c','#fdba74','#1e1b4b','#312e81','#8b5cf6','#a78bfa'].map((c, i) => (
        <g key={c}>
          <circle cx={28 + i * 48} cy={200} r="14" fill={c} />
        </g>
      ))}
      {/* Bottom: Typography */}
      <rect x="12" y="224" width="376" height="44" rx="10" fill="#1e1b4b" />
      <text x="24" y="244" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="rgba(255,255,255,0.5)" letterSpacing="3">TYPOGRAPHY</text>
      <text x="24" y="260" fontFamily="serif" fontSize="14" fill="white">Bloom Creative Co.</text>
      <text x="240" y="244" fontFamily="sans-serif" fontSize="7" fill="rgba(255,255,255,0.4)">HEADLINE / Playfair 700</text>
      <text x="240" y="258" fontFamily="sans-serif" fontSize="7" fill="rgba(255,255,255,0.4)">BODY / Inter 400</text>
    </svg>
  )
}

/* ─── Data ────────────────────────────────────────────────────── */

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'UI/UX Design',
    tags: ['Figma', 'Design System', 'Data Viz'],
    desc: 'Dashboard analitik keuangan real-time dengan visualisasi data kompleks, multi-role access, dan design system yang scalable.',
    mockup: <MockupDashboard />,
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    tags: ['React', 'Next.js', 'Tailwind'],
    desc: 'Platform belanja online lengkap dengan sistem filter produk, keranjang belanja, dan checkout yang dioptimasi untuk konversi tinggi.',
    mockup: <MockupEcommerce />,
  },
  {
    id: 3,
    title: 'Brand Identity — Aurra',
    category: 'Digital Branding',
    tags: ['Logo', 'Brand Guide', 'Typography'],
    desc: 'Identitas visual lengkap untuk studio kreatif Aurra — mencakup logo, panduan warna, tipografi, dan aset brand siap pakai.',
    mockup: <MockupBranding />,
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    tags: ['Figma', 'Prototyping', 'iOS'],
    desc: 'Aplikasi mobile banking dengan UX yang intuitif, fitur transfer cepat, tracking pengeluaran, dan keamanan biometrik.',
    mockup: <MockupMobileApp />,
  },
  {
    id: 5,
    title: 'Corporate Website — Nexora',
    category: 'Web Development',
    tags: ['React', 'GSAP', 'SEO'],
    desc: 'Website korporat multi-bahasa dengan animasi premium, performa PageSpeed 98, dan arsitektur SEO yang solid.',
    mockup: <MockupWebsite />,
  },
  {
    id: 6,
    title: 'Social Media Kit — Bloom',
    category: 'Digital Branding',
    tags: ['Canva', 'Figma', '30+ Assets'],
    desc: 'Paket lengkap 30+ template media sosial — Instagram feed, story, banner iklan, dan panduan brand untuk konsistensi visual.',
    mockup: <MockupSocialKit />,
  },
]

const filters = ['All', 'UI/UX Design', 'Web Development', 'Digital Branding']

const categoryBadge = {
  'UI/UX Design':      'bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300',
  'Web Development':   'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
  'Digital Branding':  'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300',
}

/* ─── Modal ───────────────────────────────────────────────────── */

function Modal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Mockup preview */}
        <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
          {project.mockup}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${categoryBadge[project.category]}`}>
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="flex-1 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold transition-colors">
              View Live
            </button>
            <button className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-400 dark:hover:text-primary-400 text-sm font-semibold transition-colors">
              Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Component ──────────────────────────────────────────── */

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-primary-500 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Portfolio
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="max-w-xl mx-auto text-gray-500 dark:text-gray-400 text-lg">
            Setiap proyek adalah cerita unik tentang kolaborasi, kreativitas, dan hasil nyata.
          </p>
        </div>

        {/* Filter */}
        <div data-aos="fade-up" data-aos-delay="250" className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30'
                  : 'border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-400 dark:hover:text-primary-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={`${(i % 3) * 100}`}
              onClick={() => setSelected(project)}
              className="group relative rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-primary-500/50 dark:hover:border-primary-500/40 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Mockup */}
              <div className="w-full aspect-video overflow-hidden">
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                  {project.mockup}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gray-950/0 group-hover:bg-gray-950/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 flex flex-col items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryBadge[project.category]}`}>
                    {project.category}
                  </span>
                  <h3 className="text-white font-bold text-lg text-center px-4">{project.title}</h3>
                  <button className="mt-1 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-medium backdrop-blur-sm transition-all duration-200">
                    View Details
                  </button>
                </div>
              </div>

              {/* Bottom info (always visible) */}
              <div className="p-4 group-hover:opacity-0 transition-opacity duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{project.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{project.category}</p>
                  </div>
                  <div className="flex gap-1">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-aos="fade-up" className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-primary-500 text-primary-500 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white font-semibold text-sm transition-all duration-300"
          >
            Start Your Project
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
