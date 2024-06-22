const COLORS = {
    green: {
      bg: "bg-[#ECF7D4]",
      badge: "bg-[#D6F497]",
    },
    orange: {
      bg: "bg-[#F9EFE1]",
      badge: "bg-[#F7E0B8]",
    },
    red: {
      bg: "bg-[#FBE5E7]",
      badge: "bg-[#FDC6C7]",
    },
    blue: {
      bg: "bg-[#E3F2FD]",
      badge: "bg-[#BBDEFB]",
    },
    purple: {
      bg: "bg-[#F3E5F5]",
      badge: "bg-[#E1BEE7]",
    },
    yellow: {
      bg: "bg-[#FFFDE7]",
      badge: "bg-[#FFF9C4]",
    },
    teal: {
      bg: "bg-[#E0F2F1]",
      badge: "bg-[#B2DFDB]",
    },
    pink: {
      bg: "bg-[#FCE4EC]",
      badge: "bg-[#F8BBD0]",
    },
    indigo: {
      bg: "bg-[#E8EAF6]",
      badge: "bg-[#C5CAE9]",
    },
    gray: {
      bg: "bg-[#F5F5F5]",
      badge: "bg-[#E0E0E0]",
    },
    zinc: {
      bg: "bg-zinc-300",
      badge: "bg-zinc-200",
    }
  };

export const randomColor = () => {
	const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
	const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
	const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
	return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};