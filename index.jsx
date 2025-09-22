import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Layers, CheckCircle, BarChart3, ArrowUpRight, Cloud, Lock, Cpu, Users, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
            >
              Software That Works as Hard as You Do
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Custom software that streamlines operations, lowers costs, and helps SMBs compete head-to-head with the big players.
            </p>
            <Button size="lg" className="bg-blue-600 text-white font-semibold shadow-lg">
              Schedule a Strategy Call
            </Button>
          </div>
          <div className="relative">
            <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
              <span className="block h-[400px] flex items-center justify-center text-gray-400">
                [Mockup: Manager juggling multiple disconnected apps/spreadsheets]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Cost of Outdated Systems */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Cost of Outdated Systems</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Lost hours, mounting overhead, and frustrated clients all add up. Most small to mid-sized businesses are stuck with patchwork tools that don’t talk to each other—and it shows in the bottom line.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center shadow-md">
            <span className="text-gray-400">[Image: Stressed manager juggling multiple disconnected apps/spreadsheets]</span>
          </div>
        </div>
      </section>

      {/* Software That Pays for Itself */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-md h-80 flex items-center justify-center border border-gray-200">
            <span className="text-gray-400">[Dashboard mockup showing cost savings + efficiency metrics]</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Software That Pays for Itself</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At Zaragoza Partners, we design and deliver SaaS applications built for measurable ROI. From automated dispatch to HIPAA-compliant healthcare workflows to Shopify integrations, every feature is engineered to cut waste, improve delivery speed, and increase profit.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Benefits */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <ArrowUpRight className="h-10 w-10 text-blue-700 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Faster ROI</h3>
            <p className="text-gray-600">See measurable outcomes within months, not years.</p>
          </div>
          <div>
            <Cloud className="h-10 w-10 text-blue-700 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Seamless Scaling</h3>
            <p className="text-gray-600">A platform that grows with your business, without costly re-platforming.</p>
          </div>
          <div>
            <Lock className="h-10 w-10 text-blue-700 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Enterprise-Level Security</h3>
            <p className="text-gray-600">Compliance and data protection built in from day one.</p>
          </div>
        </div>
      </section>

      {/* Proof in Numbers */}
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

      {/* Case Study with Data Visualization */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-50 rounded-2xl shadow-md h-80 flex items-center justify-center border border-gray-200">
            <span className="text-gray-400">[Bar chart showing cost savings before/after automation]</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Logistics Firm Saves $200k Annually</h2>
            <p className="text-gray-700 mb-6">
              We helped a 20-person logistics company automate dispatching and resource allocation,
              cutting annual operating costs by <span className="font-semibold">$200,000</span> while
              improving service delivery speed.
            </p>
            <Button size="lg" className="bg-blue-600 text-white font-semibold shadow-md">
              Read the Full Case Study
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack & Methodology */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Enterprise-Grade Tools, Tailored for SMB Agility</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <Cpu className="h-10 w-10 text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Modern Frameworks</h3>
              <p className="text-gray-600">React, Node.js, Next.js, and TypeScript for reliable, modern apps.</p>
            </div>
            <div>
              <Database className="h-10 w-10 text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Scalable Infrastructure</h3>
              <p className="text-gray-600">AWS, Kubernetes, and serverless architectures built to scale.</p>
            </div>
            <div>
              <Shield className="h-10 w-10 text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Security & Compliance</h3>
              <p className="text-gray-600">SOC2, HIPAA, and GDPR compliance built from the start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg">Alex Zaragoza</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg">Maria Lopez</h3>
              <p className="text-gray-600">Head of Engineering</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg">James Patel</h3>
              <p className="text-gray-600">Product Strategy Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl font-medium text-gray-800 mb-6 leading-relaxed">
            “Zaragoza Partners delivered a SaaS platform that transformed our operations. The ROI was clear within 6 months.”
          </blockquote>
          <p className="text-gray-600 font-semibold">— Jane D., CEO of LogisticsCo</p>
        </div>
      </section>

      {/* SMS Opt-in CTA */}
      <section className="py-28 px-8 bg-gradient-to-br from-blue-900 to-slate-900 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
          Ready to see software that works for your bottom line?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-200">
          Enter your mobile number below to get started. We’ll send you updates and a link to schedule your strategy call.
        </p>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 rounded-lg text-gray-900 mb-4 border border-gray-300"
          />
          <Button size="lg" className="bg-blue-900 text-white font-semibold shadow-md w-full">
            Opt-In via SMS
          </Button>
          <p className="text-xs text-gray-600 mt-4">
            By providing your number, you agree to receive SMS messages from Zaragoza Partners. Message and data rates may apply. Text STOP at any time to unsubscribe.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">FAQs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">How fast can we see ROI?</h3>
              <p className="text-gray-600">Most clients report measurable returns within 3–6 months after launch.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Are your solutions compliant with regulations?</h3>
              <p className="text-gray-600">Yes. From HIPAA to SOC2 and GDPR, we embed compliance from the start.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Do you only work with large enterprises?</h3>
              <p className="text-gray-600">No—our specialty is helping SMBs gain the same competitive edge as enterprise players, at a fraction of the cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-8 text-center text-gray-400">
        <nav className="mb-6 space-x-8 text-gray-300">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Case Studies</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
        <p className="text-sm">© {new Date().getFullYear()} Zaragoza Partners — Software That Works as Hard as You Do</p>
      </footer>
    </div>
  );
}
