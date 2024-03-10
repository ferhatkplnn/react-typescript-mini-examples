import { FormEvent, useState } from "react";

const initialValue = {
  title: "",
  description: "",
};

type NewGoalProps = {
  handleAddGoal: (data: { title: string; description: string }) => void;
};

const NewGoal = ({ handleAddGoal }: NewGoalProps) => {
  const [goal, setGoal] = useState<{
    title: string;
    description: string;
  }>(initialValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAddGoal(goal);
    setGoal(initialValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoal((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <form className="new-goal" onSubmit={handleSubmit}>
      <div className="new-goal__input">
        <label htmlFor="goal">Your goal</label>
        <input
          value={goal.title}
          onChange={handleChange}
          id="goal"
          name="title"
          required
        />
      </div>

      <div className="new-goal__input">
        <label htmlFor="summary">Short summary</label>
        <input
          id="summary"
          value={goal.description}
          onChange={handleChange}
          name="description"
          required
        />
      </div>

      <button>Add Goal</button>
    </form>
  );
};

export default NewGoal;
