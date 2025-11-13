type LinkProps = {
  href: string;
  label: string;
};

export const Link = ({ href, label }: LinkProps) => {
  return (
    <a href={href} className="text-[#3EA513]">
      {label}
    </a>
  );
};
