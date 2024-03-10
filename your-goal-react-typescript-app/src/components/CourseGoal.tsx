import { FC, PropsWithChildren } from "react";

// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
//   id: number;
// };

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: string;
  handleDeleteGoal: (id: string) => void;
}>;

// const CourseGoal = ({ title, children }: CourseGoalProps) => {
//   return (
//     <article className="card">
//       <div className="card__content">
//         <h2 className="card__content__title">{title}</h2>
//         <p className="card__content__description">{children}</p>
//       </div>
//       <button className="card__button">Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;

const CourseGoal: FC<CourseGoalProps> = ({
  title,
  id,
  children,
  handleDeleteGoal,
}) => {
  return (
    <article className="card">
      <div className="card__content">
        <h2 className="card__content__title">{title}</h2>
        <p className="card__content__description">{children}</p>
      </div>
      <button onClick={() => handleDeleteGoal(id)} className="card__button">
        Delete
      </button>
    </article>
  );
};

export default CourseGoal;
