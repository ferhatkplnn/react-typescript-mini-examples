import { Goal } from "../types";
import CourseGoal from "./CourseGoal";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type CourseGoalList = {
  goals: Goal[];
  handleDeleteGoal: (id: string) => void;
};

const CouserGoalList = ({ goals, handleDeleteGoal }: CourseGoalList) => {
  const [parent] = useAutoAnimate();

  return (
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
  );
};

export default CouserGoalList;
