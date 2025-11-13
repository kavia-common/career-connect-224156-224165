const jobsData = [
  // Engineering
  {
    id: 1,
    title: 'Frontend Engineer',
    company: 'BlueWave Tech',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1200000, max: 1800000 },
    salaryRange: { min: 1200000, max: 1800000, currency: 'INR' },
    description:
      'Build and optimize modern web interfaces using React and TypeScript. Collaborate closely with design and backend teams.',
    skills: ['React', 'TypeScript', 'CSS', 'Webpack', 'Testing'],
    tags: ['frontend', 'react', 'spa'],
    link: 'https://www.linkedin.com/jobs/view/bluewave-frontend-engineer-1'
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'Cloud Harbor',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1600000, max: 2400000 },
    salaryRange: { min: 1600000, max: 2400000, currency: 'INR' },
    description:
      'Design scalable APIs and microservices with Node.js. Experience with databases and cloud platforms preferred.',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'AWS', 'REST'],
    tags: ['backend', 'microservices', 'api'],
    link: 'https://www.linkedin.com/jobs/view/cloudharbor-backend-engineer-2'
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Oceanic Labs',
    location: 'Remote',
    type: 'Contract',
    category: 'Engineering',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1500000 },
    salaryRange: { min: 900000, max: 1500000, currency: 'INR' },
    description:
      'Work across the stack building features end-to-end with React and Node. Strong collaboration in a remote-first team.',
    skills: ['React', 'Node.js', 'GraphQL', 'Docker', 'CI/CD'],
    tags: ['fullstack', 'graphql', 'docker'],
    link: 'https://www.linkedin.com/jobs/view/oceanic-fullstack-3'
  },
  {
    id: 4,
    title: 'Data Engineer',
    company: 'Tidal Data',
    location: 'Pune',
    type: 'Full-time',
    category: 'Data',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1500000, max: 2400000 },
    salaryRange: { min: 1500000, max: 2400000, currency: 'INR' },
    description:
      'Develop data pipelines and ETL processes. Optimize storage and processing for analytics workloads.',
    skills: ['Python', 'Airflow', 'Spark', 'SQL', 'AWS'],
    tags: ['etl', 'pipelines', 'big-data'],
    link: 'https://www.linkedin.com/jobs/view/tidal-data-engineer-4'
  },
  {
    id: 5,
    title: 'UX Designer',
    company: 'Sapphire Studios',
    location: 'Mumbai',
    type: 'Part-time',
    category: 'Design',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Craft intuitive user experiences and visual designs. Collaborate with engineers to ship polished features.',
    skills: ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
    tags: ['ux', 'ui', 'prototyping'],
    link: 'https://www.linkedin.com/jobs/view/ux-designer-at-sapphire-studios-5'
  },
  {
    id: 6,
    title: 'Site Reliability Engineer',
    company: 'Skyline Ops',
    location: 'Remote',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1800000, max: 3000000 },
    salaryRange: { min: 1800000, max: 3000000, currency: 'INR' },
    description:
      'Ensure reliability and performance of production systems. Implement monitoring, alerting, and incident automation.',
    skills: ['Kubernetes', 'Terraform', 'Prometheus', 'Go', 'AWS'],
    tags: ['sre', 'observability', 'iaac'],
    link: 'https://www.linkedin.com/jobs/view/skyline-sre-6'
  },
  {
    id: 7,
    title: 'Mobile Developer',
    company: 'Azure Apps',
    location: 'Chennai',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 700000, max: 1100000 },
    salaryRange: { min: 700000, max: 1100000, currency: 'INR' },
    description:
      'Build and maintain React Native applications with a focus on performance and UX.',
    skills: ['React Native', 'JavaScript', 'iOS', 'Android', 'REST'],
    tags: ['mobile', 'react-native'],
    link: 'https://www.linkedin.com/jobs/view/azureapps-mobile-7'
  },
  {
    id: 8,
    title: 'DevOps Engineer',
    company: 'Harbor Cloud',
    location: 'Delhi',
    type: 'Contract',
    category: 'DevOps',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1100000, max: 1700000 },
    salaryRange: { min: 1100000, max: 1700000, currency: 'INR' },
    description:
      'Automate build and deployment pipelines, infrastructure as code, and environment management.',
    skills: ['CI/CD', 'Docker', 'Kubernetes', 'AWS', 'IaC'],
    tags: ['cicd', 'docker', 'k8s'],
    link: 'https://www.linkedin.com/jobs/view/harborcloud-devops-8'
  },
  {
    id: 9,
    title: 'Product Manager',
    company: 'MarinaWorks',
    location: 'Pune',
    type: 'Full-time',
    category: 'Product',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1300000, max: 1800000 },
    salaryRange: { min: 1300000, max: 1800000, currency: 'INR' },
    description:
      'Lead cross-functional teams to deliver impactful features. Define roadmap and measure outcomes.',
    skills: ['Roadmapping', 'Agile', 'Analytics', 'Stakeholder Mgmt'],
    tags: ['product', 'agile', 'roadmap'],
    link: 'https://www.linkedin.com/jobs/view/product-manager-at-marinaworks-9'
  },
  {
    id: 10,
    title: 'Security Engineer',
    company: 'DeepBlue Security',
    location: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1700000, max: 2600000 },
    salaryRange: { min: 1700000, max: 2600000, currency: 'INR' },
    description:
      'Build security tooling, conduct audits, and partner with teams to reduce risk across the SDLC.',
    skills: ['AppSec', 'Threat Modeling', 'Node.js', 'AWS', 'SIEM'],
    tags: ['security', 'appsec'],
    link: 'https://www.linkedin.com/jobs/view/deepblue-security-engineer-10'
  },

  // Data
  {
    id: 11,
    title: 'Data Scientist',
    company: 'Insight Bay',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Data',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1500000, max: 2200000 },
    salaryRange: { min: 1500000, max: 2200000, currency: 'INR' },
    description:
      'Apply ML techniques to build predictive models and drive insights for product and marketing teams.',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'SQL', 'Statistics'],
    tags: ['ml', 'predictive', 'analytics'],
    link: 'https://www.indeed.com/viewjob?jk=insight-bay-data-scientist-11'
  },
  {
    id: 12,
    title: 'BI Analyst',
    company: 'NorthStar Analytics',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Data',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 600000, max: 1000000 },
    salaryRange: { min: 600000, max: 1000000, currency: 'INR' },
    description:
      'Build dashboards and analyze business KPIs. Work closely with stakeholders to provide data-driven insights.',
    skills: ['SQL', 'Power BI', 'Excel', 'Data Modeling'],
    tags: ['bi', 'dashboards'],
    link: 'https://www.naukri.com/job-listings-bi-analyst-northstar-analytics-12'
  },
  {
    id: 13,
    title: 'ML Engineer',
    company: 'Cobalt AI',
    location: 'Pune',
    type: 'Full-time',
    category: 'Data',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1800000, max: 2800000 },
    salaryRange: { min: 1800000, max: 2800000, currency: 'INR' },
    description:
      'Productionize ML models, optimize inference, and manage model lifecycle with MLOps best practices.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'AWS'],
    tags: ['mlops', 'inference', 'models'],
    link: 'https://www.linkedin.com/jobs/view/ml-engineer-at-cobalt-ai-13'
  },

  // Product
  {
    id: 14,
    title: 'Associate Product Manager',
    company: 'WaveCraft',
    location: 'Mumbai',
    type: 'Internship',
    category: 'Product',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 200000, max: 400000 },
    salaryRange: { min: 200000, max: 400000, currency: 'INR' },
    description:
      'Assist senior PMs with user research, requirement gathering, and backlog grooming.',
    skills: ['User Research', 'Communication', 'Documentation'],
    tags: ['apm', 'internship'],
    link: 'https://www.linkedin.com/jobs/view/associate-product-manager-intern-at-wavecraft-14'
  },
  {
    id: 15,
    title: 'Senior Product Manager',
    company: 'Harbor Suite',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Product',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 2200000, max: 3200000 },
    salaryRange: { min: 2200000, max: 3200000, currency: 'INR' },
    description:
      'Own product strategy and execution for a core product area. Lead discovery and delivery using data-driven decisions.',
    skills: ['Strategy', 'Roadmapping', 'Analytics', 'Leadership'],
    tags: ['ownership', 'strategy'],
    link: 'https://www.indeed.com/viewjob?jk=harbor-suite-senior-product-manager-15'
  },

  // Marketing
  {
    id: 16,
    title: 'Growth Marketer',
    company: 'Swell Labs',
    location: 'Remote',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Drive user acquisition through paid channels, SEO, and lifecycle marketing.',
    skills: ['SEO', 'Google Ads', 'Analytics', 'CRM'],
    tags: ['growth', 'seo', 'paid'],
    link: 'https://www.linkedin.com/jobs/view/growth-marketer-at-swell-labs-16'
  },
  {
    id: 17,
    title: 'Content Strategist',
    company: 'Marine Media',
    location: 'Chennai',
    type: 'Part-time',
    category: 'Marketing',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 500000, max: 900000 },
    salaryRange: { min: 500000, max: 900000, currency: 'INR' },
    description:
      'Plan and deliver content calendars for blog, email, and social channels with a focus on conversion.',
    skills: ['Copywriting', 'Editorial', 'SEO', 'Analytics'],
    tags: ['content', 'editorial'],
    link: 'https://www.naukri.com/job-listings-content-strategist-marine-media-17'
  },

  // Sales
  {
    id: 18,
    title: 'Sales Development Representative',
    company: 'Pelagic CRM',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 400000, max: 800000 },
    salaryRange: { min: 400000, max: 800000, currency: 'INR' },
    description:
      'Prospect and qualify leads, book demos, and collaborate with AEs for pipeline generation.',
    skills: ['Prospecting', 'Cold Outreach', 'CRM'],
    tags: ['sdr', 'leads'],
    link: 'https://www.linkedin.com/jobs/view/sales-development-representative-at-pelagic-crm-18'
  },
  {
    id: 19,
    title: 'Account Executive',
    company: 'TideSoft',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1000000, max: 1800000 },
    salaryRange: { min: 1000000, max: 1800000, currency: 'INR' },
    description:
      'Own the sales cycle from demo to close. Maintain strong relationships and exceed quarterly targets.',
    skills: ['Demo', 'Negotiation', 'Forecasting'],
    tags: ['sales', 'closing'],
    link: 'https://www.indeed.com/viewjob?jk=tidesoft-account-executive-19'
  },

  // QA
  {
    id: 20,
    title: 'QA Engineer',
    company: 'ClearBay QA',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'QA',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Design and execute manual and automated test cases to ensure product quality.',
    skills: ['Selenium', 'Cypress', 'Test Plans', 'Jest'],
    tags: ['automation', 'testing'],
    link: 'https://www.naukri.com/job-listings-qa-engineer-clearbay-qa-20'
  },
  {
    id: 21,
    title: 'SDET',
    company: 'Aqua Quality',
    location: 'Pune',
    type: 'Full-time',
    category: 'QA',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1400000, max: 2200000 },
    salaryRange: { min: 1400000, max: 2200000, currency: 'INR' },
    description:
      'Build and maintain test automation frameworks and CI integrations for quality at scale.',
    skills: ['Java', 'Selenium', 'JUnit', 'CI/CD'],
    tags: ['sdet', 'frameworks'],
    link: 'https://www.linkedin.com/jobs/view/sdet-at-aqua-quality-21'
  },

  // Support
  {
    id: 22,
    title: 'Customer Support Specialist',
    company: 'Harbor Help',
    location: 'Chennai',
    type: 'Full-time',
    category: 'Support',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 350000, max: 700000 },
    salaryRange: { min: 350000, max: 700000, currency: 'INR' },
    description:
      'Assist customers via chat and email. Troubleshoot issues and document solutions.',
    skills: ['Communication', 'Troubleshooting', 'Zendesk'],
    tags: ['support', 'csat'],
    link: 'https://www.indeed.com/viewjob?jk=harbor-help-customer-support-22'
  },
  {
    id: 23,
    title: 'Technical Support Engineer',
    company: 'BlueAnchor',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Support',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 700000, max: 1100000 },
    salaryRange: { min: 700000, max: 1100000, currency: 'INR' },
    description:
      'Resolve technical issues, work with engineering for escalations, and improve support documentation.',
    skills: ['Linux', 'Networking', 'Scripting'],
    tags: ['l2', 'tech-support'],
    link: 'https://www.linkedin.com/jobs/view/technical-support-engineer-at-blueanchor-23'
  },

  // Design
  {
    id: 24,
    title: 'Product Designer',
    company: 'Coral Design',
    location: 'Remote',
    type: 'Full-time',
    category: 'Design',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1400000, max: 2200000 },
    salaryRange: { min: 1400000, max: 2200000, currency: 'INR' },
    description:
      'Design end-to-end product experiences with strong visual design and systems thinking.',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'UX'],
    tags: ['product-design', 'systems'],
    link: 'https://www.naukri.com/job-listings-product-designer-coral-design-24'
  },
  {
    id: 25,
    title: 'Visual Designer',
    company: 'Pacific Studio',
    location: 'Bangalore',
    type: 'Contract',
    category: 'Design',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 600000, max: 1000000 },
    salaryRange: { min: 600000, max: 1000000, currency: 'INR' },
    description:
      'Create brand-aligned visuals for marketing campaigns and product communication.',
    skills: ['Illustrator', 'Photoshop', 'Branding'],
    tags: ['visual', 'branding'],
    link: 'https://www.linkedin.com/jobs/view/visual-designer-at-pacific-studio-25'
  },

  // Additional Engineering roles for diversity
  {
    id: 26,
    title: 'Golang Engineer',
    company: 'Reef Systems',
    location: 'Pune',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1400000, max: 2000000 },
    salaryRange: { min: 1400000, max: 2000000, currency: 'INR' },
    description:
      'Build performant services in Go with focus on concurrency and reliability.',
    skills: ['Go', 'gRPC', 'Kubernetes', 'PostgreSQL'],
    tags: ['golang', 'grpc'],
    link: 'https://www.indeed.com/viewjob?jk=reef-systems-golang-engineer-26'
  },
  {
    id: 27,
    title: 'Java Engineer',
    company: 'Tsunami Tech',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1700000, max: 2500000 },
    salaryRange: { min: 1700000, max: 2500000, currency: 'INR' },
    description:
      'Develop high throughput services using Spring Boot and Kafka.',
    skills: ['Java', 'Spring Boot', 'Kafka', 'SQL'],
    tags: ['java', 'spring', 'kafka'],
    link: 'https://www.linkedin.com/jobs/view/java-engineer-at-tsunami-tech-27'
  },
  {
    id: 28,
    title: 'iOS Engineer',
    company: 'BlueFin Mobile',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1300000, max: 2000000 },
    salaryRange: { min: 1300000, max: 2000000, currency: 'INR' },
    description:
      'Build native iOS applications with Swift and SwiftUI.',
    skills: ['Swift', 'SwiftUI', 'CocoaPods', 'REST'],
    tags: ['ios', 'swift'],
    link: 'https://www.naukri.com/job-listings-ios-engineer-bluefin-mobile-28'
  },
  {
    id: 29,
    title: 'Android Engineer',
    company: 'Harbor Droid',
    location: 'Chennai',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 800000, max: 1300000 },
    salaryRange: { min: 800000, max: 1300000, currency: 'INR' },
    description:
      'Build and maintain Android apps with Kotlin, focusing on performance and stability.',
    skills: ['Kotlin', 'Jetpack', 'MVVM'],
    tags: ['android', 'kotlin'],
    link: 'https://www.linkedin.com/jobs/view/android-engineer-at-harbor-droid-29'
  },

  // DevOps/Infra
  {
    id: 30,
    title: 'Cloud Architect',
    company: 'AzureHarbor',
    location: 'Remote',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 2500000, max: 3600000 },
    salaryRange: { min: 2500000, max: 3600000, currency: 'INR' },
    description:
      'Design cloud-native architectures with reliability and cost efficiency.',
    skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Networking'],
    tags: ['cloud', 'architecture'],
    link: 'https://www.indeed.com/viewjob?jk=azureharbor-cloud-architect-30'
  },
  {
    id: 31,
    title: 'Platform Engineer',
    company: 'BlueSphere',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1600000, max: 2400000 },
    salaryRange: { min: 1600000, max: 2400000, currency: 'INR' },
    description:
      'Build internal platforms to improve developer velocity and reliability.',
    skills: ['Kubernetes', 'Helm', 'GitOps', 'ArgoCD'],
    tags: ['platform', 'gitops'],
    link: 'https://www.linkedin.com/jobs/view/platform-engineer-at-bluesphere-31'
  },

  // QA/Automation
  {
    id: 32,
    title: 'Performance Test Engineer',
    company: 'WaveBench',
    location: 'Hyderabad',
    type: 'Contract',
    category: 'QA',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Design and run load and stress tests, analyze performance bottlenecks.',
    skills: ['JMeter', 'k6', 'APM', 'Scripting'],
    tags: ['performance', 'load-test'],
    link: 'https://www.naukri.com/job-listings-performance-test-engineer-wavebench-32'
  },

  // Support/Success
  {
    id: 33,
    title: 'Customer Success Manager',
    company: 'Harbor Success',
    location: 'Pune',
    type: 'Full-time',
    category: 'Support',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1500000 },
    salaryRange: { min: 900000, max: 1500000, currency: 'INR' },
    description:
      'Drive product adoption, retention, and growth with strategic customers.',
    skills: ['Relationship Mgmt', 'Upsell', 'Onboarding'],
    tags: ['success', 'retention'],
    link: 'https://www.linkedin.com/jobs/view/customer-success-manager-at-harbor-success-33'
  },

  // Marketing/Sales extras
  {
    id: 34,
    title: 'Digital Marketing Intern',
    company: 'AquaMark',
    location: 'Mumbai',
    type: 'Internship',
    category: 'Marketing',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 150000, max: 250000 },
    salaryRange: { min: 150000, max: 250000, currency: 'INR' },
    description:
      'Assist with campaign setup, reporting, and social media content.',
    skills: ['SEO', 'Canva', 'Analytics'],
    tags: ['intern', 'digital'],
    link: 'https://www.indeed.com/viewjob?jk=aquamark-digital-marketing-intern-34'
  },
  {
    id: 35,
    title: 'Enterprise Sales Manager',
    company: 'BlueLedger',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 2000000, max: 3200000 },
    salaryRange: { min: 2000000, max: 3200000, currency: 'INR' },
    description:
      'Lead enterprise deals and manage strategic accounts across regions.',
    skills: ['Enterprise Sales', 'Negotiation', 'RFP'],
    tags: ['enterprise', 'b2b'],
    link: 'https://www.linkedin.com/jobs/view/enterprise-sales-manager-at-blueledger-35'
  },

  // Data/Analytics extras
  {
    id: 36,
    title: 'Data Analyst',
    company: 'Coral Metrics',
    location: 'Chennai',
    type: 'Full-time',
    category: 'Data',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 550000, max: 900000 },
    salaryRange: { min: 550000, max: 900000, currency: 'INR' },
    description:
      'Analyze product and marketing funnels, build reporting, and run ad-hoc analyses.',
    skills: ['SQL', 'Tableau', 'Excel', 'Python'],
    tags: ['analytics', 'reporting'],
    link: 'https://www.naukri.com/job-listings-data-analyst-coral-metrics-36'
  },

  // Product/Design extras
  {
    id: 37,
    title: 'Design Researcher',
    company: 'Tide UX',
    location: 'Remote',
    type: 'Part-time',
    category: 'Design',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 600000, max: 1000000 },
    salaryRange: { min: 600000, max: 1000000, currency: 'INR' },
    description:
      'Plan and conduct user research to inform product direction.',
    skills: ['User Interviews', 'Usability Testing', 'Synthesis'],
    tags: ['research', 'ux'],
    link: 'https://www.linkedin.com/jobs/view/design-researcher-at-tide-ux-37'
  },
  {
    id: 38,
    title: 'Product Operations Analyst',
    company: 'WaveOps',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Product',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Improve product execution through tooling, process, and analytics.',
    skills: ['SQL', 'Notion', 'Jira', 'Automation'],
    tags: ['prod-ops', 'process'],
    link: 'https://www.indeed.com/viewjob?jk=waveops-product-operations-analyst-38'
  },

  // Engineering extras
  {
    id: 39,
    title: 'DevRel Engineer',
    company: 'Harbor Dev',
    location: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1200000, max: 1800000 },
    salaryRange: { min: 1200000, max: 1800000, currency: 'INR' },
    description:
      'Build developer demos, write tutorials, and engage with the developer community.',
    skills: ['JavaScript', 'Writing', 'Public Speaking'],
    tags: ['devrel', 'content'],
    link: 'https://www.linkedin.com/jobs/view/devrel-engineer-at-harbor-dev-39'
  },
  {
    id: 40,
    title: 'Systems Engineer',
    company: 'Mariner Systems',
    location: 'Hyderabad',
    type: 'Contract',
    category: 'Engineering',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1500000, max: 2400000 },
    salaryRange: { min: 1500000, max: 2400000, currency: 'INR' },
    description:
      'Work on low-level systems, performance tuning, and reliability.',
    skills: ['Linux', 'C/C++', 'Networking', 'Performance'],
    tags: ['systems', 'performance'],
    link: 'https://www.naukri.com/job-listings-systems-engineer-mariner-systems-40'
  },

  // Finance
  {
    id: 41,
    title: 'Finance Analyst',
    company: 'Coral Finance',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Finance',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Own FP&A activities, budgeting, forecasting, and monthly variance analysis.',
    skills: ['Excel', 'Financial Modeling', 'SQL', 'Power BI'],
    tags: ['fp&a', 'forecasting'],
    link: 'https://www.indeed.com/viewjob?jk=coral-finance-analyst-41'
  },
  {
    id: 42,
    title: 'Senior Accountant',
    company: 'BayBooks',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Finance',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1000000, max: 1600000 },
    salaryRange: { min: 1000000, max: 1600000, currency: 'INR' },
    description:
      'Manage GL, month-end close, statutory compliance, and audit support.',
    skills: ['Tally', 'Compliance', 'IFRS', 'Taxation'],
    tags: ['accounting', 'audit'],
    link: 'https://www.linkedin.com/jobs/view/senior-accountant-at-baybooks-42'
  },

  // HR
  {
    id: 43,
    title: 'HR Generalist',
    company: 'Harbor People',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'HR',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 700000, max: 1100000 },
    salaryRange: { min: 700000, max: 1100000, currency: 'INR' },
    description:
      'Handle recruitment, onboarding, employee engagement, and HR operations.',
    skills: ['Recruitment', 'Onboarding', 'HRIS'],
    tags: ['people', 'hr-ops'],
    link: 'https://www.naukri.com/job-listings-hr-generalist-harbor-people-43'
  },
  {
    id: 44,
    title: 'Talent Acquisition Specialist',
    company: 'BlueHire',
    location: 'Pune',
    type: 'Contract',
    category: 'HR',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 600000, max: 900000 },
    salaryRange: { min: 600000, max: 900000, currency: 'INR' },
    description:
      'Source, screen, and manage the hiring pipeline for tech and non-tech roles.',
    skills: ['Sourcing', 'ATS', 'Interviewing'],
    tags: ['recruiting', 'talent'],
    link: 'https://www.linkedin.com/jobs/view/talent-acquisition-specialist-at-bluehire-44'
  },

  // Operations
  {
    id: 45,
    title: 'Operations Manager',
    company: 'Marina Ops',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Operations',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1200000, max: 2000000 },
    salaryRange: { min: 1200000, max: 2000000, currency: 'INR' },
    description:
      'Optimize processes, manage SLAs, and lead cross-functional initiatives for operational excellence.',
    skills: ['Process Improvement', 'Lean', 'Stakeholder Mgmt'],
    tags: ['ops', 'process'],
    link: 'https://www.indeed.com/viewjob?jk=marina-ops-operations-manager-45'
  },
  {
    id: 46,
    title: 'Business Operations Analyst',
    company: 'BlueOps',
    location: 'Remote',
    type: 'Full-time',
    category: 'Operations',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1300000 },
    salaryRange: { min: 800000, max: 1300000, currency: 'INR' },
    description:
      'Build operational dashboards, automate workflows, and track business KPIs.',
    skills: ['SQL', 'Excel', 'Zapier', 'Python'],
    tags: ['bizops', 'automation'],
    link: 'https://www.naukri.com/job-listings-business-operations-analyst-blueops-46'
  },

  // Engineering/AI new
  {
    id: 47,
    title: 'Generative AI Engineer',
    company: 'AzureMind',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 2200000, max: 3400000 },
    salaryRange: { min: 2200000, max: 3400000, currency: 'INR' },
    description:
      'Design and integrate LLM-powered features, optimize prompts, and evaluate model performance.',
    skills: ['Python', 'LLMs', 'Vector DBs', 'Prompt Engineering'],
    tags: ['genai', 'nlp'],
    link: 'https://www.linkedin.com/jobs/view/generative-ai-engineer-at-azuremind-47'
  },
  {
    id: 48,
    title: 'Data Platform Engineer',
    company: 'Harbor Data',
    location: 'Kolkata',
    type: 'Full-time',
    category: 'Data',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1400000, max: 2200000 },
    salaryRange: { min: 1400000, max: 2200000, currency: 'INR' },
    description:
      'Own the data platform stack with ingestion, orchestration, governance, and cost controls.',
    skills: ['Airflow', 'Spark', 'Lakehouse', 'DBT'],
    tags: ['platform', 'data-eng'],
    link: 'https://www.indeed.com/viewjob?jk=harbor-data-platform-engineer-48'
  },

  // Design/Content new
  {
    id: 49,
    title: 'UI Designer (Design Systems)',
    company: 'Coral UI',
    location: 'Pune',
    type: 'Full-time',
    category: 'Design',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1000000, max: 1600000 },
    salaryRange: { min: 1000000, max: 1600000, currency: 'INR' },
    description:
      'Evolve the component library, maintain tokens, and ensure accessibility compliance.',
    skills: ['Figma', 'Design Tokens', 'Accessibility'],
    tags: ['design-system', 'a11y'],
    link: 'https://www.naukri.com/job-listings-ui-designer-design-systems-coral-ui-49'
  },
  {
    id: 50,
    title: 'UX Writer',
    company: 'BlueVoice',
    location: 'Remote',
    type: 'Part-time',
    category: 'Design',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 600000, max: 1000000 },
    salaryRange: { min: 600000, max: 1000000, currency: 'INR' },
    description:
      'Craft clear, concise product copy to guide users and enhance conversions.',
    skills: ['Microcopy', 'Content Strategy', 'UX'],
    tags: ['ux-writing', 'content'],
    link: 'https://www.linkedin.com/jobs/view/ux-writer-at-bluevoice-50'
  },

  // Product new
  {
    id: 51,
    title: 'Technical Program Manager',
    company: 'WaveTPM',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Product',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 2000000, max: 3200000 },
    salaryRange: { min: 2000000, max: 3200000, currency: 'INR' },
    description:
      'Drive complex cross-team programs with clear timelines, dependencies, and risks.',
    skills: ['Program Mgmt', 'Risk Mgmt', 'Agile'],
    tags: ['tpm', 'delivery'],
    link: 'https://www.indeed.com/viewjob?jk=wave-tpm-technical-program-manager-51'
  },
  {
    id: 52,
    title: 'Product Analyst',
    company: 'Tide Insights',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Product',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 700000, max: 1100000 },
    salaryRange: { min: 700000, max: 1100000, currency: 'INR' },
    description:
      'Partner with PMs to define metrics, build dashboards, and run experiments.',
    skills: ['SQL', 'A/B Testing', 'Analytics'],
    tags: ['experimentation', 'metrics'],
    link: 'https://www.naukri.com/job-listings-product-analyst-tide-insights-52'
  },

  // Marketing new
  {
    id: 53,
    title: 'SEO Specialist',
    company: 'Harbor Growth',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1300000 },
    salaryRange: { min: 800000, max: 1300000, currency: 'INR' },
    description:
      'Lead on-page and technical SEO initiatives to grow organic traffic.',
    skills: ['SEO', 'GA4', 'Search Console'],
    tags: ['seo', 'organic'],
    link: 'https://www.linkedin.com/jobs/view/seo-specialist-at-harbor-growth-53'
  },
  {
    id: 54,
    title: 'Lifecycle Marketing Manager',
    company: 'BlueLoop',
    location: 'Kolkata',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1200000, max: 1800000 },
    salaryRange: { min: 1200000, max: 1800000, currency: 'INR' },
    description:
      'Build multi-channel lifecycle journeys across email, push, and in-app.',
    skills: ['CRM', 'Segmentation', 'Automation'],
    tags: ['lifecycle', 'crm'],
    link: 'https://www.indeed.com/viewjob?jk=blueloop-lifecycle-marketing-manager-54'
  },

  // Sales new
  {
    id: 55,
    title: 'Sales Operations Analyst',
    company: 'AquaSales',
    location: 'Pune',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1300000 },
    salaryRange: { min: 900000, max: 1300000, currency: 'INR' },
    description:
      'Optimize the sales funnel with forecasting, territory planning, and tooling.',
    skills: ['Salesforce', 'Excel', 'Analytics'],
    tags: ['sales-ops', 'forecasting'],
    link: 'https://www.naukri.com/job-listings-sales-operations-analyst-aquasales-55'
  },
  {
    id: 56,
    title: 'Partnerships Manager',
    company: 'BlueAllies',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1400000, max: 2200000 },
    salaryRange: { min: 1400000, max: 2200000, currency: 'INR' },
    description:
      'Source, negotiate, and activate strategic partnerships to open new channels.',
    skills: ['Negotiation', 'BD', 'Contracts'],
    tags: ['partnerships', 'alliances'],
    link: 'https://www.linkedin.com/jobs/view/partnerships-manager-at-blueallies-56'
  },

  // DevOps new
  {
    id: 57,
    title: 'DevOps Intern',
    company: 'HarborOps',
    location: 'Bangalore',
    type: 'Internship',
    category: 'DevOps',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 200000, max: 300000 },
    salaryRange: { min: 200000, max: 300000, currency: 'INR' },
    description:
      'Support CI/CD pipelines, write scripts, and assist with containerization tasks.',
    skills: ['Bash', 'Docker', 'GitHub Actions'],
    tags: ['intern', 'devops'],
    link: 'https://www.indeed.com/viewjob?jk=harborops-devops-intern-57'
  },
  {
    id: 58,
    title: 'Release Manager',
    company: 'AzureShip',
    location: 'Chennai',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1100000, max: 1600000 },
    salaryRange: { min: 1100000, max: 1600000, currency: 'INR' },
    description:
      'Coordinate release cycles, maintain change logs, and ensure rollback readiness.',
    skills: ['Change Mgmt', 'Jira', 'CI/CD'],
    tags: ['release', 'ci'],
    link: 'https://www.naukri.com/job-listings-release-manager-azureship-58'
  },

  // QA new
  {
    id: 59,
    title: 'Automation Engineer (Playwright)',
    company: 'WaveQA',
    location: 'Kolkata',
    type: 'Full-time',
    category: 'QA',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Build robust end-to-end test suites with Playwright and integrate with CI.',
    skills: ['Playwright', 'TypeScript', 'CI'],
    tags: ['automation', 'e2e'],
    link: 'https://www.linkedin.com/jobs/view/automation-engineer-playwright-at-waveqa-59'
  },
  {
    id: 60,
    title: 'QA Intern',
    company: 'ClearHarbor',
    location: 'Delhi',
    type: 'Internship',
    category: 'QA',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 150000, max: 250000 },
    salaryRange: { min: 150000, max: 250000, currency: 'INR' },
    description:
      'Assist with test case creation, exploratory testing, and bug triage.',
    skills: ['Test Cases', 'Jira', 'Communication'],
    tags: ['intern', 'qa'],
    link: 'https://www.indeed.com/viewjob?jk=clearharbor-qa-intern-60'
  },

  // Support new
  {
    id: 61,
    title: 'Support Team Lead',
    company: 'Harbor Care',
    location: 'Pune',
    type: 'Full-time',
    category: 'Support',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Manage a team of support specialists, define SLAs, and improve deflection through knowledge base.',
    skills: ['Leadership', 'SLA Mgmt', 'Zendesk'],
    tags: ['support', 'lead'],
    link: 'https://www.naukri.com/job-listings-support-team-lead-harbor-care-61'
  },
  {
    id: 62,
    title: 'Community Support Specialist',
    company: 'BlueCommunity',
    location: 'Remote',
    type: 'Part-time',
    category: 'Support',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 300000, max: 600000 },
    salaryRange: { min: 300000, max: 600000, currency: 'INR' },
    description:
      'Engage with users across forums and social platforms to resolve issues and gather feedback.',
    skills: ['Community Mgmt', 'Social', 'Writing'],
    tags: ['community', 'support'],
    link: 'https://www.linkedin.com/jobs/view/community-support-specialist-at-bluecommunity-62'
  },

  // HR new
  {
    id: 63,
    title: 'HRBP',
    company: 'TidePeople',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'HR',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1200000, max: 1800000 },
    salaryRange: { min: 1200000, max: 1800000, currency: 'INR' },
    description:
      'Partner with business leaders on org design, performance cycles, and compensation planning.',
    skills: ['Performance Mgmt', 'Comp & Ben', 'Org Design'],
    tags: ['hrbp', 'people'],
    link: 'https://www.indeed.com/viewjob?jk=tidepeople-hrbp-63'
  },
  {
    id: 64,
    title: 'L&D Specialist',
    company: 'BlueLearn',
    location: 'Chennai',
    type: 'Full-time',
    category: 'HR',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 700000, max: 1100000 },
    salaryRange: { min: 700000, max: 1100000, currency: 'INR' },
    description:
      'Design and deliver learning programs, track effectiveness, and manage vendors.',
    skills: ['Instructional Design', 'Facilitation', 'LMS'],
    tags: ['learning', 'training'],
    link: 'https://www.naukri.com/job-listings-learning-and-development-specialist-bluelearn-64'
  },

  // Finance new
  {
    id: 65,
    title: 'Payroll Specialist',
    company: 'Harbor Pay',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Finance',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 600000, max: 900000 },
    salaryRange: { min: 600000, max: 900000, currency: 'INR' },
    description:
      'Run payroll cycles, manage reimbursements, and ensure compliance with labor laws.',
    skills: ['Payroll', 'Compliance', 'Excel'],
    tags: ['payroll', 'finance'],
    link: 'https://www.linkedin.com/jobs/view/payroll-specialist-at-harbor-pay-65'
  },
  {
    id: 66,
    title: 'AR/AP Executive',
    company: 'Coral Books',
    location: 'Kolkata',
    type: 'Full-time',
    category: 'Finance',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 400000, max: 700000 },
    salaryRange: { min: 400000, max: 700000, currency: 'INR' },
    description:
      'Own invoicing, receivables follow-ups, vendor payments, and reconciliations.',
    skills: ['Tally', 'Invoicing', 'Reconciliation'],
    tags: ['ar', 'ap'],
    link: 'https://www.indeed.com/viewjob?jk=coral-books-ar-ap-executive-66'
  },

  // Engineering additional
  {
    id: 67,
    title: 'Python Backend Engineer',
    company: 'BluePython',
    location: 'Pune',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1300000, max: 2000000 },
    salaryRange: { min: 1300000, max: 2000000, currency: 'INR' },
    description:
      'Develop REST and GraphQL services with FastAPI, performance tuning, and observability.',
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    tags: ['python', 'backend'],
    link: 'https://www.naukri.com/job-listings-python-backend-engineer-bluepython-67'
  },
  {
    id: 68,
    title: 'Frontend Engineer (Vue)',
    company: 'AzureUI',
    location: 'Kolkata',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Implement feature-rich SPAs using Vue 3, Pinia, and Vite.',
    skills: ['Vue', 'TypeScript', 'Vite', 'Testing'],
    tags: ['frontend', 'vue'],
    link: 'https://www.linkedin.com/jobs/view/frontend-engineer-vue-at-azureui-68'
  },
  {
    id: 69,
    title: 'Embedded Systems Engineer',
    company: 'Harbor Embedded',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1600000, max: 2400000 },
    salaryRange: { min: 1600000, max: 2400000, currency: 'INR' },
    description:
      'Develop firmware for IoT devices, optimize for power and memory constraints.',
    skills: ['C', 'RTOS', 'SPI/I2C', 'ARM'],
    tags: ['embedded', 'iot'],
    link: 'https://www.indeed.com/viewjob?jk=harbor-embedded-systems-engineer-69'
  },
  {
    id: 70,
    title: 'QA Lead (Mobile)',
    company: 'WaveMobile',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'QA',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1400000, max: 2000000 },
    salaryRange: { min: 1400000, max: 2000000, currency: 'INR' },
    description:
      'Lead mobile QA strategy, automation coverage, and release quality.',
    skills: ['Appium', 'Kotlin', 'Swift', 'CI'],
    tags: ['mobile-qa', 'automation'],
    link: 'https://www.naukri.com/job-listings-qa-lead-mobile-wavemobile-70'
  },
  {
    id: 71,
    title: 'Support Engineer (Developer Tools)',
    company: 'BlueDevTools',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Support',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Support SDKs and CLIs for developers, triage GitHub issues, and write solutions.',
    skills: ['Git', 'CLI', 'JavaScript'],
    tags: ['devtools', 'support'],
    link: 'https://www.linkedin.com/jobs/view/support-engineer-developer-tools-at-bluedevtools-71'
  },
  {
    id: 72,
    title: 'Customer Support (Night Shift)',
    company: 'Harbor Assist',
    location: 'Chennai',
    type: 'Full-time',
    category: 'Support',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 400000, max: 700000 },
    salaryRange: { min: 400000, max: 700000, currency: 'INR' },
    description:
      'Provide customer support for US time zones; email-first with occasional calls.',
    skills: ['Email Support', 'English Proficiency', 'CRM'],
    tags: ['night-shift', 'support'],
    link: 'https://www.indeed.com/viewjob?jk=harbor-assist-customer-support-night-shift-72'
  },

  // Product/Operations new
  {
    id: 73,
    title: 'Scrum Master',
    company: 'Aqua Agile',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Operations',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Facilitate scrum ceremonies, remove impediments, and improve team throughput.',
    skills: ['Scrum', 'Facilitation', 'Jira'],
    tags: ['agile', 'scrum'],
    link: 'https://www.naukri.com/job-listings-scrum-master-aqua-agile-73'
  },
  {
    id: 74,
    title: 'Procurement Specialist',
    company: 'Coral Ops',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Operations',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Manage vendor evaluations, negotiations, and purchase orders with budget adherence.',
    skills: ['Negotiation', 'Vendor Mgmt', 'Compliance'],
    tags: ['procurement', 'vendor'],
    link: 'https://www.linkedin.com/jobs/view/procurement-specialist-at-coral-ops-74'
  },

  // Engineering/SRE new
  {
    id: 75,
    title: 'Observability Engineer',
    company: 'BlueSignal',
    location: 'Remote',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1400000, max: 2000000 },
    salaryRange: { min: 1400000, max: 2000000, currency: 'INR' },
    description:
      'Build logging, metrics, and tracing pipelines; create golden signals dashboards.',
    skills: ['Prometheus', 'Grafana', 'OpenTelemetry'],
    tags: ['observability', 'sre'],
    link: 'https://www.indeed.com/viewjob?jk=bluesignal-observability-engineer-75'
  },
  {
    id: 76,
    title: 'Infrastructure Engineer',
    company: 'Harbor Infra',
    location: 'Kolkata',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1800000, max: 2600000 },
    salaryRange: { min: 1800000, max: 2600000, currency: 'INR' },
    description:
      'Manage infra-as-code, network policies, and cost optimization across clouds.',
    skills: ['Terraform', 'AWS', 'Azure', 'FinOps'],
    tags: ['infra', 'iac'],
    link: 'https://www.naukri.com/job-listings-infrastructure-engineer-harbor-infra-76'
  },

  // Data Science new
  {
    id: 77,
    title: 'Analytics Engineer',
    company: 'Tide Warehouse',
    location: 'Pune',
    type: 'Full-time',
    category: 'Data',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1200000, max: 1800000 },
    salaryRange: { min: 1200000, max: 1800000, currency: 'INR' },
    description:
      'Model business logic in the warehouse, maintain marts, and ensure data quality.',
    skills: ['DBT', 'SQL', 'Data Modeling'],
    tags: ['analytics-eng', 'dbt'],
    link: 'https://www.linkedin.com/jobs/view/analytics-engineer-at-tide-warehouse-77'
  },
  {
    id: 78,
    title: 'Research Scientist (NLP)',
    company: 'BlueResearch',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Data',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 2400000, max: 3600000 },
    salaryRange: { min: 2400000, max: 3600000, currency: 'INR' },
    description:
      'Advance NLP capabilities in summarization and RAG; publish and productionize.',
    skills: ['PyTorch', 'Transformers', 'Evaluation'],
    tags: ['nlp', 'research'],
    link: 'https://www.indeed.com/viewjob?jk=blueresearch-research-scientist-nlp-78'
  },

  // Marketing/Social new
  {
    id: 79,
    title: 'Social Media Manager',
    company: 'AquaBrand',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 700000, max: 1100000 },
    salaryRange: { min: 700000, max: 1100000, currency: 'INR' },
    description:
      'Own social strategy, content calendars, and community engagement across platforms.',
    skills: ['Content', 'Analytics', 'Brand'],
    tags: ['social', 'brand'],
    link: 'https://www.naukri.com/job-listings-social-media-manager-aquabrand-79'
  },
  {
    id: 80,
    title: 'Performance Marketing Manager',
    company: 'Harbor Ads',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1200000, max: 1900000 },
    salaryRange: { min: 1200000, max: 1900000, currency: 'INR' },
    description:
      'Scale paid channels with CAC guardrails; experimentation and creative testing.',
    skills: ['Google Ads', 'Meta Ads', 'Attribution'],
    tags: ['paid', 'performance'],
    link: 'https://www.linkedin.com/jobs/view/performance-marketing-manager-at-harbor-ads-80'
  },

  // Appended dataset: IDs 81–180
  // Engineering (81–90)
  {
    id: 81,
    title: 'Frontend Engineer (React)',
    company: 'AquaUI',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1100000, max: 1700000 },
    salaryRange: { min: 1100000, max: 1700000, currency: 'INR' },
    description:
      'Develop modern React apps with performance and accessibility best practices.',
    skills: ['React', 'TypeScript', 'Redux', 'Accessibility', 'Jest'],
    tags: ['frontend', 'react'],
    link: 'https://www.indeed.com/viewjob?jk=aquaui-frontend-engineer-react-81'
  },
  {
    id: 82,
    title: 'Backend Engineer (Node.js)',
    company: 'BlueAPI',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1600000, max: 2500000 },
    salaryRange: { min: 1600000, max: 2500000, currency: 'INR' },
    description:
      'Design and build scalable REST/GraphQL services with Node.js.',
    skills: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'Redis'],
    tags: ['backend', 'api'],
    link: 'https://www.linkedin.com/jobs/view/backend-engineer-node-js-at-blueapi-82'
  },
  {
    id: 83,
    title: 'Full Stack Developer (MERN)',
    company: 'HarborStack',
    location: 'Pune',
    type: 'Contract',
    category: 'Engineering',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1500000 },
    salaryRange: { min: 900000, max: 1500000, currency: 'INR' },
    description:
      'Deliver end-to-end features using MongoDB, Express, React, and Node.',
    skills: ['React', 'Node.js', 'MongoDB', 'CI/CD', 'Docker'],
    tags: ['fullstack', 'mern'],
    link: 'https://www.naukri.com/job-listings-full-stack-developer-mern-harborstack-83'
  },
  {
    id: 84,
    title: 'Frontend Engineer (Angular)',
    company: 'CoralApps',
    location: 'Chennai',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 700000, max: 1100000 },
    salaryRange: { min: 700000, max: 1100000, currency: 'INR' },
    description:
      'Implement enterprise Angular apps with RxJS and state management.',
    skills: ['Angular', 'RxJS', 'TypeScript', 'SCSS'],
    tags: ['frontend', 'angular'],
    link: 'https://www.indeed.com/viewjob?jk=coralapps-frontend-engineer-angular-84'
  },
  {
    id: 85,
    title: 'Software Engineer (C#/.NET)',
    company: 'BlueDot Systems',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1200000, max: 1800000 },
    salaryRange: { min: 1200000, max: 1800000, currency: 'INR' },
    description:
      'Build robust APIs and services using .NET 7 and Azure services.',
    skills: ['C#', '.NET', 'SQL Server', 'Azure', 'Microservices'],
    tags: ['dotnet', 'azure'],
    link: 'https://www.linkedin.com/jobs/view/software-engineer-c-net-at-bluedot-systems-85'
  },
  {
    id: 86,
    title: 'Golang Backend Engineer',
    company: 'AzureChannel',
    location: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1800000, max: 2800000 },
    salaryRange: { min: 1800000, max: 2800000, currency: 'INR' },
    description:
      'Create high-performance Go services with gRPC and Kubernetes.',
    skills: ['Go', 'gRPC', 'Kubernetes', 'PostgreSQL', 'Observability'],
    tags: ['golang', 'grpc'],
    link: 'https://www.naukri.com/job-listings-golang-backend-engineer-azurechannel-86'
  },
  {
    id: 87,
    title: 'Frontend Engineer (Svelte)',
    company: 'TideUI',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Build delightful interfaces with SvelteKit and modern tooling.',
    skills: ['Svelte', 'SvelteKit', 'TypeScript', 'Vite'],
    tags: ['frontend', 'svelte'],
    link: 'https://www.indeed.com/viewjob?jk=tideui-frontend-engineer-svelte-87'
  },
  {
    id: 88,
    title: 'Platform Engineer (Internal Tools)',
    company: 'HarborPlatform',
    location: 'Pune',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1500000, max: 2200000 },
    salaryRange: { min: 1500000, max: 2200000, currency: 'INR' },
    description:
      'Develop tooling to improve developer productivity and reliability.',
    skills: ['Kubernetes', 'Helm', 'ArgoCD', 'Backstage'],
    tags: ['platform', 'internal-tools'],
    link: 'https://www.linkedin.com/jobs/view/platform-engineer-internal-tools-at-harborplatform-88'
  },
  {
    id: 89,
    title: 'Mobile Developer (Flutter)',
    company: 'BlueMobile',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1100000, max: 1600000 },
    salaryRange: { min: 1100000, max: 1600000, currency: 'INR' },
    description:
      'Develop cross-platform mobile apps using Flutter and Dart.',
    skills: ['Flutter', 'Dart', 'REST', 'Firebase'],
    tags: ['mobile', 'flutter'],
    link: 'https://www.naukri.com/job-listings-mobile-developer-flutter-bluemobile-89'
  },
  {
    id: 90,
    title: 'Security Engineer (Blue Team)',
    company: 'AquaSecure',
    location: 'Remote',
    type: 'Full-time',
    category: 'Engineering',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1800000, max: 2600000 },
    salaryRange: { min: 1800000, max: 2600000, currency: 'INR' },
    description:
      'Implement security controls, threat detection, and continuous hardening.',
    skills: ['SIEM', 'Threat Modeling', 'AWS', 'KMS', 'AppSec'],
    tags: ['security', 'blue-team'],
    link: 'https://www.indeed.com/viewjob?jk=aquasecure-security-engineer-blue-team-90'
  },

  // Data (91–100)
  {
    id: 91,
    title: 'Data Engineer (Spark)',
    company: 'CoralData',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Data',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1400000, max: 2000000 },
    salaryRange: { min: 1400000, max: 2000000, currency: 'INR' },
    description:
      'Build resilient ETL pipelines using Spark and Airflow on the lakehouse.',
    skills: ['Spark', 'Airflow', 'Delta Lake', 'AWS', 'SQL'],
    tags: ['etl', 'spark'],
    link: 'https://www.linkedin.com/jobs/view/data-engineer-spark-at-coraldata-91'
  },
  {
    id: 92,
    title: 'Data Scientist (CV)',
    company: 'BlueVision',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Data',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 2000000, max: 3200000 },
    salaryRange: { min: 2000000, max: 3200000, currency: 'INR' },
    description:
      'Build and deploy computer vision models for image understanding tasks.',
    skills: ['PyTorch', 'OpenCV', 'MLOps', 'Python'],
    tags: ['cv', 'ml'],
    link: 'https://www.naukri.com/job-listings-data-scientist-cv-bluevision-92'
  },
  {
    id: 93,
    title: 'BI Developer',
    company: 'HarborBI',
    location: 'Pune',
    type: 'Full-time',
    category: 'Data',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Create compelling BI dashboards and optimize semantic layers.',
    skills: ['Power BI', 'DAX', 'SQL', 'Modeling'],
    tags: ['bi', 'dashboards'],
    link: 'https://www.indeed.com/viewjob?jk=harborbi-bi-developer-93'
  },
  {
    id: 94,
    title: 'ML Engineer (NLP)',
    company: 'AquaNLP',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Data',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1500000, max: 2200000 },
    salaryRange: { min: 1500000, max: 2200000, currency: 'INR' },
    description:
      'Develop and optimize NLP pipelines with transformer models.',
    skills: ['Transformers', 'Python', 'FastAPI', 'Docker'],
    tags: ['nlp', 'mlops'],
    link: 'https://www.linkedin.com/jobs/view/ml-engineer-nlp-at-aquamlp-94'
  },
  {
    id: 95,
    title: 'Data Analyst (Product)',
    company: 'BlueInsights',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Data',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 600000, max: 1000000 },
    salaryRange: { min: 600000, max: 1000000, currency: 'INR' },
    description:
      'Analyze product usage, define metrics, and build self-serve reports.',
    skills: ['SQL', 'Tableau', 'Python', 'A/B Testing'],
    tags: ['analytics', 'product'],
    link: 'https://www.naukri.com/job-listings-data-analyst-product-blueinsights-95'
  },
  {
    id: 96,
    title: 'Analytics Engineer (dbt)',
    company: 'HarborWarehouse',
    location: 'Chennai',
    type: 'Full-time',
    category: 'Data',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1100000, max: 1700000 },
    salaryRange: { min: 1100000, max: 1700000, currency: 'INR' },
    description:
      'Model curated marts and maintain data quality with dbt tests.',
    skills: ['dbt', 'SQL', 'Data Modeling', 'Git'],
    tags: ['dbt', 'analytics-eng'],
    link: 'https://www.indeed.com/viewjob?jk=harborwarehouse-analytics-engineer-dbt-96'
  },
  {
    id: 97,
    title: 'Data Platform SRE',
    company: 'BluePipelines',
    location: 'Remote',
    type: 'Full-time',
    category: 'Data',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1800000, max: 2600000 },
    salaryRange: { min: 1800000, max: 2600000, currency: 'INR' },
    description:
      'Ensure reliability and cost-efficiency of data platforms at scale.',
    skills: ['Kubernetes', 'Airflow', 'Kafka', 'Monitoring'],
    tags: ['sre', 'data'],
    link: 'https://www.linkedin.com/jobs/view/data-platform-sre-at-bluepipelines-97'
  },
  {
    id: 98,
    title: 'Research Intern (ML)',
    company: 'TideResearch',
    location: 'Bangalore',
    type: 'Internship',
    category: 'Data',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 200000, max: 350000 },
    salaryRange: { min: 200000, max: 350000, currency: 'INR' },
    description:
      'Assist in experimentation, model evaluation, and benchmark creation.',
    skills: ['Python', 'Pandas', 'Experimentation'],
    tags: ['intern', 'ml'],
    link: 'https://www.naukri.com/job-listings-research-intern-ml-tideresearch-98'
  },
  {
    id: 99,
    title: 'Data Governance Specialist',
    company: 'AzureGovern',
    location: 'Pune',
    type: 'Full-time',
    category: 'Data',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1000000, max: 1500000 },
    salaryRange: { min: 1000000, max: 1500000, currency: 'INR' },
    description:
      'Define policies, lineage, and stewardship for trusted analytics.',
    skills: ['Governance', 'Catalog', 'Policies', 'SQL'],
    tags: ['governance', 'data'],
    link: 'https://www.indeed.com/viewjob?jk=azuregoven-data-governance-specialist-99'
  },
  {
    id: 100,
    title: 'Data Quality Engineer',
    company: 'CoralQuality',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Data',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Implement data tests, SLAs, and incident response for quality issues.',
    skills: ['dbt tests', 'Great Expectations', 'SQL', 'Python'],
    tags: ['data-quality', 'testing'],
    link: 'https://www.linkedin.com/jobs/view/data-quality-engineer-at-coralquality-100'
  },

  // DevOps (101–110)
  {
    id: 101,
    title: 'DevOps Engineer (Kubernetes)',
    company: 'BlueOps',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1400000, max: 2100000 },
    salaryRange: { min: 1400000, max: 2100000, currency: 'INR' },
    description:
      'Operate Kubernetes clusters, GitOps flows, and observability stacks.',
    skills: ['Kubernetes', 'Helm', 'ArgoCD', 'Prometheus'],
    tags: ['k8s', 'gitops'],
    link: 'https://www.naukri.com/job-listings-devops-engineer-kubernetes-blueops-101'
  },
  {
    id: 102,
    title: 'SRE',
    company: 'HarborReliability',
    location: 'Delhi',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1800000, max: 2800000 },
    salaryRange: { min: 1800000, max: 2800000, currency: 'INR' },
    description:
      'Drive availability, latency SLOs, and incident response excellence.',
    skills: ['SLOs', 'SLIs', 'On-call', 'Chaos Engineering'],
    tags: ['sre', 'reliability'],
    link: 'https://www.indeed.com/viewjob?jk=harborreliability-site-reliability-engineer-102'
  },
  {
    id: 103,
    title: 'Release Engineer',
    company: 'AquaRelease',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1100000, max: 1600000 },
    salaryRange: { min: 1100000, max: 1600000, currency: 'INR' },
    description:
      'Automate releases, maintain pipelines, and improve rollback safety.',
    skills: ['CI/CD', 'GitHub Actions', 'Change Mgmt'],
    tags: ['release', 'ci'],
    link: 'https://www.linkedin.com/jobs/view/release-engineer-at-aquarelease-103'
  },
  {
    id: 104,
    title: 'Infrastructure Engineer (IaC)',
    company: 'CoralInfra',
    location: 'Chennai',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1300000, max: 1900000 },
    salaryRange: { min: 1300000, max: 1900000, currency: 'INR' },
    description:
      'Manage Terraform stacks, networking, and cloud costs effectively.',
    skills: ['Terraform', 'AWS', 'Azure', 'FinOps'],
    tags: ['infra', 'iac'],
    link: 'https://www.naukri.com/job-listings-infrastructure-engineer-iac-coralinfra-104'
  },
  {
    id: 105,
    title: 'DevOps Intern',
    company: 'TideOps',
    location: 'Mumbai',
    type: 'Internship',
    category: 'DevOps',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 200000, max: 300000 },
    salaryRange: { min: 200000, max: 300000, currency: 'INR' },
    description:
      'Assist with CI/CD, containerization, and environment automation tasks.',
    skills: ['Docker', 'Bash', 'YAML'],
    tags: ['intern', 'devops'],
    link: 'https://www.indeed.com/viewjob?jk=tideops-devops-intern-105'
  },
  {
    id: 106,
    title: 'Platform SRE',
    company: 'BluePlatform',
    location: 'Remote',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 2000000, max: 3000000 },
    salaryRange: { min: 2000000, max: 3000000, currency: 'INR' },
    description:
      'Scale shared platform services and oversee multi-tenant reliability.',
    skills: ['Kubernetes', 'Service Mesh', 'Observability'],
    tags: ['platform', 'sre'],
    link: 'https://www.linkedin.com/jobs/view/platform-sre-at-blueplatform-106'
  },
  {
    id: 107,
    title: 'DevSecOps Engineer',
    company: 'HarborSecure',
    location: 'Pune',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1400000, max: 2000000 },
    salaryRange: { min: 1400000, max: 2000000, currency: 'INR' },
    description:
      'Embed security scanners and policies in CI/CD and runtime.',
    skills: ['SAST', 'DAST', 'OPA', 'Containers'],
    tags: ['devsecops', 'security'],
    link: 'https://www.naukri.com/job-listings-devsecops-engineer-harborsecure-107'
  },
  {
    id: 108,
    title: 'Cloud Engineer (Azure)',
    company: 'AzureBay',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1300000, max: 1900000 },
    salaryRange: { min: 1300000, max: 1900000, currency: 'INR' },
    description:
      'Design and operate Azure cloud resources with IaC discipline.',
    skills: ['Azure', 'Terraform', 'Networking', 'Security'],
    tags: ['azure', 'cloud'],
    link: 'https://www.indeed.com/viewjob?jk=azurebay-cloud-engineer-azure-108'
  },
  {
    id: 109,
    title: 'Observability Engineer',
    company: 'CoralSignal',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'DevOps',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1200000, max: 1800000 },
    salaryRange: { min: 1200000, max: 1800000, currency: 'INR' },
    description:
      'Build metrics, logs, traces pipelines and golden signals dashboards.',
    skills: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Loki'],
    tags: ['observability', 'otel'],
    link: 'https://www.linkedin.com/jobs/view/observability-engineer-at-coralsignal-109'
  },
  {
    id: 110,
    title: 'Site Reliability Intern',
    company: 'AquaReliability',
    location: 'Chennai',
    type: 'Internship',
    category: 'DevOps',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 180000, max: 280000 },
    salaryRange: { min: 180000, max: 280000, currency: 'INR' },
    description:
      'Shadow SREs, learn incident response and reliability fundamentals.',
    skills: ['Linux', 'Monitoring', 'Documentation'],
    tags: ['intern', 'sre'],
    link: 'https://www.naukri.com/job-listings-site-reliability-intern-aquareliability-110'
  },

  // QA (111–120)
  {
    id: 111,
    title: 'QA Engineer (Web)',
    company: 'BlueQA',
    location: 'Delhi',
    type: 'Full-time',
    category: 'QA',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Develop manual and automated test suites for web applications.',
    skills: ['Selenium', 'Cypress', 'Jest', 'TestRail'],
    tags: ['qa', 'automation'],
    link: 'https://www.indeed.com/viewjob?jk=blueqa-qa-engineer-web-111'
  },
  {
    id: 112,
    title: 'SDET (API)',
    company: 'HarborTest',
    location: 'Pune',
    type: 'Full-time',
    category: 'QA',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1400000, max: 2200000 },
    salaryRange: { min: 1400000, max: 2200000, currency: 'INR' },
    description:
      'Automate API testing and integrate with CI/CD for fast feedback.',
    skills: ['Postman', 'RestAssured', 'Java', 'CI/CD'],
    tags: ['sdet', 'api-testing'],
    link: 'https://www.linkedin.com/jobs/view/sdet-api-at-harbortest-112'
  },
  {
    id: 113,
    title: 'Performance Test Engineer',
    company: 'CoralPerf',
    location: 'Hyderabad',
    type: 'Contract',
    category: 'QA',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Design and execute load, stress, and endurance tests.',
    skills: ['JMeter', 'k6', 'APM', 'Scripting'],
    tags: ['performance', 'k6'],
    link: 'https://www.naukri.com/job-listings-performance-test-engineer-coralperf-113'
  },
  {
    id: 114,
    title: 'QA Lead',
    company: 'AquaAssure',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'QA',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1500000, max: 2200000 },
    salaryRange: { min: 1500000, max: 2200000, currency: 'INR' },
    description:
      'Own test strategy, coverage, and release quality for squads.',
    skills: ['Leadership', 'Automation', 'CI/CD'],
    tags: ['qa', 'lead'],
    link: 'https://www.indeed.com/viewjob?jk=aquaassure-qa-lead-114'
  },
  {
    id: 115,
    title: 'Automation Engineer (Playwright)',
    company: 'BlueScripts',
    location: 'Remote',
    type: 'Full-time',
    category: 'QA',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1000000, max: 1500000 },
    salaryRange: { min: 1000000, max: 1500000, currency: 'INR' },
    description:
      'Build E2E coverage using Playwright with TypeScript.',
    skills: ['Playwright', 'TypeScript', 'GitHub Actions'],
    tags: ['e2e', 'playwright'],
    link: 'https://www.linkedin.com/jobs/view/automation-engineer-playwright-at-bluescripts-115'
  },
  {
    id: 116,
    title: 'Mobile QA Engineer',
    company: 'HarborMobile',
    location: 'Chennai',
    type: 'Full-time',
    category: 'QA',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1300000 },
    salaryRange: { min: 900000, max: 1300000, currency: 'INR' },
    description:
      'Test native and cross-platform apps, expand automation.',
    skills: ['Appium', 'Android', 'iOS', 'CI'],
    tags: ['mobile', 'qa'],
    link: 'https://www.naukri.com/job-listings-mobile-qa-engineer-harbormobile-116'
  },
  {
    id: 117,
    title: 'QA Analyst',
    company: 'TideQuality',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'QA',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 600000, max: 900000 },
    salaryRange: { min: 600000, max: 900000, currency: 'INR' },
    description:
      'Write test cases, execute regression, and document defects.',
    skills: ['Test Cases', 'Jira', 'Exploratory Testing'],
    tags: ['qa', 'analyst'],
    link: 'https://www.indeed.com/viewjob?jk=tidequality-qa-analyst-117'
  },
  {
    id: 118,
    title: 'QA Manager',
    company: 'CoralAssurance',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'QA',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1700000, max: 2400000 },
    salaryRange: { min: 1700000, max: 2400000, currency: 'INR' },
    description:
      'Lead multiple QA teams, define processes, and quality metrics.',
    skills: ['Management', 'Automation Strategy', 'Hiring'],
    tags: ['qa', 'management'],
    link: 'https://www.linkedin.com/jobs/view/qa-manager-at-coralassurance-118'
  },
  {
    id: 119,
    title: 'QA Intern',
    company: 'AquaTest',
    location: 'Pune',
    type: 'Internship',
    category: 'QA',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 150000, max: 250000 },
    salaryRange: { min: 150000, max: 250000, currency: 'INR' },
    description:
      'Assist QA team with documentation and smoke testing.',
    skills: ['Documentation', 'Basics of Testing'],
    tags: ['intern', 'qa'],
    link: 'https://www.naukri.com/job-listings-qa-intern-aquatest-119'
  },
  {
    id: 120,
    title: 'SDET (Mobile)',
    company: 'BlueMobileQA',
    location: 'Delhi',
    type: 'Full-time',
    category: 'QA',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1100000, max: 1600000 },
    salaryRange: { min: 1100000, max: 1600000, currency: 'INR' },
    description:
      'Automate mobile tests using Appium and integrate with CI.',
    skills: ['Appium', 'JavaScript', 'CI/CD'],
    tags: ['automation', 'mobile'],
    link: 'https://www.indeed.com/viewjob?jk=bluemobileqa-sdet-mobile-120'
  },

  // Product (121–130)
  {
    id: 121,
    title: 'Product Manager (Platform)',
    company: 'HarborPM',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Product',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 2000000, max: 3000000 },
    salaryRange: { min: 2000000, max: 3000000, currency: 'INR' },
    description:
      'Own platform roadmap and drive adoption across product teams.',
    skills: ['Roadmapping', 'Stakeholder Mgmt', 'Analytics'],
    tags: ['platform', 'pm'],
    link: 'https://www.linkedin.com/jobs/view/product-manager-platform-at-haborpm-121'
  },
  {
    id: 122,
    title: 'Associate Product Manager',
    company: 'BlueRoadmap',
    location: 'Mumbai',
    type: 'Internship',
    category: 'Product',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 250000, max: 400000 },
    salaryRange: { min: 250000, max: 400000, currency: 'INR' },
    description:
      'Support product discovery, metrics, and spec writing.',
    skills: ['User Research', 'SQL', 'Docs'],
    tags: ['apm', 'intern'],
    link: 'https://www.naukri.com/job-listings-associate-product-manager-blue-roadmap-122'
  },
  {
    id: 123,
    title: 'Technical Product Manager',
    company: 'CoralTPM',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Product',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1400000, max: 2100000 },
    salaryRange: { min: 1400000, max: 2100000, currency: 'INR' },
    description:
      'Bridge engineering and product to deliver outcomes efficiently.',
    skills: ['APIs', 'Writing', 'Analytics'],
    tags: ['tpm', 'product'],
    link: 'https://www.indeed.com/viewjob?jk=coraltpm-technical-product-manager-123'
  },
  {
    id: 124,
    title: 'Growth Product Manager',
    company: 'AquaGrowth',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Product',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1800000, max: 2600000 },
    salaryRange: { min: 1800000, max: 2600000, currency: 'INR' },
    description:
      'Lead activation and retention initiatives via experimentation.',
    skills: ['A/B Testing', 'CRM', 'SQL'],
    tags: ['growth', 'experiments'],
    link: 'https://www.linkedin.com/jobs/view/growth-product-manager-at-aquagrowth-124'
  },
  {
    id: 125,
    title: 'Product Analyst',
    company: 'TideMetrics',
    location: 'Pune',
    type: 'Full-time',
    category: 'Product',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 700000, max: 1100000 },
    salaryRange: { min: 700000, max: 1100000, currency: 'INR' },
    description:
      'Define product metrics, build dashboards, and run deep dives.',
    skills: ['SQL', 'Tableau', 'Experimentation'],
    tags: ['analytics', 'product'],
    link: 'https://www.naukri.com/job-listings-product-analyst-tidemetrics-125'
  },
  {
    id: 126,
    title: 'Program Manager',
    company: 'BluePrograms',
    location: 'Chennai',
    type: 'Full-time',
    category: 'Product',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1800000, max: 2600000 },
    salaryRange: { min: 1800000, max: 2600000, currency: 'INR' },
    description:
      'Manage cross-team dependencies, risks, and delivery timelines.',
    skills: ['Program Mgmt', 'Risk Mgmt', 'Scrum'],
    tags: ['program', 'delivery'],
    link: 'https://www.indeed.com/viewjob?jk=blueprograms-program-manager-126'
  },
  {
    id: 127,
    title: 'Product Designer (UX)',
    company: 'HarborDesign',
    location: 'Remote',
    type: 'Full-time',
    category: 'Design',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1100000, max: 1700000 },
    salaryRange: { min: 1100000, max: 1700000, currency: 'INR' },
    description:
      'Design intuitive experiences from research to high-fidelity prototypes.',
    skills: ['Figma', 'Prototyping', 'Research'],
    tags: ['ux', 'design'],
    link: 'https://www.linkedin.com/jobs/view/product-designer-ux-at-harbordesign-127'
  },
  {
    id: 128,
    title: 'Product Operations Analyst',
    company: 'AquaOps',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Product',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Improve execution via tooling, process, and analytics.',
    skills: ['Jira', 'SQL', 'Automation'],
    tags: ['prod-ops', 'process'],
    link: 'https://www.naukri.com/job-listings-product-operations-analyst-aquaops-128'
  },
  {
    id: 129,
    title: 'Product Manager (AI)',
    company: 'CoralAI',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Product',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 2200000, max: 3200000 },
    salaryRange: { min: 2200000, max: 3200000, currency: 'INR' },
    description:
      'Define AI features with measurable outcomes and responsible AI practices.',
    skills: ['AI/ML Basics', 'Metrics', 'Ethics'],
    tags: ['ai', 'product'],
    link: 'https://www.indeed.com/viewjob?jk=coralai-product-manager-ai-129'
  },
  {
    id: 130,
    title: 'Associate UX Writer',
    company: 'BlueWords',
    location: 'Mumbai',
    type: 'Part-time',
    category: 'Design',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 400000, max: 700000 },
    salaryRange: { min: 400000, max: 700000, currency: 'INR' },
    description:
      'Write concise UI copy that clarifies and guides users.',
    skills: ['Microcopy', 'UX', 'Content Strategy'],
    tags: ['ux-writing', 'content'],
    link: 'https://www.linkedin.com/jobs/view/associate-ux-writer-at-bluewords-130'
  },

  // Marketing (131–140)
  {
    id: 131,
    title: 'SEO Manager',
    company: 'AquaOrganic',
    location: 'Pune',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1200000, max: 1800000 },
    salaryRange: { min: 1200000, max: 1800000, currency: 'INR' },
    description:
      'Drive SEO strategy across content, technical, and outreach.',
    skills: ['SEO', 'GA4', 'Content'],
    tags: ['seo', 'marketing'],
    link: 'https://www.naukri.com/job-listings-seo-manager-aquaorganic-131'
  },
  {
    id: 132,
    title: 'Content Marketer',
    company: 'BlueContent',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Create content that drives traffic and conversions.',
    skills: ['Copywriting', 'SEO', 'Analytics'],
    tags: ['content', 'growth'],
    link: 'https://www.indeed.com/viewjob?jk=bluecontent-content-marketer-132'
  },
  {
    id: 133,
    title: 'Performance Marketer',
    company: 'HarborGrowth',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Scale paid campaigns with experimentation and clear guardrails.',
    skills: ['Google Ads', 'Meta Ads', 'Attribution'],
    tags: ['paid', 'performance'],
    link: 'https://www.linkedin.com/jobs/view/performance-marketer-at-harborgrowth-133'
  },
  {
    id: 134,
    title: 'Social Media Strategist',
    company: 'CoralSocial',
    location: 'Chennai',
    type: 'Part-time',
    category: 'Marketing',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 500000, max: 900000 },
    salaryRange: { min: 500000, max: 900000, currency: 'INR' },
    description:
      'Plan and execute social content calendars and campaigns.',
    skills: ['Content', 'Brand', 'Analytics'],
    tags: ['social', 'brand'],
    link: 'https://www.naukri.com/job-listings-social-media-strategist-coralsocial-134'
  },
  {
    id: 135,
    title: 'Marketing Analyst',
    company: 'BlueMetrics',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 600000, max: 900000 },
    salaryRange: { min: 600000, max: 900000, currency: 'INR' },
    description:
      'Analyze channel performance and suggest optimization opportunities.',
    skills: ['SQL', 'GA4', 'Excel'],
    tags: ['analytics', 'marketing'],
    link: 'https://www.indeed.com/viewjob?jk=bluemetrics-marketing-analyst-135'
  },
  {
    id: 136,
    title: 'Brand Manager',
    company: 'AquaBranding',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1400000, max: 2000000 },
    salaryRange: { min: 1400000, max: 2000000, currency: 'INR' },
    description:
      'Define brand narrative and maintain consistency across touchpoints.',
    skills: ['Brand', 'Creatives', 'Leadership'],
    tags: ['brand', 'strategy'],
    link: 'https://www.linkedin.com/jobs/view/brand-manager-at-aquabranding-136'
  },
  {
    id: 137,
    title: 'Email Marketing Specialist',
    company: 'HarborCRM',
    location: 'Remote',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Build lifecycle journeys and optimize deliverability.',
    skills: ['CRM', 'Segmentation', 'Copywriting'],
    tags: ['email', 'crm'],
    link: 'https://www.naukri.com/job-listings-email-marketing-specialist-harborcrm-137'
  },
  {
    id: 138,
    title: 'PR Manager',
    company: 'CoralPR',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1200000, max: 1800000 },
    salaryRange: { min: 1200000, max: 1800000, currency: 'INR' },
    description:
      'Own media relations and external communications.',
    skills: ['PR', 'Communication', 'Crisis Mgmt'],
    tags: ['pr', 'comms'],
    link: 'https://www.indeed.com/viewjob?jk=coralpr-pr-manager-138'
  },
  {
    id: 139,
    title: 'Graphic Designer (Marketing)',
    company: 'BlueCreative',
    location: 'Pune',
    type: 'Contract',
    category: 'Marketing',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 600000, max: 1000000 },
    salaryRange: { min: 600000, max: 1000000, currency: 'INR' },
    description:
      'Design creatives for campaigns across channels.',
    skills: ['Illustrator', 'Photoshop', 'Branding'],
    tags: ['design', 'marketing'],
    link: 'https://www.linkedin.com/jobs/view/graphic-designer-marketing-at-bluecreative-139'
  },
  {
    id: 140,
    title: 'Influencer Marketing Specialist',
    company: 'AquaInfluence',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Marketing',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1300000 },
    salaryRange: { min: 900000, max: 1300000, currency: 'INR' },
    description:
      'Manage influencer partnerships and measure ROI.',
    skills: ['Negotiation', 'Campaigns', 'Analytics'],
    tags: ['influencer', 'growth'],
    link: 'https://www.naukri.com/job-listings-influencer-marketing-specialist-aquainfluence-140'
  },

  // Sales (141–150)
  {
    id: 141,
    title: 'Sales Development Representative',
    company: 'HarborSales',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 450000, max: 800000 },
    salaryRange: { min: 450000, max: 800000, currency: 'INR' },
    description:
      'Prospect and qualify leads for the sales pipeline.',
    skills: ['Prospecting', 'CRM', 'Outreach'],
    tags: ['sdr', 'sales'],
    link: 'https://www.indeed.com/viewjob?jk=harborsales-sales-development-representative-141'
  },
  {
    id: 142,
    title: 'Account Executive (Mid-market)',
    company: 'BlueDeals',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1000000, max: 1700000 },
    salaryRange: { min: 1000000, max: 1700000, currency: 'INR' },
    description:
      'Run full-cycle sales from demo to close.',
    skills: ['Demo', 'Negotiation', 'Forecasting'],
    tags: ['sales', 'closing'],
    link: 'https://www.linkedin.com/jobs/view/account-executive-mid-market-at-bluedeals-142'
  },
  {
    id: 143,
    title: 'Enterprise Account Executive',
    company: 'CoralEnterprise',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1800000, max: 3000000 },
    salaryRange: { min: 1800000, max: 3000000, currency: 'INR' },
    description:
      'Close large deals and manage complex stakeholder maps.',
    skills: ['Enterprise Sales', 'RFP', 'Negotiation'],
    tags: ['enterprise', 'b2b'],
    link: 'https://www.naukri.com/job-listings-enterprise-account-executive-coralenterprise-143'
  },
  {
    id: 144,
    title: 'Sales Operations Manager',
    company: 'AquaOpsSales',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1400000, max: 2000000 },
    salaryRange: { min: 1400000, max: 2000000, currency: 'INR' },
    description:
      'Drive forecasting accuracy and tooling for the sales org.',
    skills: ['Salesforce', 'Analytics', 'Process'],
    tags: ['sales-ops', 'forecasting'],
    link: 'https://www.indeed.com/viewjob?jk=aquaopssales-sales-operations-manager-144'
  },
  {
    id: 145,
    title: 'Channel Sales Manager',
    company: 'BlueChannel',
    location: 'Pune',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1300000, max: 1900000 },
    salaryRange: { min: 1300000, max: 1900000, currency: 'INR' },
    description:
      'Develop and manage reseller and distributor networks.',
    skills: ['Partnerships', 'Enablement', 'Contracts'],
    tags: ['channel', 'alliances'],
    link: 'https://www.linkedin.com/jobs/view/channel-sales-manager-at-bluechannel-145'
  },
  {
    id: 146,
    title: 'Inside Sales Executive',
    company: 'HarborInside',
    location: 'Chennai',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 500000, max: 900000 },
    salaryRange: { min: 500000, max: 900000, currency: 'INR' },
    description:
      'Conduct discovery calls and schedule demos for AEs.',
    skills: ['Prospecting', 'Communication', 'CRM'],
    tags: ['inside-sales', 'leads'],
    link: 'https://www.naukri.com/job-listings-inside-sales-executive-harborinside-146'
  },
  {
    id: 147,
    title: 'Partnerships Associate',
    company: 'CoralAllies',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 600000, max: 1000000 },
    salaryRange: { min: 600000, max: 1000000, currency: 'INR' },
    description:
      'Support partnership sourcing and activation efforts.',
    skills: ['Outreach', 'Coordination', 'Contracts'],
    tags: ['partnerships', 'alliances'],
    link: 'https://www.indeed.com/viewjob?jk=coralallies-partnerships-associate-147'
  },
  {
    id: 148,
    title: 'Customer Success Manager',
    company: 'BlueSuccess',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1500000 },
    salaryRange: { min: 900000, max: 1500000, currency: 'INR' },
    description:
      'Drive adoption and expansion within assigned accounts.',
    skills: ['Onboarding', 'Renewals', 'Upsell'],
    tags: ['success', 'retention'],
    link: 'https://www.linkedin.com/jobs/view/customer-success-manager-at-bluesuccess-148'
  },
  {
    id: 149,
    title: 'Sales Enablement Specialist',
    company: 'AquaEnable',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Sales',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1300000 },
    salaryRange: { min: 900000, max: 1300000, currency: 'INR' },
    description:
      'Create playbooks and training for sales teams.',
    skills: ['Training', 'Content', 'Metrics'],
    tags: ['enablement', 'sales'],
    link: 'https://www.naukri.com/job-listings-sales-enablement-specialist-aquaenable-149'
  },
  {
    id: 150,
    title: 'Sales Intern',
    company: 'CoralSales',
    location: 'Delhi',
    type: 'Internship',
    category: 'Sales',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 150000, max: 250000 },
    salaryRange: { min: 150000, max: 250000, currency: 'INR' },
    description:
      'Assist SDRs with research, outreach, and CRM hygiene.',
    skills: ['Research', 'CRM', 'Communication'],
    tags: ['intern', 'sales'],
    link: 'https://www.indeed.com/viewjob?jk=coralsales-sales-intern-150'
  },

  // Design (151–160)
  {
    id: 151,
    title: 'Product Designer (B2B)',
    company: 'HarborDesigns',
    location: 'Pune',
    type: 'Full-time',
    category: 'Design',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 1100000, max: 1600000 },
    salaryRange: { min: 1100000, max: 1600000, currency: 'INR' },
    description:
      'Design intuitive workflows for enterprise web applications.',
    skills: ['Figma', 'Prototyping', 'Design Systems'],
    tags: ['b2b', 'ux'],
    link: 'https://www.linkedin.com/jobs/view/product-designer-b2b-at-harbordesigns-151'
  },
  {
    id: 152,
    title: 'Visual Designer',
    company: 'BlueCanvas',
    location: 'Chennai',
    type: 'Contract',
    category: 'Design',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 600000, max: 1000000 },
    salaryRange: { min: 600000, max: 1000000, currency: 'INR' },
    description:
      'Create visual assets for marketing and product.',
    skills: ['Illustrator', 'Photoshop', 'Branding'],
    tags: ['visual', 'graphics'],
    link: 'https://www.naukri.com/job-listings-visual-designer-bluecanvas-152'
  },
  {
    id: 153,
    title: 'UX Researcher',
    company: 'AquaUX',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Design',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1400000, max: 2000000 },
    salaryRange: { min: 1400000, max: 2000000, currency: 'INR' },
    description:
      'Plan and run studies to inform product decisions.',
    skills: ['Interviews', 'Usability Testing', 'Analysis'],
    tags: ['research', 'ux'],
    link: 'https://www.indeed.com/viewjob?jk=aquaux-ux-researcher-153'
  },
  {
    id: 154,
    title: 'Interaction Designer',
    company: 'CoralIX',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Design',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1300000 },
    salaryRange: { min: 900000, max: 1300000, currency: 'INR' },
    description:
      'Craft interaction patterns and micro-interactions.',
    skills: ['Prototyping', 'Motion', 'Accessibility'],
    tags: ['ixd', 'motion'],
    link: 'https://www.linkedin.com/jobs/view/interaction-designer-at-coralix-154'
  },
  {
    id: 155,
    title: 'Design Systems Engineer',
    company: 'BlueDS',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Design',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1500000, max: 2200000 },
    salaryRange: { min: 1500000, max: 2200000, currency: 'INR' },
    description:
      'Build and maintain code-based component libraries.',
    skills: ['React', 'Storybook', 'Tokens'],
    tags: ['design-system', 'frontend'],
    link: 'https://www.naukri.com/job-listings-design-systems-engineer-blueds-155'
  },
  {
    id: 156,
    title: 'UI Designer',
    company: 'HarborUI',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Design',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 600000, max: 900000 },
    salaryRange: { min: 600000, max: 900000, currency: 'INR' },
    description:
      'Create pixel-perfect UI mockups and support handoff.',
    skills: ['Figma', 'UI', 'Handoff'],
    tags: ['ui', 'design'],
    link: 'https://www.indeed.com/viewjob?jk=harborui-ui-designer-156'
  },
  {
    id: 157,
    title: 'UX Writer',
    company: 'AquaWords',
    location: 'Remote',
    type: 'Part-time',
    category: 'Design',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 500000, max: 900000 },
    salaryRange: { min: 500000, max: 900000, currency: 'INR' },
    description:
      'Write clear, helpful copy for product interfaces.',
    skills: ['Microcopy', 'Content Strategy', 'UX'],
    tags: ['ux-writing', 'content'],
    link: 'https://www.linkedin.com/jobs/view/ux-writer-at-aquawords-157'
  },
  {
    id: 158,
    title: 'Design Producer',
    company: 'CoralFlow',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Design',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1300000 },
    salaryRange: { min: 900000, max: 1300000, currency: 'INR' },
    description:
      'Manage design operations and cross-functional delivery.',
    skills: ['Operations', 'Coordination', 'Planning'],
    tags: ['design-ops', 'producer'],
    link: 'https://www.naukri.com/job-listings-design-producer-coralflow-158'
  },
  {
    id: 159,
    title: 'Accessibility Specialist',
    company: 'BlueAccess',
    location: 'Pune',
    type: 'Full-time',
    category: 'Design',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1400000, max: 2000000 },
    salaryRange: { min: 1400000, max: 2000000, currency: 'INR' },
    description:
      'Ensure WCAG compliance and inclusive design practices.',
    skills: ['WCAG', 'Audit', 'Screen Readers'],
    tags: ['a11y', 'design'],
    link: 'https://www.indeed.com/viewjob?jk=blueaccess-accessibility-specialist-159'
  },
  {
    id: 160,
    title: 'Design Intern',
    company: 'AquaDesign',
    location: 'Chennai',
    type: 'Internship',
    category: 'Design',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 150000, max: 250000 },
    salaryRange: { min: 150000, max: 250000, currency: 'INR' },
    description:
      'Support the design team with assets and research.',
    skills: ['Figma', 'Research', 'Presentation'],
    tags: ['intern', 'design'],
    link: 'https://www.linkedin.com/jobs/view/design-intern-at-aquadesign-160'
  },

  // Support (161–170)
  {
    id: 161,
    title: 'Customer Support Specialist',
    company: 'HarborHelp',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Support',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 350000, max: 700000 },
    salaryRange: { min: 350000, max: 700000, currency: 'INR' },
    description:
      'Resolve customer queries via email and chat with empathy.',
    skills: ['Communication', 'Troubleshooting', 'CRM'],
    tags: ['support', 'csat'],
    link: 'https://www.naukri.com/job-listings-customer-support-specialist-harborhelp-161'
  },
  {
    id: 162,
    title: 'Technical Support Engineer',
    company: 'BlueAssist',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Support',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Handle L2 technical issues and write KB articles.',
    skills: ['Linux', 'Networking', 'Scripting'],
    tags: ['tech-support', 'l2'],
    link: 'https://www.indeed.com/viewjob?jk=blueassist-technical-support-engineer-162'
  },
  {
    id: 163,
    title: 'Customer Success Associate',
    company: 'CoralSuccess',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Support',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 500000, max: 900000 },
    salaryRange: { min: 500000, max: 900000, currency: 'INR' },
    description:
      'Assist with onboarding, QBRs, and adoption tracking.',
    skills: ['Onboarding', 'Communication', 'Reporting'],
    tags: ['success', 'associate'],
    link: 'https://www.linkedin.com/jobs/view/customer-success-associate-at-coralsuccess-163'
  },
  {
    id: 164,
    title: 'Support Team Lead',
    company: 'AquaCare',
    location: 'Pune',
    type: 'Full-time',
    category: 'Support',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Lead support specialists and drive SLA improvements.',
    skills: ['Leadership', 'SLA Mgmt', 'Zendesk'],
    tags: ['support', 'lead'],
    link: 'https://www.naukri.com/job-listings-support-team-lead-aquacare-164'
  },
  {
    id: 165,
    title: 'Community Support',
    company: 'BlueCommunity',
    location: 'Remote',
    type: 'Part-time',
    category: 'Support',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 300000, max: 600000 },
    salaryRange: { min: 300000, max: 600000, currency: 'INR' },
    description:
      'Engage with users on community channels and triage feedback.',
    skills: ['Community', 'Social', 'Writing'],
    tags: ['community', 'support'],
    link: 'https://www.indeed.com/viewjob?jk=bluecommunity-community-support-165'
  },
  {
    id: 166,
    title: 'Support Engineer (DevTools)',
    company: 'HarborDevSupport',
    location: 'Chennai',
    type: 'Full-time',
    category: 'Support',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1300000 },
    salaryRange: { min: 900000, max: 1300000, currency: 'INR' },
    description:
      'Support SDKs/CLIs and triage GitHub issues with repros.',
    skills: ['Git', 'CLI', 'JavaScript'],
    tags: ['devtools', 'support'],
    link: 'https://www.linkedin.com/jobs/view/support-engineer-devtools-at-harbordevsupport-166'
  },
  {
    id: 167,
    title: 'Technical Support Specialist (Night Shift)',
    company: 'AquaAssist',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Support',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 400000, max: 700000 },
    salaryRange: { min: 400000, max: 700000, currency: 'INR' },
    description:
      'Provide support for US time zones; primarily email and chat.',
    skills: ['English', 'CRM', 'Troubleshooting'],
    tags: ['night-shift', 'support'],
    link: 'https://www.naukri.com/job-listings-technical-support-specialist-night-shift-aquaassist-167'
  },
  {
    id: 168,
    title: 'Onboarding Specialist',
    company: 'CoralOnboard',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Support',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Guide customers through onboarding to time-to-value.',
    skills: ['Training', 'Docs', 'Coordination'],
    tags: ['onboarding', 'success'],
    link: 'https://www.indeed.com/viewjob?jk=coralonboard-onboarding-specialist-168'
  },
  {
    id: 169,
    title: 'Renewals Manager',
    company: 'BlueRenew',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Support',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1200000, max: 1800000 },
    salaryRange: { min: 1200000, max: 1800000, currency: 'INR' },
    description:
      'Drive renewals motions and identify expansion opportunities.',
    skills: ['Negotiation', 'Metrics', 'Account Mgmt'],
    tags: ['renewals', 'success'],
    link: 'https://www.linkedin.com/jobs/view/renewals-manager-at-bluerenew-169'
  },
  {
    id: 170,
    title: 'Customer Support Intern',
    company: 'HarborHelpDesk',
    location: 'Pune',
    type: 'Internship',
    category: 'Support',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 150000, max: 250000 },
    salaryRange: { min: 150000, max: 250000, currency: 'INR' },
    description:
      'Assist with ticket triage and documentation updates.',
    skills: ['Communication', 'Documentation', 'Basics of Support'],
    tags: ['intern', 'support'],
    link: 'https://www.naukri.com/job-listings-customer-support-intern-harborhelpdesk-170'
  },

  // Operations/HR/Finance (171–180)
  {
    id: 171,
    title: 'Operations Analyst',
    company: 'BlueOpsCenter',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Operations',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Build dashboards, automate workflows, and track OKRs.',
    skills: ['SQL', 'Excel', 'Automation'],
    tags: ['ops', 'analytics'],
    link: 'https://www.indeed.com/viewjob?jk=blueopscenter-operations-analyst-171'
  },
  {
    id: 172,
    title: 'Business Operations Manager',
    company: 'HarborBizOps',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Operations',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1300000, max: 2000000 },
    salaryRange: { min: 1300000, max: 2000000, currency: 'INR' },
    description:
      'Optimize processes and run cross-functional initiatives.',
    skills: ['Process', 'Stakeholder Mgmt', 'Leadership'],
    tags: ['ops', 'process'],
    link: 'https://www.linkedin.com/jobs/view/business-operations-manager-at-harborbizops-172'
  },
  {
    id: 173,
    title: 'Procurement Specialist',
    company: 'CoralProcure',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Operations',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Manage vendor evaluations and purchase orders.',
    skills: ['Negotiation', 'Vendor Mgmt', 'Compliance'],
    tags: ['procurement', 'vendor'],
    link: 'https://www.naukri.com/job-listings-procurement-specialist-coralprocure-173'
  },
  {
    id: 174,
    title: 'HR Generalist',
    company: 'AquaPeople',
    location: 'Chennai',
    type: 'Full-time',
    category: 'HR',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 700000, max: 1100000 },
    salaryRange: { min: 700000, max: 1100000, currency: 'INR' },
    description:
      'Run HR ops, onboarding, engagement, and policy compliance.',
    skills: ['Onboarding', 'HRIS', 'Policy'],
    tags: ['hr', 'ops'],
    link: 'https://www.indeed.com/viewjob?jk=aquapeople-hr-generalist-174'
  },
  {
    id: 175,
    title: 'Talent Acquisition Partner',
    company: 'BlueHirePro',
    location: 'Pune',
    type: 'Full-time',
    category: 'HR',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 800000, max: 1200000 },
    salaryRange: { min: 800000, max: 1200000, currency: 'INR' },
    description:
      'Manage hiring pipeline for tech and non-tech roles.',
    skills: ['Sourcing', 'ATS', 'Interviewing'],
    tags: ['recruiting', 'talent'],
    link: 'https://www.linkedin.com/jobs/view/talent-acquisition-partner-at-bluehirepro-175'
  },
  {
    id: 176,
    title: 'Payroll Specialist',
    company: 'HarborPayroll',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Finance',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 600000, max: 900000 },
    salaryRange: { min: 600000, max: 900000, currency: 'INR' },
    description:
      'Run payroll cycles and maintain compliance.',
    skills: ['Payroll', 'Compliance', 'Excel'],
    tags: ['payroll', 'finance'],
    link: 'https://www.naukri.com/job-listings-payroll-specialist-harborpayroll-176'
  },
  {
    id: 177,
    title: 'Finance Analyst (FP&A)',
    company: 'CoralFinance',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'Finance',
    experience: 'Mid',
    experienceLevel: 'Mid',
    salary: { min: 900000, max: 1400000 },
    salaryRange: { min: 900000, max: 1400000, currency: 'INR' },
    description:
      'Budgeting, forecasting, and monthly variance analysis.',
    skills: ['Excel', 'Modeling', 'SQL'],
    tags: ['fp&a', 'forecasting'],
    link: 'https://www.indeed.com/viewjob?jk=coralfinance-finance-analyst-fpa-177'
  },
  {
    id: 178,
    title: 'Accounts Executive (AR/AP)',
    company: 'AquaAccounts',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Finance',
    experience: 'Junior',
    experienceLevel: 'Junior',
    salary: { min: 400000, max: 700000 },
    salaryRange: { min: 400000, max: 700000, currency: 'INR' },
    description:
      'Manage invoicing, collections, vendor payments, and reconciliations.',
    skills: ['Tally', 'Invoicing', 'Reconciliation'],
    tags: ['ar', 'ap'],
    link: 'https://www.linkedin.com/jobs/view/accounts-executive-ar-ap-at-aquaaccounts-178'
  },
  {
    id: 179,
    title: 'Compliance Officer',
    company: 'BlueCompliance',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'Finance',
    experience: 'Senior',
    experienceLevel: 'Senior',
    salary: { min: 1200000, max: 1800000 },
    salaryRange: { min: 1200000, max: 1800000, currency: 'INR' },
    description:
      'Ensure regulatory compliance and audit readiness.',
    skills: ['IFRS', 'SOX', 'Audit'],
    tags: ['compliance', 'audit'],
    link: 'https://www.naukri.com/job-listings-compliance-officer-bluecompliance-179'
  },
  {
    id: 180,
    title: 'Operations Intern',
    company: 'HarborOpsSchool',
    location: 'Chennai',
    type: 'Internship',
    category: 'Operations',
    experience: 'Junior',
    experienceLevel: 'Intern',
    salary: { min: 150000, max: 250000 },
    salaryRange: { min: 150000, max: 250000, currency: 'INR' },
    description:
      'Support ops team with reporting and process documentation.',
    skills: ['Excel', 'Documentation', 'Communication'],
    tags: ['intern', 'ops'],
    link: 'https://www.indeed.com/viewjob?jk=harboropsschool-operations-intern-180'
  },
];

export default jobsData;
