export type SkillLevel = 'Proficient' | 'Familiar' | 'Learning' | 'Basic';

export interface SkillItem {
  name: string;
  level?: SkillLevel;
  highlight?: boolean;
  notes?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectTechnicalHighlight {
  title: string;
  detail: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  type: string; // e.g. "Individual project"
  role: string; // e.g. "Backend Developer"
  period: string; // e.g. "Oct 2026 - Present"
  featured: boolean;
  problemSolved: string;
  architecturePattern: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  technicalHighlights: ProjectTechnicalHighlight[];
  githubUrl: string;
  liveDemoUrl?: string;
  swaggerDocsUrl?: string;
  architectureDiagramUrl?: string;
  badge?: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  role: string;
  badge?: string;
  gpaOrScore?: string;
  description: string;
  skillsDeveloped: string[];
  achievements?: string[];
}

export interface ProfileData {
  fullName: string;
  nativeName: string;
  title: string;
  secondaryTitle: string;
  shortBio: string;
  status: {
    availableForHire: boolean;
    text: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    githubUrl: string;
    githubUsername: string;
    facebookUrl: string;
    portfolioUrl?: string;
  };
  education: {
    institution: string;
    period: string;
    major: string;
    degreeTitle: string;
    gpa: string;
    toeic: string;
    highlights: string[];
  };
  about: {
    summary: string[];
    careerDirection: string;
    coreValues: {
      title: string;
      description: string;
    }[];
  };
}
