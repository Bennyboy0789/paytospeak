/**
 * Coaching clients in their own words. Empty until Kevin sends named, consented stories:
 * the section renders nothing while this is empty.
 * TODO(kc): 3 to 5 named clients, each with one specific result (first paid booking, fee
 * raised, TEDx accepted) and their OK to use name and photo. Also sign-off on the Ali
 * Ingersoll video from kevincsnyder.com/coaching. Never write or paraphrase one ourselves.
 */
export type Testimonial = {
  quote: string;
  name: string;
  /** e.g. "Keynote speaker, Chicago". */
  role?: string;
  /** The specific outcome, shown as a short line above the quote. */
  result?: string;
  youtubeId?: string;
};

export const testimonials: Testimonial[] = [];
