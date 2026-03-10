'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

// Transfer pricing knowledge base for intelligent responses
const TP_KNOWLEDGE: { patterns: RegExp; response: string }[] = [
  {
    patterns: /\b(what is|define|explain)\b.*\btransfer pric/i,
    response:
      'Transfer pricing refers to the rules and methods for pricing transactions between related enterprises operating in different tax jurisdictions. It ensures intercompany transactions are conducted at arm\'s length -- meaning the price should be comparable to what unrelated parties would agree to in similar circumstances.\n\nAt Kubaro, we help multinational enterprises establish defensible transfer pricing policies that satisfy tax authorities worldwide. Would you like to learn about our specific services?',
  },
  {
    patterns: /\b(arm.?s?\s*length|ALP)\b/i,
    response:
      'The Arm\'s Length Principle (ALP) is the international standard for transfer pricing. It states that intercompany transactions should be priced as if the parties were independent and dealing at arm\'s length.\n\nThe OECD Transfer Pricing Guidelines provide five methods to test arm\'s length compliance: CUP, Resale Price, Cost Plus, TNMM, and Profit Split.\n\nKubaro\'s benchmarking team specializes in applying these methods across 50+ jurisdictions. Want to discuss which method suits your situation?',
  },
  {
    patterns: /\b(BEPS|base erosion|profit shifting|pillar|action\s*(8|9|10|13))\b/i,
    response:
      'The OECD BEPS (Base Erosion and Profit Shifting) project has significantly reshaped the transfer pricing landscape. Key actions include:\n\n- Actions 8-10: Aligning TP outcomes with value creation\n- Action 13: Country-by-Country Reporting (CbCR)\n- Pillar One: New taxing rights for market jurisdictions\n- Pillar Two: Global minimum tax of 15%\n\nKubaro stays at the forefront of these developments and helps clients adapt their TP policies accordingly. Would you like to schedule a consultation to discuss BEPS impact on your business?',
  },
  {
    patterns: /\b(document|local file|master file|CbCR|country.by.country)\b/i,
    response:
      'Transfer pricing documentation typically includes three tiers under OECD Action 13:\n\n1. **Master File** -- Global overview of the MNE group\n2. **Local File** -- Detailed TP analysis for each jurisdiction\n3. **Country-by-Country Report (CbCR)** -- Aggregate data by tax jurisdiction\n\nKubaro prepares comprehensive, audit-ready documentation aligned with both OECD standards and local requirements across 50+ countries. Our documentation has a 95% audit success rate. Shall I connect you with our team?',
  },
  {
    patterns: /\b(benchmark|comparable|comps|database|BvD|orbis|TP catalyst)\b/i,
    response:
      'Benchmarking studies are essential to demonstrating that your intercompany transactions are at arm\'s length. We use leading databases including Bureau van Dijk (Orbis), TP Catalyst, and others to identify reliable comparables.\n\nOur benchmarking process includes:\n- Functional analysis of tested party\n- Comparable company screening\n- Financial analysis and quartile range determination\n- Sensitivity and robustness testing\n\nKubaro\'s benchmarking studies are designed to withstand audit scrutiny. Would you like to discuss a benchmarking study for your transactions?',
  },
  {
    patterns: /\b(APA|advance pricing agreement|bilateral|unilateral|multilateral)\b/i,
    response:
      'Advance Pricing Agreements (APAs) provide certainty on transfer pricing by agreeing the methodology with tax authorities in advance. Types include:\n\n- **Unilateral APA**: Agreement with one tax authority\n- **Bilateral APA**: Between two countries (reduces double taxation risk)\n- **Multilateral APA**: Three or more jurisdictions\n\nKubaro has extensive experience guiding clients through the APA process, from initial assessment to successful completion. The certainty an APA provides often outweighs the investment. Want to explore if an APA is right for you?',
  },
  {
    patterns: /\b(audit|dispute|MAP|competent authority|penalty|adjustment)\b/i,
    response:
      'Transfer pricing audits and disputes are increasingly common globally. Kubaro provides expert support at every stage:\n\n- **Audit defense**: Responding to information requests and presenting your TP position\n- **Competent Authority / MAP**: Resolving double taxation through mutual agreement procedures\n- **Litigation support**: Expert testimony and technical analysis\n\nOur team has a 95% success rate in defending transfer pricing positions. If you\'re facing an audit or adjustment, early engagement is critical. Would you like to speak with our dispute resolution team?',
  },
  {
    patterns: /\b(IP|intangible|royalt|licens|DEMPE|cost.?sharing)\b/i,
    response:
      'Intellectual property and intangibles are among the most complex areas of transfer pricing. Key considerations include:\n\n- **DEMPE functions**: Development, Enhancement, Maintenance, Protection, and Exploitation\n- **Valuation methods**: Relief from royalty, excess earnings, discounted cash flow\n- **Cost-sharing arrangements**: Allocating R&D costs among participants\n\nKubaro\'s IP valuation team combines TP expertise with sophisticated valuation techniques to establish defensible positions. Shall we discuss your IP-related transactions?',
  },
  {
    patterns: /\b(value chain|restructur|supply chain|business model)\b/i,
    response:
      'Value chain analysis examines how value is created across your global operations and ensures profits align with economic substance. This is critical for:\n\n- Business restructurings and post-acquisition integration\n- Supply chain optimization\n- Identifying TP planning opportunities\n- Defending against substance-based challenges\n\nKubaro\'s value chain analysis goes beyond traditional functional analysis to map genuine value drivers. Want to explore how we can optimize your intercompany structure?',
  },
  {
    patterns: /\b(service|consult|help|what (do|can) you|offering|practice)\b/i,
    response:
      'Kubaro offers comprehensive transfer pricing services:\n\n1. **TP Documentation** -- Master files, local files, CbCR\n2. **Benchmarking Studies** -- Comparable analysis using leading databases\n3. **Advance Pricing Agreements** -- Unilateral, bilateral, multilateral\n4. **Dispute Resolution** -- Audit defense, MAP, litigation support\n5. **Value Chain Analysis** -- End-to-end value mapping and optimization\n6. **IP Valuation** -- Intangible property pricing and DEMPE analysis\n\nOur team has 15+ years of experience across 50+ jurisdictions. How can we help you?',
  },
  {
    patterns: /\b(price|cost|fee|how much|expensive|budget|quote)\b/i,
    response:
      'Our engagement fees depend on the scope and complexity of the work. Factors include the number of jurisdictions, transaction types, and whether documentation already exists.\n\nWe\'re happy to provide a tailored proposal after understanding your specific needs. The best next step is to schedule a free initial consultation where we can scope the engagement.\n\nWould you like to get in touch with our team for a no-obligation discussion?',
  },
  {
    patterns: /\b(contact|speak|call|reach|email|phone|meet|consultation|book|schedule)\b/i,
    response:
      'We\'d love to connect with you! Here\'s how you can reach Kubaro:\n\n- **Email**: info@kubaro.com\n- **Contact Form**: Visit our [Contact page](/contact) to send us a message\n- **Consultation**: [Schedule a consultation](/consultation) directly\n- **Voice AI**: Try our [AI Voice Consultant](/voice-consultation) to walk through your needs by voice\n\nJames Crow, our lead advisor, personally reviews all new inquiries. We typically respond within one business day.',
  },
  {
    patterns: /\b(james|crow|who|team|founder|partner|advisor)\b/i,
    response:
      'James Crow leads Kubaro\'s transfer pricing practice. With deep expertise across multiple industries and jurisdictions, James personally oversees client engagements to ensure the highest quality of work.\n\nOur team combines senior-level expertise with practical business insight -- your engagement is always led by experienced practitioners, never delegated to juniors.\n\nWould you like to schedule a consultation with James?',
  },
  {
    patterns: /\b(hi|hello|hey|good (morning|afternoon|evening)|greetings)\b/i,
    response:
      'Hello! Welcome to Kubaro Transfer Pricing Advisory. I\'m here to help you with transfer pricing questions.\n\nI can help with topics like:\n- Transfer pricing documentation & compliance\n- Benchmarking studies\n- Advance Pricing Agreements\n- Audit defense & dispute resolution\n- IP valuation & value chain analysis\n\nWhat would you like to know?',
  },
];

const FALLBACK_RESPONSE =
  'That\'s a great question. While I can help with general transfer pricing topics, for detailed advice specific to your situation, I\'d recommend speaking directly with our team.\n\nYou can:\n- [Schedule a consultation](/consultation)\n- [Contact us](/contact) via our form\n- Try our [AI Voice Consultant](/voice-consultation) for an interactive discussion\n\nIs there anything else about transfer pricing I can help clarify?';

function getResponse(userMessage: string): string {
  for (const entry of TP_KNOWLEDGE) {
    if (entry.patterns.test(userMessage)) {
      return entry.response;
    }
  }
  return FALLBACK_RESPONSE;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Hello! I\'m Kubaro\'s transfer pricing assistant. I can help answer your TP questions and connect you with our advisory team.\n\nWhat would you like to know about transfer pricing?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: Message = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate a brief "thinking" delay for natural feel
    setTimeout(() => {
      const response = getResponse(trimmed);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Render markdown-lite: bold, links
  const renderContent = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
      if (boldMatch) {
        return (
          <strong key={i} className="font-semibold">
            {boldMatch[1]}
          </strong>
        );
      }
      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        return (
          <a
            key={i}
            href={linkMatch[2]}
            className="text-brand-teal underline hover:text-brand-teal-dark"
          >
            {linkMatch[1]}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-teal text-white rounded-full shadow-lg hover:bg-brand-teal-dark transition-all duration-200 flex items-center justify-center group"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          {/* Notification dot */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-4rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-brand-navy text-white px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm">Kubaro TP Assistant</p>
                <p className="text-xs text-gray-300">Transfer Pricing Help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 bg-brand-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-brand-teal text-white rounded-br-sm'
                      : 'bg-white text-brand-charcoal border border-gray-200 rounded-bl-sm shadow-sm'
                  }`}
                >
                  {msg.role === 'assistant' ? renderContent(msg.content) : msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-7 h-7 bg-brand-charcoal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 items-start">
                <div className="w-7 h-7 bg-brand-teal rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-white border border-gray-200 rounded-xl rounded-bl-sm px-3 py-2 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 flex flex-wrap gap-2 bg-gray-50 border-t border-gray-100">
              {['What services do you offer?', 'What is transfer pricing?', 'Schedule a consultation'].map(
                (q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => {
                        setInput('');
                        const userMsg: Message = { role: 'user', content: q };
                        setMessages((prev) => [...prev, userMsg]);
                        setIsTyping(true);
                        setTimeout(() => {
                          setMessages((prev) => [
                            ...prev,
                            { role: 'assistant', content: getResponse(q) },
                          ]);
                          setIsTyping(false);
                        }, 600 + Math.random() * 400);
                      }, 50);
                    }}
                    className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full text-brand-charcoal hover:border-brand-teal hover:text-brand-teal transition-colors"
                  >
                    {q}
                  </button>
                )
              )}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white flex-shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about transfer pricing..."
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="p-2 bg-brand-teal text-white rounded-lg hover:bg-brand-teal-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-1.5 text-center">
              For personalized advice, <a href="/contact" className="text-brand-teal hover:underline">contact our team</a> or try our <a href="/voice-consultation" className="text-brand-teal hover:underline">Voice AI Consultant</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
