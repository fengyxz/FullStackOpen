const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part}{props.content}</p>
}

const Content = (props) => {
  return <>
    <Part part={props.part[0]} content={props.exercise[0]}/>
    <Part part={props.part[1]} content={props.exercise[1]}/>
    <Part part={props.part[2]} content={props.exercise[2]}/>

  </>

}

const Total = (props) => {
  return  <p>Number of exercises {props.total.reduce((pre,cur)=>{return pre+cur},0)}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part = ['Fundamentals of React', 'Using props to pass data','State of a component']
  const exercises = [10,7,14]

  return (
    <div>
      <Header course={course}/>
      <Content part={part} exercise={exercises} />
      <Total total={exercises}/>
     
    </div>
  )
}

export default App