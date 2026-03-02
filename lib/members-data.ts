export interface Member {
  name: string;
  role: string;
  designation?: string;
  credentials?: string[];
  responsibilities?: string[];
  focus?: string;
}

export interface Section {
  title: string;
  description?: string;
  members: Member[];
}

export const membersData: Section[] = [
  {
    title: "Governance & Leadership Structure",
    members: [
      {
        name: "Satya Sai Mudigonda",
        role: "Chairman",
        designation: "Professor of Practice in AI & Actuarial Data Science",
        credentials: [
          "AIAI",
          "CPCU",
          "PMP",
          "API",
          "INS",
          "Certified Predictive Analytics Lead",
        ],
        responsibilities: [
          "Strategic vision and long-term roadmap",
          "Academic–industry integration",
          "National and international partnerships",
          "Research direction in AI & Actuarial Innovation",
          "Oversight of academic quality and professional standards",
        ],
      },
    ],
  },
  {
    title: "Advisory Council",
    description:
      "Providing strategic guidance aligned with global actuarial standards, industry relevance, and international academic benchmarking.",
    members: [
      {
        name: "Harold Singh",
        role: "Key Advisor",
        credentials: ["FSA"],
      },
      {
        name: "Aditya TVS",
        role: "Key Advisor",
        credentials: ["FIA"],
      },
    ],
  },
  {
    title: "Academic & Research Leadership",
    description:
      "Leading curriculum design, AI-driven actuarial research initiatives, and student research supervision.",
    members: [
      {
        name: "Dr. Rohan Yashraj Gupta",
        role: "Core Member",
        designation: "Professor of Practice in AI & Actuarial Data Science",
        credentials: ["FIA"],
        responsibilities: [
          "Curriculum design & continuous innovation",
          "AI-driven actuarial research initiatives",
          "Capstone projects & industry case studies",
          "Faculty mentoring & academic coordination",
          "Student research supervision",
        ],
      },
      {
        name: "Dr. Pranav Sai S R",
        role: "Core Member",
        designation: "Professor of Practice in AI & Actuarial Data Science",
        responsibilities: [
          "Curriculum design & continuous innovation",
          "AI-driven actuarial research initiatives",
          "Capstone projects & industry case studies",
          "Faculty mentoring & academic coordination",
          "Student research supervision",
        ],
      },
      {
        name: "Phani Krishna Kandala",
        role: "Core Member",
        designation: "Professor of Practice in AI & Actuarial Data Science",
        credentials: ["AIAI"],
        responsibilities: [
          "Curriculum design & continuous innovation",
          "AI-driven actuarial research initiatives",
          "Capstone projects & industry case studies",
          "Faculty mentoring & academic coordination",
          "Student research supervision",
        ],
      },
    ],
  },
  {
    title: "Professional Examination & Certification Division",
    description:
      "Ensuring structured preparation aligned with major global actuarial bodies like CAS, IFoA, and IAI.",
    members: [
      {
        name: "Kasyap KVYS",
        role: "Adjunct Professor",
        focus: "Casualty Actuarial Society (ACAS) Courses",
      },
      {
        name: "Satya Sai Sricharan",
        role: "Adjunct Professor",
        focus: "CAS (ACAS) Courses",
      },
      {
        name: "Shashi Kumar",
        role: "Adjunct Professor",
        focus: "CAS (ACAS) Courses",
      },
      {
        name: "Naga Teja M",
        role: "Adjunct Professor",
        focus: "Institute of Actuaries of India Courses",
      },
      {
        name: "Naga Sai Shivanee",
        role: "Adjunct Professor",
        focus: "Institute and Faculty of Actuaries & IAI Courses",
      },
      {
        name: "Aakash Sahu",
        role: "Adjunct Professor",
        credentials: ["AIAI"],
        focus: "IFoA & IAI Courses",
      },
      {
        name: "Divya Kartheeka M",
        role: "Adjunct Professor",
        credentials: ["AIA"],
        focus: "IFoA & IAI Courses",
      },
    ],
  },
];
