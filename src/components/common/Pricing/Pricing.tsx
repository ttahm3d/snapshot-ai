import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Cross, X } from "lucide-react";

export default function Pricing() {
  const free: { text: string; isAvailable: boolean }[] = [
    { text: "Basic appraisal summary", isAvailable: true },
    { text: "Customizable character count for summaries", isAvailable: false },
    { text: "Accurate processing using AI models", isAvailable: true },
    { text: "Store snapshot generation history", isAvailable: false },
    {
      text: "Limited to 5 achievements per month / quarter",
      isAvailable: true,
    },
    { text: "Secure data handling and storage", isAvailable: false },
    {
      text: "Support multiple output formats - bullets, multiparagraphs",
      isAvailable: false,
    },
  ];

  const paid: { text: string; isAvailable: boolean }[] = [
    { text: "Advanced appraisal summary", isAvailable: true },
    { text: "Customizable character count for summaries", isAvailable: true },
    {
      text: "Fast and accurate processing by advanced AI algorithms",
      isAvailable: true,
    },
    {
      text: "Support multiple output formats - bullets, multiparagraphs",
      isAvailable: true,
    },
    { text: "Store snapshot generation history", isAvailable: true },
    {
      text: "Limited to 5 achievements per month / quarter",
      isAvailable: true,
    },
    { text: "Secure data handling and storage", isAvailable: true },
  ];

  return (
    <section className="bg-secondary py-8" id="pricing">
      <section className="container">
        <h2 className="text-4xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 md:gap-32 pt-12 px-4">
          <Card className="bg-card  border-primary text-sm w-[350px]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Free</CardTitle>
              <CardDescription>
                Basic pricing tier offering features at 0$ / month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                {free.map((feature, index) => (
                  <div key={index} className="flex gap-2 py-1">
                    <div>
                      {feature.isAvailable ? (
                        <Check className="text-green-600" />
                      ) : (
                        <X className="text-red-600" />
                      )}
                    </div>
                    <div>{feature.text}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card text-sm w-[350px] relative">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Premium</CardTitle>
              <CardDescription>
                Premium pricing tier offering advanced features at 2$ / month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                {paid.map((feature, index) => (
                  <div key={index} className="flex gap-2 py-1">
                    <div>
                      {feature.isAvailable ? (
                        <Check className="text-green-600" />
                      ) : (
                        <X className="text-red-600" />
                      )}
                    </div>
                    <div>{feature.text}</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <Badge className="absolute top-5 right-5">Coming soon</Badge>
          </Card>
        </div>
      </section>
    </section>
  );
}
