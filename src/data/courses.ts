
export interface Course {
  id: number;
  code: string;
  title: string;
  description: string;
  department: string;
  level: "Undergraduate" | "Graduate" | "Certificate" | "Professional Development";
  credits?: number;
  duration?: string;
  schedule?: string;
  prerequisites?: string[];
  learningOutcomes?: string[];
  assessmentMethods?: {
    name: string;
    weight: number;
  }[];
  syllabus?: {
    title: string;
    description: string;
    topics: string[];
  }[];
  instructors?: {
    id: number;
    name: string;
    title: string;
    image?: string;
    bio?: string;
  }[];
}

export const coursesData: Course[] = [
  {
    id: 1,
    code: "CS301",
    title: "Introduction to Computer Science",
    description: "This course provides a comprehensive introduction to the fundamental concepts of computer science, covering topics such as algorithms, data structures, programming paradigms, and computational thinking.",
    department: "Computer Science",
    level: "Undergraduate",
    credits: 3,
    duration: "16 weeks",
    schedule: "Mon/Wed 10:00 AM - 11:30 AM",
    prerequisites: ["MATH101"],
    learningOutcomes: [
      "Understand fundamental principles of computer science and programming",
      "Analyze and solve problems using algorithmic thinking",
      "Implement basic data structures and algorithms in a programming language",
      "Evaluate the efficiency and effectiveness of different computational approaches",
      "Develop simple software applications following best practices"
    ],
    assessmentMethods: [
      {
        name: "Assignments",
        weight: 30
      },
      {
        name: "Midterm Exam",
        weight: 25
      },
      {
        name: "Final Project",
        weight: 25
      },
      {
        name: "Final Exam",
        weight: 20
      }
    ],
    syllabus: [
      {
        title: "Introduction to Computing",
        description: "Overview of computer science and its role in the modern world",
        topics: [
          "History of computing",
          "Binary representation and logic",
          "Computer architecture basics",
          "Introduction to programming concepts"
        ]
      },
      {
        title: "Programming Fundamentals",
        description: "Core concepts in programming and software development",
        topics: [
          "Variables, data types, and operators",
          "Control structures and loops",
          "Functions and modular programming",
          "Error handling and debugging"
        ]
      },
      {
        title: "Data Structures",
        description: "Fundamental data structures and their implementations",
        topics: [
          "Arrays and lists",
          "Stacks and queues",
          "Trees and graphs",
          "Hash tables"
        ]
      },
      {
        title: "Algorithms and Problem Solving",
        description: "Techniques for designing and analyzing algorithms",
        topics: [
          "Algorithm design strategies",
          "Searching and sorting algorithms",
          "Algorithm analysis and Big O notation",
          "Recursion and iteration"
        ]
      }
    ],
    instructors: [
      {
        id: 1,
        name: "Dr. Jane Smith",
        title: "Associate Professor",
        image: "/placeholder.svg",
        bio: "Dr. Smith has over 15 years of experience teaching computer science and has published numerous papers on algorithms and computational theory."
      },
      {
        id: 2,
        name: "Prof. Robert Johnson",
        title: "Assistant Professor",
        image: "/placeholder.svg",
        bio: "Prof. Johnson specializes in programming languages and software engineering, with industry experience at major tech companies."
      }
    ]
  },
  {
    id: 2,
    code: "BIO205",
    title: "Principles of Biology",
    description: "A comprehensive exploration of the fundamental principles of biology, including cell structure and function, genetics, evolution, and ecology.",
    department: "Biology",
    level: "Undergraduate",
    credits: 4,
    duration: "16 weeks",
    schedule: "Tue/Thu 1:00 PM - 2:30 PM, Lab: Fri 1:00 PM - 3:00 PM",
    prerequisites: ["CHEM101"],
    learningOutcomes: [
      "Understand the structure and function of cells as the fundamental units of life",
      "Explain the principles of inheritance and genetic variation",
      "Analyze the mechanisms of evolution and natural selection",
      "Describe the interactions between organisms and their environment",
      "Apply the scientific method to biological questions"
    ],
    assessmentMethods: [
      {
        name: "Lab Reports",
        weight: 30
      },
      {
        name: "Midterm Exams (2)",
        weight: 30
      },
      {
        name: "Research Paper",
        weight: 15
      },
      {
        name: "Final Exam",
        weight: 25
      }
    ]
  },
  {
    id: 3,
    code: "ENG401",
    title: "Advanced Creative Writing",
    description: "An advanced workshop in creative writing that focuses on developing skills in fiction, poetry, and creative non-fiction through intensive writing practice and constructive criticism.",
    department: "English",
    level: "Undergraduate",
    credits: 3,
    prerequisites: ["ENG201", "ENG301"],
    schedule: "Wed 2:00 PM - 5:00 PM"
  },
  {
    id: 4,
    code: "MATH302",
    title: "Differential Equations",
    description: "A study of ordinary differential equations, including analytical, numerical, and qualitative approaches to solving first-order and higher-order equations and systems.",
    department: "Mathematics",
    level: "Undergraduate",
    credits: 3,
    prerequisites: ["MATH201", "MATH203"]
  },
  {
    id: 5,
    code: "BUS505",
    title: "Strategic Management",
    description: "This graduate course examines the formulation and implementation of business strategies in competitive environments, focusing on strategic analysis, decision-making, and the management of strategic change.",
    department: "Business Administration",
    level: "Graduate",
    credits: 3
  },
  {
    id: 6,
    code: "PSY320",
    title: "Cognitive Psychology",
    description: "An exploration of the mental processes involved in perception, attention, memory, language, problem solving, and decision making.",
    department: "Psychology",
    level: "Undergraduate",
    credits: 3
  }
];
