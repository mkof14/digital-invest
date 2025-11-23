import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

const glossaryTerms: GlossaryTerm[] = [
  // Investment Terms
  {
    term: "Due Diligence",
    definition: "Comprehensive investigation and analysis of a project or company before entering into an agreement or transaction. Includes financial, legal, operational, and technical review.",
    category: "Investment"
  },
  {
    term: "Private Placement",
    definition: "Sale of securities to a pre-selected group of investors rather than through a public offering. Typically involves accredited or institutional investors.",
    category: "Investment"
  },
  {
    term: "Accredited Investor",
    definition: "Individual or entity meeting specific financial criteria (income, net worth) allowing participation in certain private investment opportunities not available to the general public.",
    category: "Regulation"
  },
  {
    term: "Portfolio Company",
    definition: "A company in which an investment firm has made an investment. Part of the overall investment portfolio.",
    category: "Investment"
  },
  {
    term: "Exit Strategy",
    definition: "Plan for how investors will realize returns from their investment, such as through sale, merger, or public offering.",
    category: "Investment"
  },
  {
    term: "Angel Investor",
    definition: "Individual who provides capital for business startups, usually in exchange for convertible debt or ownership equity.",
    category: "Investment"
  },
  {
    term: "Venture Capital (VC)",
    definition: "Financing provided to early-stage, high-potential companies in exchange for equity stake. Typically involves higher risk and potential for high returns.",
    category: "Investment"
  },
  {
    term: "Private Equity (PE)",
    definition: "Investment in companies not publicly traded on stock exchanges. Includes buyouts, growth capital, and distressed investments.",
    category: "Investment"
  },
  {
    term: "Series A/B/C Funding",
    definition: "Sequential rounds of venture capital financing. Series A is typically first significant round after seed funding, followed by B, C, etc.",
    category: "Investment"
  },
  {
    term: "Seed Funding",
    definition: "Initial capital raised by startup to prove concept and fund early development. Often from founders, friends, family, or angel investors.",
    category: "Investment"
  },
  {
    term: "Cap Table (Capitalization Table)",
    definition: "Spreadsheet showing equity ownership structure of company, including all securities, who owns them, and at what price.",
    category: "Investment"
  },
  {
    term: "Dilution",
    definition: "Reduction in ownership percentage that occurs when company issues new shares. Affects existing shareholders' voting power and value.",
    category: "Investment"
  },
  {
    term: "Vesting",
    definition: "Process by which employee or founder earns right to equity over time. Common schedule is 4 years with 1-year cliff.",
    category: "Investment"
  },
  {
    term: "Lock-up Period",
    definition: "Time window during which investors are prohibited from selling their shares. Common in IPOs and private placements.",
    category: "Investment"
  },
  {
    term: "Drag-Along Rights",
    definition: "Provision allowing majority shareholders to force minority shareholders to join in sale of company.",
    category: "Legal"
  },
  {
    term: "Tag-Along Rights",
    definition: "Protection allowing minority shareholders to join transaction if majority shareholder sells their stake.",
    category: "Legal"
  },
  {
    term: "Anti-Dilution Protection",
    definition: "Clause protecting investors from dilution in subsequent down rounds by adjusting conversion price of preferred shares.",
    category: "Legal"
  },
  {
    term: "Liquidation Preference",
    definition: "Determines payout order when company is sold or liquidated. Preferred shareholders typically get paid before common shareholders.",
    category: "Legal"
  },
  {
    term: "Convertible Note",
    definition: "Short-term debt that converts into equity, typically in conjunction with future financing round. Common in early-stage funding.",
    category: "Investment"
  },
  {
    term: "SAFE (Simple Agreement for Future Equity)",
    definition: "Investment contract between startup and investor. Provides rights to future equity without determining specific price per share.",
    category: "Investment"
  },
  
  // Financial Metrics & Ratios
  {
    term: "IRR (Internal Rate of Return)",
    definition: "Metric used to estimate profitability of potential investments. Represents the discount rate at which net present value of cash flows equals zero.",
    category: "Finance"
  },
  {
    term: "ROI (Return on Investment)",
    definition: "Performance measure evaluating efficiency of an investment. Calculated as (Gain - Cost) / Cost.",
    category: "Finance"
  },
  {
    term: "ROE (Return on Equity)",
    definition: "Measure of financial performance calculated by dividing net income by shareholders' equity. Shows how much profit company generates with shareholders' money.",
    category: "Finance"
  },
  {
    term: "ROA (Return on Assets)",
    definition: "Indicator of how profitable company is relative to its total assets. Calculated as Net Income / Total Assets.",
    category: "Finance"
  },
  {
    term: "EBITDA",
    definition: "Earnings Before Interest, Taxes, Depreciation, and Amortization. Measure of company's operating performance.",
    category: "Finance"
  },
  {
    term: "P/E Ratio (Price-to-Earnings)",
    definition: "Ratio for valuing company that measures current share price relative to per-share earnings. Indicates how much investors pay per dollar of earnings.",
    category: "Finance"
  },
  {
    term: "EPS (Earnings Per Share)",
    definition: "Company's profit divided by outstanding shares of common stock. Key metric for measuring corporate profitability.",
    category: "Finance"
  },
  {
    term: "NPV (Net Present Value)",
    definition: "Difference between present value of cash inflows and outflows over period of time. Used in capital budgeting to analyze profitability.",
    category: "Finance"
  },
  {
    term: "DCF (Discounted Cash Flow)",
    definition: "Valuation method estimating value of investment based on expected future cash flows, adjusted for time value of money.",
    category: "Finance"
  },
  {
    term: "CAGR (Compound Annual Growth Rate)",
    definition: "Rate of return required for investment to grow from beginning balance to ending balance over specified time period.",
    category: "Finance"
  },
  {
    term: "WACC (Weighted Average Cost of Capital)",
    definition: "Calculation of firm's cost of capital weighted by proportion of each capital component. Used as discount rate in DCF analysis.",
    category: "Finance"
  },
  {
    term: "EV (Enterprise Value)",
    definition: "Measure of company's total value. Calculated as market cap plus debt, minority interest, and preferred shares, minus cash and cash equivalents.",
    category: "Finance"
  },
  {
    term: "EV/EBITDA",
    definition: "Valuation multiple comparing company's enterprise value to its EBITDA. Common metric for assessing company value.",
    category: "Finance"
  },
  {
    term: "Book Value",
    definition: "Net value of company according to balance sheet. Calculated as total assets minus intangible assets and liabilities.",
    category: "Finance"
  },
  {
    term: "Market Cap (Market Capitalization)",
    definition: "Total market value of company's outstanding shares. Calculated as share price multiplied by total number of shares.",
    category: "Finance"
  },
  {
    term: "Debt-to-Equity Ratio",
    definition: "Measure of company's financial leverage. Calculated by dividing total liabilities by stockholders' equity.",
    category: "Finance"
  },
  {
    term: "Current Ratio",
    definition: "Liquidity ratio measuring company's ability to pay short-term obligations. Calculated as Current Assets / Current Liabilities.",
    category: "Finance"
  },
  {
    term: "Quick Ratio",
    definition: "Measure of company's ability to meet short-term obligations with most liquid assets. Excludes inventory from current assets.",
    category: "Finance"
  },
  {
    term: "Burn Rate",
    definition: "Rate at which company spends its cash reserves before generating positive cash flow. Critical metric for startups.",
    category: "Finance"
  },
  {
    term: "Runway",
    definition: "Amount of time company can continue operating before running out of cash, given current burn rate.",
    category: "Finance"
  },
  {
    term: "LTV (Lifetime Value)",
    definition: "Prediction of net profit attributed to entire future relationship with customer. Key metric in subscription and SaaS businesses.",
    category: "Finance"
  },
  {
    term: "CAC (Customer Acquisition Cost)",
    definition: "Cost associated with acquiring new customer. Includes marketing and sales expenses divided by number of new customers.",
    category: "Finance"
  },
  {
    term: "MRR (Monthly Recurring Revenue)",
    definition: "Predictable revenue that company expects to receive every month. Critical metric for subscription-based businesses.",
    category: "Finance"
  },
  {
    term: "ARR (Annual Recurring Revenue)",
    definition: "Value of recurring revenue normalized to one-year period. Key metric for SaaS and subscription businesses.",
    category: "Finance"
  },
  {
    term: "Churn Rate",
    definition: "Rate at which customers stop doing business with company. Critical metric for subscription-based business models.",
    category: "Finance"
  },
  {
    term: "Gross Margin",
    definition: "Difference between revenue and cost of goods sold, expressed as percentage. Indicates pricing strategy and cost structure efficiency.",
    category: "Finance"
  },
  {
    term: "Operating Margin",
    definition: "Ratio measuring percentage of revenue remaining after paying operating expenses. Indicator of operational efficiency.",
    category: "Finance"
  },
  {
    term: "Net Margin",
    definition: "Percentage of revenue remaining after all expenses, taxes, and costs are deducted. Bottom-line profitability metric.",
    category: "Finance"
  },
  
  // Legal & Regulatory
  {
    term: "Term Sheet",
    definition: "Non-binding document outlining basic terms and conditions of a potential investment or business agreement.",
    category: "Legal"
  },
  {
    term: "Risk Disclosure",
    definition: "Document outlining potential risks associated with an investment, required for investor protection and informed decision-making.",
    category: "Regulation"
  },
  {
    term: "SEC (Securities and Exchange Commission)",
    definition: "U.S. government agency responsible for enforcing federal securities laws and regulating securities industry.",
    category: "Regulation"
  },
  {
    term: "Regulation D",
    definition: "SEC regulation allowing companies to raise capital through private placements without registering with SEC.",
    category: "Regulation"
  },
  {
    term: "Form D",
    definition: "Notice of exempt offering of securities filed with SEC under Regulation D within 15 days of first sale.",
    category: "Regulation"
  },
  {
    term: "506(b) Offering",
    definition: "Private placement exemption allowing unlimited capital raise from accredited investors and up to 35 sophisticated non-accredited investors.",
    category: "Regulation"
  },
  {
    term: "506(c) Offering",
    definition: "Private placement exemption allowing general solicitation but only to verified accredited investors.",
    category: "Regulation"
  },
  {
    term: "Qualified Purchaser",
    definition: "Individual or entity meeting higher wealth thresholds than accredited investor. Allows participation in certain private funds.",
    category: "Regulation"
  },
  {
    term: "NDA (Non-Disclosure Agreement)",
    definition: "Legal contract establishing confidential relationship. Protects proprietary information from being disclosed.",
    category: "Legal"
  },
  {
    term: "LOI (Letter of Intent)",
    definition: "Document declaring preliminary commitment of one party to do business with another. Outlines terms of deal under negotiation.",
    category: "Legal"
  },
  {
    term: "MOU (Memorandum of Understanding)",
    definition: "Agreement between two or more parties outlining terms and details of understanding. Less formal than contract.",
    category: "Legal"
  },
  {
    term: "Shareholders Agreement",
    definition: "Contract between company's shareholders outlining rights, obligations, and protections of shareholders.",
    category: "Legal"
  },
  {
    term: "Subscription Agreement",
    definition: "Investor's application to join limited partnership. Serves as contract between company and investor.",
    category: "Legal"
  },
  {
    term: "Warrant",
    definition: "Security giving holder right to purchase company's stock at specified price within specific time period.",
    category: "Finance"
  },
  {
    term: "Option Pool",
    definition: "Shares reserved for future issuance to employees, advisors, and board members. Typically 10-20% of company equity.",
    category: "Investment"
  },
  {
    term: "83(b) Election",
    definition: "IRS tax code provision allowing individuals to pay taxes on total fair market value of restricted stock at time of grant.",
    category: "Legal"
  },
  {
    term: "Clawback Provision",
    definition: "Contractual clause requiring employee to return money already paid by employer under certain circumstances.",
    category: "Legal"
  },
  {
    term: "Escrow",
    definition: "Financial arrangement where third party holds and regulates payment of funds required for two parties involved in transaction.",
    category: "Legal"
  },
  {
    term: "Due Diligence Report",
    definition: "Comprehensive analysis document resulting from due diligence process. Includes findings, risks, and recommendations.",
    category: "Investment"
  },
  
  // Market & Trading Terms
  {
    term: "Equity",
    definition: "Ownership interest in a company, typically represented by shares or membership units.",
    category: "Finance"
  },
  {
    term: "Liquidity",
    definition: "Ease with which an asset can be converted into cash. Private investments typically have lower liquidity than public securities.",
    category: "Finance"
  },
  {
    term: "Valuation",
    definition: "Process of determining current worth of an asset or company using various methodologies and assumptions.",
    category: "Finance"
  },
  {
    term: "Pre-Money Valuation",
    definition: "Valuation of company immediately before investment or financing. Used to determine equity stake for investors.",
    category: "Finance"
  },
  {
    term: "Post-Money Valuation",
    definition: "Company's valuation after receiving investment capital. Equals pre-money valuation plus investment amount.",
    category: "Finance"
  },
  {
    term: "Down Round",
    definition: "Financing round where company raises capital at lower valuation than previous round. Often indicates difficulties.",
    category: "Investment"
  },
  {
    term: "Up Round",
    definition: "Financing round where company raises capital at higher valuation than previous round. Indicates growth and success.",
    category: "Investment"
  },
  {
    term: "Bridge Financing",
    definition: "Short-term funding to carry company until next major financing round or liquidity event.",
    category: "Investment"
  },
  {
    term: "IPO (Initial Public Offering)",
    definition: "First sale of stock by private company to public. Company transitions from private to publicly traded status.",
    category: "Finance"
  },
  {
    term: "M&A (Mergers and Acquisitions)",
    definition: "Consolidation of companies through various types of financial transactions, including mergers, acquisitions, and takeovers.",
    category: "Investment"
  },
  {
    term: "LBO (Leveraged Buyout)",
    definition: "Acquisition of company using significant amount of borrowed money to meet cost of acquisition.",
    category: "Investment"
  },
  {
    term: "MBO (Management Buyout)",
    definition: "Transaction where company's management team purchases assets and operations of business they manage.",
    category: "Investment"
  },
  {
    term: "Unicorn",
    definition: "Privately held startup company valued at over $1 billion. Term coined by venture capitalist Aileen Lee.",
    category: "Investment"
  },
  {
    term: "Decacorn",
    definition: "Privately held startup company valued at over $10 billion. Extremely rare achievement in startup ecosystem.",
    category: "Investment"
  },
  {
    term: "Strategic Investor",
    definition: "Investor (often corporation) seeking investment opportunities that align with business strategy, beyond financial returns.",
    category: "Investment"
  },
  {
    term: "Financial Investor",
    definition: "Investor primarily motivated by financial returns rather than strategic benefits. Includes most PE and VC firms.",
    category: "Investment"
  },
  {
    term: "Lead Investor",
    definition: "Primary investor in funding round who negotiates terms and often takes board seat. Sets terms for other investors.",
    category: "Investment"
  },
  {
    term: "Follow-On Investment",
    definition: "Additional investment in company where investor has already committed capital in previous round.",
    category: "Investment"
  },
  {
    term: "Pro Rata Rights",
    definition: "Right of investor to participate in future financing rounds to maintain ownership percentage.",
    category: "Legal"
  },
  {
    term: "Preferred Stock",
    definition: "Class of ownership with higher claim on assets and earnings than common stock. Typically includes special rights and preferences.",
    category: "Finance"
  },
  {
    term: "Common Stock",
    definition: "Security representing ownership in corporation. Common stockholders have voting rights but are last in priority for dividends and assets.",
    category: "Finance"
  },
  {
    term: "Dividend",
    definition: "Distribution of portion of company's earnings to shareholders, decided by board of directors.",
    category: "Finance"
  },
  {
    term: "SPAC (Special Purpose Acquisition Company)",
    definition: "Company with no commercial operations formed to raise capital through IPO for purpose of acquiring existing company.",
    category: "Investment"
  },
  {
    term: "Secondary Market",
    definition: "Market where investors buy and sell securities they already own. Private company shares trade on secondary markets.",
    category: "Finance"
  },
  {
    term: "Tender Offer",
    definition: "Offer to purchase some or all of shareholders' shares in corporation, typically at premium to market price.",
    category: "Investment"
  }
];

const Glossary = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Array.from(new Set(glossaryTerms.map(t => t.category)));
  
  const filteredTerms = glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
    term.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedTerms = categories.map(category => ({
    category,
    terms: filteredTerms.filter(t => t.category === category)
  })).filter(g => g.terms.length > 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Investment Glossary
              </h1>
              <p className="text-lg text-muted-foreground">
                Essential terms and definitions for understanding private investments
              </p>
            </div>

            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search terms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 text-lg h-12"
                />
              </div>
            </div>

            <div className="space-y-8">
              {groupedTerms.map((group, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">
                    {group.category}
                  </h2>
                  <div className="grid gap-4">
                    {group.terms.map((term, termIdx) => (
                      <Card key={termIdx} className="hover-scale">
                        <CardHeader>
                          <CardTitle className="text-xl">{term.term}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {term.definition}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filteredTerms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No terms found matching "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Glossary;
