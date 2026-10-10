export interface Testimonial {
  id: string;
  isPlaceholder: boolean;
  quote: string;
  author: string;
  role: string;
  company: string;
  relatedProject: string;
  avatarPlaceholder: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    isPlaceholder: true,
    quote: "[ADD CLIENT TESTIMONIAL HERE — e.g., 'Krishnendhu brought remarkable clarity and creative energy to our digital launch. Her strategic content direction helped us reach our target audience effortlessly.']",
    author: "[CLIENT NAME PLACEHOLDER]",
    role: "[CLIENT ROLE]",
    company: "[COMPANY NAME]",
    relatedProject: "Social Media Strategy Campaign",
    avatarPlaceholder: "K"
  },
  {
    id: "testimonial-2",
    isPlaceholder: true,
    quote: "[ADD CLIENT TESTIMONIAL HERE — e.g., 'Working with Krishnendhu was seamless. Her understanding of modern social media trends and brand tone of voice delivered standout campaign assets.']",
    author: "[FOUNDER / MARKETING DIRECTOR]",
    role: "[CREATIVE DIRECTOR]",
    company: "[BRAND STUDIO]",
    relatedProject: "Brand Campaign Strategy",
    avatarPlaceholder: "M"
  },
  {
    id: "testimonial-3",
    isPlaceholder: true,
    quote: "[ADD CLIENT TESTIMONIAL HERE — e.g., 'Thoughtful, detail-oriented, and strategic. She turned complex ideas into simple, engaging content that resonated deeply with our community.']",
    author: "[PROJECT COLLABORATOR]",
    role: "[HEAD OF CONTENT]",
    company: "[DIGITAL AGENCY]",
    relatedProject: "Content Creation System",
    avatarPlaceholder: "S"
  }
];
