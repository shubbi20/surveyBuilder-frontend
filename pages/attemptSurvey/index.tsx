import { useEffect, useState } from "react";
import { MenuBar } from "../../component/menuBar";

export const attemptSurvey = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <div>
        <MenuBar />
        this is attemptSurvey
      </div>
    )
  );
};

export default attemptSurvey;
