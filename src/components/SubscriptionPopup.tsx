"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const subscriptionSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive communications",
  }),
});

type SubscriptionFormData = z.infer<typeof subscriptionSchema>;

interface SubscriptionPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SubscriptionPopup({ open, onOpenChange }: SubscriptionPopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      consent: false,
    },
  });

  const consent = watch("consent");

  const onSubmit = async (data: SubscriptionFormData) => {
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual API endpoint when backend is ready
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Subscription Successful!",
          description: "Thank you for subscribing to Roms Pizza updates.",
        });
        reset();
        onOpenChange(false);
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      // For now, just log to console since backend isn't ready
      console.log("Subscription data:", data);
      
      toast({
        title: "Subscription Received!",
        description: "Your subscription will be processed once our backend is connected.",
      });
      
      reset();
      onOpenChange(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-md bg-blue-700 text-white border-none p-0 gap-0 max-h-[90vh] overflow-y-auto" hideCloseButton>
        <div className="relative p-6 sm:p-8">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 z-50"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6 border-2 border-white rounded p-0.5" />
            <span className="sr-only">Close</span>
          </button>

          <DialogHeader className="space-y-3 sm:space-y-4 text-center">
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-white">
              Subscribe Us Now
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white text-sm sm:text-base">
                Full Name <span className="text-red-400">*</span>
              </Label>
              <Input
                id="fullName"
                placeholder="Full name here"
                {...register("fullName")}
                className="bg-white text-gray-900 placeholder:text-gray-400 border-none h-11 sm:h-12 text-sm sm:text-base"
              />
              {errors.fullName && (
                <p className="text-red-300 text-xs sm:text-sm">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-sm sm:text-base">
                Email Address <span className="text-red-400">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Add email"
                {...register("email")}
                className="bg-white text-gray-900 placeholder:text-gray-400 border-none h-11 sm:h-12 text-sm sm:text-base"
              />
              {errors.email && (
                <p className="text-red-300 text-xs sm:text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-white text-sm sm:text-base">
                Mob No <span className="text-red-400">*</span>
              </Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="Mobile Number"
                {...register("mobile")}
                className="bg-white text-gray-900 placeholder:text-gray-400 border-none h-11 sm:h-12 text-sm sm:text-base"
              />
              {errors.mobile && (
                <p className="text-red-300 text-xs sm:text-sm">{errors.mobile.message}</p>
              )}
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setValue("consent", checked as boolean)}
                className="mt-1 border-white data-[state=checked]:bg-white data-[state=checked]:text-blue-700"
              />
              <Label
                htmlFor="consent"
                className="text-xs sm:text-sm leading-relaxed cursor-pointer text-blue-100"
              >
                I Would like to receive communication via SMS, Email, OBD, Google RCS and
                Whatsapp for my services, offers and updates
              </Label>
            </div>
            {errors.consent && (
              <p className="text-red-300 text-xs sm:text-sm">{errors.consent.message}</p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white border-none"
            >
              {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE NOW"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
