import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms and Conditions</h1>
            <p className="text-muted-foreground">
              Your website may use the Terms and Conditions given below.
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              The terms We / Us / Our/Company individually and collectively refer to UENGAGE SERVICES PRIVATE LIMITED and the terms 'Visitor' 'User' refer to the users.
            </p>

            <p>
              This page states the Terms and Conditions under which you (Visitor) may visit this website (Website). Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this site. The business, any of its business divisions and / or its subsidiaries, associate companies or subsidiaries to subsidiaries or such other investment companies (in India or abroad) reserve their respective rights to revise these Terms and Conditions at any time by updating this posting. You should visit this page periodically to re-appraise yourself of the Terms and Conditions, because they are binding on all users of this Website.
            </p>

            <ol className="space-y-3 list-decimal pl-6">
              <li>Products and offers are subject to availability.</li>
              <li>Available items will be served.</li>
              <li>Tomato ketchup charged on MRP.</li>
              <li>Carry bags are chargeable.</li>
              <li>Paper glass available for Rs 5/- for 2 glasses.</li>
              <li>Toppings cannot be removed or interchanged in classic category.</li>
              <li>No offers apply to classic category.</li>
              <li>Buy One Get One free offer - Valid on exotic and speciality categories, the pizzas with higher or equal value will be charged applicable on medium and large size only.</li>
              <li>Double burst add-on: Not valid in conjunction to any promotions or deals.</li>
              <li>Non combining of offers: offers cannot be combined with any other promotions or offers or discounts.</li>
              <li>Toppings limit: unless otherwise stated, all deals and offers are limited to a maximum of 3 toppings.</li>
              <li>Price changes: prices are subject to change without prior notice, all prices mentioned in latest menu will be applicable.</li>
              <li>Home delivery charges: applicable charges of home delivery are as follows: 0-2 kms (no charge), 2-5 kms (Rs 30/-), beyond 6 kms (Rs 50/-).</li>
              <li>Withdrawal of schemes/offers: La Pinoz Pizza reserves the right to withdraw any scheme or offer at any time.</li>
              <li>Customer details usage: LaPinoz Pizza reserves the right to use customer details for marketing and promotional purposes.</li>
            </ol>

            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Use of Content</h2>
              <p>
                All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing in this site, except as otherwise noted, are properties either owned, or used under licence, by the business and / or its associate entities who feature on this Website. The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited.
              </p>
              <p className="mt-4">
                You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective organisation's or entity's written permission.
              </p>
            </div>

            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Acceptable Website Use</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">(A) Security Rules</h3>
              <p>
                Visitors are prohibited from violating or attempting to violate the security of the Web site, including, without limitation, (1) accessing data not intended for such user or logging into a server or account which the user is not authorised to access, (2) attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorisation, (3) attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus or Trojan horse to the Website, overloading, flooding, mail bombing or crashing, or (4) sending unsolicited electronic mail, including promotions and/or advertising of products or services. Violations of system or network security may result in civil or criminal liability. The business and / or its associate entities will have the right to investigate occurrences that they suspect as involving such violations and will have the right to involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">(B) General Rules</h3>
              <p>
                Visitors may not use the Web Site in order to transmit, distribute, store or destroy material (a) that could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law or regulation, (b) in a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others or violate the privacy or publicity of other personal rights of others, or (c) that is libellous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful.
              </p>
            </div>

            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Indemnity</h2>
              <p>
                The User unilaterally agree to indemnify and hold harmless, without objection, the Company, its officers, directors, employees and agents from and against any claims, actions and/or demands and/or liabilities and/or losses and/or damages whatsoever arising from or resulting from their use of www.shouflo.com or their breach of the terms.
              </p>
            </div>

            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Liability</h2>
              <p>
                User agrees that neither Company nor its group companies, directors, officers or employee shall be liable for any direct or/and indirect or/and incidental or/and special or/and consequential or/and exemplary damages, resulting from the use or/and the inability to use the service or/and for cost of procurement of substitute goods or/and services or resulting from any goods or/and data or/and information or/and services purchased or/and obtained or/and messages received or/and transactions entered into through or/and from the service or/and resulting from unauthorized access to or/and alteration of user's transmissions or/and data or/and arising from any other matter relating to the service, including but not limited to, damages for loss of profits or/and use or/and data or other intangible, even if Company has been advised of the possibility of such damages.
              </p>
              <p className="mt-4">
                User further agrees that Company shall not be liable for any damages arising from interruption, suspension or termination of service, including but not limited to direct or/and indirect or/and incidental or/and special consequential or/and exemplary damages, whether such interruption or/and suspension or/and termination was justified or not, negligent or intentional, inadvertent or advertent.
              </p>
              <p className="mt-4">
                User agrees that Company shall not be responsible or liable to user, or anyone, for the statements or conduct of any third party of the service. In sum, in no event shall Company's total liability to the User for all damages or/and losses or/and causes of action exceed the amount paid by the User to Company, if any, that is related to the cause of action.
              </p>
            </div>

            <div className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Disclaimer of Consequential Damages</h2>
              <p>
                In no event shall Company or any parties, organizations or entities associated with the corporate brand name us or otherwise, mentioned at this Website be liable for any damages whatsoever (including, without limitations, incidental and consequential damages, lost profits, or damage to computer hardware or loss of data information or business interruption) resulting from the use or inability to use the Website and the Website material, whether based on warranty, contract, tort, or any other legal theory, and whether or not, such organization or entities were advised of the possibility of such damages.
              </p>
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
