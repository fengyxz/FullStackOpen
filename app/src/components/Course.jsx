const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  return parts.map((part) => <Part key={part.id} part={part} />);
};

const Course = ({ course }) => {
  const total = course.parts.reduce((pre, cur) => pre + cur.exercises, 0);
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <h4>total of {total} exercises</h4>
    </>
  );
};

export default Course;
