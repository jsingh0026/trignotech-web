import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D1B2A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow blob */}
        <div
          style={{
            position: "absolute",
            right: "-5%",
            top: "10%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(59,142,224,0.18)",
            filter: "blur(90px)",
            display: "flex",
          }}
        />

        {/* Bottom-left glow */}
        <div
          style={{
            position: "absolute",
            left: "-5%",
            bottom: "-10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(27,95,168,0.12)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "72px 80px",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Logo + Name */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 48 }}>
            <svg width="72" height="72" viewBox="0 0 200 200" fill="none">
              <defs>
                <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4BA3F5" />
                  <stop offset="100%" stopColor="#1B5FA8" />
                </linearGradient>
              </defs>
              <polygon points="100,15 178,58 178,142 100,185 22,142 22,58" fill="url(#g)" />
              <polygon points="100,38 160,138 40,138" fill="none" stroke="white" strokeWidth="6" strokeLinejoin="round" />
              <line x1="100" y1="38" x2="100" y2="138" stroke="white" strokeWidth="3" opacity="0.8" />
              <line x1="70"  y1="88" x2="130" y2="88"  stroke="white" strokeWidth="3" opacity="0.8" />
              <circle cx="100" cy="38"  r="5" fill="white" />
              <circle cx="160" cy="138" r="5" fill="white" />
              <circle cx="40"  cy="138" r="5" fill="white" />
            </svg>
            <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
              <span style={{ color: "white", fontSize: 44, fontWeight: 700, letterSpacing: "-1px" }}>Trigno</span>
              <span style={{ color: "#6BB3F0", fontSize: 44, fontWeight: 700, letterSpacing: "-1px" }}>tech</span>
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 28, maxWidth: 860 }}>
            <span style={{ color: "white", fontSize: 68, fontWeight: 800, lineHeight: 1.08 }}>
              Transforming Ideas Into&nbsp;
            </span>
            <span style={{ color: "#4BA3F5", fontSize: 68, fontWeight: 800, lineHeight: 1.08 }}>
              Digital Excellence
            </span>
          </div>

          {/* Tagline */}
          <div style={{ display: "flex", color: "rgba(255,255,255,0.55)", fontSize: 26, letterSpacing: "0.5px" }}>
            Salesforce · Full Stack · Mobile · DevOps · AI Chatbots
          </div>

          {/* Bottom badge */}
          <div
            style={{
              marginTop: 48,
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              background: "rgba(59,142,224,0.15)",
              border: "1px solid rgba(59,142,224,0.3)",
              color: "#6BB3F0",
              fontSize: 18,
              fontWeight: 600,
              padding: "10px 22px",
              borderRadius: 999,
            }}
          >
            trignotech.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
