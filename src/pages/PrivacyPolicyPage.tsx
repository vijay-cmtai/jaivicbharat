import { Link } from "react-router-dom";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto max-w-4xl py-24 px-4 sm:py-32">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your privacy is critically important to us.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Last Updated: October 26, 2023
          </p>
        </header>

        <div className="space-y-10 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 border-b border-border pb-2">
              Introduction
            </h2>
            <p>
              Welcome to Jaivic Bharat. We are a citizen-led movement dedicated
              to promoting organic and sustainable living in India. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website, participate in our
              programs, or engage with our movement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 border-b border-border pb-2">
              Information We Collect
            </h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways. The
              information we may collect on the Site includes:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-foreground/80">
              <li>
                <strong>Personal Data:</strong> Personally identifiable
                information, such as your name, shipping address, email address,
                and telephone number, that you voluntarily give to us when you
                register for our programs, sign up for our newsletter, or make a
                donation.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers
                automatically collect when you access the site, such as your IP
                address, your browser type, your operating system, and the pages
                you have viewed directly before and after accessing the Site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 border-b border-border pb-2">
              How We Use Your Information
            </h2>
            <p>
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you to:
            </p>
            <ul className="list-disc space-y-2 pl-6 mt-4 text-foreground/80">
              <li>Create and manage your account.</li>
              <li>Email you regarding your account or our programs.</li>
              <li>
                Send you a newsletter and other updates about our movement.
              </li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>
                Monitor and analyze usage and trends to improve your experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 border-b border-border pb-2">
              Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              data. You can also object to the processing of your personal data.
              To exercise these rights, please contact us at the email address
              below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4 border-b border-border pb-2">
              Contact Us
            </h2>
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact us at:
              <br />
              <a
                href="mailto:info@jaivicbharat.org"
                className="text-accent font-medium hover:underline"
              >
                info@jaivicbharat.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
