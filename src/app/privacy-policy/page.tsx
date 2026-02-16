import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Privacy Policy</h1>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              The terms We / Us / Our/Company individually and collectively refer to La Pinoz Pizza and the terms You /You/ / Yourself refer to the users.
            </p>

            <p>
              This Privacy Policy is an electronic contract formed under the Information Technology Act, 2000 and the rules made thereunder and the amended provisions pertaining to electronic documents / records in various statutes as amended by the Information Technology Act, 2000. This Privacy Policy does not require any physical, electronic or digital signature.
            </p>

            <p>
              This Privacy Policy is a legally binding document between you and La Pinoz Pizza, (both terms defined below). The terms of this Privacy Policy will be effective upon your acceptance of the same (directly or indirectly in electronic form, by clicking on the I accept tab or by use of the website or by other means) and will govern the relationship between you and La Pinoz Pizza for your use of the website Website (defined below).
            </p>

            <p>
              This document is published and shall be construed in accordance with the provisions of the Information Technology (reasonable security practices and procedures and sensitive personal data or information) rules, 2011 under Information Technology Act, 2000, that require publishing of the Privacy Policy for collection, use, storage and transfer of sensitive personal data or information.
            </p>

            <p>
              Please read this Privacy Policy carefully by using the Website, you indicate that you understand, agree and consent to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use this Website.
            </p>

            <p>
              By providing us your information or by making use of the facilities provided by the Website. You hereby consent to the collection, storage, processing and transfer of any or all of Your Personal Information and Non-Personal Information by us as specified under this Privacy Policy. You further agree that such collection, use, storage and transfer of Your Information shall not cause any loss or wrongful gain to you or any other person.
            </p>

            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-4">User Information</h2>
              <p>
                To avail certain services on our Websites, users are required to provide certain information for the registration process namely: - a) your name, b) email address, c) sex, d) age, e) PIN code, f) credit card or debit card details g) medical records and history h) sexual orientation, i) biometric information, j) password etc., and / or your occupation, interests, and the like. The Information as supplied by the users enables us to improve our sites and provide you the most user-friendly experience.
              </p>

              <p className="mt-4">
                All required information is service dependent and we may use the above said user information to, maintain, protect, and improve its services (including advertising services) and for developing new services.
              </p>

              <p className="mt-4">
                Such information will not be considered as sensitive if it is freely available and accessible in the public domain or is furnished under the Right to Information Act, 2005 or any other law for the time being in force.
              </p>
            </div>

            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p>
                To improve the responsiveness of the sites for our users, we may use cookies, or similar electronic tools to collect information to assign each visitor a unique, random number as a User Identification (User ID) to understand the user's individual interests using the Identified Computer. Unless you voluntarily identify yourself (through registration, for example), we will have no way of knowing who you are, even if we assign a cookie to your computer. The only personal information a cookie can contain is information you supply (an example of this is when you ask for our Personalised Horoscope). A cookie cannot read data off your hard drive. Our advertisers may also assign their own cookies to your browser (if you click on their ads), a process that we do not control.
              </p>

              <p className="mt-4">
                Our web servers automatically collect limited information about your computer's connection to the Internet, including your IP address, when you visit our site. (Your IP address is a number that lets computers attached to the Internet know where to send you data -- such as the web pages you view.) Your IP address does not identify you personally. We use this information to deliver our web pages to you upon request, to tailor our site to the interests of our users, to measure traffic within our site and let advertisers know the geographic locations from where our visitors come.
              </p>
            </div>

            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Links to the Other Sites</h2>
              <p>
                Our policy discloses the privacy practices for our own web site only. Our site provides links to other websites also that are beyond our control. We shall in no way be responsible in way for your use of such sites.5.
              </p>
            </div>

            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p>
                We shares the sensitive personal information to any third party without obtaining the prior consent of the user in the following limited circumstances:
              </p>

              <p className="mt-4">
                (a) When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offences. These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing these Terms; for complying with the applicable laws and regulations.
              </p>

              <p className="mt-4">
                (b) We proposes to share such information within its group companies and officers and employees of such group companies for the purpose of processing personal information on its behalf. We also ensure that these recipients of such information agree to process such information based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures.
              </p>
            </div>

            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Information Security</h2>
              <p>
                We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store personal data.
              </p>

              <p className="mt-4">
                All information gathered on our Website is securely stored within our controlled database. The database is stored on servers secured behind a firewall; access to the servers is password-protected and is strictly limited. However, as effective as our security measures are, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. And, of course, any information you include in a posting to the discussion areas is available to anyone with Internet access.
              </p>

              <p className="mt-4">
                However the internet is an ever evolving medium. We may change our Privacy Policy from time to time to incorporate necessary future changes. Of course, our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be.
              </p>
            </div>

            <div className="pt-6 border-t pt-8">
              <h2 className="text-2xl font-bold mb-4">Grievance Redressal</h2>
              <p>
                Redressal Mechanism: Any complaints, abuse or concerns with regards to content and or comment or breach of these terms shall be immediately informed to the designated Grievance Officer as mentioned below via in writing or through email signed with the electronic signature to Grievance Officer:
              </p>

              <div className="mt-6 space-y-2 bg-muted/30 p-6 rounded-lg">
                <p className="font-semibold">Website: lapinozpizza.in</p>
                <p className="font-semibold">Brand Name: La Pinoz Pizza</p>
                <p>Grievance Officer Emailid: copenhagenhospitalityandretail@yahoo.com</p>
                <p>Contact No.: 8238236444</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center text-xs opacity-40">
          <p>© 2024 Roms Pizza Crossing Republik. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
