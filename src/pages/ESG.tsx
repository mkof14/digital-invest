import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ESG = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-orange-animated">{t('esg.title')}</span>
            </h1>
            <p className="text-xl text-muted-foreground">{t('esg.subtitle')}</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('esg.perspective')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('esg.perspectiveText')}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('esg.environmental')}</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>{t('esg.env1')}</li>
                <li>{t('esg.env2')}</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('esg.social')}</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                <li>{t('esg.social1')}</li>
                <li>{t('esg.social2')}</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('esg.governance')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('esg.governanceText')}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ESG;
