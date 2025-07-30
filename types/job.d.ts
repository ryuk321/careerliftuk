export interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
  company: string;
  salary: string;
postedDate: string;
type: "full-time" | "part-time" | "contract" | "temporary";
requirements: string[];
responsibilities: string[];
benefits: string[];
applyLink: string;
companyLogo?: string;
remote?: boolean
}