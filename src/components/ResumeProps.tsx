 interface Name {
    first: string;
    middleInitial: string;
    last: string;
  }
  
interface Address {
   city: string;
   state: string;
   zip: string;
}

export interface Role {
    company: string;
    location: Address;
    startMonth: number;
    startYear: number;
    endMonth?: number;
    endYear?: number;
    currentRole: boolean;
    title: string;
    summary: string;
    highlights: string[];
}

export interface ResumeMainProps   {
      name: Name;
      address: Address;
      phone: string;
      email: string;
      jobExperience?: Role[];
  }