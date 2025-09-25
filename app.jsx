// app.jsx — browser-friendly (no imports/exports). Uses ./images/*

/* ---------- UI Primitives ---------- */
function Button({ className = "", children, ...props }) {
  return (
    <button
      className={
        "inline-flex items-center justify-center rounded px-4 py-2 font-semibold " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}

function Modal({ open, onClose, children, title = "Modal" }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button className="rounded px-2 py-1 text-gray-500 hover:bg-gray-100" onClick={onClose} aria-label="Close">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ConsultationForm({ onDone }) {
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("Submitting…");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem("consultations") || "[]");
        existing.push({ ...data, at: new Date().toISOString() });
        localStorage.setItem("consultations", JSON.stringify(existing));
      } catch {}
      setSubmitting(false);
      setStatus("Thanks! We’ll contact you shortly.");
      setTimeout(onDone, 900);
    }, 900);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input name="name" required className="w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input type="email" name="email" required className="w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Company</label>
        <input name="company" className="w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">What do you want to improve?</label>
        <textarea name="message" rows="4" className="w-full rounded border px-3 py-2" />
      </div>
      <button className="w-full rounded bg-blue-600 text-white font-semibold py-2 disabled:opacity-60" disabled={submitting}>
        {submitting ? "Submitting…" : "Request Consultation"}
      </button>
      <p className="text-sm text-gray-600 h-5">{status}</p>
    </form>
  );
}

/* ---------- Page ---------- */
function HomePage() {
  const [smsMsg, setSmsMsg] = React.useState("");
  const [caseMsg, setCaseMsg] = React.useState("");
  const [heroMsg, setHeroMsg] = React.useState("");
  const [consultOpen, setConsultOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      {/* 1) HERO — uses 1-zaragoza-office.png */}
      <section className="relative bg-slate-900 text-white py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Software That Works as Hard as You Do
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Custom software that streamlines operations, lowers costs, and helps SMBs
              compete head-to-head with the big players.
            </p>
            <Button
              onClick={() => setConsultOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
            >
              Schedule a Strategy Call
            </Button>
            <p className="mt-3 text-sm text-gray-300 h-5">{heroMsg}</p>
          </div>

          <div className="relative">
            <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
              <img
                src="./images/1-zaragoza-office.png"
                alt="Zaragoza Partners team at work in the office"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2) The Cost of Outdated Systems — uses 2-services.png */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Cost of Outdated Systems</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Lost hours, mounting overhead, and frustrated clients all add up. Most
              small to mid-sized businesses are stuck with patchwork tools that don’t
              talk to each other—and it shows in the bottom line.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden">
            <img
              src="./images/2-services.png"
              alt="Disconnected services and manual workflows"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3) Software That Pays for Itself — uses 3-analytics.png */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
            <img
              src="./images/3-analytics.png"
              alt="Analytics dashboard showing cost savings and efficiency"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Software That Pays for Itself</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At Zaragoza Partners, we design and deliver SaaS applications built for
              measurable ROI. From automated dispatch to HIPAA-compliant healthcare
              workflows to Shopify integrations, every feature is engineered to cut
              waste, improve delivery speed, and increase profit.
            </p>
          </div>
        </div>
      </section>

      {/* 4) Benefits (no images) */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="h-10 w-10 mx-auto mb-4">↗️</div>
            <h3 className="font-semibold text-xl mb-2">Faster ROI</h3>
            <p className="text-gray-600">See measurable outcomes within months, not years.</p>
          </div>
          <div>
            <div className="h-10 w-10 mx-auto mb-4">☁️</div>
            <h3 className="font-semibold text-xl mb-2">Seamless Scaling</h3>
            <p className="text-gray-600">
              A platform that grows with your business, without costly re-platforming.
            </p>
          </div>
          <div>
            <div className="h-10 w-10 mx-auto mb-4">🔒</div>
            <h3 className="font-semibold text-xl mb-2">Enterprise-Level Security</h3>
            <p className="text-gray-600">Compliance and data protection built in from day one.</p>
          </div>
        </div>
      </section>

      {/* 5) Proof in Numbers (no images) */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <p className="text-5xl font-extrabold text-slate-900">$200k+</p>
            <p className="text-gray-600">Annual savings delivered</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-slate-900">30%</p>
            <p className="text-gray-600">Faster onboarding for teams</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-slate-900">50%</p>
            <p className="text-gray-600">Reduction in overhead costs</p>
          </div>
        </div>
      </section>

      {/* 6) Case Study — keep text; (image already used above) */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-50 rounded-2xl shadow-md h-80 flex items-center justify-center border border-gray-200 overflow-hidden">
  <img
    src="./images/highlights.png"
    alt="Visual highlights of Zaragoza case study"
    className="w-full h-full object-cover"
  />
</div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Logistics Firm Saves $200k Annually</h2>
            <p className="text-gray-700 mb-6">
              We helped a 20-person logistics company automate dispatching and resource
              allocation, cutting annual operating costs by{" "}
              <span className="font-semibold">$200,000</span> while improving service
              delivery speed.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-md"
              onClick={() => setConsultOpen(true)}
            >
              Read the Full Case Study
            </Button>
            <p className="mt-3 text-sm text-gray-600 h-5">{caseMsg}</p>
          </div>
        </div>
      </section>

      {/* 7) Tech Stack (no images) */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Enterprise-Grade Tools, Tailored for SMB Agility
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="h-10 w-10 mx-auto mb-4">🧠</div>
              <h3 className="font-semibold text-lg mb-2">Modern Frameworks</h3>
              <p className="text-gray-600">React, Node.js, Next.js, TypeScript.</p>
            </div>
            <div>
              <div className="h-10 w-10 mx-auto mb-4">🗄️</div>
              <h3 className="font-semibold text-lg mb-2">Scalable Infrastructure</h3>
              <p className="text-gray-600">AWS, Kubernetes, and serverless.</p>
            </div>
            <div>
              <div className="h-10 w-10 mx-auto mb-4">🛡️</div>
              <h3 className="font-semibold text-lg mb-2">Security & Compliance</h3>
              <p className="text-gray-600">SOC2, HIPAA, GDPR from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8) Leadership — uses 4-team.png wide header + 3 profile images */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow mb-10">
            <img
              src="./images/4-team.png"
              alt="Our team collaborating"
              className="w-full h-60 object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <img src="./images/profile1.png" alt="Alex Zaragoza" className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Alex Zaragoza</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img src="./images/profile3.png" alt="Maria Lopez" className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Maria Lopez</h3>
              <p className="text-gray-600">Head of Engineering</p>
            </div>
            <div className="text-center">
              <img src="./images/profile22.png" alt="James Patel" className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
              <h3 className="font-semibold text-lg">James Patel</h3>
              <p className="text-gray-600">Product Strategy Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9) Testimonial (no image) */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl font-medium text-gray-800 mb-6 leading-relaxed">
            “Zaragoza Partners delivered a SaaS platform that transformed our operations.
            The ROI was clear within 6 months.”
          </blockquote>
        </div>
      </section>

      {/* 10) SMS CTA (no image) */}
      <section className="py-28 px-8 bg-gradient-to-br from-blue-900 to-slate-900 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
          Ready to see software that works for your bottom line?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-200">
          Enter your mobile number below to get started. We’ll send you updates and a
          link to schedule your strategy call.
        </p>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
          <input
            id="smsInput"
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 rounded-lg text-gray-900 mb-4 border border-gray-300"
          />
          <Button className="bg-blue-900 hover:bg-blue-800 text-white w-full shadow-md" onClick={() => setSmsMsg("Thanks! We’ll text you shortly.")}>
            Opt-In via SMS
          </Button>
          <p className="text-xs text-gray-600 mt-4">
            By providing your number, you agree to receive SMS messages from Zaragoza Partners.
            Message and data rates may apply. Text STOP at any time to unsubscribe.
          </p>
          <p className="mt-3 text-sm text-gray-700 h-5 text-center">{smsMsg}</p>
        </div>
      </section>

      {/* 11) Footer — show 5-footer.png above the footer */}
      <div className="mt-24">
        <img
          src="./images/5-footer.png"
          alt="Abstract footer visual"
          className="w-full h-40 object-cover"
        />
      </div>
      <footer className="bg-slate-900 py-12 px-8 text-center text-gray-400">
        <nav className="mb-6 space-x-8 text-gray-300">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Case Studies</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
        <p className="text-sm">
          © {new Date().getFullYear()} Zaragoza Partners — Software That Works as Hard as You Do
        </p>
      </footer>

      {/* Modal */}
      <Modal open={consultOpen} onClose={() => setConsultOpen(false)} title="Schedule a Strategy Call">
        <ConsultationForm onDone={() => setConsultOpen(false)} />
      </Modal>
    </div>
  );
}

/* expose globally for index.jsx */
window.HomePage = HomePage;
