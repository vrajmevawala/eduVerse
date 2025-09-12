import React from 'react';

const Section = ({ id, title, children }) => (
  <section id={id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
    <h2 className="text-xl font-semibold mb-3 text-gray-900">{title}</h2>
    <div className="prose prose-gray max-w-none text-gray-700">{children}</div>
  </section>
);

const TermsOfService = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
        <p className="text-sm text-gray-500 mt-1">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* <aside className="lg:col-span-1">
          <nav className="sticky top-24 bg-white rounded-xl border border-gray-200 p-4 text-sm text-gray-700">
            <div className="font-semibold text-gray-900 mb-2">On this page</div>
            <ul className="space-y-2">
              <li><a className="hover:underline" href="#acceptable">Acceptable Use</a></li>
              <li><a className="hover:underline" href="#accounts">Accounts & Security</a></li>
              <li><a className="hover:underline" href="#contests">Contests & Academic Integrity</a></li>
              <li><a className="hover:underline" href="#ip">Intellectual Property</a></li>
              <li><a className="hover:underline" href="#termination">Termination</a></li>
              <li><a className="hover:underline" href="#disclaimers">Disclaimers</a></li>
              <li><a className="hover:underline" href="#changes">Changes</a></li>
              <li><a className="hover:underline" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </aside> */}

        <div className="lg:col-span-3 space-y-6">
          <Section id="acceptable" title="Acceptable Use">
            <ul>
              <li>Use PlacePrep only for lawful purposes.</li>
              <li>Do not interfere with or disrupt the service or networks.</li>
              <li>Do not attempt to reverse engineer or gain unauthorized access.</li>
            </ul>
          </Section>

          <Section id="accounts" title="Accounts and Security">
            <ul>
              <li>You are responsible for maintaining the confidentiality of your credentials.</li>
              <li>Notify us immediately of any unauthorized use of your account.</li>
            </ul>
          </Section>

          <Section id="contests" title="Contests, Practice, and Academic Integrity">
            <p>
              Cheating, sharing answers, or using unauthorized aids is prohibited. We may
              take action on suspected violations, including score invalidation and account
              restrictions.
            </p>
          </Section>

          <Section id="ip" title="Intellectual Property">
            <p>
              Content on PlacePrep, including questions, explanations, and UI elements,
              is protected by intellectual property laws. You may not copy or redistribute
              content without permission.
            </p>
          </Section>

          <Section id="termination" title="Termination">
            <p>
              We may suspend or terminate accounts that violate these terms or pose risks
              to the platform or other users.
            </p>
          </Section>

          <Section id="disclaimers" title="Disclaimers and Limitation of Liability">
            <p>
              The service is provided "as is" without warranties of any kind. To the
              maximum extent permitted by law, PlacePrep is not liable for indirect or
              consequential damages.
            </p>
          </Section>

          <Section id="changes" title="Changes to Terms">
            <p>
              We may update these terms periodically. Continued use of PlacePrep after
              changes take effect constitutes acceptance of the new terms.
            </p>
          </Section>

          <Section id="contact" title="Contact">
            <p>
              Questions about these terms? Email
              {' '}<a className="text-black underline" href="mailto:team.placeprep@gmail.com">team.placeprep@gmail.com</a>.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;


