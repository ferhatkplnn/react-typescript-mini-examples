import CourseGoal from "./components/CourseGoal";

const App = () => {
  return (
    <main>
      <CourseGoal title="Learn React + TS" id={1}>
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
};

export default App;
