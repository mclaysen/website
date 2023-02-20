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
  startDate: Date;
  endDate?: Date;
  currentRole: boolean;
  title: string;
  summary: string;
  highlights: string[];
}

export interface ResumeMainProps {
  name: Name;
  address: Address;
  phone: string;
  email: string;
  jobExperience?: Role[];
  education?: Education[];
  otherExperiences?: OtherExperience[];
  skills?: RelevantSkills[];
}

export interface OtherExperience {
  category: string;
  type: ExperienceInformation[];
}

export interface ExperienceInformation {
  title: string;
  subTitle?: string;
  startDate: Date;
  endDate?: Date;
  highlights: string[];
}

export interface Education {
  school: string;
  location: Address;
  degree: string;
  dateObtained: Date;
}

export interface RelevantSkills {
  category: string;
  examples: string[];
}
