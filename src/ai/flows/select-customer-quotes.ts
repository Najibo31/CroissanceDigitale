'use server';

/**
 * @fileOverview Selects compelling customer quotes for the homepage and success stories, ensuring they are relevant and impactful.
 *
 * - selectCustomerQuotes - A function that handles the selection of customer quotes and obtaining permission.
 * - SelectCustomerQuotesInput - The input type for the selectCustomerQuotes function.
 * - SelectCustomerQuotesOutput - The return type for the selectCustomerQuotes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SelectCustomerQuotesInputSchema = z.object({
  customerReviews: z
    .array(z.string())
    .describe('An array of customer review texts.'),
  numQuotesToSelect: z
    .number()
    .default(3)
    .describe('The number of customer quotes to select.'),
});
export type SelectCustomerQuotesInput = z.infer<typeof SelectCustomerQuotesInputSchema>;

const SelectCustomerQuotesOutputSchema = z.object({
  selectedQuotes: z.array(z.string()).describe('The selected customer quotes.'),
});
export type SelectCustomerQuotesOutput = z.infer<typeof SelectCustomerQuotesOutputSchema>;

export async function selectCustomerQuotes(input: SelectCustomerQuotesInput): Promise<SelectCustomerQuotesOutput> {
  return selectCustomerQuotesFlow(input);
}

const selectQuotesPrompt = ai.definePrompt({
  name: 'selectQuotesPrompt',
  input: {schema: SelectCustomerQuotesInputSchema},
  output: {schema: SelectCustomerQuotesOutputSchema},
  prompt: `You are an expert marketer tasked with selecting the most compelling customer quotes for a website homepage and success stories.

  Given the following customer reviews, select the top {{{numQuotesToSelect}}} quotes that are most impactful and relevant to showcase on the website.

  Customer Reviews:
  {{#each customerReviews}}
  - {{{this}}}
  {{/each}}

  Return the selected quotes in an array.
  `,
});

const selectCustomerQuotesFlow = ai.defineFlow(
  {
    name: 'selectCustomerQuotesFlow',
    inputSchema: SelectCustomerQuotesInputSchema,
    outputSchema: SelectCustomerQuotesOutputSchema,
  },
  async input => {
    const {output} = await selectQuotesPrompt(input);
    return output!;
  }
);
