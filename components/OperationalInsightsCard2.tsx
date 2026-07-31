

'use client'
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Camera, Video, HardDrive, Grid3x3, User, PersonStanding, Mic, FileText, Radio, Database } from "lucide-react";

// ── Data configuration ──────────────────────────────────────

const TRADITIONAL_OPS = [
  { icon: <Camera size={20} />, label: "Camera" },
  { icon: <Video size={20} />, label: "Continuous Video" },
  { icon: <HardDrive size={20} />, label: "NVR" },
  { icon: <Grid3x3 size={20} />, label: "Video Wall" },
  { icon: <User size={20} />, label: "Human Notices" },
  { icon: <PersonStanding size={20} />, label: "Action" },
];

const OPERATIONAL_INPUTS = [
  { icon: <Camera size={18} />, label: "Camera" },
  { icon: <Mic size={18} />, label: "Voice" },
  { icon: <FileText size={18} />, label: "Documents" },
  { icon: <Radio size={18} />, label: "IoT" },
  { icon: <Database size={18} />, label: "ERP" },
];

const INTELLIGENCE_FEATURES = [
  "Understands",
  "Correlates",
  "Predicts",
  "Recommends",
  "Automates",
];

// ── Traditional Operations Flow ──────────────────────────────

function TraditionalOpsColumn({ activeStep }: { activeStep: number }) {
  return (
    <div
      style={{
        flex: "0 0 auto",
        width: 240,
        padding: "20px 18px",
        borderRadius: 16,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <h3
        style={{
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.7)",
          marginBottom: 20,
          textAlign: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Traditional Operations
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {TRADITIONAL_OPS.map((item, idx) => (
          <div key={idx}>
            <motion.div
              animate={{
                opacity: idx <= activeStep ? 1 : 0.2,
                scale: idx === activeStep ? [1, 1.03, 1] : 1,
              }}
              transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 1.2, repeat: idx === activeStep ? Infinity : 0 },
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 12px",
                borderRadius: 8,
                background: idx <= activeStep ? "rgba(255,255,255,0.04)" : "transparent",
                border: `1px solid ${idx <= activeStep ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)"}`,
                transition: "all 0.5s ease",
              }}
            >
              <span
                style={{
                  display: "flex",
                  color: idx <= activeStep ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)",
                  transition: "color 0.5s ease",
                }}
              >
                {item.icon}
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: idx <= activeStep ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)",
                  transition: "color 0.5s ease",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.label}
              </span>
            </motion.div>
            
            {idx < TRADITIONAL_OPS.length - 1 && (
              <div style={{ display: "flex", justifyContent: "center", padding: "4px 0" }}>
                <motion.div
                  animate={{
                    height: idx < activeStep ? 16 : 8,
                    opacity: idx < activeStep ? 1 : 0.2,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: 1,
                    background: idx < activeStep 
                      ? "linear-gradient(to bottom, rgba(96,165,250,0.6), rgba(96,165,250,0.2))"
                      : "rgba(255,255,255,0.1)",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Operational Inputs Section ────────────────────────────────

function OperationalInputsSection({ activeInputs }: { activeInputs: number }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "inline-block",
          padding: "4px 14px",
          borderRadius: 999,
          background: "rgba(96,165,250,0.08)",
          border: "1px solid rgba(96,165,250,0.2)",
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(147,197,253,0.9)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Operational Inputs
        </span>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        {OPERATIONAL_INPUTS.map((input, idx) => (
          <motion.div
            key={idx}
            animate={{
              opacity: idx < activeInputs ? 1 : 0.15,
              y: idx < activeInputs ? 0 : 8,
            }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: idx < activeInputs ? "rgba(96,165,250,0.08)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${idx < activeInputs ? "rgba(96,165,250,0.3)" : "rgba(255,255,255,0.08)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.5s ease",
                boxShadow: idx < activeInputs ? "0 4px 16px rgba(96,165,250,0.15)" : "none",
              }}
            >
              <span
                style={{
                  display: "flex",
                  color: idx < activeInputs ? "rgba(147,197,253,0.9)" : "rgba(255,255,255,0.2)",
                  transition: "color 0.5s ease",
                }}
              >
                {input.icon}
              </span>
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 400,
                color: idx < activeInputs ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.15)",
                transition: "color 0.5s ease",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {input.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Operational Moments Nexus ─────────────────────────────────

function OperationalMomentsNexus({ active }: { active: boolean }) {
  return (
    <div style={{ position: "relative", display: "flex", justifyContent: "center", marginTop: 24 }}>
      {/* Glowing core orb */}
      <motion.div
        animate={{
          opacity: active ? 1 : 0,
          scale: active ? 1 : 0.8,
        }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          width: 140,
          height: 140,
        }}
      >
        {/* Multiple layered glows */}
        <div
          style={{
            position: "absolute",
            inset: -30,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
            filter: "blur(20px)",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: -15,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0.1) 50%, transparent 75%)",
            filter: "blur(15px)",
            animation: "pulse 2.5s ease-in-out infinite 0.3s",
          }}
        />
        
        {/* Central orb */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "radial-gradient(circle at 40% 40%, rgba(196,181,253,0.4), rgba(139,92,246,0.6) 50%, rgba(88,28,135,0.8))",
            border: "1px solid rgba(196,181,253,0.3)",
            boxShadow: "0 0 40px rgba(139,92,246,0.4), inset 0 0 30px rgba(196,181,253,0.2)",
          }}
        />

        {/* Center content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <motion.div
            animate={{ rotate: active ? 360 : 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{
              display: "flex",
              color: "rgba(255,255,255,0.9)",
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
            </svg>
          </motion.div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.03em",
              color: "rgba(255,255,255,0.95)",
              textShadow: "0 0 10px rgba(255,255,255,0.3)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Operational
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.03em",
              color: "rgba(255,255,255,0.95)",
              textShadow: "0 0 10px rgba(255,255,255,0.3)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Moments
          </span>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}

// ── Mialo Intelligence Layer ──────────────────────────────────

function MialoIntelligenceColumn({ activeFeature }: { activeFeature: number }) {
  return (
    <div
      style={{
        flex: "0 0 auto",
        width: 240,
        padding: "20px 18px",
        borderRadius: 16,
        background: "rgba(96,165,250,0.03)",
        border: "1px solid rgba(96,165,250,0.2)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 4px 20px rgba(96,165,250,0.1), inset 0 1px 0 rgba(96,165,250,0.1)",
      }}
    >
      <h3
        style={{
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.02em",
          color: "rgba(147,197,253,0.95)",
          marginBottom: 8,
          textAlign: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Mialo Operational Intelligence
      </h3>

      {/* Intelligence Layer Icon */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
        <motion.div
          animate={{
            rotateY: activeFeature >= 0 ? [0, 180, 360] : 0,
          }}
          transition={{
            duration: 3,
            repeat: activeFeature >= 0 ? Infinity : 0,
            ease: "linear",
          }}
          style={{
            width: 60,
            height: 60,
            position: "relative",
          }}
        >
          {/* Layered stack visualization */}
          {[0, 1, 2].map((layer) => (
            <div
              key={layer}
              style={{
                position: "absolute",
                left: "50%",
                top: `${15 + layer * 8}px`,
                transform: "translateX(-50%)",
                width: `${50 - layer * 6}px`,
                height: 12,
                borderRadius: 6,
                background: `rgba(96,165,250,${0.5 - layer * 0.15})`,
                border: "1px solid rgba(147,197,253,0.4)",
                boxShadow: "0 2px 8px rgba(96,165,250,0.3)",
              }}
            />
          ))}
          
          {/* Sparkle on top */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: "50%",
              top: "8px",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.9)",
              filter: "drop-shadow(0 0 6px rgba(147,197,253,0.8))",
            }}
          >
            ✦
          </motion.div>
        </motion.div>
      </div>

      <p
        style={{
          fontSize: 10,
          fontWeight: 500,
          textAlign: "center",
          color: "rgba(255,255,255,0.8)",
          marginBottom: 4,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Mialo Intelligence Layer
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4, marginBottom: 16 }}>
        {INTELLIGENCE_FEATURES.map((feature, idx) => (
          <motion.span
            key={idx}
            animate={{
              opacity: idx <= activeFeature ? 1 : 0.2,
              scale: idx === activeFeature ? [1, 1.05, 1] : 1,
            }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 1.5, repeat: idx === activeFeature ? Infinity : 0 },
            }}
            style={{
              fontSize: 8,
              fontWeight: 400,
              color: idx <= activeFeature ? "rgba(147,197,253,0.9)" : "rgba(255,255,255,0.2)",
              transition: "color 0.5s ease",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {feature}
            {idx < INTELLIGENCE_FEATURES.length - 1 && " • "}
          </motion.span>
        ))}
      </div>

      {/* Vertical divider */}
      <div style={{ height: 1, background: "rgba(96,165,250,0.2)", marginBottom: 16 }} />

      {/* Energy Pulse */}
      <div
        style={{
          padding: "12px 14px",
          borderRadius: 10,
          background: "rgba(96,165,250,0.06)",
          border: "1px solid rgba(96,165,250,0.25)",
          marginBottom: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(96,165,250,0.8), rgba(96,165,250,0.3))",
              boxShadow: "0 0 12px rgba(96,165,250,0.6)",
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Energy Pulse
          </span>
        </div>
        <p
          style={{
            fontSize: 9,
            fontWeight: 300,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.4,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Real-time Intelligence Core
        </p>
      </div>

      {/* Ripple of Impact */}
      <div
        style={{
          padding: "12px 14px",
          borderRadius: 10,
          background: "rgba(96,165,250,0.06)",
          border: "1px solid rgba(96,165,250,0.25)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 0.3, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "2px solid rgba(96,165,250,0.7)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 3,
                borderRadius: "50%",
                background: "rgba(96,165,250,0.5)",
              }}
            />
          </motion.div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Ripple of Impact
          </span>
        </div>
        <p
          style={{
            fontSize: 9,
            fontWeight: 300,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.4,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Insight → Action → Outcome
        </p>
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────

export default function OperationalInsightsCard() {
  const [tradStep, setTradStep] = useState(0);
  const [inputsActive, setInputsActive] = useState(0);
  const [momentsActive, setMomentsActive] = useState(false);
  const [intelligenceFeature, setIntelligenceFeature] = useState(-1);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    // Animation sequence: 10 seconds total
    // Traditional ops progression
    schedule(() => setTradStep(0), 300);
    schedule(() => setTradStep(1), 800);
    schedule(() => setTradStep(2), 1300);
    schedule(() => setTradStep(3), 1800);
    schedule(() => setTradStep(4), 2300);
    schedule(() => setTradStep(5), 2800);

    // Operational inputs activation
    schedule(() => setInputsActive(1), 3500);
    schedule(() => setInputsActive(2), 3700);
    schedule(() => setInputsActive(3), 3900);
    schedule(() => setInputsActive(4), 4100);
    schedule(() => setInputsActive(5), 4300);

    // Operational moments activation
    schedule(() => setMomentsActive(true), 5000);

    // Intelligence features activation
    schedule(() => setIntelligenceFeature(0), 6000);
    schedule(() => setIntelligenceFeature(1), 6500);
    schedule(() => setIntelligenceFeature(2), 7000);
    schedule(() => setIntelligenceFeature(3), 7500);
    schedule(() => setIntelligenceFeature(4), 8000);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          borderRadius: 24,
          padding: "32px 28px 36px",
          background: "rgba(255,255,255,0.01)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          boxShadow: "0 0 120px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "24px 0 32px" }} />

        {/* Main Content Grid */}
        <div style={{ display: "flex", gap: 28, alignItems: "stretch", justifyContent: "space-between" }}>
          {/* Traditional Operations */}
          <TraditionalOpsColumn activeStep={tradStep} />

          {/* Center Flow */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {/* Operational Inputs */}
            <OperationalInputsSection activeInputs={inputsActive} />

            {/* Connecting Lines to Operational Moments */}
            <div style={{ position: "relative", height: 60, marginTop: 20 }}>
              <svg
                viewBox="0 0 400 60"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  overflow: "visible",
                }}
              >
                {OPERATIONAL_INPUTS.map((_, idx) => {
                  const startX = 50 + idx * 70;
                  const active = idx < inputsActive && momentsActive;
                  return (
                    <motion.path
                      key={idx}
                      d={`M ${startX} 0 Q ${startX} 30, 200 60`}
                      fill="none"
                      stroke={active ? "rgba(96,165,250,0.4)" : "rgba(255,255,255,0.08)"}
                      strokeWidth="1.5"
                      animate={{
                        opacity: active ? [0.3, 0.7, 0.3] : 0.3,
                      }}
                      transition={{
                        duration: 2,
                        repeat: active ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Operational Moments */}
            <OperationalMomentsNexus active={momentsActive} />

            {/* Connecting Line to Intelligence */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
              <motion.div
                animate={{
                  height: momentsActive && intelligenceFeature >= 0 ? 50 : 20,
                  opacity: momentsActive && intelligenceFeature >= 0 ? 1 : 0.2,
                }}
                transition={{ duration: 0.8 }}
                style={{
                  width: 2,
                  background: "linear-gradient(to bottom, rgba(139,92,246,0.6), rgba(96,165,250,0.6))",
                  boxShadow: "0 0 8px rgba(96,165,250,0.4)",
                }}
              />
            </div>
          </div>

          {/* Mialo Intelligence */}
          <MialoIntelligenceColumn activeFeature={intelligenceFeature} />
        </div>
      </div>
    </div>
  );
}
