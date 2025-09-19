export const SITE_TITLE: string = "Kirill Udaltsov";
export const SITE_DESCRIPTION: string = "Welcome to my website!";

export const BIRTHDAY: string = "12/21/2009";

export interface Link {
  name: string;
  description: string;
  href: string;
}

export const LINKS: Link[] = [
  {
    name: "github",
    description: "My GitHub",
    href: "https://github.com/udaltsovk",
  },
  {
    name: "telegram",
    description: "My Telegram",
    href: "https://t.me/KirillUdaltsov",
  },
];

export const THOUGHTS: string[] = [
  "I don't know how to count experience properly because an enthusiastic student can learn more during only 1 year than a developer that have been programming only CRUD apps for like 5 years.",
  "I hate windows for it's very strange issues... and because it's microsoft :)",
  "Mac is 10 times better than windows but 3 times worse than Linux (actually GNU+Linux, but who cares?)",
];
