import { useAtom } from "jotai";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MenuBar } from "../../component/menuBar";
import { SurveyBuilder } from "../../component/surveyBuilder/surveyBuilder";
import { rightDivWidthAtom } from "../../state-machine/designer";
import Preview from "../../component/previewComponent/preview";
import styles from "../../styles/createSurvey.module.scss";

const CreateSurvey: NextPage = () => {
  const [statuscheck, setStatusCheck] = useState(false);
  const [checkBox, setCheckBox] = useState(0);

  const [BoxWidth, setBoxWidth] = useState<number>(0);
  const [Clientx, setClientx] = useState<number>(0);

  const [rightwidth, setrightWidth] = useAtom(rightDivWidthAtom);
  const [rightwidthLocal, setrightWidthLocal] = useState(0);

  useEffect(() => {
    setrightWidthLocal(rightwidth);
  }, [rightwidth]);

  /**
   * For mobile
   */
  function getPositionX(e: any) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  }

  const initialBoxTwo = (e: any) => {
    setStatusCheck(true);
    setCheckBox(2);
    setClientx(getPositionX(e));
    setBoxWidth(rightwidthLocal);
  };

  const resize = (e: any) => {
    if (!statuscheck) {
      return;
    }

    let positionx = getPositionX(e) - Clientx;
    if (checkBox == 2) {
      // rightref.current.style.width = BoxWidth - positionx + 'px';
      if (BoxWidth - positionx < 542) {
        setrightWidth(542);
      } else {
        setrightWidth(BoxWidth - positionx);
      }
    }
  };

  const dragEnd = () => {
    setStatusCheck(false);
    setCheckBox(0);
  };

  return (
    <>
      <MenuBar />
      <div
        className={styles.mainBox}
        onMouseMove={resize}
        onTouchMove={resize}
        onMouseLeave={dragEnd}
        onTouchCancel={dragEnd}
        onTouchEnd={dragEnd}
        onMouseUp={dragEnd}
      >
        {/* box 2 */}
        <div className={styles.middleBox}>
          <h1>Left-box</h1>
          <SurveyBuilder />
        </div>
        <div
          id={styles.draggable}
          onMouseDown={initialBoxTwo}
          onTouchStart={initialBoxTwo}
        ></div>

        {/* box 3 */}
        <div
          style={{
            width: rightwidthLocal,
            height: "100%",
            backgroundColor: "#206a85",
          }}
        >
          {/* <p>this is right box {rightwidthLocal}</p> */}
          <Preview />
        </div>
      </div>
    </>
  );
};

export default CreateSurvey;
