import { FC, ReactElement } from "react";

interface MainProps {
  children: ReactElement;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="h-[86%] w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
      {children}
    </main>
  );
};

export default Main;
