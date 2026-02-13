import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import Link from "next/link";

interface Contribution {
  url: string;
  status: "merged" | "open" | "closed";
}

interface OSSOrg {
  name: string;
  logo?: string;
  contributions: Contribution[];
}

const ossContributions: OSSOrg[] = [
  {
    name: "Django",
    contributions: [
      { url: "https://github.com/django/django/pull/20421", status: "merged" },
      { url: "https://github.com/django/django/pull/20426", status: "merged" },
      { url: "https://github.com/django/django/pull/20586", status: "merged" },
      { url: "https://github.com/django/django/pull/20447", status: "merged" },
	  { url: "https://github.com/django/django/pull/20528", status: "merged" },
	  { url: "https://github.com/django/django/pull/20458", status: "merged" },
	  { url: "https://github.com/django/django/pull/20404", status: "merged" },
      { url: "https://github.com/django/django/pull/20456", status: "open" },
      { url: "https://github.com/django/django/pull/20396", status: "open" },
	  { url: "https://github.com/django/django/pull/20415", status: "closed" },
    ],
  },
  {
    name: "OWASP Nest",
    contributions: [
      { url: "https://github.com/OWASP/Nest/pull/2789", status: "merged" },
      { url: "https://github.com/OWASP/Nest/pull/2873", status: "merged" },
      { url: "https://github.com/OWASP/Nest/pull/2824", status: "merged" },
    ],
  },
  {
    name: "OWASP BLT",
    contributions: [
      { url: "https://github.com/OWASP-BLT/BLT/pull/5126", status: "merged" },
      { url: "https://github.com/OWASP-BLT/BLT/pull/4770", status: "merged" },
    ],
  },
];

function getPRNumber(url: string): string {
  const match = url.match(/\/pull\/(\d+)/);
  return match ? `#${match[1]}` : url;
}

function getRepoName(url: string): string {
  const match = url.match(/github\.com\/([^/]+\/[^/]+)/);
  return match ? match[1] : "";
}

function StatusBadge({ status }: { status: Contribution["status"] }) {
  const styles = {
    merged: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    open: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    closed: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}

function ContributionItem({ contribution }: { contribution: Contribution }) {
  const prNumber = getPRNumber(contribution.url);
  const repoName = getRepoName(contribution.url);

  return (
    <li className="flex items-center justify-between py-2 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
      <Link
        href={contribution.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
      >
        <span className="font-mono">{repoName}{prNumber}</span>
      </Link>
      <StatusBadge status={contribution.status} />
    </li>
  );
}

function OrgDropdown({ org }: { org: OSSOrg }) {
  const mergedCount = org.contributions.filter((c) => c.status === "merged").length;
  const openCount = org.contributions.filter((c) => c.status === "open").length;

  return (
    <details className="group border border-neutral-200 dark:border-neutral-800 rounded-lg mb-3">
      <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 rounded-lg transition-colors">
        <div className="flex items-center gap-3">
          <span className="font-medium">{org.name}</span>
          <span className="text-xs text-neutral-500">
            {mergedCount} merged{openCount > 0 ? `, ${openCount} open` : ""}
          </span>
        </div>
        <svg
          className="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <ul className="px-4 pb-4">
        {org.contributions.map((contribution) => (
          <ContributionItem key={contribution.url} contribution={contribution} />
        ))}
      </ul>
    </details>
  );
}

export const metadata: Metadata = {
  title: "Proof of Work",
  description: "My open source contributions and projects.",
  openGraph: {
    title: "Proof of Work",
    description: "My open source contributions and projects.",
    type: "website",
    url: `${DATA.url}/work`,
  },
};

export default function ProofOfWork() {
  const totalMerged = ossContributions.reduce(
    (acc, org) => acc + org.contributions.filter((c) => c.status === "merged").length,
    0
  );

  return (
    <section id="work">
      <h1 className="font-medium text-2xl tracking-tighter mb-2">Proof of Work</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
        My open source contributions, projects, and other work.
      </p>

      {/* OSS Contributions */}
      <div className="mb-10">
        <h2 className="font-medium text-lg mb-1">OSS Contributions</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          {totalMerged} merged PRs across {ossContributions.length} organizations
        </p>
        <div>
          {ossContributions.map((org) => (
            <OrgDropdown key={org.name} org={org} />
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-10">
        <h2 className="font-medium text-lg mb-4">Projects</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          This{" "}
          <Link
            href="https://github.com/nileshpahari/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            repo
          </Link>{" "}
          contains links to all my major projects.
        </p>
      </div>

      {/* Competitive Programming */}
      <div className="mb-10">
        <h2 className="font-medium text-lg mb-4">Competitive Programming</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          I also like to solve algorithmic problems in my free time.
        </p>
        <Link
          href="https://codeforces.com/profile/tourist_is_my_son"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm border border-neutral-200 dark:border-neutral-800 rounded-lg px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
        >
          <span className="font-mono">tourist_is_my_son</span>
          <span className="text-neutral-500">on Codeforces</span>
        </Link>
      </div>
    </section>
  );
}
