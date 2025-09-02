"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Wallet, Send } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Download & Sign Up",
      description: "Create your Fast Money account in just a few minutes.",
    },
    {
      icon: <Wallet className="h-6 w-6 text-primary" />,
      title: "Add Funds",
      description: "Easily link your bank or card and top up your balance.",
    },
    {
      icon: <Send className="h-6 w-6 text-primary" />,
      title: "Send & Pay",
      description: "Transfer money or pay bills instantly, anytime, anywhere.",
    },
  ];

  return (
    <section className="py-16 bg-muted/30 text-foreground mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          How Fast Money Works
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Getting started with Fast Money is as easy as 1-2-3.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <Card key={idx} className="shadow-sm text-center">
              <CardHeader className="flex flex-col items-center space-y-2">
                {step.icon}
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
