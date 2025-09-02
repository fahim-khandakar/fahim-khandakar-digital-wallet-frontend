"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Globe, CreditCard } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Instant Transfers",
      description: "Send and receive money in just seconds, anytime you need.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure Payments",
      description: "Bank-grade encryption keeps your money safe and protected.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Anywhere Access",
      description: "Use Fast Money across the country, 24/7, without hassle.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Easy Bill Payments",
      description: "Pay utility bills, recharge, and more — all in one app.",
    },
  ];

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Choose Fast Money?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Fast Money brings you the fastest and most reliable way to send,
          receive, and manage money.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => (
            <Card key={idx} className="shadow-sm">
              <CardHeader className="flex items-center space-x-2">
                {item.icon}
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
