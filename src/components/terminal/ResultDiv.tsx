import { FC } from "react";

interface ResultDivProps {
  text: string;
}

const ResultDiv: FC<ResultDivProps> = (props) => {
  return (
    <div className="mb-4" dangerouslySetInnerHTML={{ __html: props.text }} />
  );
};

export default ResultDiv;
