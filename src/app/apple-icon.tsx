import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#352520",
          borderRadius: 40,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 100, fontWeight: 700, color: "#c09a6b" }}>
          A
        </div>
      </div>
    ),
    { ...size }
  );
}
