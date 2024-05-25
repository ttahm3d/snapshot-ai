import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, Brain, Gauge, Notebook } from "lucide-react";

export default function Features() {
  const features: { text: string; isAvailable: boolean; icon: LucideIcon }[] = [
    {
      text: "Generate summary of input text",
      isAvailable: true,
      icon: Notebook,
    },
    {
      text: "Input character count is capped at 400",
      isAvailable: true,
      icon: Gauge,
    },
    {
      text: "Accurate processing using AI models",
      isAvailable: true,
      icon: Brain,
    },
  ];
  return (
    <section className="container max-w-5xl mx-auto pb-12">
      <div>
        <h2 className="text-center text-3xl font-bold pb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="px-4 py-8 bg-card">
              <CardContent className="flex gap-2 flex-col">
                <feature.icon className="text-primary" />
                <p className="font-medium">{feature.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
