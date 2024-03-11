import { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

const InfoBox = () => {
  return <div>InfoBox</div>;
};

export default InfoBox;
