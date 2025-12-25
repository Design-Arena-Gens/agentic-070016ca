"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"overview" | "meta" | "google" | "troubleshooting">("overview");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Client Onboarding SOP</h1>
              <p className="text-gray-600 mt-1">Performance Marketing | Meta & Google Ads</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Version 1.0</div>
              <div className="text-sm text-gray-500">Last Updated: Dec 2025</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "overview"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Overview & Checklist
            </button>
            <button
              onClick={() => setActiveTab("meta")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "meta"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Meta Ads Setup
            </button>
            <button
              onClick={() => setActiveTab("google")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "google"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Google Ads Setup
            </button>
            <button
              onClick={() => setActiveTab("troubleshooting")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "troubleshooting"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Troubleshooting
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "meta" && <MetaTab expandedSection={expandedSection} toggleSection={toggleSection} />}
        {activeTab === "google" && <GoogleTab expandedSection={expandedSection} toggleSection={toggleSection} />}
        {activeTab === "troubleshooting" && <TroubleshootingTab />}
      </div>
    </main>
  );
}

function OverviewTab() {
  return (
    <div>
      <div className="section-card">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Purpose of This Document</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This SOP exists to eliminate confusion, reduce onboarding time, and ensure every client gets white-glove service from day one.
          Follow these steps exactly, and you'll never have to interrupt the team with basic questions.
        </p>
        <div className="warning-box">
          <p className="font-semibold text-red-900 mb-2">Critical Rule:</p>
          <p className="text-red-800">
            Never touch a client's ad account without documented access approval and proper Business Manager/Google Ads account setup.
            Mistakes in access can trigger billing issues, attribution loss, and compliance violations.
          </p>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Pre-Onboarding Checklist</h2>
        <div className="space-y-3">
          <ChecklistItem text="Confirm which platforms the client needs (Meta, Google, or both)" />
          <ChecklistItem text="Verify you have client contact information (email, phone, backup contact)" />
          <ChecklistItem text="Get signed contract with scope of work clearly defined" />
          <ChecklistItem text="Confirm monthly ad spend budget and billing method" />
          <ChecklistItem text="Set up internal client folder in shared drive (Google Drive/Dropbox)" />
          <ChecklistItem text="Create client Slack channel or communication thread" />
          <ChecklistItem text="Schedule kickoff call with client (30-45 minutes)" />
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Kickoff Call Agenda</h2>
        <p className="text-gray-700 mb-4">Use this exact framework to run an efficient, professional onboarding call:</p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">1. Introductions & Expectations (5 min)</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Introduce yourself and your role</li>
              <li>Confirm who you'll be working with on their team</li>
              <li>Set communication expectations (response times, meeting cadence)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">2. Business & Campaign Goals (10 min)</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>What does success look like? (leads, sales, ROAS target, CPA target)</li>
              <li>Current advertising performance baseline (if they're already running ads)</li>
              <li>Target audience demographics and geographic focus</li>
              <li>Product/service pricing and margins</li>
              <li>Competitor intel (who are they competing against?)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">3. Access & Assets Collection (15 min)</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Explain the access we need (see platform-specific tabs for details)</li>
              <li>Request brand assets (logos, images, videos, ad copy examples)</li>
              <li>Get website/landing page URLs and verify tracking setup</li>
              <li>Confirm if they have existing pixel/tag implementations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">4. Timeline & Next Steps (5 min)</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Timeline for account setup (typically 3-5 business days)</li>
              <li>When campaigns will launch</li>
              <li>First reporting check-in date</li>
              <li>Action items for both parties</li>
            </ul>
          </div>
        </div>

        <div className="tip-box mt-6">
          <p className="font-semibold text-blue-900 mb-2">Pro Tip:</p>
          <p className="text-blue-800">
            Send a follow-up email immediately after the call summarizing everything discussed, with clear action items and deadlines.
            This creates accountability and serves as documentation.
          </p>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Master Onboarding Checklist</h2>
        <p className="text-gray-600 mb-6">Complete these steps in order. Don't skip ahead.</p>

        <div className="space-y-4">
          <StepItem
            number={1}
            title="Kickoff Call Completed"
            description="All information gathered, client expectations set"
          />
          <StepItem
            number={2}
            title="Access Requests Sent"
            description="Meta Business Manager and/or Google Ads account access requested"
          />
          <StepItem
            number={3}
            title="Access Confirmed"
            description="Verify you can log in and see all necessary assets"
          />
          <StepItem
            number={4}
            title="Tracking Setup"
            description="Pixel/Tags installed, conversion events configured and tested"
          />
          <StepItem
            number={5}
            title="Account Structure Built"
            description="Campaigns, ad sets/ad groups, and ads created per SOP"
          />
          <StepItem
            number={6}
            title="Budget & Billing Set"
            description="Payment method verified, daily/lifetime budgets configured"
          />
          <StepItem
            number={7}
            title="Compliance Check"
            description="Ads comply with platform policies, no restricted content"
          />
          <StepItem
            number={8}
            title="Pre-Launch Review"
            description="Internal QA completed, client approval received"
          />
          <StepItem
            number={9}
            title="Launch Campaigns"
            description="Turn on campaigns, monitor for first 24-48 hours"
          />
          <StepItem
            number={10}
            title="Post-Launch Check-In"
            description="Review initial performance, optimize as needed"
          />
        </div>
      </div>
    </div>
  );
}

function MetaTab({ expandedSection, toggleSection }: { expandedSection: string | null; toggleSection: (section: string) => void }) {
  return (
    <div>
      <div className="section-card">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Meta Ads Onboarding</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Facebook and Instagram advertising runs through Meta Business Manager. Getting access right is critical—mistakes here can break attribution
          and cause billing nightmares.
        </p>
      </div>

      <CollapsibleSection
        id="meta-access"
        title="Step 1: Getting Access to Client's Business Manager"
        expanded={expandedSection === "meta-access"}
        toggle={toggleSection}
      >
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">What You Need:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li><strong>Admin access</strong> to the client's Business Manager</li>
              <li><strong>Full control</strong> of their Ad Account</li>
              <li><strong>Advertise and Analyze permissions</strong> on their Facebook Page</li>
              <li><strong>Full control</strong> of their Instagram account (if running Instagram ads)</li>
              <li><strong>Developer access</strong> to their Pixel (if installing or editing events)</li>
            </ul>
          </div>

          <div className="warning-box">
            <p className="font-semibold text-red-900 mb-2">Never Do This:</p>
            <p className="text-red-800">
              Don't ask the client to give you their personal Facebook login. This violates Meta's Terms of Service and creates massive liability.
              Always work through Business Manager.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">How to Request Access:</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <strong>Get your Business Manager ID:</strong> Go to business.facebook.com, click on Business Settings, and copy your Business Manager ID from the top left.
              </li>
              <li>
                <strong>Send this exact email template to the client:</strong>
                <div className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
                  <p className="mb-2"><strong>Subject:</strong> Meta Ads Account Access Request</p>
                  <p className="mb-2">Hi [Client Name],</p>
                  <p className="mb-2">
                    To start managing your Meta advertising (Facebook and Instagram), I need access to your Business Manager.
                    This is a secure, standard process that lets me run ads on your behalf without needing your personal login.
                  </p>
                  <p className="mb-2"><strong>Here's what to do:</strong></p>
                  <ol className="list-decimal list-inside ml-4 space-y-1 mb-2">
                    <li>Go to business.facebook.com</li>
                    <li>Click "Business Settings" in the bottom left</li>
                    <li>Go to "Users" → "Partners"</li>
                    <li>Click "Add" and enter this Business Manager ID: <strong>[YOUR BM ID]</strong></li>
                    <li>Grant these permissions:
                      <ul className="list-disc list-inside ml-4">
                        <li>Ad Account: Full control</li>
                        <li>Pages: Advertise and Analyze</li>
                        <li>Pixel: Full control</li>
                        <li>Instagram Account: Full control</li>
                      </ul>
                    </li>
                  </ol>
                  <p className="mb-2">If you need help, I can jump on a quick screen share. Let me know!</p>
                  <p>Thanks,<br />[Your Name]</p>
                </div>
              </li>
              <li>
                <strong>Follow up in 24 hours</strong> if they don't respond. Many clients get confused by the Business Manager interface.
              </li>
              <li>
                <strong>Verify access:</strong> Once they say it's done, log into business.facebook.com and confirm you can see their ad account, page, and pixel.
              </li>
            </ol>
          </div>

          <div className="tip-box">
            <p className="font-semibold text-blue-900 mb-2">Pro Tip:</p>
            <p className="text-blue-800">
              If the client doesn't have a Business Manager set up yet, offer to create one for them and transfer ownership.
              This is common with newer businesses.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        id="meta-pixel"
        title="Step 2: Pixel Installation & Event Setup"
        expanded={expandedSection === "meta-pixel"}
        toggle={toggleSection}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            The Meta Pixel is how we track conversions. Without it, you're flying blind. This section assumes the client doesn't have a pixel yet
            or has one that's misconfigured.
          </p>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Check if They Already Have a Pixel:</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>Install the <strong>Meta Pixel Helper</strong> Chrome extension</li>
              <li>Go to the client's website</li>
              <li>Click the extension icon—if a pixel fires, you'll see it</li>
              <li>If no pixel exists, proceed with installation</li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Installing the Pixel (3 Methods):</h4>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">Method 1: Tag Manager (Recommended)</h5>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                <li>Go to Events Manager in Meta Business Manager</li>
                <li>Select the client's pixel</li>
                <li>Click "Add Events" → "From a New Website"</li>
                <li>Choose "Install code manually" and copy the base code</li>
                <li>In Google Tag Manager, create a new Custom HTML tag</li>
                <li>Paste the pixel code, set trigger to "All Pages"</li>
                <li>Publish the container</li>
              </ol>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">Method 2: Direct Install (if no Tag Manager)</h5>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                <li>Get the pixel base code from Events Manager</li>
                <li>Ask client for access to their website backend (WordPress, Shopify, etc.)</li>
                <li>Add code to the <code className="bg-gray-200 px-1">&lt;head&gt;</code> section of all pages</li>
                <li>For Shopify: Theme → Edit Code → theme.liquid file</li>
                <li>For WordPress: Use a plugin like "Insert Headers and Footers" or add to header.php</li>
              </ol>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Method 3: Platform Integration (Shopify/WooCommerce)</h5>
              <p className="text-gray-700 mb-2">Most e-commerce platforms have native Meta integrations:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Shopify: Go to Sales Channels → Facebook → Connect Pixel</li>
                <li>WooCommerce: Install "Facebook for WooCommerce" plugin</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Configure Standard Events:</h4>
            <p className="text-gray-700 mb-2">These are the events you must track (at minimum):</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li><strong>PageView:</strong> Fires on every page load (automatic with base code)</li>
              <li><strong>ViewContent:</strong> Product/service page views</li>
              <li><strong>AddToCart:</strong> User adds item to cart</li>
              <li><strong>InitiateCheckout:</strong> User starts checkout process</li>
              <li><strong>Purchase:</strong> Completed transaction (CRITICAL for e-commerce)</li>
              <li><strong>Lead:</strong> Form submission (CRITICAL for lead gen)</li>
            </ul>
          </div>

          <div className="warning-box">
            <p className="font-semibold text-red-900 mb-2">Test Everything:</p>
            <p className="text-red-800">
              After installing events, use the Meta Pixel Helper and Events Manager's "Test Events" tool to verify they're firing correctly.
              Make a test purchase or submit a test lead. If events don't fire, your campaigns won't optimize properly.
            </p>
          </div>

          <div className="tip-box">
            <p className="font-semibold text-blue-900 mb-2">Conversion API (Advanced):</p>
            <p className="text-blue-800">
              For clients spending $10k+/month, implement Conversions API alongside the pixel. This sends conversion data server-side,
              improving tracking accuracy in the iOS 14.5+ era. Shopify and WooCommerce have plug-and-play solutions for this.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        id="meta-structure"
        title="Step 3: Account Structure & Campaign Setup"
        expanded={expandedSection === "meta-structure"}
        toggle={toggleSection}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            A clean account structure is the foundation of scalable performance. Use this framework for every client.
          </p>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Campaign Naming Convention:</h4>
            <div className="bg-gray-100 p-4 rounded-lg">
              <code className="text-sm">
                [Objective] - [Audience] - [Placement] - [Date/Test]
              </code>
              <p className="text-gray-700 mt-2">Example:</p>
              <code className="text-sm">
                CONV - Lookalike 1% - Feed - Dec2025
              </code>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Standard Campaign Structure:</h4>

            <div className="bg-white border border-gray-300 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">Campaign 1: Prospecting - Broad Interests</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><strong>Objective:</strong> Conversions (or Sales for e-commerce)</li>
                <li><strong>Budget:</strong> 40% of total budget</li>
                <li><strong>Ad Sets:</strong> 2-4 interest-based audiences</li>
                <li><strong>Creative:</strong> 3-5 ad variations per ad set</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-300 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">Campaign 2: Prospecting - Lookalikes</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><strong>Objective:</strong> Conversions</li>
                <li><strong>Budget:</strong> 30% of total budget</li>
                <li><strong>Ad Sets:</strong> LAL 1%, LAL 2-3%, LAL 4-5% (separate ad sets)</li>
                <li><strong>Creative:</strong> Same as Campaign 1 for testing consistency</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-300 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">Campaign 3: Retargeting - Warm Audiences</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><strong>Objective:</strong> Conversions</li>
                <li><strong>Budget:</strong> 30% of total budget</li>
                <li><strong>Ad Sets:</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>Website visitors (last 30 days)</li>
                    <li>Engaged with ads (last 30 days)</li>
                    <li>Add to cart but no purchase (last 14 days)</li>
                  </ul>
                </li>
                <li><strong>Creative:</strong> More direct, incentive-driven (discounts, urgency)</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Budget Allocation Rules:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li><strong>Minimum budget per ad set:</strong> $20/day (Meta needs volume to optimize)</li>
              <li><strong>Campaign Budget Optimization (CBO):</strong> Use it for campaigns with 2+ ad sets</li>
              <li><strong>Start conservative:</strong> 50-70% of client's total budget in week 1, scale after data comes in</li>
            </ul>
          </div>

          <div className="tip-box">
            <p className="font-semibold text-blue-900 mb-2">Pro Tip:</p>
            <p className="text-blue-800">
              Don't create more than 5 ad sets per campaign initially. Meta's algorithm needs 50+ conversions per ad set per week to optimize.
              Spreading budget too thin kills performance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Ad Creative Best Practices:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Use 3-5 ad variations per ad set (test different hooks/angles)</li>
              <li>Mix of formats: Single image, carousel, video</li>
              <li>Video length: 15-30 seconds max for most industries</li>
              <li>Always include a clear CTA (Shop Now, Learn More, Sign Up, etc.)</li>
              <li>Ensure images are 1080x1080px or higher resolution</li>
              <li>Keep text overlays minimal (avoid old 20% text rule, but less is more)</li>
            </ul>
          </div>

          <div className="warning-box">
            <p className="font-semibold text-red-900 mb-2">Policy Compliance:</p>
            <p className="text-red-800">
              Before launching, run ads through Meta's policy checker. Common violations: medical claims, "you" in targeting-related copy,
              before/after images in health/beauty, and restricted financial claims. Violations delay launch by days.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        id="meta-launch"
        title="Step 4: Pre-Launch Checklist & Going Live"
        expanded={expandedSection === "meta-launch"}
        toggle={toggleSection}
      >
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">
            Use this checklist before turning on any campaign. Miss one item, and you risk wasting budget or violating policies.
          </p>

          <div className="space-y-3">
            <ChecklistItem text="Pixel installed and all events firing correctly" />
            <ChecklistItem text="Conversion events set up in Events Manager" />
            <ChecklistItem text="Payment method added and verified in Ad Account" />
            <ChecklistItem text="All campaigns, ad sets, and ads created and reviewed" />
            <ChecklistItem text="Naming conventions followed consistently" />
            <ChecklistItem text="Budgets set correctly (daily or lifetime)" />
            <ChecklistItem text="Ad placements reviewed (turn off Audience Network if needed)" />
            <ChecklistItem text="All ads comply with Meta's advertising policies" />
            <ChecklistItem text="UTM parameters added to all destination URLs (for tracking)" />
            <ChecklistItem text="Client approval received for all ad creative and copy" />
            <ChecklistItem text="Internal peer review completed (have another team member double-check)" />
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg mt-6">
            <p className="font-semibold text-green-900 mb-2">Launch Day Protocol:</p>
            <ol className="list-decimal list-inside text-green-800 space-y-1 ml-4">
              <li>Turn on campaigns in the morning (9-11 AM client's local time)</li>
              <li>Monitor delivery in the first 2 hours—check for any rejection issues</li>
              <li>Send client a "campaigns are live" email with dashboard link</li>
              <li>Set calendar reminder to check performance after 24 hours</li>
            </ol>
          </div>

          <div className="tip-box mt-4">
            <p className="font-semibold text-blue-900 mb-2">First 48 Hours:</p>
            <p className="text-blue-800">
              Expect wonky data. Meta's algorithm is in "learning phase" and needs 50+ conversions per ad set to stabilize.
              Don't panic if CPAs are high initially—give it 3-5 days before making major changes.
            </p>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
}

function GoogleTab({ expandedSection, toggleSection }: { expandedSection: string | null; toggleSection: (section: string) => void }) {
  return (
    <div>
      <div className="section-card">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Google Ads Onboarding</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google Ads encompasses Search, Display, Shopping, YouTube, and Performance Max. This section focuses on Search and Performance Max,
          which drive the majority of results for most clients.
        </p>
      </div>

      <CollapsibleSection
        id="google-access"
        title="Step 1: Getting Access to Client's Google Ads Account"
        expanded={expandedSection === "google-access"}
        toggle={toggleSection}
      >
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">What You Need:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li><strong>Admin access</strong> to the client's Google Ads account</li>
              <li><strong>Admin access</strong> to their Google Analytics (GA4) property</li>
              <li><strong>Admin access</strong> to their Google Tag Manager (if they use it)</li>
              <li><strong>Access</strong> to their Google Merchant Center (if running Shopping ads)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">How to Request Access:</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <strong>Email template for Google Ads access:</strong>
                <div className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
                  <p className="mb-2"><strong>Subject:</strong> Google Ads Account Access Request</p>
                  <p className="mb-2">Hi [Client Name],</p>
                  <p className="mb-2">
                    To manage your Google Ads campaigns, I need admin access to your Google Ads account. This will allow me to create and
                    optimize campaigns while you retain full ownership and visibility.
                  </p>
                  <p className="mb-2"><strong>Here's what to do:</strong></p>
                  <ol className="list-decimal list-inside ml-4 space-y-1 mb-2">
                    <li>Log in to your Google Ads account at ads.google.com</li>
                    <li>Click the "Tools & Settings" icon (wrench) in the top right</li>
                    <li>Under "Setup," select "Access and Security"</li>
                    <li>Click the blue "+" button</li>
                    <li>Enter my email: <strong>[YOUR EMAIL]</strong></li>
                    <li>Select "Admin" as the access level</li>
                    <li>Click "Send Invitation"</li>
                  </ol>
                  <p className="mb-2">
                    I'll also need admin access to your Google Analytics account (same process: Admin → Account Access Management).
                  </p>
                  <p className="mb-2">Let me know once you've sent the invites!</p>
                  <p>Thanks,<br />[Your Name]</p>
                </div>
              </li>
              <li>
                <strong>Accept the invitation:</strong> Check your email for the Google Ads invitation and accept it.
              </li>
              <li>
                <strong>Verify access:</strong> Log in to ads.google.com, switch to the client's account, and confirm you can see campaigns and billing.
              </li>
            </ol>
          </div>

          <div className="info-box">
            <p className="font-semibold text-amber-900 mb-2">What if They Don't Have a Google Ads Account Yet?</p>
            <p className="text-amber-800">
              You'll need to create one for them. Use their business email address (not yours) during setup, then have them grant you admin access.
              Never create a Google Ads account under your own email—it complicates billing and ownership.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        id="google-tracking"
        title="Step 2: Conversion Tracking Setup"
        expanded={expandedSection === "google-tracking"}
        toggle={toggleSection}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Google Ads conversion tracking uses either Google Tag (gtag.js) or Google Tag Manager. We'll use Tag Manager for most setups—it's
            cleaner and more flexible.
          </p>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Check Existing Tracking Setup:</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>Install the <strong>Google Tag Assistant</strong> Chrome extension</li>
              <li>Visit the client's website and click the extension</li>
              <li>Check if Google Analytics 4 or Google Ads tags are firing</li>
              <li>If no tags exist, proceed with installation</li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Install Google Tag Manager (if not present):</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>Go to tagmanager.google.com and create a new container</li>
              <li>Copy the GTM container code</li>
              <li>Install it in the <code className="bg-gray-200 px-1">&lt;head&gt;</code> and <code className="bg-gray-200 px-1">&lt;body&gt;</code> of all pages</li>
              <li>Publish the container</li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Set Up Conversion Actions in Google Ads:</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>In Google Ads, go to Tools & Settings → Conversions</li>
              <li>Click the "+" button to create a new conversion action</li>
              <li>Select "Website" as the source</li>
              <li>Choose the conversion category (Purchase, Submit lead form, etc.)</li>
              <li>Name it clearly (e.g., "Purchase - Thank You Page" or "Lead Form Submission")</li>
              <li>Set the value (actual revenue for e-commerce, estimated value for leads)</li>
              <li>Choose "Every" conversion (not "One" unless it's a one-time action like sign-up)</li>
              <li>Click "Create and Continue"</li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Implement Tracking via GTM:</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>In Google Tag Manager, create a new tag</li>
              <li>Tag Type: "Google Ads Conversion Tracking"</li>
              <li>Enter the Conversion ID and Conversion Label (from Google Ads)</li>
              <li>Set the trigger (e.g., "Thank You Page View" or "Form Submission")</li>
              <li>Publish the container</li>
              <li>Test using Google Tag Assistant—complete a test conversion and verify it fires</li>
            </ol>
          </div>

          <div className="tip-box">
            <p className="font-semibold text-blue-900 mb-2">Pro Tip: Import GA4 Conversions</p>
            <p className="text-blue-800">
              If the client already has GA4 set up with goals, you can import those conversions directly into Google Ads instead of creating new ones.
              This saves time and ensures consistency across platforms.
            </p>
          </div>

          <div className="warning-box">
            <p className="font-semibold text-red-900 mb-2">Test Everything:</p>
            <p className="text-red-800">
              Complete a test conversion yourself before launching campaigns. Check Google Ads → Conversions to see if it registers.
              If it doesn't show up within 10 minutes, your tracking is broken.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        id="google-structure"
        title="Step 3: Campaign Structure & Setup"
        expanded={expandedSection === "google-structure"}
        toggle={toggleSection}
      >
        <div className="space-y-4">
          <p className="text-gray-700">
            Google Ads campaign structure depends on objectives. For most clients, you'll start with Search campaigns and/or Performance Max.
          </p>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Campaign Naming Convention:</h4>
            <div className="bg-gray-100 p-4 rounded-lg">
              <code className="text-sm">
                [Type] - [Category/Theme] - [Match Type] - [Date]
              </code>
              <p className="text-gray-700 mt-2">Example:</p>
              <code className="text-sm">
                SEARCH - Brand - Exact - Dec2025
              </code>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Standard Campaign Structure:</h4>

            <div className="bg-white border border-gray-300 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">Campaign 1: Search - Brand Terms</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><strong>Objective:</strong> Conversions</li>
                <li><strong>Budget:</strong> 20% of total budget</li>
                <li><strong>Keywords:</strong> Exact and phrase match of brand name, product names</li>
                <li><strong>Bid Strategy:</strong> Maximize Conversions or Target CPA (after learning phase)</li>
                <li><strong>Ad Groups:</strong> 1-2 (Brand, Brand + Product)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-300 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">Campaign 2: Search - High-Intent Keywords</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><strong>Objective:</strong> Conversions</li>
                <li><strong>Budget:</strong> 40% of total budget</li>
                <li><strong>Keywords:</strong> Phrase and exact match of buyer-intent keywords (e.g., "buy [product]", "[service] near me")</li>
                <li><strong>Bid Strategy:</strong> Maximize Conversions initially, switch to Target CPA after 30+ conversions</li>
                <li><strong>Ad Groups:</strong> 3-5 themed groups (one theme per ad group, e.g., "Product A", "Product B")</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-300 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">Campaign 3: Performance Max</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><strong>Objective:</strong> Sales or Leads</li>
                <li><strong>Budget:</strong> 40% of total budget</li>
                <li><strong>Asset Groups:</strong> 1-3 (one per product/service category)</li>
                <li><strong>Assets Required:</strong> Images, headlines, descriptions, logos, videos (optional but recommended)</li>
                <li><strong>Audience Signals:</strong> Custom segments based on interests, demographics, past converters</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Keyword Research Process:</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>Use Google Keyword Planner (free in Google Ads) to find search volume and CPC estimates</li>
              <li>Analyze competitor keywords using tools like SEMrush or Ahrefs (if available)</li>
              <li>Focus on keywords with <strong>buying intent</strong> (avoid informational queries unless it's a content/lead gen funnel)</li>
              <li>Start with 20-30 keywords per campaign, grouped by theme</li>
              <li>Use a mix of exact, phrase, and broad match (but bias toward exact/phrase initially)</li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Ad Copy Best Practices:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Write 3 headlines per ad (Google will test combinations)</li>
              <li>Include the keyword in at least one headline</li>
              <li>Use a clear CTA in the description</li>
              <li>Leverage ad extensions: Sitelinks, Callouts, Structured Snippets, Call extensions</li>
              <li>Enable Responsive Search Ads (RSAs) for all ad groups</li>
            </ul>
          </div>

          <div className="tip-box">
            <p className="font-semibold text-blue-900 mb-2">Negative Keywords:</p>
            <p className="text-blue-800">
              Add negative keywords from day one. Common negatives: "free", "cheap", "DIY", "jobs", "salary", competitor brand names.
              This prevents wasted spend on irrelevant clicks.
            </p>
          </div>

          <div className="warning-box">
            <p className="font-semibold text-red-900 mb-2">Budget Pacing:</p>
            <p className="text-red-800">
              Google Ads can spend up to 2x your daily budget on high-traffic days, then balance it out over the month.
              Warn clients about this to avoid "the ads are overspending!" panic.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        id="google-launch"
        title="Step 4: Pre-Launch Checklist & Going Live"
        expanded={expandedSection === "google-launch"}
        toggle={toggleSection}
      >
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">
            Before launching, go through this checklist. Google Ads can drain budget fast if misconfigured.
          </p>

          <div className="space-y-3">
            <ChecklistItem text="Conversion tracking installed and tested" />
            <ChecklistItem text="Google Ads account linked to Google Analytics (GA4)" />
            <ChecklistItem text="Payment method added and billing threshold set" />
            <ChecklistItem text="All campaigns, ad groups, and ads created" />
            <ChecklistItem text="Keywords added with appropriate match types" />
            <ChecklistItem text="Negative keywords list applied to all campaigns" />
            <ChecklistItem text="Ad extensions enabled (sitelinks, callouts, structured snippets)" />
            <ChecklistItem text="Location targeting set correctly (don't advertise where you can't serve)" />
            <ChecklistItem text="Ad schedule set (if needed—e.g., only run ads during business hours)" />
            <ChecklistItem text="Bid strategy selected (Maximize Conversions or Manual CPC for new accounts)" />
            <ChecklistItem text="Budget set at campaign level (not account level)" />
            <ChecklistItem text="Client approval received for all ad copy" />
            <ChecklistItem text="Peer review completed" />
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg mt-6">
            <p className="font-semibold text-green-900 mb-2">Launch Day Protocol:</p>
            <ol className="list-decimal list-inside text-green-800 space-y-1 ml-4">
              <li>Turn on campaigns mid-morning (10 AM - 12 PM client's local time)</li>
              <li>Monitor search impression share and CTR in the first few hours</li>
              <li>Check for disapproved ads—Google is strict on policy violations</li>
              <li>Send client a launch confirmation email with dashboard access</li>
              <li>Set reminder to review performance after 48 hours</li>
            </ol>
          </div>

          <div className="tip-box mt-4">
            <p className="font-semibold text-blue-900 mb-2">Learning Phase:</p>
            <p className="text-blue-800">
              Google's Smart Bidding algorithms need 30+ conversions in 30 days to exit learning phase. Expect inefficiency in the first 1-2 weeks.
              Don't make major changes during this period unless something is fundamentally broken.
            </p>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
}

function TroubleshootingTab() {
  return (
    <div>
      <div className="section-card">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Common Issues & Solutions</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          You'll hit roadblocks. Here's how to fix the most common ones without escalating to senior team members.
        </p>

        <div className="space-y-6">
          <TroubleshootingItem
            issue="Client can't find their Business Manager or Ad Account"
            platform="Meta"
            solution={
              <div>
                <p className="mb-2"><strong>Why this happens:</strong> They're logged into a personal Facebook profile, not Business Manager.</p>
                <p className="mb-2"><strong>Fix:</strong></p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li>Have them go directly to business.facebook.com (not facebook.com)</li>
                  <li>If they don't see a Business Manager, they don't have one—create one for them</li>
                  <li>If they have multiple Business Managers, check the dropdown in the top left to switch between them</li>
                </ol>
              </div>
            }
          />

          <TroubleshootingItem
            issue="Pixel is installed but events aren't firing"
            platform="Meta"
            solution={
              <div>
                <p className="mb-2"><strong>Common causes:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1 mb-2">
                  <li>Pixel code is in the wrong place (needs to be in <code className="bg-gray-200 px-1">&lt;head&gt;</code>, not footer)</li>
                  <li>JavaScript errors on the page preventing pixel from loading</li>
                  <li>Duplicate pixels causing conflicts</li>
                  <li>Ad blockers interfering with testing</li>
                </ul>
                <p className="mb-2"><strong>Fix:</strong></p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li>Check browser console for JavaScript errors (F12 → Console tab)</li>
                  <li>Use Meta Pixel Helper to see if pixel loads at all</li>
                  <li>Test in incognito mode with ad blockers disabled</li>
                  <li>If using GTM, verify the container is published and the tag is firing on the correct trigger</li>
                </ol>
              </div>
            }
          />

          <TroubleshootingItem
            issue="Ads are stuck in 'Review' status for more than 24 hours"
            platform="Meta"
            solution={
              <div>
                <p className="mb-2"><strong>Why this happens:</strong> Policy review backlog or flagged content.</p>
                <p className="mb-2"><strong>Fix:</strong></p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li>Check if the ad was rejected (sometimes the notification doesn't show up immediately)</li>
                  <li>If still in review after 48 hours, contact Meta support via chat in Business Manager</li>
                  <li>Duplicate the ad—sometimes a duplicate gets approved faster</li>
                  <li>Review the ad for policy violations (medical claims, targeting language, restricted content)</li>
                </ol>
              </div>
            }
          />

          <TroubleshootingItem
            issue="Ad Account is disabled or restricted"
            platform="Meta"
            solution={
              <div>
                <p className="mb-2"><strong>Why this happens:</strong> Policy violations, payment issues, or unusual activity.</p>
                <p className="mb-2"><strong>Fix:</strong></p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li>Check Account Quality in Business Manager for violation details</li>
                  <li>Request a review via the "Request Review" button (if available)</li>
                  <li>Contact Meta support and be ready to explain your business and ad content</li>
                  <li>If payment-related, have client update payment method and retry</li>
                  <li>If repeatedly disabled for no clear reason, create a new ad account (last resort)</li>
                </ol>
              </div>
            }
          />

          <TroubleshootingItem
            issue="Conversion tracking is showing conversions in Google Ads but not in GA4 (or vice versa)"
            platform="Google"
            solution={
              <div>
                <p className="mb-2"><strong>Why this happens:</strong> Different attribution models or tracking implementation issues.</p>
                <p className="mb-2"><strong>Fix:</strong></p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li>Check attribution settings—Google Ads uses "Last Click" by default, GA4 uses "Data-Driven"</li>
                  <li>Verify both tags are firing on the same thank-you page or event</li>
                  <li>Check for duplicate conversion tracking (e.g., gtag and GTM both firing)</li>
                  <li>Some discrepancy (5-10%) is normal due to attribution differences</li>
                </ol>
              </div>
            }
          />

          <TroubleshootingItem
            issue="Campaigns have low impressions or aren't spending budget"
            platform="Google"
            solution={
              <div>
                <p className="mb-2"><strong>Common causes:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1 mb-2">
                  <li>Bids are too low (check "Search lost IS (rank)" metric)</li>
                  <li>Keywords have very low search volume</li>
                  <li>Budget is too low for competitive keywords</li>
                  <li>Ad rank is poor (low Quality Score)</li>
                  <li>Location or ad schedule restrictions are too narrow</li>
                </ul>
                <p className="mb-2"><strong>Fix:</strong></p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li>Increase bids or switch to "Maximize Clicks" temporarily to get volume</li>
                  <li>Expand keyword list with broader match types</li>
                  <li>Check keyword search volume in Keyword Planner</li>
                  <li>Improve ad relevance to boost Quality Score</li>
                  <li>Expand location targeting or remove ad scheduling</li>
                </ol>
              </div>
            }
          />

          <TroubleshootingItem
            issue="Client is getting charged but can't see invoices or billing info"
            platform="Both"
            solution={
              <div>
                <p className="mb-2"><strong>Why this happens:</strong> They're not the billing admin, or they're looking in the wrong place.</p>
                <p className="mb-2"><strong>Fix (Meta):</strong></p>
                <ol className="list-decimal list-inside ml-4 space-y-1 mb-2">
                  <li>Go to Business Manager → Billing</li>
                  <li>If they can't access it, they need billing admin permissions (have the account owner grant this)</li>
                  <li>Check payment method status—declined cards cause confusion</li>
                </ol>
                <p className="mb-2"><strong>Fix (Google):</strong></p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li>Go to Tools & Settings → Billing</li>
                  <li>Documents tab shows all invoices</li>
                  <li>If they're on "Payments profile" access, they need admin access to see full billing</li>
                </ol>
              </div>
            }
          />

          <TroubleshootingItem
            issue="Performance is terrible in the first week"
            platform="Both"
            solution={
              <div>
                <p className="mb-2"><strong>Why this happens:</strong> Algorithms need time to learn. This is normal.</p>
                <p className="mb-2"><strong>What NOT to do:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1 mb-2">
                  <li>Panic and turn off campaigns after 2 days</li>
                  <li>Make major changes daily (resets the learning phase)</li>
                  <li>Blame the pixel/tracking without verifying it's working</li>
                </ul>
                <p className="mb-2"><strong>What TO do:</strong></p>
                <ol className="list-decimal list-inside ml-4 space-y-1">
                  <li>Verify conversion tracking is working correctly</li>
                  <li>Check for obvious issues (wrong targeting, broken landing page, disapproved ads)</li>
                  <li>If nothing is broken, give it 5-7 days before making significant changes</li>
                  <li>After 7 days, analyze data and optimize (pause low performers, increase budget on winners)</li>
                </ol>
              </div>
            }
          />
        </div>
      </div>

      <div className="section-card mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">When to Escalate</h2>
        <p className="text-gray-700 mb-4">You can solve 90% of issues yourself. Escalate to senior team members only when:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>Account has been permanently disabled despite multiple appeal attempts</li>
          <li>Client is demanding a full refund or threatening legal action</li>
          <li>You've followed all troubleshooting steps and the issue persists after 48 hours</li>
          <li>Client is asking for strategic direction changes (e.g., "Should we shift all budget to Google?")</li>
          <li>You discover a critical error that's been ongoing for weeks (e.g., broken conversion tracking)</li>
        </ul>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-800">
            <strong>Remember:</strong> The team hired you because you're capable. Trust your judgment, follow this SOP, and you'll handle
            99% of situations correctly. When in doubt, document what you tried and ask specific questions—not "What should I do?"
            but "I tried X, Y, Z, and here's what happened. Should I try A or B next?"
          </p>
        </div>
      </div>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="checklist-item">
      <div className="flex-shrink-0 w-5 h-5 rounded border-2 border-blue-600 mt-0.5"></div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

function StepItem({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4 items-start p-4 bg-white rounded-lg border border-gray-200">
      <div className="step-number">{number}</div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function CollapsibleSection({
  id,
  title,
  expanded,
  toggle,
  children,
}: {
  id: string;
  title: string;
  expanded: boolean;
  toggle: (section: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="section-card">
      <button
        onClick={() => toggle(id)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <svg
          className={`w-6 h-6 text-gray-600 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && <div className="mt-6">{children}</div>}
    </div>
  );
}

function TroubleshootingItem({
  issue,
  platform,
  solution,
}: {
  issue: string;
  platform: string;
  solution: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-5">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
          <span className="text-red-600 text-sm font-bold">!</span>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-lg">{issue}</h4>
          <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">
            {platform}
          </span>
        </div>
      </div>
      <div className="ml-9 text-gray-700 text-sm">{solution}</div>
    </div>
  );
}
