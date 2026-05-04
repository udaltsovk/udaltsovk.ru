export const THOUGHTS: string[] = [
  "I don't know how to count experience properly because an enthusiastic student (not me) can learn more during only 1 year than a developer that have been programming only CRUD apps for like 5 years.",
  "I hate windows for it's very strange issues... and because it's microsoft :)",
  "Mac is 10 times better than windows but 3 times worse than Linux (actually GNU+Linux, but who cares?)",
];

export interface Technology {
  name: string;
  description?: string;
  logo?: string;
  glow_color: string;
}

export interface Specialization {
  name: string;
  technologies: Technology[];
}

export const EXPERIENCE: Specialization[] = [
  {
    name: "Backend (and stuff around it)",
    technologies: [
      {
        name: "Rust",
        description: "Mostly backend using actix-web/axum or bots",
        glow_color: "#dea584",
      },
      {
        name: "Java",
        description: "Mostly Minecraft mods, plugins and etc.",
        glow_color: "#b07219",
      },
      {
        name: "Kotlin",
        description: "Mostly Spring ecosystem",
        glow_color: "#A97BFF",
      },
      {
        name: "TypeScript",
        glow_color: "#3178c6",
      },
      {
        name: "JavaScript",
        glow_color: "#f1e05a",
      },
      {
        name: "Go",
        glow_color: "#00ADD8",
      },
      {
        name: "C++",
        logo: "CPlusPlus",
        glow_color: "#f34b7d",
      },
      {
        name: "C#",
        description: "Only for GameDev",
        logo: "CSharp",
        glow_color: "#178600",
      },
      {
        name: "Zig",
        glow_color: "#ec915c",
      },
      {
        name: "Elixir",
        glow_color: "#6e4a7e",
      },
      {
        name: "P*th*n",
        description: "Only for simple scripts",
        logo: "Python",
        glow_color: "#3572A5",
      },
      {
        name: "Pascal",
        glow_color: "#E3F171",
      },
      {
        name: "C",
        glow_color: "#555555",
      },
      {
        name: "Wiring",
        glow_color: "#008083",
      },
      {
        name: "PostgreSQL",
        glow_color: "#2F6691",
      },
      {
        name: "YugabyteDB",
        glow_color: "#EE5F3E",
      },
      {
        name: "MySQL",
        glow_color: "#F09108",
      },
      {
        name: "MariaDB",
        glow_color: "#BE755A",
      },
      {
        name: "Redis",
        glow_color: "#F44035",
      },
      {
        name: "Valkey",
        glow_color: "#6883FD",
      },
      {
        name: "SurrealDB",
        glow_color: "#D517CD",
      },
    ],
  },
  {
    name: "Frontend",
    technologies: [
      {
        name: "TypeScript",
        glow_color: "#3178c6",
      },
      {
        name: "JavaScript",
        glow_color: "#f1e05a",
      },
      {
        name: "HTML",
        glow_color: "#e34c26",
      },
      {
        name: "CSS",
        glow_color: "#663399",
      },
      {
        name: "Svelte(Kit)",
        logo: "Svelte",
        glow_color: "#ff3e00",
      },
      {
        name: "Astro",
        glow_color: "#ff5a03",
      },
      {
        name: "Vue(Nuxt)",
        logo: "Vue",
        glow_color: "#41b883",
      },
      {
        name: "Solid(Start)",
        logo: "Solid",
        glow_color: "#2c4f7c",
      },
      {
        name: "React(Next)",
        logo: "React",
        glow_color: "#60D9F9",
      },
      {
        name: "Angular",
        glow_color: "#E92199",
      },
      {
        name: "LESS",
        glow_color: "#2F507E",
      },
      {
        name: "Tailwind CSS",
        logo: "Tailwind",
        glow_color: "#35BCF6",
      },
      {
        name: "SCSS",
        glow_color: "#c6538c",
      },
    ],
  },
  {
    name: "DevOps/SRE",
    technologies: [
      {
        name: "Docker",
        glow_color: "#1D62EB",
      },
      {
        name: "Podman",
        glow_color: "#8A29A1",
      },
      {
        name: "Kubernetes",
        glow_color: "#326CE4",
      },
      {
        name: "OpenTofu",
        glow_color: "#F4D21B",
      },
      {
        name: "Terraform",
        glow_color: "#9F66D8",
      },
      {
        name: "Ansible",
        glow_color: "#CE1E02",
      },
      {
        name: "CI/CD",
        logo: "CICD",
        glow_color: "#4E9F68",
      },
      {
        name: "Linux",
        glow_color: "#F3BC04",
      },
      {
        name: "Nix(OS)",
        description: "I daily-drive it :)",
        logo: "Nix",
        glow_color: "#7EB6E0",
      },
    ],
  },
];
