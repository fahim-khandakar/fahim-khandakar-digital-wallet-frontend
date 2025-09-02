"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahim Uddin",
      role: "Small Business Owner",
      message:
        "Fast Money saves me time every day. Sending payments is instant and stress-free.",
    },
    {
      name: "Sarah Khan",
      role: "Freelancer",
      message:
        "I love how simple and secure Fast Money is. It’s my go-to for receiving client payments.",
    },
    {
      name: "David Lee",
      role: "Student",
      message:
        "Bill payments and recharges are so easy now. Fast Money has made life hassle-free.",
    },
  ];

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Trusted by thousands of people every day for instant, secure, and
          reliable payments.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="shadow-sm">
              <CardHeader className="flex flex-col items-center space-y-2">
                <Avatar>
                  <AvatarImage
                    src={`https://i.pravatar.cc/150?img=${idx + 1}`}
                  />
                  <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle>{t.name}</CardTitle>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center text-muted-foreground">
                  "{t.message}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
