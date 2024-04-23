import localFont from "next/font/local";

const jobs = [
  {
    title: "Senior Rust Engineer (Systems)",
    company: "Firezone",
    location: "Mountain View, CA / Remote",
    url: "https://www.workatastartup.com/jobs/51981",
  },
  {
    title: "Experienced Rust/AI Developer",
    company: "Instant Domains",
    location: "Remote",
    url: "https://www.workatastartup.com/jobs/52868",
  },
  {
    title: "Senior Rust Developer",
    company: "GitButler",
    location: "Berlin",
    url: "https://gitbutler.homerun.co/senior-rust-developer/en",
  },
  {
    title: "Software Engineer (Mid-level) - Zero Trust Client",
    company: "Cloudflare",
    location: "Remote",
    url: "https://boards.greenhouse.io/cloudflare/jobs/4945500?gh_jid=4945500",
  },
  {
    title: "Software Engineer (Rust/TypeScript)",
    company: "Deno",
    location: "Remote",
    url: "https://jobs.ashbyhq.com/Deno/21fe2085-a213-4ac5-ad44-516242335ee8",
  },
  {
    title: "Senior Software Engineer",
    company: "Lincoln Laboratory at MIT",
    location: "Lexington, MA",
    url: "https://careers.ll.mit.edu/job/Lexington-Sr_-Software-Engineer-Rust-MA-02420/1073614600/",
  },
  {
    title: "Software Engineer - Static Analysis Engine",
    company: "Datadog",
    location: "New York, NY / Boston, MA",
    url: "https://careers.datadoghq.com/detail/5382867",
  },
  {
    title: "Senior/Staff Software Engineer",
    company: "Hasura",
    location: "Bengaluru, Karnataka",
    url: "https://hasura.io/careers/?jobId=FjqRMQHVXKnW",
  },
  {
    title: "Rust Developer",
    company: "1Password",
    location: "Remote",
    url: "https://jobs.lever.co/1password/ba4e4cf1-8d8a-4fc8-8878-4bf055a43f53",
  },
  {
    title: "Staff Cloud Engineer",
    company: "Shuttle",
    location: "London / Remote",
    url: "https://www.ycombinator.com/companies/shuttle/jobs/LpJTT9u-staff-cloud-engineer",
  },
  {
    title: "Founding Software Engineer",
    company: "Platformed",
    location: "London / Hybrid",
    url: "https://platformed.notion.site/Founding-Software-Engineer-56131f713309412b93109d0b27299c7f",
  },
  {
    title: "Senior Software Engineer",
    company: "Bloomberg",
    location: "New York, NY",
    url: "https://devitjobs.us/jobs/Bloomberg-Senior-Software-Engineer",
  },
  {
    title: "Software Engineer (Rust)",
    company: "TabbyML",
    location: "Remote",
    url: "https://tabbyml.vercel.app",
  },
  {
    title: "Software Engineer, Distributed Systems",
    company: "OpenAI",
    location: "San Francisco, CA",
    url: "https://openai.com/careers/software-engineer-distributed-systems",
  },
  {
    title: "Senior Software Engineer, Audio/Video Products",
    company: "Discord",
    location: "San Francisco, CA / Remote",
    url: "https://discord.com/jobs/6845495002",
  },
  {
    title: "Senior Software Engineer, Safety Orchestration",
    company: "Discord",
    location: "San Francisco, CA / Remote",
    url: "https://discord.com/jobs/6938027002",
  },
  {
    title: "Software Engineer - Voice & Video Infrastructure",
    company: "Discord",
    location: "San Francisco, CA / Remote",
    url: "https://discord.com/jobs/6367013002",
  },
  {
    title: "Software Engineer",
    company: "Warp",
    location: "Remote (US / Canada)",
    url: "https://boards.greenhouse.io/warp/jobs/4324888004",
  },
  {
    title: "Senior or Staff Software Engineer, Rust",
    company: "Apollo",
    location: "East Coast",
    url: "https://www.apollographql.com/careers/job/?id=4b4c45dc-c2e0-4710-94b5-bc49825e9307",
  },
  {
    title: "Sports Modeling Engineer",
    company: "Swish Analytics",
    location: "San Francisco, CA",
    url: "https://www.linkedin.com/jobs/rust-jobs/?currentJobId=3739454759",
  },
  {
    title: "Rust Developer",
    company: "Aira",
    location: "Stockholm / Hybrid Remote",
    url: "https://career.airahome.com/jobs/3113401-rust-developer",
  },
  {
    title: "System Software Engineer",
    company: "Canonical",
    location: "Remote",
    url: "https://boards.greenhouse.io/canonical/jobs/4383713",
  },
  {
    title: "Software Engineer (Rust) - Creative Play",
    company: "Embark Studios",
    location: "Stockholm / Hybrid Remote",
    url: "https://careers.embark-studios.com/jobs/286860-software-engineer-rust-creative-play",
  },
  {
    title: "Senior Software Engineer, Web Infrastructure",
    company: "Bytedance",
    location: "Mountain View, CA",
    url: "https://careers.tiktok.com/position/7193184881110829372/detail",
  },
  {
    title: "Senior Software Engineer, Programming Languages",
    company: "Grit",
    location: "New York City / Remote",
    url: "https://getgrit.notion.site/PL-Compiler-Engineer-Grit-a251c6a793574c2db6d005d09e59e25b",
  },
  {
    title: "Software Engineering Intern",
    company: "Synopsys",
    location: "Belfast, Northern Ireland",
    url: "https://sjobs.brassring.com/TGnewUI/Search/home/HomeWithPreLoad?PageType=JobDetails&partnerid=25235&siteid=5359&jobid=1996774#jobDetails=1996774_5359",
  },
  {
    title: "Senior Software Engineer",
    company: "Prisma",
    location: "Remote",
    url: "https://boards.greenhouse.io/prisma/jobs/6940273002",
  },
  {
    title: "Senior Manager, Software Developer",
    company: "Amazon",
    location: "Boston, MA",
    url: "https://www.amazon.jobs/en/jobs/2479470/sr-manager-software-dev-rust-platform",
  },
  {
    title: "Senior Software Engineer",
    company: "Genius Sports",
    location: "Remote, USA",
    url: "https://boards.greenhouse.io/geniussports/jobs/5780126003",
  },
  {
    title: "Software Engineer, Turbopack",
    company: "Vercel",
    location: "Remote",
    url: "https://vercel.com/careers/software-engineer-turbopack-us-5022287004",
  },
];

function shuffle<T>(oldArray: T[]) {
  const array = [...oldArray];
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const ppNeueMontrealMono = localFont({
  src: "../public/fonts/PPNeueMontrealMono-Bold.otf",
  variable: "--font-pp-neue-montreal-mono",
});

export default function Home() {
  return (
    <div className="bg-[#1c1c1c] min-h-screen">
      <main className="w-full flex flex-col text-white items-center ">
        <div className="max-w-2xl w-3/4 pt-10">
          <h1 className={`${ppNeueMontrealMono.variable} text-4xl py-5`}>
            Rust Jobs
          </h1>
          <p>Jobs working with the Rust programming language. No crypto.</p>
          <p>
            To add or remove a job,{" "}
            <a
              href="https://github.com/NicholasLYang/rustjobs.fyi/pulls"
              className="underline decoration-red-400"
            >
              open a pull request.
            </a>
          </p>
          <ul className="pt-10">
            {shuffle(jobs).map(({ title, company, url, location }) => (
              <li key={url}>
                <a href={url} className="text-white">
                  {title} at <span className="text-red-300">{company}</span>{" "}
                  <span className="text-gray-500 text-sm">{location}</span>
                </a>
                <hr className="pb-5"></hr>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
