import SectionHeading from "../components/SectionHeading";

export default function Privacy() {
  return (
    <main className="container-wide py-14 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Privacy Policy"
          title="GK Master Privacy Policy"
          text="Effective date: October 5, 2026 • Last updated: October 5, 2026"
        />

        <div className="mt-10 space-y-5">
          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold">1. Overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              GK Master is a general knowledge quiz application that lets users answer questions, track quiz scores, and optionally watch rewarded advertisements to reveal answers. We aim to use information only as reasonably needed to operate, secure, improve, and monetize the application.
            </p>
          </section>

          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold">2. Information We Collect</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              The core quiz experience does not require a user account, username, password, phone number, or email address. GK Master uses Google Mobile Ads (AdMob) for advertising. Depending on device settings, applicable privacy choices, and Google services, the advertising SDK may process information such as IP address, advertising or device identifiers, app interactions, and diagnostic information.
            </p>
          </section>

          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold">3. Advertising</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              GK Master uses Google AdMob for banner, interstitial, and rewarded advertisements. The rewarded-ad feature is voluntary: users may choose to watch an ad to reveal a quiz answer. Advertising services may process information according to their own privacy practices and applicable settings.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a className="block text-blue-300 hover:text-white" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy ↗</a>
              <a className="block text-blue-300 hover:text-white" href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">Google Advertising Information ↗</a>
            </div>
          </section>

          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold">4. Quiz & Local Data</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Quiz content is packaged with the application. Quiz responses and scores may be processed locally to provide the game experience. The core quiz does not ask users for personally identifying information.
            </p>
          </section>

          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold">5. Permissions</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Internet access is used for network-dependent services such as advertising. The Google Mobile Ads SDK may use Android advertising identifiers subject to platform and Google privacy controls.
            </p>
          </section>

          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold">6. Third-Party Services</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              GK Master currently uses Google Mobile Ads (AdMob). Information handled by that service is governed by Google's policies and service terms.
            </p>
          </section>

          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold">7. Security & Retention</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              We take reasonable measures for information handled by the application. Third-party providers maintain their own security controls. GK Master does not maintain a user account database for its core quiz functionality. Third-party services determine retention according to their policies.
            </p>
          </section>

          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold">8. Children's Privacy</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              GK Master does not knowingly collect personal information from children. Parents and guardians should review Google's privacy and advertising practices when the app is used by children.
            </p>
          </section>

          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold">9. Your Choices</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Depending on device, account, location, and applicable law, users may have controls over advertising personalization and Android's Advertising ID. Users can also stop using the app by uninstalling it.
            </p>
          </section>

          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold">10. Changes to This Policy</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              We may update this policy when the app, services, legal requirements, or data practices change. The latest version will be published on this page with an updated date.
            </p>
          </section>

          <section className="card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold">11. Contact</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              GK Master<br />
              Developer: Errorfix Solution OPC Private Limited<br />
              Privacy & support: <a className="text-blue-300 hover:text-white" href="mailto:support@awesomestory.site">support@awesomestory.site</a>
            </p>
          </section>

          <div className="rounded-2xl border border-amber-300/15 bg-amber-300/5 p-5 text-xs leading-6 text-slate-400">
            This page is intended to be the public privacy-policy page for the GK Master Android application. Before publishing, verify that the wording matches your final Play Console Data Safety answers and actual app/SDK behavior.
          </div>
        </div>
      </div>
    </main>
  );
}