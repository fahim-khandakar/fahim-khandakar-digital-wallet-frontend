"use client";

export default function StatsSection() {
  const stats = [
    { number: "2M+", label: "Active Users" },
    { number: "500M+", label: "Transactions Completed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-16 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 text-center md:grid-cols-4">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">{s.number}</h3>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
