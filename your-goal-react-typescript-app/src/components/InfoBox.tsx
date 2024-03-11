import { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

const InfoBox = ({ mode, children }: InfoBoxProps) => {
  if (mode === "hint") {
    return (
      <aside className="infobox">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className="infobox infobox-warning">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
