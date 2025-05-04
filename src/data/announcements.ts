
export interface Announcement {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
  important: boolean;
  fileAttachment?: string;
  relatedEvents?: {
    id: number;
    title: string;
    date: string;
  }[];
}

export const announcementsData: Announcement[] = [
  {
    id: 1,
    title: "Fall Semester Registration Now Open",
    date: "May 1, 2025",
    description: "Registration for the Fall 2025 semester is now open for all students. Please log in to the student portal to register for your courses before the deadline of June 15, 2025. Early registration is recommended to secure your preferred course sections.",
    category: "Academic",
    important: true,
    fileAttachment: "Fall_2025_Registration_Guide.pdf",
    relatedEvents: [
      {
        id: 2,
        title: "Registration Information Session",
        date: "May 5, 2025"
      }
    ]
  },
  {
    id: 2,
    title: "New Computer Science Lab Opening",
    date: "April 25, 2025",
    description: "We're excited to announce the opening of our new state-of-the-art Computer Science laboratory on May 15th. The lab features the latest hardware and software to support advanced coursework and research. Join us for the ribbon-cutting ceremony at 2:00 PM in the Technology Building.",
    category: "Facilities",
    important: false,
    relatedEvents: [
      {
        id: 3,
        title: "CS Lab Opening Ceremony",
        date: "May 15, 2025"
      }
    ]
  },
  {
    id: 3,
    title: "Summer Research Opportunities",
    date: "April 22, 2025",
    description: "Applications are now open for summer research positions. Undergraduate students are encouraged to apply before May 10th. These positions offer valuable research experience and a stipend for selected participants. Contact the Research Office for more details.",
    category: "Research",
    important: false,
    fileAttachment: "Summer_Research_Application.pdf"
  },
  {
    id: 4,
    title: "Campus COVID-19 Protocol Updates",
    date: "April 18, 2025",
    description: "Please review the updated campus COVID-19 protocols for the upcoming semester. Vaccination requirements and mask policies have been revised in accordance with local health department guidelines. All students and staff should familiarize themselves with the new policies.",
    category: "Health",
    important: true,
    fileAttachment: "Updated_COVID19_Protocols.pdf"
  },
  {
    id: 5,
    title: "Library Hours Extended During Finals Week",
    date: "April 15, 2025",
    description: "The main campus library will extend its hours during finals week. From May 10-17, the library will be open 24 hours to accommodate students preparing for exams. Additional study spaces will also be available in the Student Center.",
    category: "Facilities",
    important: false
  },
  {
    id: 6,
    title: "Annual Scholarship Application Deadline",
    date: "April 10, 2025",
    description: "The deadline for applying to the college's annual scholarship program is May 30, 2025. All continuing students with a GPA of 3.2 or higher are eligible to apply. The financial aid office is available to assist with application questions.",
    category: "Financial",
    important: true,
    fileAttachment: "Scholarship_Application_Form.pdf"
  },
  {
    id: 7,
    title: "New International Exchange Programs",
    date: "April 5, 2025",
    description: "Green College is proud to announce three new international exchange partnerships with universities in Japan, Germany, and Brazil. Information sessions about these programs will be held throughout May. Check the Global Education Office website for details.",
    category: "Academic",
    important: false,
    relatedEvents: [
      {
        id: 4,
        title: "International Exchange Info Session",
        date: "May 8, 2025"
      }
    ]
  },
  {
    id: 8,
    title: "Campus Sustainability Initiative Launch",
    date: "April 1, 2025",
    description: "Green College is launching a new sustainability initiative aimed at reducing our carbon footprint by 30% over the next five years. Student volunteers are needed to help implement various eco-friendly programs across campus.",
    category: "Campus",
    important: false,
    fileAttachment: "Sustainability_Initiative_Overview.pdf"
  },
];
