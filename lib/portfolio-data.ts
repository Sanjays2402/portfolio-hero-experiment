export const profile = {
  name: 'Sanjay Santhanam',
  first: 'Sanjay',
  last: 'Santhanam',
  title: 'Software Developer',
  location: 'Bellevue, WA',
  email: 'sanjays2402@gmail.com',
  github: 'Sanjays2402',
  linkedin: 'in/sanjays2402',
  blurb: 'Software engineer working on the unglamorous middle layer where healthcare, finance, and the systems behind them quietly hold the line.',
  status: 'Open to conversations',
}

export const experience = [
  {
    role: 'Software Developer',
    company: 'Johnson & Johnson',
    period: 'Jun 2024 — Present',
    location: 'New Brunswick, NJ · Hybrid',
    blurb: 'FHIR-compliant microservice in Java 17 + Spring Boot for hospital scheduling across 15 hospitals. −35% booking time.',
    stack: ['Java 17', 'Spring Boot', 'FHIR', 'Microservices', 'React'],
  },
  {
    role: 'Software Developer',
    company: 'Citi',
    period: 'May 2023 — Apr 2024',
    location: 'New York, NY · Remote',
    blurb: 'Spring Boot + Kafka Streams + Oracle for real-time card fraud at 1M tx/hr. +15% accuracy.',
    stack: ['Spring Boot', 'Kafka', 'Oracle', 'Docker', 'Java 17'],
  },
  {
    role: 'Software Development Engineer',
    company: 'Zentek Infosoft',
    period: 'Jun 2020 — Jul 2022',
    location: 'Jaipur, IN · Remote',
    blurb: 'Role-based HR portal in Spring + Angular + MySQL. −40% manual processing time.',
    stack: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'AWS'],
  },
]

export const projects = [
  { n: '01', title: 'FHIR Patient Scheduling',     stack: ['Java', 'Spring', 'FHIR'],         blurb: 'Microservice for cross-hospital appointment booking. FHIR-compliant, 24/7.' },
  { n: '02', title: 'Real-time Fraud Detection',   stack: ['Kafka', 'Spring', 'Oracle'],      blurb: 'Sub-second card-fraud checks at scale on streaming ledger data.' },
  { n: '03', title: 'Role-based HR Portal',        stack: ['Spring', 'Angular', 'MySQL'],     blurb: 'Onboarding + permissions across departments; cut HR throughput in half.' },
  { n: '04', title: 'Portfolio Hero Experiment',   stack: ['Next.js', 'Canvas', 'Tailwind'],  blurb: 'Five distinct landing-page designs sharing only data, no UI library.' },
]

export const skills = {
  Languages: ['Java', 'TypeScript', 'Python', 'C++', 'SQL'],
  Frameworks: ['Spring Boot', 'React', 'Next.js', 'Angular', 'Node.js'],
  Infra: ['AWS', 'Docker', 'Kafka', 'Oracle', 'PostgreSQL', 'Redis'],
  Practice: ['Microservices', 'Event Streaming', 'API Design', 'Distributed Systems'],
}

export const education = [
  { degree: 'MS in Computer Science', school: 'Northeastern University', year: '2023' },
  { degree: 'BE in Computer Science', school: 'Rajasthan Technical University', year: '2020' },
]
