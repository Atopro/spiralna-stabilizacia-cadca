import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Exercise {
  title: string;
  description: string;
  imageUrl: string;
  benefits: string[];
}

export interface Symptom {
  id: string;
  text: string;
}

export interface Treatment {
  title: string;
  description: string;
}

export interface Diagnosis {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  symptoms: Symptom[];
  treatments: Treatment[];
  image?: string;
}