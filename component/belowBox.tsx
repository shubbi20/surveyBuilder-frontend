import React from "react";
import styles from "../styles/homeContent.module.scss";

interface Props extends React.PropsWithChildren<any> {
  Boxheading?: string;
  Boxdesc?: string;
  Boxicon?: any;
}

export const BelowBox: React.FC<Props> = ({
  children,
  Boxheading,
  Boxdesc,
  Boxicon,
}) => {
  return (
    <div className={styles.belowBoxes}>
      <h1>{Boxicon}</h1>
      <h2>{Boxheading}</h2>
      <p>{Boxdesc}</p>
    </div>
  );
};
