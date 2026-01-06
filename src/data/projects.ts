export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  coverImage: string;
  projectType?: 'hardware-software' | 'software-desktop' | 'website-visual' | 'integrated-team' | 'multi-project' | 'thesis' | 'other-works';
  overview: {
    background: string;
    objectives: string[];
    role: string;
    timeline: string;
    tools: string[];
    team?: string;
    challenge?: string;
  };
  process: {
    stage: string;
    description: string;
    images?: string[];
    details?: string[];
  }[];
  outcome: {
    description: string;
    quote: string;
    images: string[];
    metrics?: { label: string; value: string }[];
  };
  subProjects?: {
    title: string;
    description: string;
    image?: string;
    detailedDescription?: string;
    objectives?: string[];
    approach?: string;
    keyFeatures?: string[];
    images?: string[];
    tags?: string[];
  }[];
  technicalDetails?: {
    hardware?: string[];
    software?: string[];
    integration?: string;
  };
  diverseWorks?: {
    category: string;
    items: {
      title: string;
      description: string;
      image: string;
      tags: string[];
    }[];
  }[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'imagecho-frame',
    title: 'Imagecho Frame + App',
    subtitle: 'Smart frame & companion app for interactive photo storytelling',
    tags: ['Hardware + Software', 'IoT', 'Product Design'],
    coverImage: 'https://images.unsplash.com/photo-1614442804207-4d864251c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHBob3RvJTIwZnJhbWV8ZW58MXx8fHwxNzYzMDEzNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    projectType: 'hardware-software',
    overview: {
      background: 'Imagecho Frame reimagines how we experience and share memories in our living spaces. This project encompasses both the physical smart frame hardware design and a sophisticated companion mobile app ecosystem, creating an emotional connection between distant family members through seamless hardware-software integration.',
      objectives: [
        'Design an intuitive companion app for photo management and curation',
        'Create seamless interaction between physical frame and digital ecosystem',
        'Develop durable, aesthetically pleasing hardware that integrates into home environments',
        'Enable meaningful storytelling through contextual photo displays'
      ],
      role: 'Lead Product & UX/UI Designer',
      timeline: '6 months (2024)',
      tools: ['Figma', 'Protopie', 'After Effects', 'Arduino', 'Rhino 3D', 'React Native'],
      team: '4 designers, 2 hardware engineers, 2 software engineers',
      challenge: 'Balancing complex IoT functionality with simple, intuitive user experience while ensuring hardware durability and aesthetic appeal'
    },
    technicalDetails: {
      hardware: [
        'Custom e-ink display with high color accuracy and low power consumption',
        'Motion sensors for presence detection and contextual display',
        'Ambient light sensors for automatic brightness adjustment',
        'Wireless charging base station with magnetic alignment'
      ],
      software: [
        'Cross-platform mobile apps (iOS and Android) built with React Native',
        'Cloud-based photo synchronization with end-to-end encryption',
        'AI-powered photo curation engine using TensorFlow',
        'Family sharing and collaboration features with real-time updates'
      ],
      integration: 'Bluetooth Low Energy for local communication, WiFi for cloud sync, with offline-first architecture ensuring functionality during connectivity issues. Hardware and software communicate through custom REST API and WebSocket protocol.'
    },
    process: [
      {
        stage: 'Hardware Research & Prototyping',
        description: 'Explored various display technologies (e-ink, LCD, LED) and conducted material studies for the frame housing. Built multiple physical prototypes testing form factors, durability, and aesthetic integration with home interiors.',
        images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'],
        details: [
          'Tested 5 different display technologies for optimal color accuracy and power efficiency',
          'Created 12 physical mockups exploring materials like wood, aluminum, and recycled plastics',
          'Conducted durability tests simulating 3 years of daily use'
        ]
      },
      {
        stage: 'Software Ideation & Architecture',
        description: 'Designed the information architecture for the companion app, exploring various interaction models including gesture control, voice commands, and app-based curation. Developed technical architecture for seamless hardware-software synchronization.',
        images: ['https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800'],
        details: [
          'Created 3 different app navigation paradigms and tested with 20 users',
          'Designed offline-first data architecture for reliable performance',
          'Developed custom protocol for low-latency frame communication'
        ]
      },
      {
        stage: 'Integrated Prototyping',
        description: 'Built fully functional prototypes integrating hardware and software components. Tested the complete system end-to-end, iterating on both physical and digital touchpoints to ensure seamless user experience.',
        images: ['https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800']
      },
      {
        stage: 'User Testing',
        description: 'Conducted in-home usability testing with 20 families across different age groups and tech literacy levels. Refined micro-interactions, simplified setup process, and improved hardware-software pairing experience based on feedback.',
      },
      {
        stage: 'Manufacturing & Launch',
        description: 'Collaborated with manufacturing partners to ensure design fidelity at scale. Created comprehensive design system and technical documentation for scalable product development.',
      }
    ],
    outcome: {
      description: 'The final product seamlessly blends into home environments while providing rich, contextual storytelling. The companion app achieved a 4.6/5 rating in beta testing, with users praising its intuitive curation features. The hardware received praise for its elegant design and reliable performance, with 89% of users reporting daily active use.',
      quote: 'Design as a bridge between human emotion and intelligent systems.',
      images: [
        'https://images.unsplash.com/photo-1614442804207-4d864251c528?w=1200',
        'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200'
      ],
      metrics: [
        { label: 'App Rating', value: '4.6/5' },
        { label: 'Daily Active Users', value: '89%' },
        { label: 'Setup Time', value: '< 3 min' }
      ]
    }
  },
  {
    id: 2,
    slug: 'imagecho-curator',
    title: 'Imagecho Curator',
    subtitle: 'AI-powered desktop photo management application',
    tags: ['Desktop Software', 'AI/ML', 'UX Design'],
    coverImage: 'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyOTQxNjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    projectType: 'software-desktop',
    overview: {
      background: 'Imagecho Curator is a desktop application that uses machine learning to help users manage and rediscover their photo libraries through intelligent organization and emotional storytelling. Built as a native macOS and Windows application, it prioritizes performance and sophisticated interaction design for power users.',
      objectives: [
        'Design transparent AI interactions that build user trust',
        'Create efficient photo curation workflows for large libraries (10k+ photos)',
        'Enable serendipitous photo rediscovery through intelligent algorithms',
        'Develop keyboard-first navigation for professional workflows'
      ],
      role: 'UX Designer & Researcher',
      timeline: '5 months (2024)',
      tools: ['Figma', 'Python', 'TensorFlow', 'Principle', 'Electron'],
      challenge: 'Designing AI transparency and explainability in a way that empowers rather than overwhelms users'
    },
    process: [
      {
        stage: 'Behavioral Research',
        description: 'Analyzed user behaviors in existing photo management apps through diary studies and interviews. Found that most users feel overwhelmed by their photo libraries (average: 15,000 photos) and rarely revisit old memories. Identified that power users value keyboard shortcuts and batch operations.',
        details: [
          'Interviewed 30 photographers and enthusiasts about photo management pain points',
          'Discovered 73% of users have over 10,000 photos but browse less than 2% regularly',
          'Identified 8 core user workflows from import to export'
        ]
      },
      {
        stage: 'AI & Interaction Design',
        description: 'Explored AI-assisted curation models that balance automation with user control. Designed an "explainable AI" interface where users can understand and override algorithmic decisions. Created sophisticated keyboard navigation and batch editing capabilities.',
        details: [
          'Designed 3-tier AI suggestion system: confident, suggested, and uncertain',
          'Developed visual explanations for why AI made certain grouping decisions',
          'Created 40+ keyboard shortcuts for efficient power-user workflows'
        ]
      },
      {
        stage: 'Desktop-Specific Prototyping',
        description: 'Built high-fidelity interactive prototypes testing different AI suggestion interfaces, batch operation patterns, and feedback mechanisms. Optimized for larger screens and precision input (mouse, trackpad, keyboard).',
        images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800']
      },
      {
        stage: 'Iterative Testing',
        description: 'Conducted 5 rounds of usability testing with 25 users to refine AI transparency and control mechanisms. Each iteration focused on reducing cognitive load while increasing user control.',
      },
      {
        stage: 'Performance Optimization',
        description: 'Worked closely with engineering to ensure the application could handle libraries of 100k+ photos with smooth scrolling, instant search, and responsive AI processing.',
      }
    ],
    outcome: {
      description: 'The AI curator successfully reduced photo management time by 60% while increasing user engagement with old memories by 3x. Users particularly praised the keyboard-first design and AI transparency features. The application handles libraries up to 150,000 photos with sub-second search performance.',
      quote: 'Intelligent systems should augment human intention, not replace it.',
      images: [
        'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?w=1200',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200'
      ],
      metrics: [
        { label: 'Time Saved', value: '60%' },
        { label: 'Memory Engagement', value: '+3x' },
        { label: 'Search Performance', value: '< 1s' }
      ]
    }
  },
  {
    id: 3,
    slug: 'gesture-interaction',
    title: 'Gesture-based Interaction',
    subtitle: 'Web platform for cross-cultural gesture communication',
    tags: ['Website Design', 'Visual Design', 'Web Development'],
    coverImage: 'https://images.unsplash.com/photo-1758600587382-2d7da8b9e361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwZ2VzdHVyZSUyMGludGVyYWN0aW9ufGVufDF8fHx8MTc2MzAxMzU1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    projectType: 'website-visual',
    overview: {
      background: 'An experimental web platform exploring how gesture-based interactions can bridge cultural and linguistic barriers in digital communication. This project focused heavily on visual design language, motion design, and creating an immersive web experience that showcases the research findings through interactive storytelling.',
      objectives: [
        'Design culturally inclusive gesture vocabularies and visual systems',
        'Create responsive real-time interaction feedback with sophisticated motion design',
        'Build accessible gesture recognition systems for web browsers',
        'Develop compelling visual narrative showcasing cross-cultural research'
      ],
      role: 'Interaction Designer, Visual Designer & Web Developer',
      timeline: '4 months (2023)',
      tools: ['JavaScript', 'TensorFlow.js', 'Figma', 'WebGL', 'Three.js', 'GSAP'],
      challenge: 'Creating a visually rich, performant web experience while handling real-time ML gesture recognition in the browser'
    },
    process: [
      {
        stage: 'Cross-Cultural Research',
        description: 'Conducted cross-cultural studies on gesture meanings across 8 different cultures (Chinese, Japanese, Indian, Middle Eastern, European, African, Latin American, North American). Identified universal and culturally-specific gestures through interviews and video analysis.',
        details: [
          'Analyzed 200+ gesture variations across cultures',
          'Identified 15 "universal" gestures with minimal cultural conflict',
          'Documented 45 gestures with culturally-specific meanings'
        ]
      },
      {
        stage: 'Visual Design System',
        description: 'Developed a comprehensive visual design system that could represent gestures abstractly while maintaining cultural sensitivity. Created motion principles for gesture feedback and designed an editorial-style layout for research presentation.',
        images: ['https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800'],
        details: [
          'Designed custom illustration style for 60+ gesture representations',
          'Created 12-step motion design system for gesture feedback',
          'Developed color system representing different cultural contexts'
        ]
      },
      {
        stage: 'Web Development & Prototyping',
        description: 'Built the web platform using modern web technologies, implementing real-time gesture recognition with TensorFlow.js and creating immersive 3D visualizations with WebGL and Three.js. Optimized for performance across devices.',
        images: ['https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800']
      },
      {
        stage: 'Interactive Storytelling',
        description: 'Designed scroll-based narrative experience that guides users through the research findings, allowing them to interact with gesture recognition in real-time while learning about cultural contexts.',
      },
      {
        stage: 'International Testing',
        description: 'Tested with international participants (50+ users across 8 countries) to validate cultural inclusivity, technical accuracy, and overall user experience.',
      }
    ],
    outcome: {
      description: 'The platform achieved 92% gesture recognition accuracy across diverse user groups and sparked conversations about inclusive interaction design. The website received recognition for its sophisticated visual design and was featured in design publications. Average session time of 8 minutes indicates strong engagement with the content.',
      quote: 'Gestures speak louder than words when words divide us.',
      images: [
        'https://images.unsplash.com/photo-1758600587382-2d7da8b9e361?w=1200',
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200'
      ],
      metrics: [
        { label: 'Recognition Accuracy', value: '92%' },
        { label: 'Avg. Session Time', value: '8 min' },
        { label: 'Countries Tested', value: '8' }
      ]
    }
  },
  {
    id: 4,
    slug: 'urban-rest-hub',
    title: 'Urban Rest Hub',
    subtitle: 'Integrated public space design collaboration',
    tags: ['Team Project', 'Service Design', 'Urban Planning'],
    coverImage: 'https://images.unsplash.com/photo-1604071255486-e82a50924cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHB1YmxpYyUyMHNwYWNlfGVufDF8fHx8MTc2MzAxMzU1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    projectType: 'integrated-team',
    overview: {
      background: 'Urban Rest Hub is a large-scale service design initiative reimagining public transport waiting areas as restful, productive micro-environments for urban commuters. This integrated team project brought together designers, urban planners, transit authorities, and community stakeholders in a collaborative design process.',
      objectives: [
        'Design calming spaces within chaotic transit environments',
        'Create flexible modules adaptable to different transit contexts',
        'Enable productive waiting through thoughtful service touchpoints',
        'Ensure accessibility and inclusivity across diverse user groups'
      ],
      role: 'Service Designer & Team Lead',
      timeline: '7 months (2023)',
      tools: ['Service blueprints', 'Figma', 'Physical prototyping', 'Ethnography', 'Workshop facilitation'],
      team: 'Cross-functional team: 3 service designers, 2 urban planners, 1 architect, 4 transit authority representatives, 12 community stakeholders',
      challenge: 'Balancing diverse stakeholder needs while navigating complex regulatory requirements and operational constraints'
    },
    process: [
      {
        stage: 'Collaborative Research',
        description: 'Led participatory research activities observing commuter behaviors at 12 transit hubs. Facilitated workshops with transit authorities and community groups to identify stress points and unmet needs during waiting periods.',
        images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'],
        details: [
          'Conducted 200+ hours of observational research across 12 locations',
          'Facilitated 8 co-design workshops with 45 total participants',
          'Created journey maps for 7 different commuter personas'
        ]
      },
      {
        stage: 'Stakeholder Co-Design',
        description: 'Organized intensive co-design sessions bringing together commuters, transit authorities, urban planners, and accessibility advocates to develop service concepts that balance public good with operational constraints.',
        details: [
          'Facilitated 6 full-day co-design workshops over 3 months',
          'Aligned stakeholder priorities through value mapping exercises',
          'Developed shared design principles across all stakeholder groups'
        ]
      },
      {
        stage: 'Integrated Prototyping',
        description: 'Built 1:1 scale physical prototypes collaborating with architects and industrial designers. Tested in real transit environments, iterating on materials, acoustics, lighting, and digital touchpoints based on feedback from all stakeholder groups.',
        images: ['https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800']
      },
      {
        stage: 'Service Blueprint & System Design',
        description: 'Created comprehensive service blueprints documenting all touchpoints, backstage processes, and stakeholder interactions. Developed maintenance protocols, digital service components, and implementation guidelines.',
      },
      {
        stage: 'Pilot Implementation',
        description: 'Led pilot installation in 3 stations with ongoing monitoring, community feedback sessions, and refinement based on real-world usage patterns. Coordinated between design team, construction, transit operations, and community representatives.',
      }
    ],
    outcome: {
      description: 'The pilot installations saw 78% positive feedback and 40% increase in perceived waiting comfort. The collaborative process resulted in a replicable system that has been approved for city-wide rollout across 25 stations. The project demonstrated the value of integrated, stakeholder-inclusive design processes.',
      quote: 'Public space design is an act of civic care.',
      images: [
        'https://images.unsplash.com/photo-1604071255486-e82a50924cf1?w=1200',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200'
      ],
      metrics: [
        { label: 'User Satisfaction', value: '78%' },
        { label: 'Comfort Increase', value: '+40%' },
        { label: 'Planned Rollout', value: '25 stations' }
      ]
    }
  },
  {
    id: 5,
    slug: 'food-waste-awareness',
    title: 'Food Waste Awareness',
    subtitle: 'Comprehensive service system with three sub-projects',
    tags: ['Multi-Project', 'Service Design', 'Sustainability'],
    coverImage: 'https://images.unsplash.com/photo-1635527643921-ce2b9bbd5728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwd2FzdGUlMjBraXRjaGVufGVufDF8fHx8MTc2MzAxMjAzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    projectType: 'multi-project',
    overview: {
      background: 'A comprehensive service design system addressing household food waste through awareness, planning tools, and behavioral interventions. This large-scale project consists of three distinct but interconnected sub-projects, each targeting different stages of the food lifecycle and different user touchpoints.',
      objectives: [
        'Design non-judgmental awareness interventions across the food lifecycle',
        'Create practical planning and tracking tools for households',
        'Build sustainable behavioral change through positive reinforcement',
        'Develop scalable interventions for grocery stores, homes, and communities'
      ],
      role: 'Lead Service Designer',
      timeline: '8 months (2022-2023)',
      tools: ['Service design toolkit', 'Figma', 'Mobile prototyping', 'Data analytics', 'IoT sensors'],
      team: '5 designers, 2 behavioral psychologists, 3 sustainability consultants',
      challenge: 'Creating cohesive system across three distinct contexts while maintaining consistent behavioral design principles'
    },
    subProjects: [
      {
        title: 'FreshRoute: Autonomous Food Rescue Vehicle',
        description: 'Mobile autonomous vehicle selling near-expired food at discounted prices, combining industrial design, interaction design, and brand identity.',
        image: 'https://images.unsplash.com/photo-1688486236365-1cde4f2cb068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwdmVoaWNsZSUyMGZvb2QlMjBkZWxpdmVyeXxlbnwxfHx8fDE3Njc2NzgwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'FreshRoute reimagines food rescue through an autonomous mobile marketplace that brings near-expired but perfectly edible food directly to neighborhoods at accessible prices. The project combines industrial design for the vehicle itself, interaction design for the customer-facing interface, and comprehensive branding to destigmatize "rescued" food.',
        objectives: [
          'Design an approachable, non-stigmatizing brand identity for rescued food',
          'Create intuitive touchscreen interaction for browsing and purchasing',
          'Develop compact vehicle design optimized for urban navigation',
          'Build trust through transparent freshness indicators and quality assurance'
        ],
        approach: 'The design process began with ethnographic research in grocery stores and food banks, studying customer perceptions of discounted food. The vehicle\'s industrial design prioritizes accessibility with low entry points and clear sightlines. The interaction design features a playful, farmers-market-inspired interface that celebrates fresh food rather than emphasizing "waste." The brand identity uses warm, natural colors and friendly typography to create an inviting, premium feel.',
        keyFeatures: [
          'Compact autonomous vehicle design (2.5m x 1.5m footprint) optimized for narrow urban streets',
          'Large touchscreen with accessible height and intuitive card-based browsing interface',
          'Real-time freshness indicators using color-coded system (eat today / eat this week)',
          'Brand identity emphasizing "fresh rescue" rather than waste, with playful vegetable mascots',
          'Modular refrigeration zones maintaining optimal temperature for different food types',
          'QR code payment integration and loyalty program to build repeat customers'
        ],
        images: [
          'https://images.unsplash.com/photo-1688486236365-1cde4f2cb068?w=1200',
          'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200',
          'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200'
        ],
        tags: ['Industrial Design', 'Interaction Design', 'Branding']
      },
      {
        title: 'Edible Interactive Garden',
        description: 'Public installation exploring playful interaction with edible plants, combining urban gardening with experiential design to build emotional connections with food sources.',
        image: 'https://images.unsplash.com/photo-1724485294614-69d2194b75bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGdhcmRlbiUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzY3Njc4MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'The Edible Interactive Garden is a public installation that transforms urban spaces into playful learning environments where visitors can interact with growing food through touch, sound, and gesture-based interactions. Designed to reconnect urban residents with their food sources and reduce waste by fostering appreciation for how food grows.',
        objectives: [
          'Create engaging tactile and sensory experiences with edible plants',
          'Educate visitors about seasonal growing cycles and food origins',
          'Build emotional connection between urban residents and agriculture',
          'Design durable outdoor installation suitable for public spaces'
        ],
        approach: 'The garden features modular raised beds with embedded sensors that respond to touch, creating gentle light and sound feedback. Each plant zone includes interactive elements: scent chambers that release herb aromas when activated, tactile texture stations comparing leaves, and growth visualization displays showing time-lapse plant development. The design uses natural materials (wood, stone, recycled metal) to blend with park environments while adding whimsical interactive elements.',
        keyFeatures: [
          'Capacitive touch sensors integrated into soil beds triggering responsive LED lighting',
          'Audio feedback system playing nature sounds and educational content when plants are touched',
          'Seasonal rotation calendar with QR codes linking to recipes using currently growing ingredients',
          'Child-height interactive panels with tactile comparisons of plant textures and scents',
          'Harvest participation program where visitors can pick herbs and take home recipes',
          'Weatherproof design with solar-powered electronics and drainage systems'
        ],
        images: [
          'https://images.unsplash.com/photo-1724485294614-69d2194b75bf?w=1200',
          'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200',
          'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200'
        ],
        tags: ['Experiential Design', 'Public Installation', 'Interaction Design']
      },
      {
        title: 'Waste to Product: Material Exploration',
        description: 'Material research exploring product design possibilities using food waste residues, creating sustainable materials from vegetable peels, coffee grounds, and fruit scraps.',
        image: 'https://images.unsplash.com/photo-1752321531522-20d9c4dc2e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1hdGVyaWFscyUyMHByb2R1Y3QlMjBkZXNpZ258ZW58MXx8fHwxNzY3Njc4MDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        detailedDescription: 'This materials research project investigates how common food waste can be transformed into durable, aesthetically pleasing materials for product design. Through systematic experimentation with binders, pressing techniques, and surface treatments, the project developed three distinct material families from waste streams, each suitable for different product applications.',
        objectives: [
          'Develop repeatable processes for creating materials from food waste',
          'Explore aesthetic and structural properties of waste-derived materials',
          'Design product prototypes showcasing material applications',
          'Document scalable manufacturing processes for potential commercialization'
        ],
        approach: 'The research followed a systematic materials science methodology: collecting diverse food waste types, testing various natural binders (starch, agar, gelatin), experimenting with compression and heat-forming techniques, and analyzing durability. Each material was tested for water resistance, structural integrity, and aging. Successful formulas were refined and used to create functional product prototypes including containers, lighting, and decorative objects.',
        keyFeatures: [
          'Vegetable fiber composite: Carrot and onion peels mixed with potato starch creating rigid panels',
          'Coffee ground material: Compressed grounds with bio-resin forming wood-like blocks',
          'Citrus peel leather: Dried and pressed orange peels creating flexible sheet material',
          'Material sample library documenting 25+ successful formulations with recipes',
          'Product prototypes: Food storage containers, pendant lights, and desktop organizers',
          'Lifecycle analysis showing 85% reduction in carbon footprint vs. traditional plastics'
        ],
        images: [
          'https://images.unsplash.com/photo-1752321531522-20d9c4dc2e0b?w=1200',
          'https://images.unsplash.com/photo-1583829365086-a0f0cdc7de6e?w=1200',
          'https://images.unsplash.com/photo-1615397349754-16f8d7eb1f48?w=1200'
        ],
        tags: ['Material Research', 'Product Design', 'Sustainability']
      }
    ],
    process: [
      {
        stage: 'Systemic Research',
        description: 'Conducted comprehensive diary studies with 30 households tracking food purchasing, storage, consumption, and disposal patterns. Identified three key intervention moments: purchasing, storing, and sharing.',
        details: [
          'Mapped complete food lifecycle for 30 households over 8 weeks',
          'Identified average 32% food waste rate before intervention',
          'Found three critical decision points for intervention design'
        ]
      },
      {
        stage: 'Sub-Project Ideation',
        description: 'Developed three distinct but interconnected sub-projects, each targeting one stage of the food lifecycle. Ensured consistent design language and data sharing across all three systems.',
        images: ['https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800']
      },
      {
        stage: 'Parallel Prototyping',
        description: 'Built prototypes for all three sub-projects simultaneously, testing interventions including smart labels, meal planning interfaces, and community sharing platforms. Iterated based on behavioral psychology principles.',
        details: [
          'Created 12 different prototypes across three sub-projects',
          'Tested behavioral interventions based on loss aversion and social proof',
          'Developed unified design system connecting all three experiences'
        ]
      },
      {
        stage: 'Integrated Testing',
        description: 'Ran 3-month pilot with 50 households using all three sub-projects in coordination. Measured waste reduction and behavior change across the complete system.',
        images: ['https://images.unsplash.com/photo-1635527643921-ce2b9bbd5728?w=800']
      },
      {
        stage: 'Impact Analysis',
        description: 'Analyzed quantitative waste reduction data and qualitative behavioral changes. Identified which interventions had the strongest impact and how the three sub-projects reinforced each other.',
      }
    ],
    outcome: {
      description: 'Pilot participants reduced food waste by an average of 35% and reported increased mindfulness around food consumption. The integrated system showed that using all three sub-projects together yielded 2x the impact of using any single intervention alone. The project attracted interest from municipal governments and grocery chains for wider deployment.',
      quote: 'Small daily choices compound into systemic change.',
      images: [
        'https://images.unsplash.com/photo-1635527643921-ce2b9bbd5728?w=1200',
        'https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=1200'
      ],
      metrics: [
        { label: 'Waste Reduction', value: '35%' },
        { label: 'System Synergy', value: '2x impact' },
        { label: 'Participants', value: '50 households' }
      ]
    }
  },
  {
    id: 6,
    slug: 'shared-umbrella',
    title: 'Shared Umbrella',
    subtitle: 'Undergraduate thesis: Hardware + software sharing system',
    tags: ['Thesis Project', 'Product + Service', 'Sustainability'],
    coverImage: 'https://images.unsplash.com/photo-1663590961701-d00b0bc85f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bWJyZWxsYSUyMHJhaW4lMjBtaW5pbWFsfGVufDF8fHx8MTc2MzAxMzU1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    projectType: 'thesis',
    overview: {
      background: 'My undergraduate thesis project exploring sharing economy principles applied to urban umbrella usage. This comprehensive project combined industrial design for the physical umbrella and rental stations with UX design for the mobile app and service design for the complete ecosystem. Designed to reduce waste from disposable umbrellas and improve urban mobility during unexpected rain.',
      objectives: [
        'Design sustainable product-service system combining hardware and software',
        'Create seamless user experience for borrowing and returning umbrellas',
        'Balance business viability with environmental impact',
        'Develop durable umbrella design optimized for sharing model'
      ],
      role: 'Product & Service Designer (Individual Thesis)',
      timeline: '1 year (2021-2022)',
      tools: ['SolidWorks', 'Figma', 'Service blueprints', 'Physical prototyping', 'Arduino'],
      challenge: 'Addressing the complete system from product design to service operations to business model within thesis constraints'
    },
    technicalDetails: {
      hardware: [
        'Durable umbrella design with reinforced ribs and replaceable canopy',
        'RFID tags for tracking and anti-theft',
        'Modular rental stations with weatherproofing and solar charging',
        'Electronic locking mechanism controlled via app'
      ],
      software: [
        'Mobile app for locating stations and managing rentals',
        'Payment integration and subscription model',
        'Station inventory management dashboard',
        'Analytics for usage patterns and maintenance scheduling'
      ],
      integration: 'RFID readers in stations communicate with central server via cellular network. Mobile app uses GPS for station location and QR code scanning for umbrella identification. Real-time inventory synchronization ensures accurate availability.'
    },
    process: [
      {
        stage: 'System Research',
        description: 'Studied existing sharing systems (bikes, scooters, umbrellas in Asia) and umbrella usage patterns in urban environments. Identified pain points in current solutions: poor durability, difficult return process, and limited coverage.',
        images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'],
        details: [
          'Analyzed 5 existing umbrella-sharing services in China and Japan',
          'Conducted street interviews with 100+ commuters about umbrella needs',
          'Calculated that disposable umbrellas contribute 10,000+ tons of waste annually in Beijing alone'
        ]
      },
      {
        stage: 'Product Design',
        description: 'Designed the umbrella itself optimized for durability and sharing context. Explored materials, mechanisms, and aesthetics balancing functionality with appeal. Created station design considering weather resistance and urban integration.',
        details: [
          'Tested 8 different rib materials and mechanisms for durability',
          'Designed modular canopy system allowing easy replacement',
          'Created stations in 3 sizes (compact, medium, high-capacity) for different urban contexts'
        ]
      },
      {
        stage: 'Service Design',
        description: 'Designed integrated system including rental stations, mobile app, and reverse logistics for maintenance and redistribution. Created service blueprints mapping all user and operational touchpoints.',
        images: ['https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800']
      },
      {
        stage: 'Physical Prototyping',
        description: 'Built functional prototypes of both the umbrella and rental station. Tested durability, user experience, and technical reliability. Iterated on locking mechanism and station interface design.',
        details: [
          'Created 5 umbrella prototypes tested over 200 open/close cycles',
          'Built 2 full-scale station prototypes with functional electronics',
          'Tested weatherproofing in simulated rain conditions'
        ]
      },
      {
        stage: 'Campus Pilot',
        description: 'Piloted system on university campus with 3 stations and 30 umbrellas. Tracked usage over 2 months, gathering data on usage patterns, return rates, and user satisfaction. Refined based on real-world feedback.',
        images: ['https://images.unsplash.com/photo-1663590961701-d00b0bc85f4d?w=800']
      }
    ],
    outcome: {
      description: 'The system achieved 85% return rate and positive environmental impact assessment, significantly higher than similar services. Thesis received Outstanding Graduate Award from CAFA and attracted interest from sharing economy startups. The project demonstrated feasibility of combining rigorous product design with service design and business thinking within an academic thesis.',
      quote: 'Shared resources build shared responsibility.',
      images: [
        'https://images.unsplash.com/photo-1663590961701-d00b0bc85f4d?w=1200',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200'
      ],
      metrics: [
        { label: 'Return Rate', value: '85%' },
        { label: 'Campus Users', value: '200+' },
        { label: 'Rentals (2 months)', value: '450+' }
      ]
    }
  },
  {
    id: 7,
    slug: 'other-projects',
    title: 'Other Projects',
    subtitle: 'Motion graphics, traditional crafts & experimental works',
    tags: ['Motion Design', 'Craft', 'Experimental'],
    coverImage: 'https://images.unsplash.com/photo-1525019167271-be1690bb034f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGV4cGVyaW1lbnRhbCUyMGRlc2lnbnxlbnwxfHx8fDE3Njc2NzgxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    projectType: 'other-works',
    overview: {
      background: 'Beyond my core service and product design work, I explore diverse creative mediums including motion graphics, traditional craftsmanship, and experimental design. These projects allow me to investigate new techniques, preserve cultural practices, and push creative boundaries.',
      objectives: [
        'Experiment with motion design and visual storytelling techniques',
        'Preserve and reinterpret traditional craftsmanship practices',
        'Explore the intersection of digital and analog making',
        'Develop interdisciplinary creative skills'
      ],
      role: 'Designer & Creative Explorer',
      timeline: 'Ongoing (2020-Present)',
      tools: ['After Effects', 'Cinema 4D', 'Traditional craft tools', 'Processing', 'Arduino']
    },
    diverseWorks: [
      {
        category: 'Motion Graphics',
        items: [
          {
            title: 'Cultural Bridges: Animation Series',
            description: 'A series of motion graphics exploring cultural symbols and their meanings across Eastern and Western contexts. Uses kinetic typography and abstract shapes to visualize cross-cultural communication.',
            image: 'https://images.unsplash.com/photo-1740174459682-4dd3f72e2512?w=1200',
            tags: ['Motion Design', 'After Effects', 'Cultural Design']
          },
          {
            title: 'Data Visualization: Urban Rhythms',
            description: 'Animated data visualization mapping urban movement patterns and public transport flows in Berlin and Beijing. Created for exhibition at design festival.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
            tags: ['Data Viz', 'Motion Design', 'Urban Studies']
          },
          {
            title: 'Experimental Typography in Motion',
            description: 'Exploration of deconstructed Chinese and Latin typography in dynamic motion, questioning the boundaries between legibility and artistic expression.',
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200',
            tags: ['Typography', '3D Animation', 'Experimental']
          }
        ]
      },
      {
        category: 'Traditional Craft',
        items: [
          {
            title: 'Contemporary Cloisonné',
            description: 'Reinterpretation of traditional Chinese cloisonné enamel technique applied to modern jewelry and small objects. Preserves ancient craft while exploring contemporary aesthetics.',
            image: 'https://images.unsplash.com/photo-1646282998141-8e038879b7c8?w=1200',
            tags: ['Metalwork', 'Traditional Craft', 'Jewelry']
          },
          {
            title: 'Paper Cutting Workshop Series',
            description: 'Community workshop series teaching traditional Chinese paper cutting while participants create contemporary patterns reflecting their own cultural stories.',
            image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200',
            tags: ['Paper Art', 'Community', 'Cultural Preservation']
          },
          {
            title: 'Natural Dye Textiles',
            description: 'Textile experimentation using natural dyes from food waste (onion skins, avocado pits, coffee) to create unique fabric patterns for sustainable fashion applications.',
            image: 'https://images.unsplash.com/photo-1604651767708-f4a4f7d2f3ab?w=1200',
            tags: ['Textile Design', 'Natural Dyes', 'Sustainability']
          }
        ]
      },
      {
        category: 'Experimental',
        items: [
          {
            title: 'Generative Art Installation',
            description: 'Code-based generative artwork using Processing that responds to environmental data (temperature, humidity, sound) to create ever-changing visual compositions.',
            image: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?w=1200',
            tags: ['Generative Art', 'Processing', 'Installation']
          },
          {
            title: 'Speculative Futures: 2050 Rituals',
            description: 'Speculative design project imagining future cultural rituals around technology, food, and human connection in 2050. Includes physical artifacts and narrative storytelling.',
            image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200',
            tags: ['Speculative Design', 'Futures', 'Storytelling']
          },
          {
            title: 'Sound & Space',
            description: 'Experimental installation exploring the relationship between sound, physical space, and human perception through interactive audio-responsive environments.',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200',
            tags: ['Sound Design', 'Interactive', 'Installation']
          }
        ]
      }
    ],
    process: [
      {
        stage: 'Continuous Exploration',
        description: 'These projects emerge from curiosity and personal interests, often developed during weekends or between larger projects. Each explores a different facet of design and making.',
      }
    ],
    outcome: {
      description: 'This ongoing collection of experimental and craft-based work complements my design practice, providing space for creative exploration without client constraints. Many techniques and insights from these projects inform my primary design work.',
      quote: 'Design thrives at the intersection of disciplines.',
      images: [
        'https://images.unsplash.com/photo-1740174459682-4dd3f72e2512?w=1200',
        'https://images.unsplash.com/photo-1646282998141-8e038879b7c8?w=1200'
      ]
    }
  }
];