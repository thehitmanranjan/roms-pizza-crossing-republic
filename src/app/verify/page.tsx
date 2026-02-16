
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  MapPin, 
  Phone, 
  FileText, 
  FileCheck, 
  Info,
  ExternalLink,
  ChevronRight,
  Pizza,
  CheckCircle2,
  Home
} from "lucide-react";
import { VerificationBadge } from "@/components/VerificationBadge";
import { ShareExport } from "@/components/ShareExport";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";

const BUSINESS_DATA = {
  name: "Roms Pizza",
  tagline: "Happiness is a slice of Pizza",
  address: "LG 35, Orbit Plaza, Crossing Republik, Ghaziabad, UP",
  phoneNumber: "9540557077",
  gstNumber: "09AAXFG3971F1ZT",
  panNumber: "AAXFG3971F",
  fssaiRegistrationNumber: "22721694000412",
  typeOfBusiness: "Food Vending Establishment"
};

export default function VerifyPage() {
  const brandImage = PlaceHolderImages.find(img => img.id === "pizza-brand");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <Image src="/logo.png" alt="Roms Pizza Logo" width={40} height={40} className="object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tight">Roms Pizza</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <CheckCircle2 className="h-4 w-4" />
              <span className="hidden sm:inline">Verification Details</span>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Home</span>
              </Link>
            </Button>
          </div>
          <MobileNav />
        </div>
      </nav>

      <main className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto space-y-6">
          {/* Header Branding */}
          <div className="flex flex-col items-center text-center space-y-2 mb-8 print:mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center p-2 mb-2">
              <Image 
                src="/logo.png" 
                alt="Roms Pizza Logo" 
                width={64} 
                height={64} 
                className="rounded-lg object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">CompliancePass</h1>
            <p className="text-muted-foreground text-sm font-medium">Digital Business Verification</p>
          </div>

        {/* Business Profile Card */}
        <Card className="shadow-lg border-none overflow-hidden bg-card">
          <CardHeader className="bg-primary text-primary-foreground space-y-1 pb-8">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold font-headline">{BUSINESS_DATA.name}</CardTitle>
                <CardDescription className="text-primary-foreground/90 italic mt-1">
                  “{BUSINESS_DATA.tagline}”
                </CardDescription>
              </div>
              <div className="print:hidden">
                <VerificationBadge business={BUSINESS_DATA} />
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-6 space-y-6">
            {/* Detailed Info Section */}
            <section className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Info className="h-3 w-3" /> Business Information
              </h3>
              
              <div className="grid gap-4">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Location</p>
                    <p className="text-sm font-medium text-foreground leading-snug">{BUSINESS_DATA.address}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Contact Number</p>
                    <p className="text-sm font-medium text-foreground">
                      <a href={`tel:${BUSINESS_DATA.phoneNumber}`} className="hover:text-primary transition-colors">
                        {BUSINESS_DATA.phoneNumber}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Building2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Business Category</p>
                    <p className="text-sm font-medium text-foreground">{BUSINESS_DATA.typeOfBusiness}</p>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="opacity-50" />

            {/* Statutory Details */}
            <section className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <FileCheck className="h-3 w-3" /> Statutory Identifiers
              </h3>
              
              <div className="bg-muted/30 rounded-xl p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase">GST Number</p>
                    <code className="text-sm font-bold font-code text-foreground">{BUSINESS_DATA.gstNumber}</code>
                  </div>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase">PAN Number</p>
                    <code className="text-sm font-bold font-code text-foreground">{BUSINESS_DATA.panNumber}</code>
                  </div>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase">FSSAI Reg. Number</p>
                    <code className="text-sm font-bold font-code text-foreground">{BUSINESS_DATA.fssaiRegistrationNumber}</code>
                  </div>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </section>

            <Separator className="opacity-50" />

            {/* Document Section */}
            <section className="space-y-4 pb-2 print:hidden">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Document Repository</h3>
              
              <div className="grid gap-3">
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full justify-between h-auto py-3 px-4 bg-white hover:bg-orange-50 hover:text-foreground group border-border"
                >
                  <a href="/documents/FSSAI Licence .pdf" download="FSSAI-Licence-Roms-Pizza.pdf" target="_blank">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <FileText className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-semibold">FSSAI Licence (PDF)</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all" />
                  </a>
                </Button>

                <Button 
                  asChild
                  variant="outline" 
                  className="w-full justify-between h-auto py-3 px-4 bg-white hover:bg-blue-50 hover:text-foreground group border-border"
                >
                  <a href="/documents/GST CErtificate G8.pdf" download="GST-Certificate-Roms-Pizza.pdf" target="_blank">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <FileText className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-semibold">GST Certificate (PDF)</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all" />
                  </a>
                </Button>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* Share/Export Footer */}
        <ShareExport />

        {/* Verification Support Footer */}
        <div className="text-center pt-8 pb-4 print:pt-4">
          <p className="text-xs text-muted-foreground">
            This digital profile is intended for onboarding verification on platforms like Zomato and Swiggy.
          </p>
        </div>
      </div>
    </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded overflow-hidden flex items-center justify-center">
                <Image src="/logo.png" alt="Roms Pizza Logo" width={32} height={32} className="object-cover" />
              </div>
              <span className="font-bold text-xl">Roms Pizza</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Serving happiness by the slice since 2018. Quality food, quick service, and affordable prices.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-40">Locations</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <p>LGF-35, Lower Ground, Orbit Plaza, Crossing Republik, Ghaziabad, UP 201016</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:9540557077">+91 9540557077</a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-40">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/#menu" className="hover:text-primary">Menu</Link></li>
              <li><Link href="/#about" className="hover:text-primary">About</Link></li>
              <li><Link href="/verify" className="hover:text-primary">Verification Details</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-40">Compliance</h4>
            <p className="text-sm text-background/60">
              All statutory registrations verified and up to date. View complete compliance details on this page.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40">
          <p>© 2024 Roms Pizza Crossing Republik. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
