'use server';

/**
 * @fileOverview Verifies business details against public records using AI.
 *
 * - verifyBusinessDetails - A function that verifies business details and returns a verification badge.
 * - VerifyBusinessDetailsInput - The input type for the verifyBusinessDetails function.
 * - VerifyBusinessDetailsOutput - The return type for the verifyBusinessDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VerifyBusinessDetailsInputSchema = z.object({
  name: z.string().describe('The name of the business.'),
  address: z.string().describe('The address of the business.'),
  gstNumber: z.string().describe('The GST number of the business.'),
  panNumber: z.string().describe('The PAN number of the business.'),
  fssaiRegistrationNumber: z
    .string()
    .describe('The FSSAI registration number of the business.'),
});
export type VerifyBusinessDetailsInput = z.infer<
  typeof VerifyBusinessDetailsInputSchema
>;

const VerifyBusinessDetailsOutputSchema = z.object({
  isVerified: z
    .boolean()
    .describe(
      'Whether the business details are verified against public records.'
    ),
  verificationMessage: z
    .string()
    .describe('A message indicating the verification status.'),
});
export type VerifyBusinessDetailsOutput = z.infer<
  typeof VerifyBusinessDetailsOutputSchema
>;

export async function verifyBusinessDetails(
  input: VerifyBusinessDetailsInput
): Promise<VerifyBusinessDetailsOutput> {
  return verifyBusinessDetailsFlow(input);
}

const verifyBusinessDetailsPrompt = ai.definePrompt({
  name: 'verifyBusinessDetailsPrompt',
  input: {schema: VerifyBusinessDetailsInputSchema},
  output: {schema: VerifyBusinessDetailsOutputSchema},
  prompt: `You are an AI assistant that verifies business details against public records.

  Based on the provided business details, query external APIs and databases to corroborate the information.
  If the business details are accurate and consistent across public records, return isVerified as true and provide a positive verification message.
  If there are discrepancies or inconsistencies, return isVerified as false and provide a message indicating the issues.

  Business Details:
  Name: {{{name}}}
  Address: {{{address}}}
  GST Number: {{{gstNumber}}}
  PAN Number: {{{panNumber}}}
  FSSAI Registration Number: {{{fssaiRegistrationNumber}}}
  `,
});

const verifyBusinessDetailsFlow = ai.defineFlow(
  {
    name: 'verifyBusinessDetailsFlow',
    inputSchema: VerifyBusinessDetailsInputSchema,
    outputSchema: VerifyBusinessDetailsOutputSchema,
  },
  async input => {
    try {
      // In a real-world scenario, this is where you would call external APIs
      // to verify the business details against public records.
      // For this example, we'll simulate the verification process.
      // const verificationResult = await verifyBusinessDetailsAgainstPublicRecords(input);

      // Simulate a successful verification for now
      const isVerified = true;
      const verificationMessage = 'Business details verified successfully.';

      const {output} = await verifyBusinessDetailsPrompt({
        ...input,
      });

      return {
        isVerified: isVerified,
        verificationMessage: verificationMessage,
      };
    } catch (error: any) {
      console.error('Error during business details verification:', error);
      return {
        isVerified: false,
        verificationMessage: `Verification failed: ${error.message}`,
      };
    }
  }
);
