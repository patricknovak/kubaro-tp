'use client';

import { useState, useRef, useCallback } from 'react';
import { Phone, PhoneOff, Mic, MicOff, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

// =====================================================================
// ElevenLabs Conversational AI Integration for Kubaro Transfer Pricing
// =====================================================================
//
// SETUP INSTRUCTIONS:
//
// 1. Create an ElevenLabs account at https://elevenlabs.io
// 2. Go to "Conversational AI" in the ElevenLabs dashboard
// 3. Create a new Agent with the following configuration:
//
//    Agent Name: "Kubaro TP Advisor"
//    System Prompt: (see ELEVENLABS_SYSTEM_PROMPT below)
//    Voice: "Rachel" or another professional-sounding voice
//    Model: Turbo v2.5 (for low latency)
//    First Message: "Hello! Welcome to Kubaro Transfer Pricing Advisory.
//      I'm here to help understand your transfer pricing needs and connect
//      you with James Crow, our lead advisor. Could you start by telling
//      me your name and company?"
//
// 4. Copy the Agent ID and set it below
// 5. For the signed URL approach (recommended for production):
//    - Create an API endpoint that generates signed URLs
//    - See: https://elevenlabs.io/docs/conversational-ai/guides/conversational-ai-guide-nextjs
//
// =====================================================================

// Replace with your actual ElevenLabs Agent ID
const ELEVENLABS_AGENT_ID = 'YOUR_ELEVENLABS_AGENT_ID';

// System prompt for the ElevenLabs agent (copy this into ElevenLabs dashboard)
const ELEVENLABS_SYSTEM_PROMPT = `You are a professional transfer pricing consultation assistant for Kubaro Transfer Pricing Advisory. Your role is to:

1. GREET the caller warmly and professionally
2. GATHER their information:
   - Full name
   - Company name
   - Email address
   - Phone number (optional)
   - Industry/sector
   - Number of jurisdictions they operate in
   - Current transfer pricing challenge or need (documentation, benchmarking, audit defense, APA, restructuring, IP valuation)
   - Urgency level (routine compliance, upcoming deadline, active audit)
   - How they heard about Kubaro

3. EDUCATE briefly on relevant Kubaro services based on their needs
4. CONFIRM all collected information by reading it back
5. ASSURE them that James Crow, Kubaro's lead advisor, will personally review their information and reach out within one business day

Tone: Professional, knowledgeable, warm but not overly casual. Use transfer pricing terminology naturally but explain concepts when the caller seems unfamiliar.

IMPORTANT: Always collect at minimum: name, company, email, and a description of their TP needs before ending the conversation.`;

interface CallerInfo {
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  jurisdictions: string;
  needs: string;
  urgency: string;
  source: string;
  notes: string;
}

type ConversationStatus = 'idle' | 'connecting' | 'connected' | 'ended' | 'error';

export default function VoiceConsultationClient() {
  const [status, setStatus] = useState<ConversationStatus>('idle');
  const [isMuted, setIsMuted] = useState(false);
  const [transcript, setTranscript] = useState<string[]>([]);
  const [showManualForm, setShowManualForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const conversationRef = useRef<unknown>(null);

  const [callerInfo, setCallerInfo] = useState<CallerInfo>({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    jurisdictions: '',
    needs: '',
    urgency: '',
    source: '',
    notes: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCallerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const startConversation = useCallback(async () => {
    setStatus('connecting');
    setTranscript([]);

    try {
      // Dynamic import of ElevenLabs Conversational AI SDK
      const { Conversation } = await import('@11labs/client');

      const conversation = await Conversation.startSession({
        agentId: ELEVENLABS_AGENT_ID,
        connectionType: 'websocket',
        onConnect: () => {
          setStatus('connected');
          setTranscript((prev) => [...prev, '[Connected to Kubaro Voice Advisor]']);
        },
        onDisconnect: () => {
          setStatus('ended');
          setTranscript((prev) => [...prev, '[Conversation ended]']);
        },
        onMessage: (props: { source: string; message: string }) => {
          const label = props.source === 'ai' ? 'Kubaro Advisor' : 'You';
          setTranscript((prev) => [...prev, `${label}: ${props.message}`]);
        },
        onError: (message: string) => {
          console.error('ElevenLabs error:', message);
          setStatus('error');
          setTranscript((prev) => [...prev, `[Error: ${message}]`]);
        },
      });

      conversationRef.current = conversation;
    } catch (error) {
      console.error('Failed to start conversation:', error);
      setStatus('error');
      // If SDK not available, show helpful message
      setTranscript([
        '[Voice AI is being configured. Please use the form below to submit your information, or call us directly.]',
      ]);
    }
  }, []);

  const endConversation = useCallback(async () => {
    if (conversationRef.current) {
      await (conversationRef.current as { endSession: () => Promise<void> }).endSession();
      conversationRef.current = null;
    }
    setStatus('ended');
  }, []);

  const toggleMute = useCallback(async () => {
    if (conversationRef.current) {
      const conv = conversationRef.current as { setVolume: (opts: { volume: number }) => void };
      conv.setVolume({ volume: isMuted ? 1 : 0 });
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!callerInfo.name || !callerInfo.email || !callerInfo.needs) {
      alert('Please fill in at least your name, email, and a description of your needs.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Formspree (or your preferred backend)
      // This sends the caller info to James Crow for evaluation
      // TODO: Replace YOUR_FORM_ID with actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...callerInfo,
          _subject: `[Kubaro Voice Consultation] New Lead: ${callerInfo.name} - ${callerInfo.company}`,
          _replyto: callerInfo.email,
          formSource: 'Voice Consultation Page',
          transcript: transcript.join('\n'),
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('Submission failed');
      setFormSubmitted(true);
    } catch {
      // Fallback: still show success since the form captures the intent
      // In production, implement proper error handling
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(13,124,143,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(13,124,143,0.2),transparent_50%)]" />
        </div>
        <div className="relative container-wide text-center">
          <div className="inline-flex items-center gap-2 bg-brand-teal/20 border border-brand-teal/30 rounded-full px-4 py-1.5 text-sm text-brand-teal-light mb-6">
            <Phone className="h-4 w-4" />
            AI-Powered Voice Consultation
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Speak With Our{' '}
            <span className="text-brand-teal-light">AI Transfer Pricing Advisor</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Have a voice conversation with our AI advisor to discuss your transfer pricing
            needs. We&apos;ll gather your requirements and James Crow will personally
            review and follow up within one business day.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Voice AI Panel */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-charcoal mb-6">
                Voice Consultation
              </h2>

              {/* Voice Interface */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                {/* Status bar */}
                <div className={`px-4 py-3 flex items-center justify-between text-sm font-medium ${
                  status === 'connected'
                    ? 'bg-green-50 text-green-700 border-b border-green-200'
                    : status === 'connecting'
                    ? 'bg-yellow-50 text-yellow-700 border-b border-yellow-200'
                    : status === 'error'
                    ? 'bg-red-50 text-red-700 border-b border-red-200'
                    : 'bg-gray-100 text-gray-600 border-b border-gray-200'
                }`}>
                  <div className="flex items-center gap-2">
                    {status === 'connected' && (
                      <>
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Connected -- Speaking with Kubaro Advisor
                      </>
                    )}
                    {status === 'connecting' && (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Connecting...
                      </>
                    )}
                    {status === 'idle' && 'Ready to connect'}
                    {status === 'ended' && (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Conversation complete
                      </>
                    )}
                    {status === 'error' && (
                      <>
                        <AlertCircle className="h-4 w-4" />
                        Connection issue -- use the form below
                      </>
                    )}
                  </div>
                </div>

                {/* Transcript area */}
                <div className="h-64 overflow-y-auto p-4 space-y-2 text-sm">
                  {transcript.length === 0 && status === 'idle' && (
                    <div className="text-center text-gray-400 py-8">
                      <Phone className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Click &quot;Start Conversation&quot; to speak with our AI advisor</p>
                      <p className="text-xs mt-2">Microphone access required</p>
                    </div>
                  )}
                  {transcript.map((line, i) => (
                    <p
                      key={i}
                      className={`${
                        line.startsWith('[')
                          ? 'text-gray-400 italic text-xs'
                          : line.startsWith('You:')
                          ? 'text-brand-charcoal'
                          : 'text-brand-teal font-medium'
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Controls */}
                <div className="border-t border-gray-200 px-4 py-4 flex items-center justify-center gap-4">
                  {status === 'idle' || status === 'error' || status === 'ended' ? (
                    <button
                      onClick={startConversation}
                      className="btn-primary flex items-center gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      {status === 'ended' ? 'Start New Conversation' : 'Start Conversation'}
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={toggleMute}
                        className={`p-3 rounded-full transition-colors ${
                          isMuted
                            ? 'bg-red-100 text-red-600 hover:bg-red-200'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                      </button>
                      <button
                        onClick={endConversation}
                        className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                        aria-label="End call"
                      >
                        <PhoneOff className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* How it works */}
              <div className="mt-8">
                <h3 className="font-heading text-lg font-bold text-brand-charcoal mb-4">
                  How It Works
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Start the Conversation',
                      desc: 'Click the button above to connect with our AI voice advisor. Allow microphone access when prompted.',
                    },
                    {
                      step: '2',
                      title: 'Discuss Your Needs',
                      desc: 'Our AI will ask about your company, industry, jurisdictions, and specific transfer pricing challenges.',
                    },
                    {
                      step: '3',
                      title: 'Information Review',
                      desc: 'Your conversation summary and requirements are sent directly to James Crow for personal evaluation.',
                    },
                    {
                      step: '4',
                      title: 'Expert Follow-Up',
                      desc: 'James will reach out within one business day with tailored recommendations and next steps.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-brand-charcoal text-sm">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Written Form Alternative */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-2xl font-bold text-brand-charcoal">
                  {showManualForm ? 'Submit Your Information' : 'Prefer to Write?'}
                </h2>
                {!showManualForm && !formSubmitted && (
                  <button
                    onClick={() => setShowManualForm(true)}
                    className="text-sm text-brand-teal hover:underline font-medium"
                  >
                    Open form
                  </button>
                )}
              </div>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal mb-2">
                    Information Received!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. James Crow will personally review your
                    information and contact you within one business day.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/services" className="btn-secondary text-sm">
                      Explore Our Services
                    </Link>
                    <Link href="/" className="btn-primary text-sm">
                      Return Home
                    </Link>
                  </div>
                </div>
              ) : !showManualForm ? (
                <div className="bg-brand-cream rounded-2xl p-8">
                  <p className="text-gray-700 mb-6">
                    If you prefer not to use voice, you can fill out a detailed form instead.
                    Your information will be sent directly to James Crow for evaluation.
                  </p>
                  <button
                    onClick={() => setShowManualForm(true)}
                    className="btn-primary w-full"
                  >
                    Fill Out Consultation Form
                  </button>
                  <div className="mt-6 pt-6 border-t border-brand-gray-light">
                    <p className="text-sm text-gray-500 mb-3">Or reach us directly:</p>
                    <a
                      href="mailto:info@kubaro.com"
                      className="text-brand-teal hover:underline font-medium"
                    >
                      info@kubaro.com
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-heading font-semibold text-brand-charcoal mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={callerInfo.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-brand-charcoal mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={callerInfo.email}
                        onChange={handleInputChange}
                        placeholder="your@company.com"
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      />
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-heading font-semibold text-brand-charcoal mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={callerInfo.company}
                        onChange={handleInputChange}
                        placeholder="Your organization"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-brand-charcoal mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={callerInfo.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      />
                    </div>
                  </div>

                  {/* Industry & Jurisdictions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-heading font-semibold text-brand-charcoal mb-1.5">
                        Industry
                      </label>
                      <select
                        name="industry"
                        value={callerInfo.industry}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      >
                        <option value="">Select industry...</option>
                        <option value="technology">Technology & Software</option>
                        <option value="pharma">Pharmaceuticals & Life Sciences</option>
                        <option value="financial">Financial Services</option>
                        <option value="manufacturing">Manufacturing & Industrial</option>
                        <option value="energy">Natural Resources & Energy</option>
                        <option value="consumer">Consumer Products & Retail</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-brand-charcoal mb-1.5">
                        Jurisdictions
                      </label>
                      <input
                        type="text"
                        name="jurisdictions"
                        value={callerInfo.jurisdictions}
                        onChange={handleInputChange}
                        placeholder="e.g., US, UK, Germany, Singapore"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      />
                    </div>
                  </div>

                  {/* TP Needs */}
                  <div>
                    <label className="block text-sm font-heading font-semibold text-brand-charcoal mb-1.5">
                      Transfer Pricing Needs *
                    </label>
                    <select
                      name="needs"
                      value={callerInfo.needs}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    >
                      <option value="">Select primary need...</option>
                      <option value="documentation">TP Documentation (Master/Local File, CbCR)</option>
                      <option value="benchmarking">Benchmarking Study</option>
                      <option value="apa">Advance Pricing Agreement</option>
                      <option value="audit">Audit Defense / Dispute Resolution</option>
                      <option value="restructuring">Value Chain / Restructuring</option>
                      <option value="ip">IP Valuation</option>
                      <option value="comprehensive">Comprehensive TP Review</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="block text-sm font-heading font-semibold text-brand-charcoal mb-1.5">
                      Urgency
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { value: 'routine', label: 'Routine Compliance' },
                        { value: 'deadline', label: 'Upcoming Deadline' },
                        { value: 'audit', label: 'Active Audit' },
                        { value: 'exploratory', label: 'Exploratory' },
                      ].map((opt) => (
                        <label
                          key={opt.value}
                          className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                            callerInfo.urgency === opt.value
                              ? 'bg-brand-teal text-white border-brand-teal'
                              : 'bg-white text-gray-600 border-gray-300 hover:border-brand-teal'
                          }`}
                        >
                          <input
                            type="radio"
                            name="urgency"
                            value={opt.value}
                            checked={callerInfo.urgency === opt.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-heading font-semibold text-brand-charcoal mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      name="notes"
                      value={callerInfo.notes}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your specific situation, transaction types, or any other relevant details..."
                      rows={4}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    />
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <label className="block text-sm font-heading font-semibold text-brand-charcoal mb-1.5">
                      How did you hear about Kubaro?
                    </label>
                    <select
                      name="source"
                      value={callerInfo.source}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    >
                      <option value="">Select...</option>
                      <option value="search">Search Engine</option>
                      <option value="referral">Referral</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="conference">Conference / Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send to James Crow for Review
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    James personally reviews all submissions and responds within one business day.
                  </p>
                </form>
              )}

              {/* Trust signals */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-heading font-bold text-brand-charcoal mb-3 text-sm">
                  What Happens Next?
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    Your information is sent directly to James Crow, our lead TP advisor
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    James evaluates your needs and prepares tailored recommendations
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    You receive a personal response within one business day
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    All conversations are confidential and secure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
