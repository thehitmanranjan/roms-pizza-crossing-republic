"use client";

import { Button } from "@/components/ui/button";
import { Share2, Download, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function ShareExport() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "CompliancePass - Roms Pizza",
      text: "Verified business compliance details for Roms Pizza.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast({
        title: "Link Copied",
        description: "The business profile link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleExport = () => {
    window.print();
  };

  return (
    <div className="flex gap-2 w-full mt-6 print:hidden">
      <Button 
        variant="outline" 
        className="flex-1 flex items-center gap-2 border-primary text-primary hover:bg-primary/10 hover:text-primary"
        onClick={handleShare}
      >
        {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
        {copied ? "Copied" : "Share Profile"}
      </Button>
      <Button 
        variant="outline" 
        className="flex-1 flex items-center gap-2 border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary"
        onClick={handleExport}
      >
        <Download className="h-4 w-4" />
        Export to PDF
      </Button>
    </div>
  );
}