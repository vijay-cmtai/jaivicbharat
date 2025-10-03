import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfServicePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-background text-foreground min-h-screen">
        <div className="container mx-auto max-w-4xl py-24 px-4 sm:py-32">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Please read these terms carefully before using our services.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last Updated: October 26, 2023
            </p>
          </header>

          <div className="space-y-10 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 border-b border-border pb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the Jaivic Bharat website and its
                services ("Service"), you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to
                abide by these terms, please do not use this Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 border-b border-border pb-2">
                2. Use of the Service
              </h2>
              <p>
                You agree to use the Service only for lawful purposes. You are
                prohibited from any use of the Service that would constitute an
                illegal offense, give rise to liability, or otherwise violate
                any applicable local, state, national, or international law or
                regulation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 border-b border-border pb-2">
                3. Intellectual Property
              </h2>
              <p>
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                Jaivic Bharat. Our trademarks may not be used in connection with
                any product or service without the prior written consent of
                Jaivic Bharat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 border-b border-border pb-2">
                4. Limitation of Liability
              </h2>
              <p>
                In no event shall Jaivic Bharat, nor its directors, employees,
                or partners, be liable for any indirect, incidental, special,
                consequential or punitive damages, including without limitation,
                loss of profits, data, use, goodwill, or other intangible
                losses, resulting from your access to or use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 border-b border-border pb-2">
                5. Changes to Terms
              </h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. We will provide at least 30
                days' notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4 border-b border-border pb-2">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact us:
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
      <Footer />
    </>
  );
};

export default TermsOfServicePage;
