export const profile = {
  name: 'Sanjay Santhanam',
  first: 'Sanjay',
  last: 'Santhanam',
  title: 'Software Developer',
  location: 'New Brunswick, NJ',
  email: 'sanjays2402@gmail.com',
  github: 'Sanjays2402',
  linkedin: 'in/sanjay24',
  blurb:
    'Software engineer working on the unglamorous middle layer where healthcare, finance, and the systems behind them quietly hold the line.',
  status: 'Open to conversations',
}

export const stats = {
  years: '4+',
  projects: '10+',
  citations: '40+',
  publications: 5,
}

export const experience = [
  {
    role: 'Software Developer',
    company: 'Johnson & Johnson',
    period: 'Jun 2024 — Present',
    location: 'New Brunswick, NJ · Hybrid',
    blurb:
      'Architected a FHIR-compliant microservice in Java 17 + Spring Boot for patient scheduling across 15 hospitals. −35% booking time, 24/7 availability.',
    stack: ['Java 17', 'Spring Boot', 'FHIR', 'Microservices', 'React', 'API Gateway'],
  },
  {
    role: 'Software Developer',
    company: 'Citi',
    period: 'May 2023 — Apr 2024',
    location: 'New York, NY · Remote',
    blurb:
      'Built Spring Boot microservices for real-time card-fraud checks with Kafka Streams + Oracle. 1M tx/hr, +15% accuracy.',
    stack: ['Spring Boot', 'Kafka Streams', 'Oracle', 'Docker', 'REST', 'Java 17'],
  },
  {
    role: 'Software Development Engineer',
    company: 'Zentek Infosoft',
    period: 'Jun 2020 — Jul 2022',
    location: 'Jaipur, IN · Remote',
    blurb:
      'Delivered a role-based enterprise HR portal in Spring Boot + Angular + MySQL. −40% manual processing time.',
    stack: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'AWS', 'REST'],
  },
]

export const projects = [
  {
    n: '01',
    title: 'FHIR Patient Scheduling',
    stack: ['Java 17', 'Spring Boot', 'FHIR'],
    blurb: 'Cross-hospital appointment microservice. FHIR-compliant, 24/7. −35% booking time across 15 hospitals.',
  },
  {
    n: '02',
    title: 'Real-time Fraud Detection',
    stack: ['Kafka Streams', 'Spring Boot', 'Oracle'],
    blurb: 'Sub-second card-fraud checks on streaming ledger. 1M tx/hr, +15% accuracy.',
  },
  {
    n: '03',
    title: 'Role-based HR Portal',
    stack: ['Spring Boot', 'Angular', 'MySQL'],
    blurb: 'Onboarding + permissions across departments; −40% manual processing.',
  },
  {
    n: '04',
    title: 'Flight Arrival Delay Prediction',
    stack: ['Python', 'XGBoost', 'Scikit-learn'],
    blurb: '94% accuracy on the OpenFlights dataset; cascading-delay viz in Matplotlib/Seaborn.',
  },
  {
    n: '05',
    title: 'CLOUDKEY — Secure Auth',
    stack: ['Firebase', 'OAuth', 'React', 'Node.js'],
    blurb: 'Cloud auth service with Google OAuth + API keys. +30% login speed, −20% access errors.',
  },
  {
    n: '06',
    title: 'TensorFlow Sepsis Detection',
    stack: ['TensorFlow', 'Flask', 'SMART-on-FHIR'],
    blurb: 'Early-sepsis model wired into Flask + SMART-on-FHIR alerts. −80% manual entry.',
  },
]

export const research = [
  {
    title: 'Animal detection for road safety using deep learning',
    authors: 'S Santhanam, SS Panigrahi, SK Kashyap, BK Duriseti',
    venue: '2021 Intl. Conference on Computational Intelligence and Computing',
    type: 'Conference Paper',
    year: 2021,
    citations: 24,
  },
  {
    title: 'Model proposal for a YOLO object-detection algorithm based social-distancing detection system',
    authors: 'SS Balamurugan, S Santhanam, A Billa, R Aggarwal, NV Alluri',
    venue: '2021 Intl. Conference on Computational Intelligence and Computing',
    type: 'Conference Paper',
    year: 2021,
    citations: 4,
  },
  {
    title: 'Drowsiness detection with OpenCV',
    authors: 'S Sanjay, N Banupriya, M Sathish',
    venue: '2021 Second Intl. Conf. on Electronics and Sustainable Communication',
    type: 'Conference Paper',
    year: 2021,
    citations: 3,
  },
  {
    title: 'Recognition of Pneumonia from X-Ray patterns using Convolutional Neural Networks',
    authors: 'S Sanjay, S Soundararajan, T Thyagaraj, Y Sai',
    venue: 'Springer · IRCET-21',
    type: 'Conference Paper',
    year: 2021,
    citations: 2,
  },
  {
    title: 'Computer Vision based Road Lane Detection',
    authors: 'S Sidhaarthan, S Sanjay',
    venue: 'Artificial & Computational Intelligence',
    type: 'Journal Article',
    year: 2021,
    citations: 0,
  },
]

export const researchAreas = [
  'Computer Vision', 'Deep Learning', 'Object Detection', 'Medical Imaging',
  'CNNs', 'Road Safety', 'OpenCV', 'YOLO', 'Healthcare AI',
]

export const skills = {
  Languages: ['Java', 'C/C++', 'Python', 'JavaScript', 'TypeScript', 'Ruby', 'SQL'],
  Frontend: ['React.js', 'Angular', 'Next.js', 'HTML5', 'CSS3', 'Tailwind'],
  Backend: ['Spring Boot', 'Node.js', 'Django', 'Flask', 'FastAPI'],
  Databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle', 'MS SQL Server', 'NoSQL'],
  DevOps: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Jenkins', 'Terraform', 'Ansible'],
  Practice: ['Microservices', 'REST', 'GraphQL', 'Event Streaming', 'FHIR', 'OAuth', 'Agile/Scrum'],
  Testing: ['JUnit', 'PyTest', 'Jest', 'Mocha', 'Selenium', 'Postman'],
}

export const education = [
  { degree: 'MS in Computer Science', school: 'Syracuse University', location: 'Syracuse, NY', period: 'Aug 2022 — May 2024', year: '2024' },
  { degree: 'BE in Computer Science', school: 'Anna University', location: 'Chennai, IN', period: 'Aug 2018 — Apr 2022', year: '2022' },
]
