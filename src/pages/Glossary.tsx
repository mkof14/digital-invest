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
    term: "Equity",
    definition: "Ownership interest in a company, typically represented by shares or membership units.",
    category: "Finance"
  },
  {
    term: "Valuation",
    definition: "Process of determining current worth of an asset or company using various methodologies and assumptions.",
    category: "Finance"
  },
  {
    term: "Term Sheet",
    definition: "Non-binding document outlining basic terms and conditions of a potential investment or business agreement.",
    category: "Legal"
  },
  {
    term: "Exit Strategy",
    definition: "Plan for how investors will realize returns from their investment, such as through sale, merger, or public offering.",
    category: "Investment"
  },
  {
    term: "Liquidity",
    definition: "Ease with which an asset can be converted into cash. Private investments typically have lower liquidity than public securities.",
    category: "Finance"
  },
  {
    term: "Risk Disclosure",
    definition: "Document outlining potential risks associated with an investment, required for investor protection and informed decision-making.",
    category: "Regulation"
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
