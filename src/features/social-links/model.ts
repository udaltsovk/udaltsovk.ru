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
  {
    name: "habr",
    description: "My Habr profile",
    href: "https://habr.com/users/udaltsovk",
  },
];
