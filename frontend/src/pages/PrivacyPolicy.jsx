import React from 'react';

const Section = ({ id, title, children }) => (
  <section id={id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
    <h2 className="text-xl font-semibold mb-3 text-gray-900">{title}</h2>
    <div className="prose prose-gray max-w-none text-gray-700">{children}</div>
  </section>
);

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mt-1">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* <aside className="lg:col-span-1">
          <nav className="sticky top-24 bg-white rounded-xl border border-gray-200 p-4 text-sm text-gray-700">
            <div className="font-semibold text-gray-900 mb-2">On this page</div>
            <ul className="space-y-2">
              <li><a className="hover:underline" href="#info">Information We Collect</a></li>
              <li><a className="hover:underline" href="#use">How We Use Information</a></li>
              <li><a className="hover:underline" href="#cookies">Cookies</a></li>
              <li><a className="hover:underline" href="#security">Security</a></li>
              <li><a className="hover:underline" href="#retention">Data Retention</a></li>
              <li><a className="hover:underline" href="#rights">Your Rights</a></li>
              <li><a className="hover:underline" href="#third">Third‑Party Services</a></li>
              <li><a className="hover:underline" href="#children">Children</a></li>
              <li><a className="hover:underline" href="#changes">Changes</a></li>
              <li><a className="hover:underline" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </aside> */}

        <div className="lg:col-span-3 space-y-6">
          <Section id="intro" title="Overview">
            <p>
              We value your privacy. This policy describes what data we collect when you
              use PlacePrep, how we use and share it, and the choices you have.
            </p>
          </Section>

          <Section id="info" title="Information We Collect">
            <ul>
              <li><strong>Account data</strong>: name, email, and authentication identifiers.</li>
              <li><strong>Usage data</strong>: pages visited, actions taken, device and browser info.</li>
              <li><strong>Contest/practice data</strong>: attempts, scores, and activity logs.</li>
            </ul>
          </Section>

          <Section id="use" title="How We Use Your Information">
            <ul>
              <li>Provide core features like practice, contests, analytics, and bookmarks.</li>
              <li>Maintain platform security, prevent fraud, and enforce our Terms.</li>
              <li>Improve the product and personalize content based on performance.</li>
              <li>Communicate important updates like password resets or account notices.</li>
            </ul>
          </Section>

          <Section id="cookies" title="Cookies and Similar Technologies">
            <p>
              We use cookies (including session cookies) to keep you signed in and to
              understand product usage. You can control cookies in your browser settings,
              but disabling them may limit functionality.
            </p>
          </Section>

          <Section id="security" title="Data Security">
            <p>
              We apply industry‑standard safeguards to protect your data. No method of
              transmission or storage is 100% secure; we continuously improve our
              protections.
            </p>
          </Section>

          <Section id="retention" title="Data Retention">
            <p>
              We retain personal data only as long as necessary to provide the service and
              for legitimate business needs. You can request deletion of your account by
              contacting us.
            </p>
          </Section>

          <Section id="rights" title="Your Rights and Choices">
            <ul>
              <li>Access and update your profile information.</li>
              <li>Request deletion of your account and data.</li>
              <li>Opt out of non‑essential communications.</li>
            </ul>
          </Section>

          <Section id="third" title="Third‑Party Services">
            <p>
              We rely on third‑party providers (e.g., email and analytics). They process
              data on our behalf and are bound by confidentiality and security obligations.
              We do not sell your personal information.
            </p>
          </Section>

          <Section id="children" title="Children’s Privacy">
            <p>
              PlacePrep is not directed to children under 13. If we learn we collected
              personal data from a child, we will take steps to delete it.
            </p>
          </Section>

          <Section id="changes" title="Changes to This Policy">
            <p>
              We may update this policy occasionally. We will post the updated version on
              this page and adjust the “Last updated” date above.
            </p>
          </Section>

          <Section id="contact" title="Contact">
            <p>
              Questions about privacy? Email us at
              {' '}<a className="text-black underline" href="mailto:team.placeprep@gmail.com">team.placeprep@gmail.com</a>.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;


