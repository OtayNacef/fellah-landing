"use client";

import { useEffect, useRef, useState } from "react";

const LAUNCH_DATE = new Date("2026-04-01T00:00:00Z");

function getTimeLeft() {
  const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

function CountUnit({ val, label }: { val: number; label: string }) {
  const [prev, setPrev] = useState(val);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (val !== prev) {
      setAnimKey((k) => k + 1);
      setPrev(val);
    }
  }, [val]);

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      background: "rgba(34,197,94,0.06)",
      border: "1px solid rgba(34,197,94,0.15)",
      borderRadius: 16,
      padding: "20px 24px",
      minWidth: 72,
      backdropFilter: "blur(12px)",
    }}>
      <span key={animKey} style={{
        fontSize: "clamp(32px, 6vw, 52px)",
        fontWeight: 800,
        color: "#22c55e",
        lineHeight: 1,
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-2px",
        animation: "tick 0.3s ease",
      }}>
        {String(val).padStart(2, "0")}
      </span>
      <span style={{
        fontSize: 11,
        color: "rgba(255,255,255,0.3)",
        textTransform: "uppercase",
        letterSpacing: "2px",
        marginTop: 8,
        fontWeight: 500,
      }}>
        {label}
      </span>
    </div>
  );
}

export default function Page() {
  const [time, setTime] = useState(getTimeLeft());
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    await new Promise((r) => setTimeout(r, 800));
    setState("done");
  };

  return (
    <main style={{
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 24px",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background orbs */}
      <div aria-hidden style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "-20%", left: "-10%",
          width: 600, height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
          animation: "orb1 12s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "-15%", right: "-10%",
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)",
          animation: "orb2 15s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 900, height: 300,
          background: "radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 70%)",
        }} />
        {/* Grid lines */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03 }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#22c55e" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center",
        width: "100%", maxWidth: 560,
      }}>

        {/* Badge */}
        <div className="animate-fade-up delay-1" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(34,197,94,0.1)",
          border: "1px solid rgba(34,197,94,0.25)",
          borderRadius: 100,
          padding: "6px 16px",
          marginBottom: 28,
          fontSize: 12,
          fontWeight: 600,
          color: "#22c55e",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", animation: "pulse-glow 2s ease-in-out infinite", display: "inline-block" }} />
          Lancement imminent
        </div>

        {/* Logo */}
        <div className="animate-fade-up delay-1" style={{
          fontSize: 40, marginBottom: 16,
          animation: "float 6s ease-in-out infinite",
          display: "inline-block",
        }}>
          🌾
        </div>

        {/* Wordmark */}
        <h1 className="animate-fade-up delay-2" style={{
          fontSize: "clamp(48px, 10vw, 80px)",
          fontWeight: 900,
          letterSpacing: "-3px",
          lineHeight: 1,
          marginBottom: 8,
          background: "linear-gradient(135deg, #ffffff 0%, #86efac 50%, #22c55e 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Fellah
        </h1>

        {/* Arabic subtitle */}
        <p className="animate-fade-up delay-2" style={{
          fontSize: "clamp(20px, 4vw, 28px)",
          fontWeight: 600,
          color: "rgba(255,255,255,0.5)",
          marginBottom: 16,
          direction: "rtl",
          letterSpacing: "1px",
        }}>
          المنصة الزراعية الذكية
        </p>

        {/* Tagline */}
        <p className="animate-fade-up delay-3" style={{
          fontSize: "clamp(14px, 2.5vw, 16px)",
          color: "rgba(255,255,255,0.35)",
          textAlign: "center",
          lineHeight: 1.8,
          marginBottom: 48,
          maxWidth: 420,
        }}>
          Marketplace agricole · Prix du marché en temps réel<br />
          Conseiller IA · Suivi des récoltes
        </p>

        {/* Countdown */}
        <div className="animate-fade-up delay-3" style={{
          display: "flex", gap: 12, marginBottom: 48, flexWrap: "wrap", justifyContent: "center",
        }}>
          <CountUnit val={time.d} label="Jours" />
          <CountUnit val={time.h} label="Heures" />
          <CountUnit val={time.m} label="Min" />
          <CountUnit val={time.s} label="Sec" />
        </div>

        {/* Divider */}
        <div className="animate-fade-up delay-4" style={{
          width: "100%", height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
          marginBottom: 32,
        }} />

        {/* Email form */}
        <div className="animate-fade-up delay-4" style={{ width: "100%", marginBottom: 40 }}>
          <p style={{
            textAlign: "center", fontSize: 13,
            color: "rgba(255,255,255,0.35)",
            marginBottom: 16, letterSpacing: "0.5px",
          }}>
            Soyez parmi les premiers informés
          </p>

          {state === "done" ? (
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              padding: "16px 24px",
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.25)",
              borderRadius: 14,
              color: "#86efac",
              fontSize: 14,
              fontWeight: 500,
            }}>
              <span style={{ fontSize: 18 }}>✓</span>
              Parfait ! On vous avertira au lancement.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: "flex", gap: 8,
            }}>
              <input
                ref={inputRef}
                type="email"
                required
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  color: "#fff",
                  fontSize: 15,
                  outline: "none",
                  transition: "border-color 0.2s",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => { e.target.style.borderColor = "rgba(34,197,94,0.5)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
              />
              <button
                type="submit"
                disabled={state === "loading"}
                style={{
                  padding: "14px 22px",
                  background: state === "loading"
                    ? "rgba(34,197,94,0.5)"
                    : "linear-gradient(135deg, #22c55e, #16a34a)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: state === "loading" ? "wait" : "pointer",
                  whiteSpace: "nowrap",
                  fontFamily: "inherit",
                  letterSpacing: "0.3px",
                  boxShadow: "0 4px 20px rgba(34,197,94,0.3)",
                  transition: "opacity 0.2s, box-shadow 0.2s",
                }}
              >
                {state === "loading" ? "..." : "M'alerter →"}
              </button>
            </form>
          )}
        </div>

        {/* CTA for existing users */}
        <div className="animate-fade-up delay-5" style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
        }}>
          <a
            href="https://app.fellah.tn"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 22px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 100,
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 500,
              transition: "all 0.2s",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(34,197,94,0.4)";
              el.style.color = "#22c55e";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(255,255,255,0.1)";
              el.style.color = "rgba(255,255,255,0.45)";
            }}
          >
            Déjà inscrit ? Accéder à l&apos;app
            <span style={{ fontSize: 16 }}>→</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        position: "absolute", bottom: 24,
        display: "flex", gap: 24,
        fontSize: 12,
        color: "rgba(255,255,255,0.18)",
        zIndex: 1,
      }}>
        <a href="https://app.fellah.tn/privacy" style={{ color: "inherit", textDecoration: "none" }}>
          Confidentialité
        </a>
        <span>·</span>
        <a href="mailto:contact@fellah.tn" style={{ color: "inherit", textDecoration: "none" }}>
          contact@fellah.tn
        </a>
        <span>·</span>
        <span>© 2026 Fellah</span>
      </footer>
    </main>
  );
}
