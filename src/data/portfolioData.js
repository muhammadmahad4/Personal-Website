/**
 * Portfolio data — single source of truth for static site content.
 * Blog posts are mock objects; future: load from local Markdown files.
 */

export const personalInfo = {
  name: "Muhammad Mahad",
  title: "Software Engineer & Cybersecurity Enthusiast",
  tagline: "Focusing on Cloud, AI, and secure infrastructure.",
  email: "mmahad2-c@my.cityu.edu.hk",
  phone: "(852) 5962 4263",
  location: "Hong Kong",
  github: "https://github.com/muhammadmahad4",
  linkedin: "https://linkedin.com/in/muhammadmahad4",
  profileImage: "/assets/images/profile-pic.jpeg",
  cvPath: "/assets/cv/My_CV.pdf",
};

export const about = {
  summary:
    "Computer Science undergraduate at City University of Hong Kong with a passion for building secure, scalable systems at the intersection of cloud computing, AI, and cybersecurity. Experienced in full-stack development, DevOps, and penetration testing workflows.",
  highlights: [
    "CGPA 3.93/4.3 with Full Tuition Scholarship",
    "Software Engineering Intern at Siemens Mobility Hong Kong",
    "AWS Cloud Student Ambassador & Technical Team Lead",
    "28th place — HKCERT Capture the Flag 2025",
  ],
};

export const education = [
  {
    id: "cityu-bsc",
    institution: "City University of Hong Kong",
    degree: "BSc. in Computer Science (First Class Honours)",
    gpa: "CGPA: 3.93/4.3",
    period: "Sep 2023 – May 2027",
    location: "Hong Kong",
    honors: [
      "Tiger Award (Top 10 percent of Students)",
      "Dean's List (Sem A & B 23/24, Sem B 24/25, Sem A & B 25/26)",
      "Full Tuition Scholarship",
      "Belt and Road Scholarship — Hong Kong Government (HKD$140,000 p.a.)",
    ],
  },
  {
    id: "alpha-alevels",
    institution: "Alpha College",
    degree: "Cambridge A Levels (3 A*s in Physics, Chemistry, Mathematics)",
    period: "Aug 2021 – May 2023",
    location: "Pakistan",
    honors: ["Full Tuition Scholarship"],
  },
];

export const skills = {
  languages: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "C++",
    "Bash",
  ],
  frameworksAndTools: [
    "React",
    "Node.js",
    "Express",
    "Spring Boot",
    "AWS",
    "Docker",
    "Podman",
    "Kubernetes",
    "GitLab CI/CD",
    "Apache Kafka",
    "HAProxy",
    "Fail2ban",
    "Nmap",
    "JumpServer",
    "YOLOv8",
    "OpenAI / DeepSeek APIs",
    "LLMs",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Git / GitHub",
    "Linux",
  ],
  softSkills: [
    "Complex problem solving",
    "Analytical thinking",
    "Leadership",
    "Team collaboration",
    "Innovation",
  ],
  spokenLanguages: [
    "English (Native proficiency)",
    "Urdu (Native proficiency)",
    "Hindi (Spoken proficiency)",
  ],
};

export const experience = [
  {
    id: "siemens",
    role: "Software Engineering Intern",
    company: "Siemens Mobility Hong Kong",
    period: "Jun 2025 – Present",
    location: "Hong Kong",
    bullets: [
      "Helped build a containerized, event-driven video analytics platform for intelligent transportation using Python (DeepStream), YOLOv8, and microservices (Spring Boot, Kafka, Redis, PostgreSQL), with deployments managed through Docker.",
      "Developed an automated remote access solution using Hyper-V, CIS-hardened Ubuntu VMs, and JumpServer (PAM platform on Kubernetes), streamlining SSH key management and enforcing centralized, auditable firewall controls.",
      "Implemented layered web security by automating IP threat mitigation with Fail2ban and granular request rate limiting via HAProxy stick tables, safeguarding production systems against DDoS and targeted attacks.",
      "Engineered and optimized multi-stage GitLab CI/CD pipelines for Python and Java projects on ARM and AMD platforms, achieving automated parallel builds, artifact management, and secure container deployments.",
      "Built a full-stack image annotator tool with React, Java, and PostgreSQL to facilitate precise ROI drawing on camera streams, improving data labeling efficiency for computer vision projects.",
    ],
  },
  {
    id: "aws-ambassador",
    role: "Team Lead, Technical Teaching Team (AWS Cloud Student Ambassador)",
    company: "AWS Hong Kong",
    period: "Dec 2025 – Present",
    location: "Hong Kong",
    bullets: [
      "Lead the technical teaching team, designing and delivering 3 workshops on cloud and AI fundamentals, targeting the AWS AI Practitioner exam.",
      "Coordinate with AWS professionals, faculty, and students to drive cloud awareness, organize training initiatives, and prepare students for AWS certifications.",
    ],
  },
  {
    id: "youth-incubator",
    role: "STEM Business Acceleration Intern",
    company: "Youth Incubator Limited",
    period: "Jun 2024 – Aug 2024",
    location: "Hong Kong",
    bullets: [
      "Scraped and analyzed 700+ URLs using targeted keywords, improving event data collection efficiency by 70%. Built a data pipelining workflow with OpenAI API prompt engineering, Pandas, MongoDB, and Python automation.",
      "Developed a WhatsApp chatbot using WhatsApp API, OpenAI API, and Botpress to automate inquiries, schedule meetings, and facilitate event registration — reducing manual workload by 20+ hours weekly. Deployed with Node.js and Express.",
      "Engineered a secure login system with JavaScript and React; integrated Twilio and Memberstack for SMS/email verification, resulting in a 40% decrease in unauthorized access attempts.",
    ],
  },
];

export const projects = [
  {
    id: "agentic-ai-cyber",
    title: "Agentic AI for Cyber Security",
    subtitle: "Final Year Project",
    description:
      "Developing a secure, locally deployed agentic AI cybersecurity platform using OpenClaw and Hermes, Docker/Podman, and Kubernetes to automate reconnaissance, log analysis, and controlled penetration testing in isolated lab environments. Integrates LLMs and external tools (Nmap, AbuseIPDB) for automated threat correlation while mitigating AI risks such as prompt injection and tool abuse.",
    tags: ["OpenClaw", "LLMs", "Docker", "Kubernetes", "React", "Node.js", "Nmap"],
    image: "/assets/images/projects/ai-cyber.jpg",
    links: {},
  },
  {
    id: "auto-email",
    title: "Auto-Emailing Website",
    subtitle: "Full-Stack Development",
    description:
      "Built a full-stack email automation website leveraging Google Cloud API for authentication and DeepSeek API for AI-powered email extraction and content generation. Applied advanced prompt engineering to automate mass emailing — extracting contacts, generating personalized messages, and sending them — streamlining job application workflows by 90%.",
    tags: ["React", "Node.js", "DeepSeek API", "Google OAuth", "Express", "JavaScript"],
    image: "/assets/images/projects/auto-email.jpg",
    links: {
      github: "https://github.com/muhammadmahad4",
    },
  },
];

export const awards = [
  {
    title: "HKCERT Capture the Flag 2025",
    detail: "Placed 28th out of 150 teams — HKCERT and DPO",
    date: "Dec 2025",
  },
  {
    title: "PolyU x NuttyShell Cybersecurity CTF 2026",
    detail: "Participant — PolyU",
    date: "Mar 2026",
  },
  {
    title: "Winner — 3 National Science Olympiad Modules",
    detail: "Cedar College & Meritorious College",
    date: "Feb 2022",
  },
  {
    title: "Habib University Meritorious Award",
    detail: "Academic excellence recognition",
    date: "Jan 2023",
  },
];

export const extracurriculars = [
  {
    role: "Teaching Assistant — CS2204: Fundamentals of Internet Applications Dev.",
    org: "City University of Hong Kong",
    period: "Aug 2025 – Present",
  },
  {
    role: "Discipline Resident Tutor",
    org: "Student Residence Office, CityU",
    period: "Sep 2023 – June 2026",
  },
  {
    role: "Executive Member",
    org: "Alpha's Robotics and Engineering Lab",
    period: "Aug 2022 – May 2023",
  },
  {
    role: "Head, Planning Department",
    org: "Alpha's College STEM Society",
    period: "Aug 2022 – May 2023",
  },
];

/** Mock blog posts — replace with Markdown loader later */
export const blogPosts = [
  {
    id: "htb-lame-walkthrough",
    slug: "htb-lame-walkthrough",
    title: "HackTheBox — Lame Machine Walkthrough",
    date: "2026-01-15",
    summary:
      "Step-by-step walkthrough of the Lame box covering SMB enumeration, Metasploit exploitation, and post-exploitation on a legacy Linux target.",
    tags: ["HackTheBox", "Linux", "SMB", "Metasploit"],
    thumbnail: "/assets/images/blog/thumbnail-1.jpg",
    readTime: "8 min read",
    content: `
## Overview

This walkthrough covers the **Lame** machine from HackTheBox — a retired easy-rated Linux box that demonstrates classic SMB vulnerabilities.

## Reconnaissance

Started with a full TCP port scan using Nmap:

\`\`\`bash
nmap -sC -sV -oA lame 10.10.10.3
\`\`\`

Key findings: Port 21 (FTP), 22 (SSH), 139/445 (Samba).

## Exploitation

The Samba version (3.0.20) is vulnerable to the **usermap_script** RCE. Used Metasploit module \`exploit/multi/samba/usermap_script\` to gain a root shell.

## Lessons Learned

- Always enumerate SMB version on legacy networks
- Patch management is critical for exposed services
- Document every step for reproducible pentest reports
    `.trim(),
  },
  {
    id: "thm-basic-pentesting",
    slug: "thm-basic-pentesting",
    title: "TryHackMe — Basic Pentesting Room",
    date: "2025-11-20",
    summary:
      "Complete guide through the Basic Pentesting room: web enumeration, directory brute-forcing, SSH access, and privilege escalation fundamentals.",
    tags: ["TryHackMe", "Web", "Enumeration", "PrivEsc"],
    thumbnail: "/assets/images/blog/thumbnail-2.jpg",
    readTime: "12 min read",
    content: `
## Room Overview

TryHackMe's **Basic Pentesting** room is an excellent introduction to the pentesting methodology: enumerate, exploit, escalate.

## Web Enumeration

Used \`gobuster\` and \`nikto\` against the target web server to discover hidden directories and potential attack surfaces.

## Initial Access

Found credentials through directory listing and used them for SSH login as a low-privileged user.

## Privilege Escalation

Enumerated sudo permissions and kernel version, then leveraged a known GTFOBins technique to escalate to root.

## Key Takeaways

Structured enumeration saves time. Always check for default credentials and hidden web paths before moving to advanced exploits.
    `.trim(),
  },
  {
    id: "nmap-recon-cheatsheet",
    slug: "nmap-recon-cheatsheet",
    title: "Nmap Reconnaissance Cheatsheet for CTFs",
    date: "2025-10-05",
    summary:
      "A practical reference for Nmap scan types, timing templates, and script categories used during HKCERT CTF preparation and lab assessments.",
    tags: ["Nmap", "Recon", "CTF", "Cheatsheet"],
    thumbnail: "/assets/images/blog/thumbnail-3.jpg",
    readTime: "6 min read",
    content: `
## Quick Scan

\`\`\`bash
nmap -sC -sV -T4 <target>
\`\`\`

## Full Port Scan

\`\`\`bash
nmap -p- -T4 <target>
\`\`\`

## UDP Scan (selected ports)

\`\`\`bash
nmap -sU --top-ports 20 <target>
\`\`\`

## Useful NSE Scripts

- \`vuln\` — vulnerability detection
- \`http-enum\` — web directory enumeration
- \`smb-enum-shares\` — SMB share discovery

## CTF Tips

Start broad, then narrow. Save all output with \`-oA\` for report writing. Combine Nmap results with service-specific tools (gobuster, enum4linux, etc.).
    `.trim(),
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
