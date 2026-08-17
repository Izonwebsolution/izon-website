import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#080B14",
        ink: "#0D1224",
        panel: "#111832",
        dusk: "#5B5FEF",
        duskdeep: "#3A3ED1",
        teal: "#35D0C0",
        coral: "#FF8F6B",
        cloud: "#F6F3ED",
        mist: "#B9BFD4",
        magenta: "#B23A6B",
        gold: "#E8C468"
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        body: [
          "var(--font-body)",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        script: ["var(--font-script)", "ui-serif", "Georgia", "serif"]
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(8,11,20,1)), linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
        "glow-dusk":
          "radial-gradient(60% 60% at 50% 40%, rgba(91,95,239,0.35), transparent 70%)",
        "glow-teal":
          "radial-gradient(60% 60% at 50% 40%, rgba(53,208,192,0.28), transparent 70%)",
        "glow-coral":
          "radial-gradient(60% 60% at 50% 40%, rgba(255,143,107,0.25), transparent 70%)"
      },
      boxShadow: {
        glass: "0 8px 40px rgba(0,0,0,0.35)",
        glow: "0 0 60px rgba(91,95,239,0.25)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        floaty: "floaty 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
