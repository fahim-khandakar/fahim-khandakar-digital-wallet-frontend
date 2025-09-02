import aboutPhoto from "@/assets/images/about.jpg";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="py-20 px-6 bg-background text-foreground">
      <div className="container mx-auto  space-y-16">
        {/* Hero / Intro */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold text-primary">
              About Fast Money
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fast Money is your trusted partner for instant, secure, and easy
              money transfers. Whether sending funds to family, paying bills, or
              topping up your wallet, we make it simple and safe — all in one
              app.
            </p>
            <Button size="lg" variant="default" className="rounded-full">
              Get Started
            </Button>
          </div>
          <div className="flex-1">
            <img
              src={aboutPhoto}
              alt="Fast Money"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Features / Highlights */}
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 bg-muted/30 rounded-2xl">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Instant Transfers
            </h3>
            <p className="text-muted-foreground">
              Send and receive money within seconds, anytime you want.
            </p>
          </div>
          <div className="p-6 bg-muted/30 rounded-2xl">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Secure & Reliable
            </h3>
            <p className="text-muted-foreground">
              Bank-grade security ensures your funds are always protected.
            </p>
          </div>
          <div className="p-6 bg-muted/30 rounded-2xl">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Anytime, Anywhere
            </h3>
            <p className="text-muted-foreground">
              Manage your money wherever you are, 24/7, on mobile or desktop.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-primary">
            Join Millions of Happy Users
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fast Money is trusted by thousands of users every day for sending
            money, paying bills, and more. Start today and experience seamless
            financial transactions.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full">
            Download App
          </Button>
        </div>
      </div>
    </section>
  );
}
