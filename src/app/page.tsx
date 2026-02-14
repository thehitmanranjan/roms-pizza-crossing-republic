
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Utensils, 
  Pizza, 
  CheckCircle2,
  ChevronRight,
  Instagram,
  Facebook
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MobileNav } from "@/components/MobileNav";

export default function LandingPage() {
  const images = {
    hero: PlaceHolderImages.find(img => img.id === "pizza-hero"),
    veg: PlaceHolderImages.find(img => img.id === "menu-veg-pizza"),
    garlic: PlaceHolderImages.find(img => img.id === "menu-garlic-bread"),
    pasta: PlaceHolderImages.find(img => img.id === "menu-pasta"),
    gallery1: PlaceHolderImages.find(img => img.id === "gallery-1"),
    gallery2: PlaceHolderImages.find(img => img.id === "gallery-2"),
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <Image src="/logo.png" alt="Roms Pizza Logo" width={40} height={40} className="object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tight">Roms Pizza</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <Link href="/verify" className="text-muted-foreground hover:text-primary text-xs flex items-center gap-1 border border-border px-3 py-1.5 rounded-full transition-all">
              Verification <CheckCircle2 className="h-3 w-3" />
            </Link>
          </div>
          {/* <Button asChild>
            <a href="tel:9540557077">Order Now</a>
          </Button> */}
          <MobileNav />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4 fill-primary" /> Rated #1 in Crossing Republik
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Delicious pizzas <br />
              <span className="text-primary">made fresh</span> every day.
            </h1>
            <p className="text-xl text-muted-foreground max-w-[500px]">
              Fast delivery and easy takeaway. Experience the perfect blend of fresh toppings and soft, hand-tossed crust.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold gap-2">
                Order Delivery <ChevronRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold">
                View Menu
              </Button>
            </div> */}
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px]">
            {images.hero && (
              <Image 
                src={images.hero.imageUrl} 
                alt={images.hero.description}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="text-sm font-medium opacity-80">Our Signature</p>
                <p className="text-2xl font-bold">Classic Margherita with Extra Mozzarella</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-1 h-1 bg-primary rounded-full" />
            <h2 className="text-3xl font-bold">About Roms Pizza</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Roms Pizza is a local favourite pizza restaurant in Crossing Republik, Ghaziabad serving tasty, pocket-friendly pizzas and fast food. Known for great food presentation, generous portions, and excellent value for money, we deliver delicious pizzas straight to your doorstep or offer quick pickup.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Fresh Ingredients</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">30m</p>
              <p className="text-sm text-muted-foreground">Average Delivery</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Menu Items</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">4.5★</p>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Menu Highlights</h2>
              <p className="text-muted-foreground">Our most loved signature creations</p>
            </div>
            {/* <Button variant="ghost" className="hidden sm:flex items-center gap-2">
              Full Menu <ChevronRight className="w-4 h-4" />
            </Button> */}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-none shadow-lg group">
              <div className="relative h-64">
                {images.veg && (
                  <Image 
                    src={images.veg.imageUrl} 
                    alt={images.veg.description}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <CardContent className="p-6 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-xl">Classic Veg & Cheese</h3>
                  {/* <span className="text-primary font-bold">₹249</span> */}
                </div>
                <p className="text-sm text-muted-foreground">Loaded with bell peppers, onions, corn and premium mozzarella.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg group">
              <div className="relative h-64">
                {images.garlic && (
                  <Image 
                    src={images.garlic.imageUrl} 
                    alt={images.garlic.description}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <CardContent className="p-6 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-xl">Stuffed Garlic Bread</h3>
                  {/* <span className="text-primary font-bold">₹129</span> */}
                </div>
                <p className="text-sm text-muted-foreground">Baked fresh with garlic butter and creamy cheese stuffing.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg group">
              <div className="relative h-64">
                {images.pasta && (
                  <Image 
                    src={images.pasta.imageUrl} 
                    alt={images.pasta.description}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <CardContent className="p-6 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-xl">White Sauce Pasta</h3>
                  {/* <span className="text-primary font-bold">₹189</span> */}
                </div>
                <p className="text-sm text-muted-foreground">Penne pasta tossed in rich, creamy bechamel sauce with herbs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl">Great Presentation</h3>
            <p className="text-primary-foreground/70 text-sm">Every dish is prepared and packed with care to look as good as it tastes.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl">Worth the Money</h3>
            <p className="text-primary-foreground/70 text-sm">Generous portions and premium quality ingredients at pocket-friendly prices.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl">Quick Service</h3>
            <p className="text-primary-foreground/70 text-sm">Timely delivery and efficient takeout service for your hunger pangs.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl">Quality Toppings</h3>
            <p className="text-primary-foreground/70 text-sm">We only use the freshest vegetables and authentic italian cheeses.</p>
          </div>
        </div>
      </section>

      {/* Gallery & Reviews */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">What Our Customers Say</h2>
            <div className="space-y-6">
              {[
                { name: "Rahul S.", text: "Delicious food and timely delivery! Best pizza in Crossing Republik." },
                { name: "Priya M.", text: "The presentation is always amazing. Worth every penny." },
                { name: "Amit K.", text: "White sauce pasta is a must try. Creamy and flavorful." }
              ].map((review, i) => (
                <Card key={i} className="border-none bg-muted/30">
                  <CardContent className="p-6 space-y-2">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                    <p className="italic text-foreground">"{review.text}"</p>
                    <p className="text-sm font-bold text-muted-foreground">— {review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-lg">
              {images.gallery1 && (
                <Image 
                  src={images.gallery1.imageUrl} 
                  alt={images.gallery1.description}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="grid gap-4">
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg">
                {images.gallery2 && (
                  <Image 
                    src={images.gallery2.imageUrl} 
                    alt={images.gallery2.description}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              {/* <div className="bg-secondary rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white space-y-4">
                <Instagram className="w-10 h-10" />
                <p className="font-bold">Follow us for <br /> daily offers</p>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-secondary">@romspizza</Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-16 px-4">
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
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            </div>
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
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-40">Operating Hours</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p>Open Daily</p>
                  <p className="opacity-60">11:00 AM – 10:45 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-40">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#menu" className="hover:text-primary">Menu</a></li>
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><Link href="/verify" className="hover:text-primary">Verification Details</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40">
          <p>© 2024 Roms Pizza Crossing Republik. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
