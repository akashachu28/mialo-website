"use client";

import { useState, useEffect, useRef } from "react";
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
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  // Handle virtual keyboard and scroll management
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "unset";
      return;
    }

    document.body.style.overflow = "hidden";
    
    // Detect mobile virtual keyboard
    const handleResize = () => {
      if (window.innerHeight < 600) {
        setIsKeyboardVisible(true);
      } else {
        setIsKeyboardVisible(false);
      }
    };

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        setTimeout(() => {
          setIsKeyboardVisible(true);
          // Scroll focused element into view
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    };

    const handleBlur = () => {
      setTimeout(() => {
        setIsKeyboardVisible(false);
      }, 300);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // HubSpot Forms API endpoint - HARDCODED VALUES
      // TODO: Replace these with your actual HubSpot values
      const portalId = "247508930"; // Replace with your actual Portal ID
      const formGuid = "f52e3419-714b-479c-acde-ebe5c1dbef66"; // Replace with your actual Form GUID
      
      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;
      
      console.log("DEBUG - API URL:", url);
      console.log("DEBUG - Portal ID:", portalId);
      console.log("DEBUG - Form GUID:", formGuid);

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
            name: "company",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Scroll Container for Mobile Keyboard Support */}
      <div 
        ref={scrollContainerRef}
        className={`
          relative z-10 w-full max-h-[100dvh] overflow-y-auto
          transition-all duration-300 ease-out
          ${isKeyboardVisible ? 'max-h-[50dvh]' : 'max-h-[90dvh]'}
        `}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {/* Modal */}
        <div 
          ref={modalRef}
          className={`
            mx-auto my-4 sm:my-8 w-full max-w-[95vw] sm:max-w-lg
            animate-in fade-in zoom-in duration-200
            ${isKeyboardVisible ? 'my-2' : 'my-4 sm:my-8'}
          `}
        >
          <div
            className="relative overflow-hidden border border-gray-100/70 bg-gray-100 shadow-2xl"
            style={{
              clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
            }}
          >
            {/* Header */}
            <div className="border-b border-ice/20 px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8">
              <div className="flex items-start justify-between">
                <div className="pr-4">
                  <h2 
                    className="font-display leading-tight tracking-tight text-gray-700"
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(20px, 4vw, 32px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.03em"
                    }}
                  >
                    Request a Demo
                  </h2>
                  <p 
                    className="mt-2 sm:mt-3 text-ice/80"
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(12px, 2.5vw, 14px)",
                      lineHeight: 1.5,
                      letterSpacing: "-0.01em"
                    }}
                  >
                    See how Mialo can transform your operations
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-ice/20 text-ice/60 transition-all hover:border-ice/40 hover:bg-white/50 hover:text-ice flex-shrink-0"
                  aria-label="Close modal"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form */}
            {submitStatus === "success" ? (
              /* Success Message */
              <div className="p-4 sm:p-6 md:p-10 text-center">
                <div className="mb-4 sm:mb-6">
                  <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-green-100">
                    <Icon name="check-circle" size={24} className="text-green-600 sm:w-8 sm:h-8" />
                  </div>
                  <h3 
                    className="text-gray-700 mb-2 sm:mb-3"
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(18px, 4vw, 24px)",
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
                      fontSize: "clamp(14px, 3vw, 16px)",
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
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-10">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                    {/* First Name */}
                    <div className="relative flex-1">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        style={{ 
                          fontFamily: "var(--font-manrope), sans-serif",
                          fontWeight: 400,
                          fontSize: "15px",
                          letterSpacing: "-0.01em"
                        }}
                        className="peer w-full rounded-lg border border-ice/20 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-gray-700 transition-all focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/30 text-sm sm:text-base"
                      />
                      <label
                        htmlFor="firstName"
                        style={{ 
                          fontFamily: "var(--font-manrope), sans-serif"
                        }}
                        className="pointer-events-none absolute left-3 sm:left-4 top-2.5 sm:top-3 text-sm sm:text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-[15px] peer-focus:top-[-8px] sm:peer-focus:top-[-10px] peer-focus:left-2.5 sm:peer-focus:left-3 peer-focus:bg-gray-100 peer-focus:px-1.5 sm:peer-focus:px-2 peer-focus:text-[10px] sm:peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-8px] sm:peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-2.5 sm:peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-gray-100 peer-[:not(:placeholder-shown)]:px-1.5 sm:peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[10px] sm:peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
                      >
                        First Name *
                      </label>
                    </div>
                    {/* Last Name  */}
                    <div className="relative flex-1">
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
                        className="peer w-full rounded-lg border border-ice/20 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-gray-700 transition-all focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/30 text-sm sm:text-base"
                      />
                      <label
                        htmlFor="lastName"
                        style={{ 
                          fontFamily: "var(--font-manrope), sans-serif"
                        }}
                        className="pointer-events-none absolute left-3 sm:left-4 top-2.5 sm:top-3 text-sm sm:text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-[15px] peer-focus:top-[-8px] sm:peer-focus:top-[-10px] peer-focus:left-2.5 sm:peer-focus:left-3 peer-focus:bg-gray-100 peer-focus:px-1.5 sm:peer-focus:px-2 peer-focus:text-[10px] sm:peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-8px] sm:peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-2.5 sm:peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-gray-100 peer-[:not(:placeholder-shown)]:px-1.5 sm:peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[10px] sm:peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
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
                      className="peer w-full rounded-lg border border-ice/20 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-gray-700 transition-all focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/30 text-sm sm:text-base"
                    />
                    <label
                      htmlFor="company"
                      style={{ 
                        fontFamily: "var(--font-manrope), sans-serif"
                      }}
                      className="pointer-events-none absolute left-3 sm:left-4 top-2.5 sm:top-3 text-sm sm:text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-[15px] peer-focus:top-[-8px] sm:peer-focus:top-[-10px] peer-focus:left-2.5 sm:peer-focus:left-3 peer-focus:bg-gray-100 peer-focus:px-1.5 sm:peer-focus:px-2 peer-focus:text-[10px] sm:peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-8px] sm:peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-2.5 sm:peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-gray-100 peer-[:not(:placeholder-shown)]:px-1.5 sm:peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[10px] sm:peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
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
                      className="peer w-full rounded-lg border border-ice/20 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-gray-700 transition-all focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/30 text-sm sm:text-base"
                    />
                    <label
                      htmlFor="email"
                      style={{ 
                        fontFamily: "var(--font-manrope), sans-serif"
                      }}
                      className="pointer-events-none absolute left-3 sm:left-4 top-2.5 sm:top-3 text-sm sm:text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-[15px] peer-focus:top-[-8px] sm:peer-focus:top-[-10px] peer-focus:left-2.5 sm:peer-focus:left-3 peer-focus:bg-gray-100 peer-focus:px-1.5 sm:peer-focus:px-2 peer-focus:text-[10px] sm:peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-8px] sm:peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-2.5 sm:peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-gray-100 peer-[:not(:placeholder-shown)]:px-1.5 sm:peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[10px] sm:peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
                    >
                      Email Address *
                    </label>
                  </div>

                  {/* Phone with Country Code */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    {/* Country Code Dropdown */}
                    <div className="relative w-full sm:w-32">
                      <select
                        id="phoneCode"
                        name="phoneCode"
                        value={formData.phoneCode}
                        onChange={handleChange}
                        style={{ 
                          fontFamily: "var(--font-manrope), sans-serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          letterSpacing: "-0.01em"
                        }}
                        className="w-full appearance-none rounded-lg border border-ice/20 bg-white px-3 py-2.5 sm:py-3 text-gray-700 transition-all focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/30 text-sm"
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
                      <div className="pointer-events-none absolute right-2 sm:right-3 top-1/2 -translate-y-1/2">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="text-ice/60 sm:w-3 sm:h-3">
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
                        className="peer w-full rounded-lg border border-ice/20 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-gray-700 transition-all focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/30 text-sm sm:text-base"
                      />
                      <label
                        htmlFor="phone"
                        style={{ 
                          fontFamily: "var(--font-manrope), sans-serif"
                        }}
                        className="pointer-events-none absolute left-3 sm:left-4 top-2.5 sm:top-3 text-sm sm:text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-[15px] peer-focus:top-[-8px] sm:peer-focus:top-[-10px] peer-focus:left-2.5 sm:peer-focus:left-3 peer-focus:bg-gray-100 peer-focus:px-1.5 sm:peer-focus:px-2 peer-focus:text-[10px] sm:peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-8px] sm:peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-2.5 sm:peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-gray-100 peer-[:not(:placeholder-shown)]:px-1.5 sm:peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[10px] sm:peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
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
                      rows={3}
                      placeholder=" "
                      style={{ 
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 400,
                        fontSize: "15px",
                        letterSpacing: "-0.01em"
                      }}
                      className="peer w-full resize-none rounded-lg border border-ice/20 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-gray-700 transition-all focus:border-ice focus:outline-none focus:ring-1 focus:ring-ice/30 text-sm sm:text-base"
                    />
                    <label
                      htmlFor="message"
                      style={{ 
                        fontFamily: "var(--font-manrope), sans-serif"
                      }}
                      className="pointer-events-none absolute left-3 sm:left-4 top-2.5 sm:top-3 text-sm sm:text-[15px] font-normal text-ice/60 transition-all peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-[15px] peer-focus:top-[-8px] sm:peer-focus:top-[-10px] peer-focus:left-2.5 sm:peer-focus:left-3 peer-focus:bg-gray-100 peer-focus:px-1.5 sm:peer-focus:px-2 peer-focus:text-[10px] sm:peer-focus:text-[11px] peer-focus:font-medium peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-ice peer-[:not(:placeholder-shown)]:top-[-8px] sm:peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-2.5 sm:peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-gray-100 peer-[:not(:placeholder-shown)]:px-1.5 sm:peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[10px] sm:peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-ice"
                    >
                      Message
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(14px, 2.5vw, 15px)",
                      letterSpacing: "-0.01em"
                    }}
                    className="group relative w-full sm:flex-1 overflow-hidden rounded-lg border border-ice bg-ice px-4 sm:px-6 py-2.5 sm:py-3 text-white transition-all hover:bg-ice/90 hover:shadow-lg hover:shadow-ice/20 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitStatus === "error" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" y1="8" x2="12" y2="12"/>
                          <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        Failed to Send
                      </span>
                    ) : isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="h-3 w-3 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
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
                      fontSize: "clamp(14px, 2.5vw, 15px)",
                      letterSpacing: "-0.01em"
                    }}
                    className="w-full sm:w-auto rounded-lg border border-ice/30 px-4 sm:px-6 py-2.5 sm:py-3 text-ice transition-all hover:border-ice hover:bg-white/50"
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
    </div>
  );
}
