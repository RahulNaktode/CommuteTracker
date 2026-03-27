
import { MapPin, Clock, Home } from "lucide-react";
import team from '../config/team';
import Footer from "../components/Footer";

const steps = [
  { icon: MapPin, title: "Enter Your Workplace", desc: "Type your office address and we'll use it as the center of your search." },
  { icon: Clock, title: "Set Max Commute", desc: "Choose how long you're willing to spend commuting — from 5 to 60 minutes." },
  { icon: Home, title: "Browse Results", desc: "See only the properties that keep your commute short, plotted on an interactive map." },
];

const About = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About <span className="text-secondary">CommuteTracker</span></h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">We believe where you live should be defined by how you live — starting with your daily commute.</p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16 border border-gray-300 shadow-sm rounded-xl">
      <h2 className="font-display text-3xl font-bold text-center mb-4">Our Mission</h2>
      <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg leading-relaxed">
        Traditional property searches focus on price and square footage, but the biggest factor in day-to-day happiness is often the commute. CommuteNest flips the script — we help you find homes based on travel time to your workplace, so you can reclaim your most precious resource: time.
      </p>
    </section>

    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-card rounded-xl p-8 text-center shadow-sm border border-border">
              <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <s.icon className="h-7 w-7 text-secondary" />
              </div>
              <div className="text-secondary font-bold text-sm mb-2">Step {i + 1}</div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <h2 className="font-display text-3xl font-bold text-center mb-12">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {team.map((t) => (
          <div key={t.name} className="text-center">
            <img src={t.img} alt={t.name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-secondary/30" loading="lazy" />
            <h3 className="font-display font-semibold text-lg">{t.name}</h3>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div >
);

export default About;
