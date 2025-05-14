import React from "react";

interface BlogGradientBoxProps {
  from: string;
  to: string;
  children: React.ReactNode;
}

export const BlogGradientBox: React.FC<BlogGradientBoxProps> = ({
  children,
  from,
  to,
}) => {
  const fromColor = from || "from-klare-k dark:from-dark-klare-k";
  const toColor = to || "to-klare-a dark:to-dark-klare-a";

  return (
    <div
      className={`bg-gradient-to-r ${fromColor} ${toColor} text-white rounded-xl p-8 my-8`}
    >
      {children}
    </div>
  );
};
