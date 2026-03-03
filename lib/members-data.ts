/**
 * Members page content — edit this file to update names, roles, and responsibilities.
 * Structure is data-driven; the page renders from these arrays.
 */

export const membersPageTitle = "Members";

/** Single person with optional credentials and title */
export interface MemberPerson {
  name: string;
  credentials?: string;
  title?: string;
}

/** Chairman / single-lead section */
export interface ChairmanSection {
  sectionTitle: string;
  chairman: {
    name: string;
    credentials: string;
    title: string;
    roleResponsibilities: string[];
  };
}

/** Advisory council: list of advisors + role description */
export interface AdvisoryCouncilSection {
  sectionTitle: string;
  keyAdvisorsLabel: string;
  advisors: MemberPerson[];
  roleTitle: string;
  roleItems: string[];
}

/** Academic leadership: core members + shared responsibilities */
export interface AcademicLeadershipSection {
  sectionTitle: string;
  coreMembersLabel: string;
  members: MemberPerson[];
  responsibilitiesTitle: string;
  responsibilities: string[];
}

/** Exam/certification focus group (e.g. ACAS or IFoA & IAI) */
export interface CertificationFocusGroup {
  focusLabel: string;
  people: MemberPerson[];
}

/** Professional examination division */
export interface ProfessionalExamSection {
  sectionTitle: string;
  intro: string;
  /** Label for the focus groups block (e.g. "Examination pathways") */
  focusGroupsLabel: string;
  focusGroups: CertificationFocusGroup[];
}

/** Industry & placement leadership: section title + list of people */
export interface IndustryPlacementSection {
  sectionTitle: string;
  intro?: string;
  /** Label for the focus groups block (e.g. "Administration") */
  focusGroupsLabel: string;
  focusGroups: CertificationFocusGroup[];
}

// ─── Data ─────────────────────────────────────────────────────────────────

export const governanceLeadership: ChairmanSection = {
  sectionTitle: "Governance & Leadership Structure",
  chairman: {
    name: "Satya Sai Mudigonda",
    credentials:
      "AIAI, CPCU, PMP, API, INS, Certified Predictive Analytics Lead",
    title: "Professor of Practice in AI & Actuarial Data Science",
    roleResponsibilities: [
      "Strategic vision and long-term roadmap",
      "Academic–industry integration",
      "National and international partnerships",
      "Research direction in AI & Actuarial Innovation",
      "Oversight of academic quality and professional standards",
    ],
  },
};

export const advisoryCouncil: AdvisoryCouncilSection = {
  sectionTitle: "Advisory Council",
  keyAdvisorsLabel: "Key Advisors",
  advisors: [
    { name: "Harold Singh", credentials: "FSA" },
    { name: "Aditya TVS", credentials: "FIA" },
  ],
  roleTitle: "Role of Advisory Council",
  roleItems: [
    "Strategic guidance aligned with global actuarial standards",
    "Industry relevance and professional alignment",
    "Research collaboration support",
    "International academic benchmarking",
  ],
};

export const academicLeadership: AcademicLeadershipSection = {
  sectionTitle: "Academic & Research Leadership",
  coreMembersLabel: "Core Members",
  members: [
    {
      name: "Dr. Rohan Yashraj Gupta",
      credentials: "FIA, FIAI",
      title: "Professor of Practice in AI & Actuarial Data Science",
    },
    {
      name: "Dr. Pranav Sai S R",
      title: "Professor of Practice in AI & Actuarial Data Science",
    },
    {
      name: "Phani Krishna Kandala",
      credentials: "AIAI",
      title: "Professor of Practice in AI & Actuarial Data Science",
    },
  ],
  responsibilitiesTitle: "Core Responsibilities",
  responsibilities: [
    "Curriculum design & continuous innovation",
    "AI-driven actuarial research initiatives",
    "Capstone projects & industry case studies",
    "Faculty mentoring & academic coordination",
    "Student research supervision",
  ],
};

export const professionalExamDivision: ProfessionalExamSection = {
  sectionTitle: "Professional Examination & Certification Division",
  intro:
    "This division ensures structured preparation aligned with major global actuarial bodies.",
  focusGroupsLabel: "Examination pathways",
  focusGroups: [
    {
      focusLabel: "ACAS Focus (CAS Pathway) & SOA Focus (ASA Pathway)",
      people: [
        {
          name: "Kasyap KVYS",
          title: "Adjunct Professor",
        },
        {
          name: "Satya Sai Sricharan",
          title: "Adjunct Professor",
        },
        {
          name: "Shashi Kumar",
          title: "Adjunct Professor",
        },
      ],
    },
    {
      focusLabel: "IFoA & IAI Focus",
      people: [
        {
          name: "Naga Teja M",
          credentials: "FIA, FIAI",
          title: "Adjunct Professor",
        },
        {
          name: "Naga Sai Shivanee M",
          credentials: "FIA, FIAI",
          title: "Adjunct Professor",
        },
        {
          name: "Aakash Sahu",
          credentials: "AIAI",
          title: "Adjunct Professor",
        },
        {
          name: "Divya Kartheeka M",
          credentials: "AIA",
          title: "Adjunct Professor",
        },
      ],
    },
  ],
};

export const industryPlacementLeadership: IndustryPlacementSection = {
  sectionTitle: "Global Partnerships & Placement",
  intro:
    "This division bridges the gap between academic excellence and global professional opportunities.",
  focusGroupsLabel: "Administration",
  focusGroups: [
    {
      focusLabel: "Industry & Global Placement Leadership",
      people: [
        {
          name: "Arunachala S M",
          credentials: "AIAI",
          title:
            "Tech Actuarial – US\nLead: Internships & Placements (International Focus)",
        },
        {
          name: "Sanjeev Chugh",
          title:
            "Sr. Manager – Administration, Tech Actuarial, India\nLead: Internships & Placements (India Operations)",
        },
      ],
    },
    {
      focusLabel: "Legal and Accounting",
      people: [
        {
          name: "V N P Sai",
          credentials: "M.Com., M.A., M.Ec., LL.B(Hons), LL.M",
          title: "Advocate A.P. High Court",
        },
        {
          name: "Srikapil Chhabra",
          credentials: "CA",
          title: "Auditor",
        },
      ],
    },
  ],
};
