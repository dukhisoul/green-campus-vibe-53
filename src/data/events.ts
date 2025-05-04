
export interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  category: string;
  image?: string;
  organizer?: string;
  detailedDescription?: string;
  registrationLink?: string;
  fileAttachment?: string;
  schedule?: {
    time: string;
    activity: string;
  }[];
  speakers?: {
    name: string;
    title: string;
    image?: string;
  }[];
}

export const eventsData: Event[] = [
  {
    id: 1,
    title: "Annual College Fair",
    date: "May 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Main Campus Quad",
    description: "Join us for our annual college fair featuring representatives from various departments, student organizations, and campus services.",
    category: "Campus Life",
    image: "/placeholder.svg",
    organizer: "Student Affairs Office",
    detailedDescription: "The Annual College Fair is Green College's largest showcase event of the year. This day-long event brings together representatives from all academic departments, student organizations, and campus services to provide information to prospective and current students. Visitors can explore degree programs, learn about extracurricular opportunities, and connect with faculty and staff. Refreshments will be provided, and several performance groups will entertain throughout the day.",
    registrationLink: "#registration",
    schedule: [
      {
        time: "10:00 AM",
        activity: "Opening Ceremony"
      },
      {
        time: "10:30 AM - 2:30 PM",
        activity: "Department and Organization Booths Open"
      },
      {
        time: "12:00 PM - 1:30 PM",
        activity: "Lunch and Performances"
      },
      {
        time: "2:30 PM - 3:30 PM",
        activity: "Panel Discussion: 'Choosing Your Academic Path'"
      },
      {
        time: "3:30 PM - 4:00 PM",
        activity: "Closing Remarks and Raffle Drawing"
      }
    ],
    speakers: [
      {
        name: "Dr. Emily Johnson",
        title: "Dean of Students",
        image: "/placeholder.svg"
      },
      {
        name: "Prof. Michael Lee",
        title: "Chair of Academic Affairs",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: 2,
    title: "Registration Information Session",
    date: "May 5, 2025",
    time: "3:00 PM - 4:30 PM",
    location: "Student Center Auditorium",
    description: "Learn about the course registration process for the upcoming semester and get your questions answered by academic advisors.",
    category: "Academic",
    image: "/placeholder.svg",
    organizer: "Registrar's Office",
    detailedDescription: "This informational session will cover everything you need to know about registering for courses for the Fall 2025 semester. Academic advisors will be present to guide students through the registration portal, explain course requirements, and address any questions or concerns. Important dates, registration priority, and tips for securing your preferred courses will be discussed. This session is particularly recommended for first-year and transfer students who are new to our registration system.",
    schedule: [
      {
        time: "3:00 PM",
        activity: "Welcome and Overview"
      },
      {
        time: "3:15 PM",
        activity: "Registration Process Demonstration"
      },
      {
        time: "3:45 PM",
        activity: "Common Registration Issues and Solutions"
      },
      {
        time: "4:00 PM",
        activity: "Q&A Session"
      }
    ],
    speakers: [
      {
        name: "Sarah Williams",
        title: "Registrar",
        image: "/placeholder.svg"
      },
      {
        name: "David Chen",
        title: "Academic Advisor",
        image: "/placeholder.svg"
      }
    ],
    fileAttachment: "Registration_Guide.pdf"
  },
  {
    id: 3,
    title: "CS Lab Opening Ceremony",
    date: "May 15, 2025",
    time: "2:00 PM - 3:30 PM",
    location: "Technology Building, Room 305",
    description: "Join us for the ribbon-cutting ceremony of our new state-of-the-art Computer Science laboratory featuring the latest hardware and software.",
    category: "Facilities",
    image: "/placeholder.svg",
    organizer: "Computer Science Department",
    detailedDescription: "The Computer Science Department is proud to announce the opening of its new state-of-the-art laboratory. This facility represents a significant investment in our computing infrastructure and will provide students with access to the latest hardware and software technologies. The lab includes high-performance workstations, specialized research equipment, and collaborative workspace designed to enhance the learning and research experience for our students and faculty. Light refreshments will be served following the ribbon-cutting ceremony.",
    schedule: [
      {
        time: "2:00 PM",
        activity: "Welcome Remarks"
      },
      {
        time: "2:15 PM",
        activity: "Ribbon Cutting Ceremony"
      },
      {
        time: "2:30 PM",
        activity: "Lab Tour and Demonstrations"
      },
      {
        time: "3:00 PM",
        activity: "Networking Reception"
      }
    ],
    speakers: [
      {
        name: "Dr. Robert Park",
        title: "Department Chair, Computer Science",
        image: "/placeholder.svg"
      },
      {
        name: "Dr. Lisa Zhang",
        title: "Lab Director",
        image: "/placeholder.svg"
      },
      {
        name: "Thomas Edwards",
        title: "IT Infrastructure Manager",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    id: 4,
    title: "International Exchange Info Session",
    date: "May 8, 2025",
    time: "1:00 PM - 2:30 PM",
    location: "Global Education Center",
    description: "Learn about our new international exchange programs with partner universities in Japan, Germany, and Brazil.",
    category: "International",
    image: "/placeholder.svg",
    organizer: "Global Education Office",
    detailedDescription: "Expand your horizons through Green College's exciting new international exchange programs! This information session will provide details about our recently established partnerships with universities in Japan, Germany, and Brazil. You'll learn about eligibility requirements, application procedures, available courses, housing options, financial considerations, and important deadlines. Current exchange students and program alumni will share their experiences and answer questions about studying abroad. This is a valuable opportunity for students interested in enhancing their education with an international experience.",
    registrationLink: "#registration",
    schedule: [
      {
        time: "1:00 PM",
        activity: "Program Overview"
      },
      {
        time: "1:20 PM",
        activity: "Japan Exchange Program Details"
      },
      {
        time: "1:40 PM",
        activity: "Germany Exchange Program Details"
      },
      {
        time: "2:00 PM",
        activity: "Brazil Exchange Program Details"
      },
      {
        time: "2:20 PM",
        activity: "Q&A Session"
      }
    ],
    speakers: [
      {
        name: "Maria Rodriguez",
        title: "Director of International Programs",
        image: "/placeholder.svg"
      },
      {
        name: "Hiroshi Tanaka",
        title: "Japan Exchange Coordinator",
        image: "/placeholder.svg"
      },
      {
        name: "Luisa Silva",
        title: "Brazil Exchange Coordinator",
        image: "/placeholder.svg"
      }
    ],
    fileAttachment: "Exchange_Program_Overview.pdf"
  },
  {
    id: 5,
    title: "Environmental Science Symposium",
    date: "May 22, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Science Building Auditorium",
    description: "A day-long symposium featuring research presentations on environmental sustainability and conservation efforts.",
    category: "Academic",
    image: "/placeholder.svg",
    organizer: "Environmental Science Department",
    registrationLink: "#registration"
  },
  {
    id: 6,
    title: "Spring Music Festival",
    date: "May 25, 2025",
    time: "5:00 PM - 10:00 PM",
    location: "Campus Amphitheater",
    description: "Annual music festival featuring performances from student bands, orchestras, and choirs, as well as visiting artists.",
    category: "Arts & Culture",
    image: "/placeholder.svg",
    organizer: "Music Department"
  }
];
