export type ToggleButtonType = {
  setOpen: (update: (prev: boolean) => boolean) => void;
};

export type ParallaxType = {
  type: "services" | "portfolio" | undefined;
};

export type PortfolioItemType = {
  id: number;
  title: string;
  imgSkills: string;
  img: string;
  description: string;
  projectLink: string;
};

export type PortfolioUIType = {
  item: PortfolioItemType;
};
