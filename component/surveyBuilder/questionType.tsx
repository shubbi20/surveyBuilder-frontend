import React from "react";
import styles from "../../styles/designer.module.scss";

interface Props extends React.PropsWithChildren<any> {
  Questype: string;
  Quesdesc: string;
  Quesicon: any;
  handlefunc?: () => void;
}
export const QuestionType: React.FC<Props> = ({
  children,
  Questype,
  Quesdesc,
  Quesicon,
  handlefunc,
}) => {
  return (
    <div className={styles.modalContainer} onClick={handlefunc}>
      <div
        style={{
          backgroundColor: "yellow",
          height: "50px",
          width: "50px",
          borderRadius: "10%",
          margin: "2px 1px",
        }}
      >
        <div
          style={{
            fontSize: 32,
            padding: 2,
            margin: "auto 0",
          }}
        >
          {Quesicon}
        </div>
      </div>

      <div style={{ padding: 0, margin: 0, paddingLeft: 5 }}>
        <p
          style={{
            padding: 0,
            margin: 0,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {Questype}
        </p>
        <p style={{ padding: 0, margin: 0, fontSize: 13 }}>{Quesdesc}</p>
      </div>
    </div>
  );
};
