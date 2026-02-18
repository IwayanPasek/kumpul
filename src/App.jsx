import { useState, useEffect } from "react";
import {
  WashingMachine,
  Wind,
  Shirt,
  MapPin,
  Phone,
  ArrowRight,
  Truck,
  MessageCircleHeart,
  BadgeDollarSign,
  Menu,
  X,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

// Nomor 1 — Admin Pemesanan
const WA_LINK = "https://wa.me/6282236220225";
const WA_ORDER =
  "https://wa.me/6282236220225?text=Halo%2C%20saya%20mau%20pesan%20antar%20jemput%20laundry.";

// Nomor 2 — Admin Layanan Khusus
const WA_LINK_2 = "https://wa.me/6281236021109";
const WA_CUSTOM =
  "https://wa.me/6281236021109?text=Halo%2C%20saya%20mau%20tanya%20soal%20layanan%20khusus%20pakaian%20saya.";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { label: "Layanan", href: "#layanan" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Kontak", href: "#kontak" },
  ];

  const services = [
    {
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      title: "Cuci Lengkap",
      desc: "Paket komplit: cuci, keringkan, dan setrika. Pakaianmu kembali bersih, rapi, dan wangi.",
      price: 6000,
      tag: "Terlengkap",
    },
    {
      icon: <WashingMachine size={32} strokeWidth={1.5} />,
      title: "Kering Setrika",
      desc: "Pakaian dikeringkan lalu disetrika rapi. Cocok buat yang udah cuci sendiri tapi butuh hasil sempurna.",
      price: 4000,
      tag: null,
    },
    {
      icon: <Wind size={32} strokeWidth={1.5} />,
      title: "Kering Saja",
      desc: "Tinggal dikeringkan? Bisa! Kami pastikan pakaianmu kering sempurna dan bebas lembap.",
      price: 2500,
      tag: null,
    },
    {
      icon: <Shirt size={32} strokeWidth={1.5} />,
      title: "Setrika Saja",
      desc: "Sudah dicuci dan kering tapi masih kusut? Kami rapikan dengan setrika uap supaya kembali kece.",
      price: 3500,
      tag: "Favorit",
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: "Express",
      desc: "Butuh cepat? Layanan express kami siap memproses pakaianmu lebih prioritas dan kilat.",
      price: 7000,
      tag: "Cepat",
    },
  ];

  const usps = [
    {
      icon: <Truck size={26} strokeWidth={1.5} />,
      title: "Antar Jemput",
      desc: "Kami jemput dan antar kembali pakaianmu langsung ke pintu rumah. Nggak perlu kemana-mana.",
    },
    {
      icon: <MessageCircleHeart size={26} strokeWidth={1.5} />,
      title: "Bisa Request",
      desc: "Punya permintaan khusus? Tanyakan dulu, kami siap bantu semaksimal mungkin.",
    },
    {
      icon: <BadgeDollarSign size={26} strokeWidth={1.5} />,
      title: "Harga Standar",
      desc: "Kualitas premium dengan harga bersahabat. Kantong aman, cucian bersih.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Nunito', sans-serif",
        background: "#f0f9ff",
        color: "#0c2a3b",
        overflowX: "hidden",
      }}
    >
      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Playfair+Display:wght@700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; overflow-x: hidden; }

        .font-display { font-family: 'Playfair Display', serif; }

        .bubble-bg {
          background:
            radial-gradient(ellipse 70% 50% at 80% 0%, #bae6fd 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 5% 90%, #a7f3d0 0%, transparent 60%),
            #f0f9ff;
        }

        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        @media (hover: hover) {
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 16px 36px rgba(14,116,144,0.13);
          }
        }

        .btn-wa {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
          color: white;
          font-weight: 600;
          border-radius: 9999px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        @media (hover: hover) {
          .btn-wa:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 28px rgba(14,165,233,0.4);
          }
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #0ea5e9;
          color: #0ea5e9;
          font-weight: 600;
          border-radius: 9999px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        @media (hover: hover) {
          .btn-outline:hover {
            background: #0ea5e9;
            color: white;
          }
        }

        .nav-glass {
          background: rgba(240, 249, 255, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .service-icon-wrap {
          background: linear-gradient(135deg, #e0f2fe 0%, #ccfbf1 100%);
          flex-shrink: 0;
        }

        .tag-pill {
          background: linear-gradient(135deg, #0ea5e9, #06b6d4);
        }

        .custom-section {
          background: linear-gradient(135deg, #0c4a6e 0%, #0e7490 55%, #0891b2 100%);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-anim { animation: float 4s ease-in-out infinite; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up    { animation: fadeUp 0.65s ease both; }
        .fade-up-d1 { animation: fadeUp 0.65s 0.1s ease both; }
        .fade-up-d2 { animation: fadeUp 0.65s 0.2s ease both; }
        .fade-up-d3 { animation: fadeUp 0.65s 0.35s ease both; }

        .text-gradient {
          background: linear-gradient(135deg, #0ea5e9, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Desktop nav / hamburger visibility */
        .desktop-nav { display: flex; }
        .hamburger-btn { display: none; }

        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }

        /* Hero CTA full-width on very small screens */
        @media (max-width: 400px) {
          .hero-cta-wrap { flex-direction: column; align-items: stretch !important; }
          .hero-cta-wrap a { width: 100%; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <header
        className={scrolled ? "nav-glass" : ""}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "box-shadow 0.3s",
          ...(scrolled ? { boxShadow: "0 1px 16px rgba(0,0,0,0.07)" } : {}),
        }}
      >
        <div
          style={{
            maxWidth: 1100, margin: "0 auto",
            padding: "14px 20px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}
        >
          {/* Brand */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div
              style={{
                width: 38, height: 38, borderRadius: 12, flexShrink: 0,
                background: "linear-gradient(135deg,#0ea5e9,#06b6d4)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <WashingMachine size={20} color="white" />
            </div>
            <span style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3, color: "#0c4a6e" }}>
              Kumpul-Kumpul<br />
              <span style={{ color: "#0ea5e9", fontWeight: 800 }}>Laundry</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ alignItems: "center", gap: 28 }}>
            {navLinks.map((l) => (
              <a
                key={l.href} href={l.href}
                style={{ color: "#0c4a6e", textDecoration: "none", fontSize: 14, fontWeight: 500 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0ea5e9")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#0c4a6e")}
              >
                {l.label}
              </a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noreferrer"
              className="btn-wa" style={{ fontSize: 13, padding: "8px 20px" }}>
              Chat WhatsApp
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#0c4a6e", padding: 6, borderRadius: 8, alignItems: "center",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            className="nav-glass"
            style={{
              borderTop: "1px solid #e0f2fe",
              padding: "16px 20px 20px",
              display: "flex", flexDirection: "column", gap: 4,
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href} href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#0c4a6e", textDecoration: "none",
                  fontSize: 15, fontWeight: 500,
                  padding: "10px 0",
                  borderBottom: "1px solid #e0f2fe",
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_LINK} target="_blank" rel="noreferrer"
              className="btn-wa"
              style={{ marginTop: 12, padding: "12px 20px", fontSize: 14 }}
              onClick={() => setMenuOpen(false)}
            >
              Chat WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        className="bubble-bg"
        style={{
          paddingTop: 100, paddingBottom: 52,
          paddingLeft: 20, paddingRight: 20,
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Deco blobs */}
        <div style={{
          position: "absolute", top: 60, right: -20,
          width: 200, height: 200, borderRadius: "50%", opacity: 0.18,
          background: "radial-gradient(circle, #7dd3fc, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: -20,
          width: 150, height: 150, borderRadius: "50%", opacity: 0.13,
          background: "radial-gradient(circle, #6ee7b7, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div
            className="fade-up"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(255,255,255,0.75)", border: "1.5px solid #bae6fd",
              color: "#0284c7", fontSize: 12, fontWeight: 700,
              padding: "6px 16px", borderRadius: 9999, marginBottom: 20,
            }}
          >
            <Star size={11} fill="currentColor" />
            Laundry Antar Jemput Terpercaya
          </div>

          {/* Headline — clamp scales text smoothly from mobile → desktop */}
          <h1
            className="font-display fade-up-d1"
            style={{
              fontSize: "clamp(26px, 7.5vw, 54px)",
              fontWeight: 800, lineHeight: 1.2,
              color: "#0c2a3b", margin: "0 0 16px",
            }}
          >
            Cucian Numpuk?{" "}
            <span className="text-gradient">Kumpul-Kumpul</span>{" "}
            Laundry Solusinya.
          </h1>

          {/* Subheadline */}
          <p
            className="fade-up-d2"
            style={{
              fontSize: "clamp(14px, 4vw, 18px)",
              lineHeight: 1.7, color: "#334d5e",
              margin: "0 auto 32px", maxWidth: 460,
            }}
          >
            Layanan laundry antar-jemput terpercaya. Bersih, rapi, dan wangi
            tanpa ribet — langsung dari rumahmu.
          </p>

          {/* CTA — wraps on tiny screens */}
          <div
            className="fade-up-d3 hero-cta-wrap"
            style={{
              display: "flex", flexWrap: "wrap",
              gap: 12, justifyContent: "center",
            }}
          >
            <a
              href={WA_ORDER} target="_blank" rel="noreferrer"
              className="btn-wa"
              style={{ padding: "13px 26px", fontSize: 15 }}
            >
              Pesan Antar Jemput <ArrowRight size={17} />
            </a>
            <a
              href="#layanan"
              className="btn-outline"
              style={{ padding: "13px 26px", fontSize: 15 }}
            >
              Lihat Layanan
            </a>
          </div>
        </div>

        {/* Floating icons cluster */}
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 230, height: 120 }}>
            <div className="float-anim" style={{
              position: "absolute", left: 0, top: 14,
              width: 68, height: 68, borderRadius: 18,
              background: "white",
              boxShadow: "0 8px 24px rgba(14,116,144,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#0ea5e9", animationDelay: "0s",
            }}>
              <WashingMachine size={32} strokeWidth={1.5} />
            </div>
            <div className="float-anim" style={{
              position: "absolute", left: "50%", transform: "translateX(-50%)", top: -2,
              width: 80, height: 80, borderRadius: 22,
              background: "linear-gradient(135deg,#0ea5e9,#06b6d4)",
              boxShadow: "0 12px 30px rgba(14,165,233,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              animationDelay: "1.2s",
            }}>
              <Shirt size={38} strokeWidth={1.5} color="white" />
            </div>
            <div className="float-anim" style={{
              position: "absolute", right: 0, top: 14,
              width: 68, height: 68, borderRadius: 18,
              background: "white",
              boxShadow: "0 8px 24px rgba(14,116,144,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#06b6d4", animationDelay: "0.6s",
            }}>
              <Sparkles size={32} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          KEUNGGULAN
      ══════════════════════════════════════ */}
      <section id="keunggulan" style={{ background: "white", padding: "60px 20px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0ea5e9", marginBottom: 8 }}>
              Kenapa Pilih Kami?
            </p>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 5.5vw, 34px)", fontWeight: 700, color: "#0c2a3b", margin: 0 }}>
              Keunggulan Kami
            </h2>
          </div>

          {/* auto-fit grid = 1 col on mobile, 3 on desktop */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 16,
          }}>
            {usps.map((u, i) => (
              <div key={i} className="card-hover" style={{
                background: "#f0f9ff", border: "1.5px solid #e0f2fe",
                borderRadius: 20, padding: "26px 22px",
              }}>
                <div className="service-icon-wrap" style={{
                  width: 50, height: 50, borderRadius: 14,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#0ea5e9", marginBottom: 14,
                }}>
                  {u.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0c2a3b", margin: "0 0 8px" }}>
                  {u.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#4d7184", margin: 0 }}>
                  {u.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LAYANAN
      ══════════════════════════════════════ */}
      <section id="layanan" style={{ background: "#f0f9ff", padding: "60px 20px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0ea5e9", marginBottom: 8 }}>
              Yang Kami Tawarkan
            </p>
            <h2 className="font-display" style={{ fontSize: "clamp(22px, 5.5vw, 34px)", fontWeight: 700, color: "#0c2a3b", margin: "0 0 8px" }}>
              Layanan Kami
            </h2>
            <p style={{ fontSize: 14, color: "#4d7184", margin: 0 }}>
              Pilih sesuai kebutuhan, kami siap handle semuanya.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}>
            {services.map((s, i) => (
              <div key={i} className="card-hover" style={{
                background: "white", border: "1.5px solid #e0f2fe",
                borderRadius: 20, padding: "26px 22px",
                display: "flex", flexDirection: "column",
                position: "relative",
              }}>
                {s.tag && (
                  <span className="tag-pill" style={{
                    position: "absolute", top: 14, right: 14,
                    color: "white", fontSize: 11, fontWeight: 700,
                    padding: "4px 12px", borderRadius: 9999,
                  }}>
                    {s.tag}
                  </span>
                )}
                <div className="service-icon-wrap" style={{
                  width: 56, height: 56, borderRadius: 16,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#0ea5e9", marginBottom: 16,
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0c2a3b", margin: "0 0 6px" }}>
                  {s.title}
                </h3>
                {/* Price badge */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 10 }}>
                  <span style={{ fontSize: 22, fontWeight: 800, color: "#0ea5e9" }}>
                    Rp {s.price.toLocaleString("id-ID")}
                  </span>
                  <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}>/kg</span>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "#4d7184", margin: 0, flex: 1 }}>
                  {s.desc}
                </p>
                <a
                  href={WA_ORDER} target="_blank" rel="noreferrer"
                  style={{
                    marginTop: 18,
                    display: "inline-flex", alignItems: "center", gap: 5,
                    fontSize: 14, fontWeight: 600, color: "#0ea5e9",
                    textDecoration: "none",
                  }}
                >
                  Pesan Sekarang <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CUSTOM REQUEST CTA
      ══════════════════════════════════════ */}
      <section style={{ padding: "44px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div
            className="custom-section"
            style={{
              borderRadius: 28,
              padding: "clamp(32px, 6vw, 52px) clamp(22px, 5vw, 48px)",
              textAlign: "center", position: "relative", overflow: "hidden",
            }}
          >
            {/* Deco */}
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: 140, height: 140, borderRadius: "50%", opacity: 0.1,
              background: "radial-gradient(circle, white, transparent)",
              transform: "translate(30%,-30%)", pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: 0, left: 0,
              width: 120, height: 120, borderRadius: "50%", opacity: 0.1,
              background: "radial-gradient(circle, white, transparent)",
              transform: "translate(-30%,30%)", pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 58, height: 58, borderRadius: 18,
                background: "rgba(255,255,255,0.18)", marginBottom: 18,
              }}>
                <MessageCircleHeart size={28} color="white" />
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(20px, 5vw, 34px)",
                  fontWeight: 700, color: "white",
                  margin: "0 0 14px", lineHeight: 1.3,
                }}
              >
                Ada Pakaian yang Butuh<br />Penanganan Khusus?
              </h2>
              <p style={{
                color: "#bae6fd",
                fontSize: "clamp(13px, 3.5vw, 16px)",
                lineHeight: 1.7, maxWidth: 420, margin: "0 auto 26px",
              }}>
                Butuh penanganan khusus untuk pakaian kesayangan? Konsultasikan
                dulu dengan kami — kami siap bantu semaksimal mungkin.
              </p>
              <a
                href={WA_CUSTOM} target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "white", color: "#0c4a6e",
                  fontWeight: 700, fontSize: 15,
                  padding: "13px 28px", borderRadius: 9999,
                  textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Tanya Admin via WA <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer
        id="kontak"
        style={{ background: "#0c2a3b", color: "#94a3b8", padding: "48px 20px 28px" }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {/* auto-fit grid = stacks on mobile */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 28, marginBottom: 32,
          }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 12, flexShrink: 0,
                  background: "linear-gradient(135deg,#0ea5e9,#06b6d4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <WashingMachine size={20} color="white" />
                </div>
                <div>
                  <p style={{ color: "white", fontWeight: 700, fontSize: 14, margin: 0 }}>
                    Kumpul-Kumpul Laundry
                  </p>
                  <p style={{ color: "#38bdf8", fontSize: 12, margin: 0 }}>Bersih, Rapi, Wangi.</p>
                </div>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                Laundry antar-jemput terpercaya untuk area sekitar kami.
              </p>
            </div>

            {/* Contact */}
            <div>
              <p style={{ color: "white", fontWeight: 600, fontSize: 13, marginBottom: 14 }}>Kontak</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <MapPin size={15} style={{ color: "#38bdf8", marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, lineHeight: 1.55 }}>
                    Jl. Contoh No. 1,<br />Kota Anda, Indonesia
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <Phone size={15} style={{ color: "#38bdf8", flexShrink: 0, marginTop: 3 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div>
                      <p style={{ fontSize: 11, color: "#38bdf8", fontWeight: 600, margin: "0 0 2px" }}>Admin Pemesanan</p>
                      <a
                        href={WA_LINK} target="_blank" rel="noreferrer"
                        style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                      >
                        +62 812-3456-7890
                      </a>
                    </div>
                    <div>
                      <p style={{ fontSize: 11, color: "#38bdf8", fontWeight: 600, margin: "0 0 2px" }}>Admin Layanan Khusus</p>
                      <a
                        href={WA_LINK_2} target="_blank" rel="noreferrer"
                        style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                      >
                        +62 898-7654-3210
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nav */}
            <div>
              <p style={{ color: "white", fontWeight: 600, fontSize: 13, marginBottom: 14 }}>Navigasi</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {navLinks.map((l) => (
                  <a
                    key={l.href} href={l.href}
                    style={{ color: "#94a3b8", fontSize: 13, textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={{ borderTop: "1px solid #1e3a50", paddingTop: 20, textAlign: "center", fontSize: 12 }}>
            © {new Date().getFullYear()} Kumpul-Kumpul Laundry. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}