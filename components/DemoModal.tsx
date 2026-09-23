"use client";

import { useState, useEffect } from "react";
import { Icon } from "./ui";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Demo request submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: "", company: "", email: "", message: "" });
        setSubmitStatus("idle");
        onClose();
      }, 2000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg animate-in fade-in zoom-in duration-200">
        <div
          className="relative overflow-hidden  border border-pista/70 bg-pista shadow-2xl"
          style={{
            clipPath: "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
          }}
        >
          {/* Header */}
          <div className="border-b border-ice/20 px-10 py-8">
            <div className="flex items-start justify-between">
              <div>
                <h2 
                  className="font-display leading-tight tracking-tight text-gray-700"
                  style={{ 
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(24px, 4vw, 32px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em"
                  }}
                >
                  Request a Demo
                </h2>
                <p 
                  className="mt-3 text-ice/80"
                  style={{ 
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.5,
                    letterSpacing: "-0.01em"
                  }}
                >
                  See how Mialo can transform your operations
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-ice/20 text-ice/60 transition-all hover:border-ice/40 hover:bg-white/50 hover:text-ice"
                aria-label="Close modal"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-10">
            <div className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  style={{ 
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    letterSpacing: "-0.01em"
                  }}
                  className="peer w-full rounded-lg border border-ice/20 bg-white px-4 py-3 text-gray-700 transition-all focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/30"
                />
                <label
                  htmlFor="name"
                  style={{ 
                    fontFamily: "var(--font-manrope), sans-serif"
                  }}
                  className="pointer-events-none absolute left-4 top-3 text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[15px] peer-focus:top-[-10px] peer-focus:left-3 peer-focus:bg-pista peer-focus:px-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-pista peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
                >
                  Your Name *
                </label>
              </div>

              {/* Company */}
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  style={{ 
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    letterSpacing: "-0.01em"
                  }}
                  className="peer w-full rounded-lg border border-ice/20 bg-white px-4 py-3 text-gray-700 transition-all focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/30"
                />
                <label
                  htmlFor="company"
                  style={{ 
                    fontFamily: "var(--font-manrope), sans-serif"
                  }}
                  className="pointer-events-none absolute left-4 top-3 text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[15px] peer-focus:top-[-10px] peer-focus:left-3 peer-focus:bg-pista peer-focus:px-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-pista peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
                >
                  Company Name *
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  style={{ 
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    letterSpacing: "-0.01em"
                  }}
                  className="peer w-full rounded-lg border border-ice/20 bg-white px-4 py-3 text-gray-700 transition-all focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/30"
                />
                <label
                  htmlFor="email"
                  style={{ 
                    fontFamily: "var(--font-manrope), sans-serif"
                  }}
                  className="pointer-events-none absolute left-4 top-3 text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[15px] peer-focus:top-[-10px] peer-focus:left-3 peer-focus:bg-pista peer-focus:px-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-pista peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
                >
                  Email Address *
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder=" "
                  style={{ 
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    letterSpacing: "-0.01em"
                  }}
                  className="peer w-full resize-none rounded-lg border border-ice/20 bg-white px-4 py-3 text-gray-700 transition-all focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/30"
                />
                <label
                  htmlFor="message"
                  style={{ 
                    fontFamily: "var(--font-manrope), sans-serif"
                  }}
                  className="pointer-events-none absolute left-4 top-3 text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[15px] peer-focus:top-[-10px] peer-focus:left-3 peer-focus:bg-pista peer-focus:px-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-pista peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
                >
                  Message
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                style={{ 
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  letterSpacing: "-0.01em"
                }}
                className="group relative flex-1 overflow-hidden rounded-lg border border-ice bg-ice px-6 py-3 text-white transition-all hover:bg-ice/90 hover:shadow-lg hover:shadow-ice/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitStatus === "success" ? (
                  <span className="flex items-center justify-center gap-2">
                    <Icon name="check-circle" size={18} />
                    Sent Successfully
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </span>
                ) : (
                  "Send Request"
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                style={{ 
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  letterSpacing: "-0.01em"
                }}
                className="rounded-lg border border-ice/30 px-6 py-3 text-ice transition-all hover:border-ice hover:bg-white/50"
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Decorative gradient line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ice/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}
