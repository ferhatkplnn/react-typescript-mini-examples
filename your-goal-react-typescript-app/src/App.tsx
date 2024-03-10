import CouserGoalList from "./components/CouserGoalList";
import goalImg from "./assets/images/goal.png";
import Header from "./components/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Goal } from "./types";
import { nanoid } from "nanoid";

const App = () => {
  const [goals, setGoals] = useLocalStorage<Goal[]>("goals", []);

  const handleAddGoal = () => {
    setGoals((prev) => {
      const newGoal: Goal = {
        id: nanoid(),
        title: "Learn React + Ts",
        descrtiption: "Learn it in depth!",
      };

      return [...prev, newGoal];
    });
  };

  const handleDeleteGoal = (id: string) => {
    setGoals((prev) => {
      const filteredGoal = prev.filter((goal) => goal.id !== id);
      return filteredGoal;
    });
  };

  return (
    <main>
      <Header image={{ src: goalImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>

      <CouserGoalList goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </main>
  );
};

export default App;
