import CouserGoalList from "./components/CouserGoalList";
import goalImg from "./assets/images/goal.png";
import Header from "./components/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Goal } from "./types";
import { nanoid } from "nanoid";
import NewGoal from "./components/NewGoal";

const App = () => {
  const [goals, setGoals] = useLocalStorage<Goal[]>("goals", []);

  const handleAddGoal = (data: { title: string; description: string }) => {
    setGoals((prev) => {
      const newGoal: Goal = {
        id: nanoid(),
        title: data.title,
        descrtiption: data.description,
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
      <NewGoal handleAddGoal={handleAddGoal} />

      <CouserGoalList goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </main>
  );
};

export default App;
