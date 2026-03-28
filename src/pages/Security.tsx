import { useTranslation } from 'react-i18next';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Security = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-blue-animated">{t('security.title')}</span>
            </h1>
            <p className="text-xl text-muted-foreground">{t('security.subtitle')}</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('security.byDesign')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('security.byDesignText')}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('security.corePrinciples')}</h2>
              <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground ml-4">
                {[1,2,3,4,5].map(i => <li key={i}>{t(`security.principle${i}`)}</li>)}
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('security.dataProtection')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('security.dataProtectionText')}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('security.audit')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('security.auditText')}{" "}
                <Link to="/infrastructure" className="underline hover:text-primary">{t('security.auditLink')}</Link>.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('security.responsibleAI')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('security.responsibleAIText')}</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">{t('security.limitations')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>{t('common.important')}:</strong> {t('security.limitationsText1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('security.limitationsText2')}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
