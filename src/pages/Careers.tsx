import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/heroes/careers.webp";

const Careers = () => {
  const { t } = useTranslation();

  const roles = [
    t('careers.role1'), t('careers.role2'), t('careers.role3'),
    t('careers.role4'), t('careers.role5'), t('careers.role6'),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PageHero image={heroImage}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t('careers.title')}</h1>
            <p className="text-xl text-secondary">{t('careers.subtitle')}</p>
          </div>
        </PageHero>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('careers.whyJoin')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('careers.whyJoinText')}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('careers.howWeWork')}</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                {[1,2,3,4].map(i => <li key={i}>{t(`careers.work${i}`)}</li>)}
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{t('careers.whoWeLookFor')}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {roles.map((role, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <p className="font-semibold">{role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 space-y-4">
              <h2 className="text-3xl font-bold">{t('careers.howToApply')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('careers.howToApplyText')}</p>
              <a href="mailto:careers@digitalinvest.com" className="text-lg font-semibold hover:underline inline-block">careers@digitalinvest.com</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
