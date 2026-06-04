"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { toast } from "sonner";

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    partySize: "",
    requests: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    const promise = new Promise((resolve) => setTimeout(resolve, 1200));
    
    toast.promise(promise, {
      loading: 'Sending your request...',
      success: () => {
        setSubmitted(true);
        setIsSubmitting(false);
        return 'Reservation request received!';
      },
      error: 'Failed to send request.',
    });
  };

  return (
    <div className="pt-32 pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Header */}
        <FadeIn>
          <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-espresso mb-6">
            Reserve a Table
          </h1>
          <p className="text-espresso/60 max-w-lg leading-relaxed mb-16">
            We'd love to have you. Fill in the details below and we'll confirm 
            your reservation within a few hours.
          </p>
        </FadeIn>

        {!submitted ? (
          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-10" id="reservation-form">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-widest text-espresso/50 mb-3 block"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Priya Sharma"
                  className="editorial-input"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label
                    htmlFor="date"
                    className="text-xs uppercase tracking-widest text-espresso/50 mb-3 block"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="editorial-input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="text-xs uppercase tracking-widest text-espresso/50 mb-3 block"
                  >
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="editorial-input bg-transparent"
                  >
                    <option value="">Select a time</option>
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Party Size */}
              <div>
                <label
                  htmlFor="partySize"
                  className="text-xs uppercase tracking-widest text-espresso/50 mb-3 block"
                >
                  Party Size
                </label>
                <select
                  id="partySize"
                  name="partySize"
                  value={form.partySize}
                  onChange={handleChange}
                  required
                  className="editorial-input bg-transparent"
                >
                  <option value="">How many guests?</option>
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5 people</option>
                  <option value="6">6 people</option>
                  <option value="7-8">7–8 people</option>
                  <option value="9+">9+ (please call us)</option>
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label
                  htmlFor="requests"
                  className="text-xs uppercase tracking-widest text-espresso/50 mb-3 block"
                >
                  Special Requests
                </label>
                <textarea
                  id="requests"
                  name="requests"
                  value={form.requests}
                  onChange={handleChange}
                  placeholder="Birthday celebration, high chair, dietary needs..."
                  rows={3}
                  className="editorial-input resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-link text-sm uppercase tracking-widest bg-transparent border-none cursor-pointer font-sans p-0 disabled:opacity-50"
                id="reservation-submit"
              >
                {isSubmitting ? "Processing..." : "Confirm Reservation"} <span className="text-lg">→</span>
              </button>
            </form>
          </FadeIn>
        ) : (
          <FadeIn>
            <div className="py-12 text-center" id="reservation-confirmation">
              <p className="font-serif italic text-2xl md:text-3xl text-espresso mb-4">
                Thank you, {form.name}.
              </p>
              <p className="text-espresso/60">
                We&apos;ll confirm your reservation for {form.partySize}{" "}
                {parseInt(form.partySize) === 1 ? "person" : "people"} on{" "}
                {new Date(form.date).toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}{" "}
                at {form.time} shortly via WhatsApp or call.
              </p>
            </div>
          </FadeIn>
        )}

        {/* Divider */}
        <hr className="editorial-divider my-16" />

        {/* WhatsApp Alternative */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-16">
            <p className="text-espresso/60 mb-4">
              Prefer to book directly?
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-espresso text-sm uppercase tracking-widest justify-center"
              id="reservation-whatsapp"
            >
              Message us on WhatsApp <span className="text-lg">→</span>
            </a>
          </div>
        </FadeIn>

        {/* Policies */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm text-espresso/60">
            <div>
              <h3 className="font-display text-base text-espresso mb-3">
                Hours & Timings
              </h3>
              <p className="leading-relaxed">
                We're open daily from 8:00 AM to 10:00 PM. 
                Breakfast is served until 11:30 AM, lunch from 12:00 PM to 4:00 PM, 
                and dinner from 6:30 PM onwards. Last orders at 9:30 PM.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base text-espresso mb-3">
                Cancellation & Walk-ins
              </h3>
              <p className="leading-relaxed">
                Reservations can be cancelled or modified up to 2 hours in advance. 
                Walk-ins are always welcome on weekdays — we'll do our best to 
                accommodate you. Weekends tend to fill up, so booking ahead is recommended.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
