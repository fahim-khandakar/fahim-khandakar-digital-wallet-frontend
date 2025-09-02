"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Globe, CreditCard } from "lucide-react";

export default function Feature() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Instant Money Transfer",
      description:
        "Send and receive money instantly across the country, anytime.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure & Trusted",
      description:
        "Bank-grade security to ensure your transactions are always safe.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Pay Bills & Recharge",
      description:
        "Easily pay utility bills, mobile recharges, and other services.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Multi-Payment Options",
      description:
        "Use bank cards, wallets, or cash-in agents to fund your account.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "24/7 Access",
      description:
        "Access your account anytime, anywhere from mobile or desktop.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Customer Support",
      description:
        "Our support team is always ready to help you with any queries.",
    },
  ];

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4  space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            Features of Fast Money
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how Fast Money makes sending, receiving, and managing money
            simple, secure, and fast.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="flex items-center space-x-3">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
