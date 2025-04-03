type FaqId = 'faq1' | 'faq2' | 'faq3' | 'faq4' | 'faq5' | 'faq6' | 'faq7' | 'faq8' | 'faq9' | 'faq10';

export interface FAQ {
  id: FaqId;
  title: string;
  description: string;
}