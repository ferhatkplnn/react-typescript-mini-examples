import { Goal } from "../types";
import CourseGoal from "./CourseGoal";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalList = {
  goals: Goal[];
  handleDeleteGoal: (id: string) => void;
};

const CouserGoalList = ({ goals, handleDeleteGoal }: CourseGoalList) => {
  const [parent] = useAutoAnimate();

  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <div ref={parent} className="goals">
        {goals.map((goal) => (
          <CourseGoal
            handleDeleteGoal={handleDeleteGoal}
            title={goal.title}
            id={goal.id}
            key={goal.id}
          >
            {goal.descrtiption}
          </CourseGoal>
        ))}
      </div>
    </>
  );
};

export default CouserGoalList;
