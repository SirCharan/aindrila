import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aindrila Bhowmik — Travel & Lifestyle";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #352520 0%, #513929 50%, #6e4d36 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Decorative line */}
        <div
          style={{
            width: 60,
            height: 3,
            background: "#c09a6b",
            marginBottom: 24,
            borderRadius: 2,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -1,
            marginBottom: 8,
          }}
        >
          Aindrila Bhowmik
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#c09a6b",
            letterSpacing: 6,
            textTransform: "uppercase" as const,
            marginBottom: 32,
          }}
        >
          Travel & Lifestyle
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 16,
            color: "#d4b896",
            letterSpacing: 2,
          }}
        >
          <span>25K+ FOLLOWERS</span>
          <span>•</span>
          <span>BANGALORE, INDIA</span>
          <span>•</span>
          <span>MBA, NIT TRICHY</span>
        </div>

        {/* Bottom decorative line */}
        <div
          style={{
            width: 60,
            height: 3,
            background: "#c09a6b",
            marginTop: 32,
            borderRadius: 2,
          }}
        />

        {/* URL */}
        <div
          style={{
            fontSize: 14,
            color: "#8b6344",
            marginTop: 20,
            letterSpacing: 3,
          }}
        >
          ANDREA-TRAVELS.VERCEL.APP
        </div>
      </div>
    ),
    { ...size }
  );
}
