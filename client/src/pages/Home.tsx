/**
 * Neo-Brutalism meets Tech Minimalism Design Philosophy
 * - Deep slate backgrounds with electric cyan accents
 * - Bold typography with intentional weight contrasts
 * - Diagonal section breaks and angled content blocks
 * - Technical grid overlays with subtle animations
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Award, Code2, Rocket, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-mono text-primary text-lg font-bold">KVF</div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#patents" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Patents</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Diagonal Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/hero-tech-visual.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Diagonal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-transparent" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="font-mono text-primary text-sm tracking-wider">TECHNOLOGY LEADER</div>
                <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                  Kevin D.<br />
                  Van Flandern
                </h1>
                <div className="h-1 w-24 bg-primary" />
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                25+ years architecting complex systems at massive scale. 6 U.S. patents. 
                Expert in Agile at Scale, AI/LLM, and blockchain technologies.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-4 py-2 text-sm border-primary text-primary">
                  <Award className="w-4 h-4 mr-2" />
                  6 Patents
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm border-primary text-primary">
                  <Code2 className="w-4 h-4 mr-2" />
                  Microsoft Alumni
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm border-primary text-primary">
                  <Rocket className="w-4 h-4 mr-2" />
                  AI & Blockchain
                </Badge>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/kevin-van-flandern-1949aa4" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <img 
                  src="/images/hero-tech-visual.png" 
                  alt="Technical visualization"
                  className="relative z-10 w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url(/images/experience-pattern.png)',
          backgroundSize: 'cover',
        }} />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8">
              <span className="text-primary">About</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A seasoned and results-driven technology leader with over 25 years of experience architecting, 
                delivering, and managing complex software and hardware products at massive scale. A holder of 
                <span className="text-foreground font-semibold"> 6 U.S. patents</span> for innovations in software 
                performance and computer hardware.
              </p>
              
              <p>
                A proven expert in implementing Agile at Scale frameworks to bring predictability and cross-team 
                communication to 40,000-person organizations. A forward-thinking technologist with hands-on experience 
                in cutting-edge AI/LLM and blockchain technologies.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Leadership</h3>
                  <p className="text-sm text-muted-foreground">
                    Led teams and organizations from 10 to 40,000 people across Microsoft, startups, and consulting.
                  </p>
                </Card>
                
                <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Pioneered performance testing, self-healing data centers, and contributed to Azure's precursor.
                  </p>
                </Card>
                
                <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
                  <Rocket className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Modern Tech</h3>
                  <p className="text-sm text-muted-foreground">
                    Hands-on with AI/LLMs, blockchain, tokenomics, and cutting-edge development practices.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Diagonal Layout */}
      <section id="experience" className="py-24 relative overflow-hidden">
        {/* Diagonal Background Split */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-secondary" style={{
            clipPath: 'polygon(0 0, 100% 8%, 100% 100%, 0 100%)',
          }} />
        </div>
        
        <div className="container relative z-10">
          <h2 className="text-5xl font-black mb-16">
            <span className="text-primary">Experience</span>
          </h2>
          
          <div className="space-y-12 max-w-5xl">
            {/* Current Roles */}
            <ExperienceCard
              title="Chief Executive Officer"
              company="VF Associates, LLC"
              period="Present"
              description="Boutique consulting firm providing executive-level program management and technology leadership to VC/PE-backed companies. Led IT transformation for Matrix Medical, restructuring 1,000-person organization to under 100 in 18 months."
              tags={["Executive Leadership", "Business Transformation", "DevOps"]}
            />
            
            <ExperienceCard
              title="Technical Advisor"
              company="Convergence Technology Solutions (CTS)"
              period="Present"
              description="Guide development of ARIA, a custom AI/LLM for VC/PE due diligence. Leverage hands-on experience with ChatGPT, Grok, Claude, and Manus to accelerate workflows."
              tags={["AI/LLM", "Technical Advisory", "Fintech"]}
            />
            
            <ExperienceCard
              title="Community Developer"
              company="Gorbogana Blockchain"
              period="Present"
              description="Architected white paper and SDK for sustainable gaming economy. Launched utility token that became second-best performing on chain for two months. Set up RPC servers and contributed to bridging solutions."
              tags={["Blockchain", "Tokenomics", "Smart Contracts"]}
            />
            
            {/* Microsoft Azure */}
            <ExperienceCard
              title="Principal Program Manager"
              company="Microsoft (Azure)"
              period="2018 - 2020"
              description="Standardized program management across 40,000-person Azure organization. Architected customized Agility at Scale framework with unified work tracking, reporting, and roadmap planning."
              tags={["Agile at Scale", "Azure DevOps", "Program Management"]}
              highlight
            />
            
            {/* Roundit */}
            <ExperienceCard
              title="Co-Founder & CTO"
              company="Roundit"
              period="2016 - 2018"
              description="Co-founded fintech startup for charitable micro-donations. Led end-to-end product development including mobile apps (iOS/Android), desktop app, and backend services. Integrated Plaid and Stripe APIs."
              tags={["Fintech", "CTO", "Full-Stack"]}
            />
            
            {/* Microsoft IT */}
            <ExperienceCard
              title="Principal Lead Program Manager"
              company="Microsoft (IT)"
              period="2012 - 2016"
              description="Led team of 10 PMs driving Agile transformation for 150-person engineering org. Managed cross-company rewards system. Led emergency deployment to Shanghai to rescue failing financial system."
              tags={["Agile Transformation", "Crisis Management", "Leadership"]}
            />
            
            {/* Microsoft Office */}
            <ExperienceCard
              title="Software Development Engineer"
              company="Microsoft (Office Shared Features)"
              period="1996 - 2000"
              description="Co-invented revolutionary performance testing harness for entire Office suite (U.S. Patent 6,754,612). Engineered novel solution to inject performance markers into post-compiled code. Built self-healing test environment with 100+ machines."
              tags={["Performance Engineering", "Patents", "Innovation"]}
              highlight
            />
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section id="patents" className="py-24 relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/images/patent-background.png)',
            backgroundSize: 'cover',
          }}
        />
        
        <div className="container relative z-10">
          <h2 className="text-5xl font-black mb-16">
            <span className="text-primary">Patents &</span> Innovation
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            <PatentCard
              number="6,754,612"
              title="Performance Markers to Measure Benchmark Timing"
              date="June 22, 2004"
            />
            <PatentCard
              number="D446,522"
              title="Outer Surface of a Button for a Computer Input Device"
              date="August 14, 2001"
            />
            <PatentCard
              number="D446,211"
              title="Computer Input Device"
              date="August 7, 2001"
            />
            <PatentCard
              number="8,204,004"
              title="Method and System for Resolving Issues with Computer-Based Product"
              date="2004"
            />
            <PatentCard
              number="D446,521"
              title="Moveable Control Device"
              date="February 29, 2000"
            />
            <PatentCard
              title="Control Device with Enhanced Control Aspects"
              date="February 29, 2000"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-black">
              Let's <span className="text-primary">Connect</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Currently seeking Technical Program Manager, Senior Program Manager, or executive leadership roles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Mail className="w-4 h-4 mr-2" />
                KevinVF@hotmail.com
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/kevin-van-flandern-1949aa4" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-sm text-muted-foreground">
              © 2026 Kevin D. Van Flandern
            </div>
            <div className="text-sm text-muted-foreground">
              Renton, WA
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Experience Card Component
function ExperienceCard({ 
  title, 
  company, 
  period, 
  description, 
  tags,
  highlight = false 
}: { 
  title: string; 
  company: string; 
  period: string; 
  description: string; 
  tags: string[];
  highlight?: boolean;
}) {
  return (
    <Card className={`p-8 bg-card border-border hover:border-primary transition-all duration-300 ${highlight ? 'border-primary/50' : ''}`}>
      <div className="space-y-4">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="text-lg text-primary font-semibold">{company}</div>
          </div>
          <div className="font-mono text-sm text-muted-foreground whitespace-nowrap">{period}</div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

// Patent Card Component
function PatentCard({ 
  number, 
  title, 
  date 
}: { 
  number?: string; 
  title: string; 
  date: string; 
}) {
  return (
    <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <div className="space-y-3">
        {number && (
          <div className="font-mono text-2xl font-bold text-primary">
            US {number}
          </div>
        )}
        <h3 className="text-sm font-semibold leading-tight min-h-[3rem]">{title}</h3>
        <div className="font-mono text-xs text-muted-foreground">{date}</div>
      </div>
    </Card>
  );
}
