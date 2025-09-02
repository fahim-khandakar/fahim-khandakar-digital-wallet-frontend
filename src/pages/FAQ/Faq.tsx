"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function FAQ() {
  const faqs = {
    general: [
      {
        q: "Is Fast Money safe to use?",
        a: "Yes! We use bank-grade security and encryption to ensure your transactions are always protected.",
      },
      {
        q: "Can I use Fast Money without a bank account?",
        a: "Yes, you can top up and withdraw through multiple methods including cards and agents.",
      },
      {
        q: "How fast are transactions?",
        a: "All transfers are processed instantly — money reaches within seconds.",
      },
    ],
    payments: [
      {
        q: "Can I pay utility bills with Fast Money?",
        a: "Absolutely! You can pay electricity, water, gas, and internet bills directly from the app.",
      },
      {
        q: "Do you charge fees for transactions?",
        a: "Most transactions are free. Small fees may apply for certain services like withdrawals.",
      },
    ],
    account: [
      {
        q: "How do I create a Fast Money account?",
        a: "Simply download the app, sign up with your phone number, and verify your identity.",
      },
      {
        q: "Can I change my registered phone number?",
        a: "Yes, go to Settings > Account > Change Number to update your details.",
      },
    ],
  };

  const [search, setSearch] = useState("");

  const filterFaqs = (list: { q: string; a: string }[]) =>
    list.filter(
      (item) =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-muted-foreground mb-10">
          Have questions? We’ve got answers. Search or browse by category below.
        </p>

        {/* Search */}
        <div className="mb-10">
          <Input
            placeholder="Search for a question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          {Object.entries(faqs).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <Accordion type="single" collapsible className="w-full">
                {filterFaqs(items).map((faq, idx) => (
                  <AccordionItem key={idx} value={`${category}-${idx}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
                {filterFaqs(items).length === 0 && (
                  <p className="text-center text-muted-foreground py-6">
                    No results found.
                  </p>
                )}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
