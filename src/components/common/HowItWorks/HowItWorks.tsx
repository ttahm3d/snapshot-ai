/**
 *
 * @returns
 * User enters the text
 * Sets the character limit
 * Defines number of points
 * Generate
 */

import { Card, CardContent } from "@/components/ui/card";
import { ListOrdered, Pencil, SlidersHorizontal, Sparkle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { icon: <Pencil />, text: "User enters the text" },
    { icon: <SlidersHorizontal />, text: "Sets the character limit" },
    { icon: <ListOrdered />, text: "Defines number of points" },
    { icon: <Sparkle />, text: "Generate" },
  ];

  return (
    <section className="max-w-5xl mx-auto px-8">
      <h3 className="text-center text-3xl font-bold pb-2">How it works?</h3>
      <div className=" gap-4 grid md:grid-cols-2 lg:grid-cols-4 py-4">
        {steps.map((step) => (
          <Card key={step.text} className="flex items-center">
            <CardContent className="px-2 py-8 flex items-center gap-2">
              <div className="text-primary">{step.icon}</div> {step.text}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
