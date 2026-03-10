"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function LaunchingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Countdown to April 1, 2026
  const target = new Date("2026-04-01T00:00:00Z").getTime();
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        strategy="beforeInteractive"
      />
      <main style={{
        minHeight: "100dvh",
        background: "linear-gradient(135deg, #0a1f0a 0%, #0f2d0f 40%, #1a3a1a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 20px",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background grain texture */}
        <div style={{
          position: "fixed", inset: 0, opacity: 0.03,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
        }} />

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 20, letterSpacing: 3, color: "#22c55e", fontWeight: 700, textTransform: "uppercase" }}>
            🌾 فلاح · FELLAH
          </span>
        </div>

        {/* Lottie animation */}
        <div style={{ width: 280, height: 280, margin: "0 auto" }}>
          {/* @ts-expect-error lottie-player is web component */}
          <lottie-player
            src="https://lottie.host/9a4c9c0c-3a8e-4c0e-9b7a-5e8c7f3d2e1a/placeholder.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
          {/* Fallback emoji if lottie fails */}
          <div style={{
            fontSize: 80,
            textAlign: "center",
            animation: "float 3s ease-in-out infinite",
          }}>
            🚀
          </div>
        </div>

        {/* Main heading */}
        <h1 style={{
          fontSize: "clamp(32px, 6vw, 56px)",
          fontWeight: 800,
          textAlign: "center",
          margin: "8px 0 4px",
          background: "linear-gradient(90deg, #22c55e, #86efac, #FDD835)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.1,
        }}>
          قريباً
        </h1>
        <h2 style={{
          fontSize: "clamp(20px, 4vw, 32px)",
          fontWeight: 700,
          textAlign: "center",
          color: "#86efac",
          margin: "0 0 8px",
        }}>
          Coming Soon
        </h2>
        <p style={{
          color: "#9ca3af",
          textAlign: "center",
          fontSize: "clamp(14px, 2vw, 17px)",
          maxWidth: 480,
          lineHeight: 1.7,
          margin: "0 0 32px",
        }}>
          La plateforme agricole intelligente pour les agriculteurs tunisiens.<br />
          Marketplace, prix du marché, et conseiller IA — tout en un.
        </p>

        {/* Countdown */}
        <div style={{
          display: "flex", gap: 16, marginBottom: 36,
          background: "rgba(34,197,94,0.08)",
          border: "1px solid rgba(34,197,94,0.2)",
          borderRadius: 16, padding: "20px 28px",
        }}>
          {[
            { val: timeLeft.d, label: "Jours" },
            { val: timeLeft.h, label: "Heures" },
            { val: timeLeft.m, label: "Minutes" },
            { val: timeLeft.s, label: "Secondes" },
          ].map(({ val, label }, i) => (
            <div key={i} style={{ textAlign: "center", minWidth: 52 }}>
              <div style={{
                fontSize: "clamp(24px, 5vw, 40px)",
                fontWeight: 800,
                color: "#22c55e",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}>
                {String(val).padStart(2, "0")}
              </div>
              <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Email capture */}
        {!submitted ? (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            style={{ display: "flex", gap: 8, width: "100%", maxWidth: 420, marginBottom: 32 }}
          >
            <input
              type="email"
              required
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1, padding: "12px 16px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10, color: "#fff", fontSize: 15,
                outline: "none",
              }}
            />
            <button type="submit" style={{
              padding: "12px 20px",
              background: "#22c55e", color: "#fff",
              border: "none", borderRadius: 10,
              fontWeight: 700, fontSize: 14,
              cursor: "pointer", whiteSpace: "nowrap",
            }}>
              Notifie-moi
            </button>
          </form>
        ) : (
          <div style={{
            marginBottom: 32, padding: "12px 24px",
            background: "rgba(34,197,94,0.15)",
            border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: 10, color: "#86efac", fontSize: 14,
          }}>
            ✅ Parfait ! On vous préviendra au lancement.
          </div>
        )}

        {/* Already have account */}
        <a href="https://app.fellah.tn" style={{
          color: "#6b7280", fontSize: 13, textDecoration: "none",
          borderBottom: "1px solid transparent",
          transition: "color 0.2s, border-color 0.2s",
        }}
          onMouseEnter={e => { (e.target as HTMLAnchorElement).style.color = "#22c55e"; }}
          onMouseLeave={e => { (e.target as HTMLAnchorElement).style.color = "#6b7280"; }}
        >
          Déjà un compte ? Accéder à l'application →
        </a>

        {/* Footer */}
        <div style={{
          position: "absolute", bottom: 20,
          display: "flex", gap: 20, fontSize: 12, color: "#374151",
        }}>
          <a href="https://app.fellah.tn/privacy" style={{ color: "#374151", textDecoration: "none" }}>Confidentialité</a>
          <span>·</span>
          <a href="mailto:contact@fellah.tn" style={{ color: "#374151", textDecoration: "none" }}>contact@fellah.tn</a>
          <span>·</span>
          <span>© 2026 Fellah</span>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-16px); }
          }
          lottie-player ~ div { display: none; }
          lottie-player:not([shadowroot]) ~ div { display: block; }
        `}</style>
      </main>
    </>
  );
}
