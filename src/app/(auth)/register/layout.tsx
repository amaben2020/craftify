import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return <main className="p-10">{children}</main>;
};

export default layout;
