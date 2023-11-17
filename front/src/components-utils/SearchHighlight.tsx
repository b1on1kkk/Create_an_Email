interface TSearchHighlight {
  children: React.ReactNode | React.ReactNode[] | string;
}

export default function SearchHighlight({ children }: TSearchHighlight) {
  return <span className="bg-yellow-400">{children}</span>;
}
