"use client";

import { useState, useEffect } from "react";
import { Icon } from "./ui";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneCode: "+1",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Handle modal close and reset state
  const handleClose = () => {
    // Reset state when closing
    setSubmitStatus("idle");
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phoneCode: "+1",
      phone: "",
      message: "",
    });
    setIsSubmitting(false);
    onClose();
  };

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

    try {
      // HubSpot Forms API endpoint
      const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
      const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID;
      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

      // Prepare the payload for HubSpot
      const hubspotPayload = {
        fields: [
          {
            name: "firstname",
            value: formData.firstName,
          },
          {
            name: "lastname",
            value: formData.lastName,
          },
          {
            name: "email",
            value: formData.email,
          },
          {
            name: "0-2/name",
            value: formData.company,
          },
          ...(formData.phone ? [{
            name: "phone",
            value: `${formData.phoneCode}${formData.phone}`,
          }] : []),
          ...(formData.message ? [{
            name: "message",
            value: formData.message,
          }] : []),
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hubspotPayload),
      });

      if (response.ok) {
        console.log("Demo request submitted successfully");
        setSubmitStatus("success");
        
        // Reset form after success
        setTimeout(() => {
          setFormData({ firstName: "", lastName: "", company: "", email: "", phoneCode: "+1", phone: "", message: "" });
          // Keep success status - don't reset to idle
        }, 500);
      } else {
        const errorData = await response.json();
        console.error("HubSpot submission error:", errorData);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error submitting to HubSpot:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg animate-in fade-in zoom-in duration-200">
        <div
          className="relative overflow-hidden  border border-gray-100/70 bg-gray-100 shadow-2xl"
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
                onClick={handleClose}
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
          {submitStatus === "success" ? (
            /* Success Message */
            <div className="p-10 text-center">
              <div className="mb-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Icon name="check-circle" size={32} className="text-green-600" />
                </div>
                <h3 
                  className="text-gray-700 mb-3"
                  style={{ 
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em"
                  }}
                >
                  Form submitted
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ 
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: 1.5,
                    letterSpacing: "-0.01em"
                  }}
                >
                  Thank you, we&apos;ll be in touch soon
                </p>
              </div>
            </div>
          ) : (
            /* Form Content */
            <form onSubmit={handleSubmit} className="p-10">
            <div className="space-y-4">
              <div className="flex gap-2">
                {/* First Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    // value={formData.name}
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
                    htmlFor="firstName"
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif"
                    }}
                    className="pointer-events-none absolute left-4 top-3 text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[15px] peer-focus:top-[-10px] peer-focus:left-3 peer-focus:bg-gray-100 peer-focus:px-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-gray-100 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
                  >
                    First Name *
                  </label>
                </div>
                {/* Last Name  */}
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
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
                    htmlFor="lastName"
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif"
                    }}
                    className="pointer-events-none absolute left-4 top-3 text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[15px] peer-focus:top-[-10px] peer-focus:left-3 peer-focus:bg-gray-100 peer-focus:px-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-gray-100 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
                  >
                    Last Name *
                  </label>
                </div>
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
                  className="pointer-events-none absolute left-4 top-3 text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[15px] peer-focus:top-[-10px] peer-focus:left-3 peer-focus:bg-gray-100 peer-focus:px-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-gray-100 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
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
                  className="pointer-events-none absolute left-4 top-3 text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[15px] peer-focus:top-[-10px] peer-focus:left-3 peer-focus:bg-gray-100 peer-focus:px-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-gray-100 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
                >
                  Email Address *
                </label>
              </div>

              {/* Phone with Country Code */}
              <div className="flex gap-2">
                {/* Country Code Dropdown */}
                <div className="relative w-28">
                  <select
                    id="phoneCode"
                    name="phoneCode"
                    value={formData.phoneCode}
                    onChange={handleChange}
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "15px",
                      letterSpacing: "-0.01em"
                    }}
                    className="w-full appearance-none rounded-lg border border-ice/20 bg-white px-3 py-3 text-gray-700 transition-all focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/30"
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+55">🇧🇷 +55</option>
                    <option value="+52">🇲🇽 +52</option>
                    <option value="+7">🇷🇺 +7</option>
                    <option value="+82">🇰🇷 +82</option>
                    <option value="+31">🇳🇱 +31</option>
                    <option value="+46">🇸🇪 +46</option>
                    <option value="+41">🇨🇭 +41</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+27">🇿🇦 +27</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-ice/60">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="relative flex-1">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                    htmlFor="phone"
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif"
                    }}
                    className="pointer-events-none absolute left-4 top-3 text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[15px] peer-focus:top-[-10px] peer-focus:left-3 peer-focus:bg-gray-100 peer-focus:px-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-gray-100 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
                  >
                    Phone Number
                  </label>
                </div>
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
                  className="pointer-events-none absolute left-4 top-3 text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[15px] peer-focus:top-[-10px] peer-focus:left-3 peer-focus:bg-gray-100 peer-focus:px-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-gray-100 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
                >
                  Message
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                style={{ 
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  letterSpacing: "-0.01em"
                }}
                className="group relative flex-1 overflow-hidden rounded-lg border border-ice bg-ice px-6 py-3 text-white transition-all hover:bg-ice/90 hover:shadow-lg hover:shadow-ice/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitStatus === "error" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    Failed to Send
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
                onClick={handleClose}
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
          )}

          {/* Decorative gradient line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ice/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}
