import { ReactNode } from 'react';

type PropType = {
    children: ReactNode
}

export default function Header({ children }: PropType) {
  return (
    <h1 className="text-3xl font-bold">{children}</h1>
  );
}
