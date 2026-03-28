import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Governance = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-purple-animated">{t('governance.title')}</span>
            </h1>
            <p className="text-xl text-muted-foreground">{t('governance.subtitle')}</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('governance.approach')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">{t('governance.approachText')}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>{t('governance.purposeLabel')}</strong> {t('governance.purposeText')}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('governance.coreElements')}</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                {[1,2,3,4].map(i => <li key={i}>{t(`governance.element${i}`)}</li>)}
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('governance.advisory')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('governance.advisoryText')}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('governance.transparency')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('governance.transparencyText')}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Governance;
