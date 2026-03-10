import { useState } from 'react';

const questions = [
  {
    id: 1,
    category: "Documentation",
    question: "Do you have contemporaneous transfer pricing documentation for all intercompany transactions?",
    options: [
      { text: "Yes, fully documented and updated annually", score: 0 },
      { text: "Partially documented or not updated recently", score: 2 },
      { text: "No documentation in place", score: 4 },
    ],
  },
  {
    id: 2,
    category: "Documentation",
    question: "Can you produce your TP documentation within 30 days if requested by the CRA?",
    options: [
      { text: "Yes, ready to submit within 30 days", score: 0 },
      { text: "Would need 30-60 days to prepare", score: 2 },
      { text: "Would need more than 60 days or unsure", score: 4 },
    ],
  },
  {
    id: 3,
    category: "Method Selection",
    question: "Have you conducted a formal analysis to select your transfer pricing method(s)?",
    options: [
      { text: "Yes, with documented rationale for method selection", score: 0 },
      { text: "Informally selected but not well documented", score: 2 },
      { text: "No formal method selection process", score: 4 },
    ],
  },
  {
    id: 4,
    category: "Benchmarking",
    question: "When was your last benchmarking study performed?",
    options: [
      { text: "Within the last 2 years", score: 0 },
      { text: "3-5 years ago", score: 2 },
      { text: "Never or more than 5 years ago", score: 4 },
    ],
  },
  {
    id: 5,
    category: "Transactions",
    question: "What is the total value of your annual intercompany transactions?",
    options: [
      { text: "Under $1 million CAD", score: 0 },
      { text: "$1 million to $10 million CAD", score: 1 },
      { text: "Over $10 million CAD", score: 3 },
    ],
  },
  {
    id: 6,
    category: "Intangibles",
    question: "Do your intercompany transactions involve intellectual property, data, or digital services?",
    options: [
      { text: "No intangible-related transactions", score: 0 },
      { text: "Some IP licensing or cost sharing", score: 2 },
      { text: "Significant IP, data, or digital service transactions", score: 4 },
    ],
  },
  {
    id: 7,
    category: "Compliance",
    question: "Are you aware of Canada's Budget 2025 transfer pricing changes?",
    options: [
      { text: "Yes, and we have assessed the impact", score: 0 },
      { text: "Aware but haven't assessed impact yet", score: 2 },
      { text: "Not aware of the changes", score: 4 },
    ],
  },
  {
    id: 8,
    category: "Audit History",
    question: "Has the CRA ever audited or questioned your transfer pricing?",
    options: [
      { text: "No audit history", score: 0 },
      { text: "Audited with no adjustments", score: 1 },
      { text: "Audited with adjustments or currently under audit", score: 3 },
    ],
  },
  {
    id: 9,
    category: "Structure",
    question: "How many jurisdictions are involved in your intercompany transactions?",
    options: [
      { text: "2 jurisdictions (e.g., Canada and US only)", score: 0 },
      { text: "3-5 jurisdictions", score: 2 },
      { text: "More than 5 jurisdictions", score: 4 },
    ],
  },
  {
    id: 10,
    category: "Pillar Two",
    question: "Does your multinational group have consolidated revenue exceeding EUR 750 million?",
    options: [
      { text: "No", score: 0 },
      { text: "Approaching that threshold", score: 1 },
      { text: "Yes, we are subject to Pillar Two rules", score: 3 },
    ],
  },
];

function getRiskLevel(score) {
  if (score <= 8) return { level: "Low", color: "green", message: "Your transfer pricing posture appears solid. Regular reviews and updates will help maintain compliance.", icon: "shield" };
  if (score <= 18) return { level: "Moderate", color: "amber", message: "There are areas that could expose you to CRA scrutiny. Proactive steps now can prevent costly adjustments later.", icon: "alert" };
  return { level: "High", color: "red", message: "Your transfer pricing carries significant risk of CRA challenge. Immediate action is recommended to protect your position.", icon: "warning" };
}

export default function RiskAssessment() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', company: '' });
  const [showContact, setShowContact] = useState(false);

  const progress = ((Object.keys(answers).length) / questions.length) * 100;

  const handleAnswer = (questionId, score) => {
    const newAnswers = { ...answers, [questionId]: score };
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300);
    } else {
      setTimeout(() => setShowContact(true), 300);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleSkipContact = () => {
    setShowResults(true);
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const risk = getRiskLevel(totalScore);
  const maxScore = questions.length * 4;

  if (showResults) {
    const categoryScores = {};
    questions.forEach(q => {
      if (!categoryScores[q.category]) categoryScores[q.category] = { total: 0, max: 0 };
      categoryScores[q.category].total += answers[q.id] || 0;
      categoryScores[q.category].max += 4;
    });

    return (
      <div className="max-w-2xl mx-auto">
        <div className={`rounded-xl p-8 mb-8 ${
          risk.level === 'Low' ? 'bg-green-50 border-2 border-green-200' :
          risk.level === 'Moderate' ? 'bg-amber-50 border-2 border-amber-200' :
          'bg-red-50 border-2 border-red-200'
        }`}>
          <div className="text-center mb-6">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
              risk.level === 'Low' ? 'bg-green-100' :
              risk.level === 'Moderate' ? 'bg-amber-100' : 'bg-red-100'
            }`}>
              <span className="text-4xl">{risk.level === 'Low' ? '✓' : risk.level === 'Moderate' ? '⚠' : '✗'}</span>
            </div>
            <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#1B365D' }}>
              {risk.level} Risk
            </h3>
            <p className="text-gray-600">Score: {totalScore} / {maxScore}</p>
          </div>
          <p className="text-gray-700 text-center text-lg">{risk.message}</p>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-bold mb-4" style={{ color: '#1B365D', fontFamily: 'Playfair Display, serif' }}>Risk by Category</h4>
          <div className="space-y-3">
            {Object.entries(categoryScores).map(([cat, { total, max }]) => {
              const pct = (total / max) * 100;
              return (
                <div key={cat}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{cat}</span>
                    <span className={`font-semibold ${pct <= 25 ? 'text-green-600' : pct <= 60 ? 'text-amber-600' : 'text-red-600'}`}>
                      {pct <= 25 ? 'Low' : pct <= 60 ? 'Moderate' : 'High'}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        pct <= 25 ? 'bg-green-400' : pct <= 60 ? 'bg-amber-400' : 'bg-red-400'
                      }`}
                      style={{ width: `${Math.max(pct, 5)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h4 className="text-lg font-bold mb-3" style={{ color: '#1B365D', fontFamily: 'Playfair Display, serif' }}>Recommended Next Steps</h4>
          <ul className="space-y-2 text-gray-700">
            {risk.level === 'High' && (
              <>
                <li className="flex gap-2"><span className="text-red-500 font-bold">1.</span> Schedule an urgent review of your TP documentation</li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">2.</span> Assess your exposure under Budget 2025 changes</li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">3.</span> Prepare for potential CRA inquiries with proper defence files</li>
              </>
            )}
            {risk.level === 'Moderate' && (
              <>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">1.</span> Update any outdated documentation to meet current standards</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">2.</span> Conduct a benchmarking refresh if older than 3 years</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">3.</span> Review your position against Budget 2025 requirements</li>
              </>
            )}
            {risk.level === 'Low' && (
              <>
                <li className="flex gap-2"><span className="text-green-500 font-bold">1.</span> Maintain your documentation update cycle</li>
                <li className="flex gap-2"><span className="text-green-500 font-bold">2.</span> Monitor upcoming Pillar Two implementation impacts</li>
                <li className="flex gap-2"><span className="text-green-500 font-bold">3.</span> Consider proactive strategies to optimize your TP position</li>
              </>
            )}
          </ul>
        </div>

        <div className="text-center space-y-3">
          <a
            href="/kubaro-tp/contact/"
            className="inline-block text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            style={{ backgroundColor: '#C5922E' }}
          >
            Book a Free Consultation
          </a>
          <p className="text-sm text-gray-500">Discuss your results with a 20-year TP veteran. No obligation.</p>
          <button
            onClick={() => { setAnswers({}); setCurrentQ(0); setShowResults(false); setShowContact(false); }}
            className="text-sm text-gray-400 hover:text-gray-600 underline"
          >
            Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  if (showContact) {
    return (
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-xl font-bold mb-2 text-center" style={{ color: '#1B365D', fontFamily: 'Playfair Display, serif' }}>
            Almost Done!
          </h3>
          <p className="text-gray-600 text-center mb-6 text-sm">
            Enter your details to see your personalized results and receive a detailed report.
          </p>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={contactInfo.name}
              onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-amber-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-amber-400 outline-none"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={contactInfo.company}
              onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-amber-400 outline-none"
            />
            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-lg transition-colors"
              style={{ backgroundColor: '#C5922E' }}
            >
              View My Results
            </button>
          </form>
          <button
            onClick={handleSkipContact}
            className="w-full text-center text-sm text-gray-400 hover:text-gray-600 mt-3 underline"
          >
            Skip and see results
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {currentQ + 1} of {questions.length}</span>
          <span className="text-xs uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#FDF8EE', color: '#C5922E' }}>
            {q.category}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: '#C5922E' }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-6" style={{ color: '#1B365D', fontFamily: 'Playfair Display, serif' }}>
          {q.question}
        </h3>
        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(q.id, opt.score)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 hover:border-amber-300 hover:bg-amber-50 ${
                answers[q.id] === opt.score
                  ? 'border-amber-400 bg-amber-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <span className="text-gray-700">{opt.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
          disabled={currentQ === 0}
          className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          &larr; Previous
        </button>
        {answers[q.id] !== undefined && currentQ < questions.length - 1 && (
          <button
            onClick={() => setCurrentQ(currentQ + 1)}
            className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
            style={{ color: '#1B365D' }}
          >
            Next &rarr;
          </button>
        )}
      </div>
    </div>
  );
}
