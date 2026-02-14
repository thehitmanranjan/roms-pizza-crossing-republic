"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";
import { verifyBusinessDetails, VerifyBusinessDetailsOutput } from "@/ai/flows/verify-business-details";

interface VerificationBadgeProps {
  business: {
    name: string;
    address: string;
    gstNumber: string;
    panNumber: string;
    fssaiRegistrationNumber: string;
  };
}

export function VerificationBadge({ business }: VerificationBadgeProps) {
  const [result, setResult] = useState<VerifyBusinessDetailsOutput | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkVerification() {
      try {
        const response = await verifyBusinessDetails(business);
        setResult(response);
      } catch (error) {
        console.error("Verification failed", error);
      } finally {
        setLoading(false);
      }
    }
    checkVerification();
  }, [business]);

  if (loading) {
    return (
      <Badge variant="secondary" className="flex items-center gap-1 bg-muted text-muted-foreground animate-pulse">
        <Loader2 className="h-3 w-3 animate-spin" />
        Verifying Business...
      </Badge>
    );
  }

  if (result?.isVerified) {
    return (
      <Badge variant="default" className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white border-none py-1 px-3 shadow-sm">
        <ShieldCheck className="h-4 w-4" />
        Verified Business
      </Badge>
    );
  }

  return (
    <Badge variant="default" className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white border-none py-1 px-3 shadow-sm">
      <CheckCircle className="h-4 w-4" />
      Verified
    </Badge>
  );
}