export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Kit Tracker - Spatial Asset Management App',
    desc: 'Kit Tracker is an app that tracks objects in real time and distinguishes if they are part of a group, it can also tell if an item in that group is missing, misplaced or in the wrong position, it uses bounding boxes and reference objects to guide the user into correctly positioning each object.',
    subdesc:
      'Built for VisionOS with SwiftUI, CoreML and Reality Composer Pro, Kit tracker leverages the Apple Vision Pro\'s spatial computing capabilities to deliver realtime object tracking with enough presicion to tell if an item is missing, misplaced, or in the wrong position.',
    href: '',
    texture: '/textures/project/kitTracker.mov',
    logo: '/assets/icons/kitTracker.png',
    logoStyle: {
      backgroundColor: '#3495eb',
      border: '0.2px solid ##162cf2',
      boxShadow: '0px 0px 60px 0px #1d16f2',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'SwiftUI',
        path: '/assets/logos/swiftLogo.svg',
      },
      {
        id: 2,
        name: 'CoreML',
        path: '/assets/logos/core-ml.png',
      },
    ],
  },
  {
    title: 'Brainstorm - Brainstorming & Colaboration Tool',
    desc: 'Brainstorm is a collaborative tool designed to facilitate brainstorming sessions and group work with a spatial app and a mobile companion app, where users can share their ideas and use the spatialapp to merge or categorize them with the use of AI.',
    subdesc:
      'Brainstorm allows users to collaborate in real-time, leveraging spatial computing and AI to enhance idea generation and organization.',
    href: '',
    texture: '/textures/project/brainstorm.mov',
    logo: '/assets/icons/brainstorm.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'SwiftUI',
        path: '/assets/logos/swiftLogo.svg',
      },
      {
        id: 2,
        name: 'OpenAI',
        path: '/assets/logos/openAI.svg',
      }
    ],
  }
];

interface Sizes {
  macbookScale: number;
  macbookPosition: [number, number, number];
  visionProScale: number;
  visionProPosition: [number, number, number];
  iphoneScale: number;
  iphonePosition: [number, number, number];
  Position: [number, number, number];
  reactLogoPosition: [number, number, number];
  ringPosition: [number, number, number];
  targetPosition: [number, number, number];
}

export const calculateSizes = (isSmall: boolean, isMobile: boolean, isTablet: boolean): Sizes => {
  return {
    macbookScale: isSmall ? 0.15 : isMobile ? 0.2 : 0.38,
    macbookPosition: isMobile ? [-2.5, -2.7, 3.1] : [-6.9, -8.1, -8.7],
    visionProScale: isSmall ? 18.0 : isMobile ? 19.0 : 28.0,
    visionProPosition: isMobile ? [4, -4.7, 3.1] : [8.1, -5.7, 1.7],
    iphoneScale: isSmall ? 0.3 : isMobile ? 0.45 : 0.62,
    iphonePosition: isMobile ? [3.1, 0.1, -10] : [3.1, -2.7, -8.7],
    Position: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Softtek',
    pos: 'Software Developer',
    duration: '2025 - Present',
    title: "Developed enterprise-grade applications across iOS, web, and mixed reality platforms, integrating AI agents, RAG pipelines, and cloud services to automate workflows and enhance developer and operational efficiency.",
    icon: '/assets/logos/softtek.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Enviaflores',
    pos: 'iOS Developer Intern',
    duration: '2024 - 2025',
    title: "Contributed to a production iOS application using SwiftUI and Objective-C, implementing new features, improving performance, and enhancing user experience for large-scale commercial releases.",
    icon: '/assets/logos/enviaflores.png',
    animation: 'clapping',
  },

];