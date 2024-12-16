const Header = (props) => {
  console.log(props)
  return (
    
    <div><center> <p>
        <h1>{props.course}</h1>
      </p></center>
      </div> 
  )
}

const Content = (props) => {
  console.log(props)
  return (
    
    <div> <center><p>
        <h2>{props.part1}</h2>
      </p></center>
      </div> 
  )
}

const Total = (props) => {
  console.log(props)
  return (
    
    <div> <center><p>
        <h3>{props.exercises1}</h3>
      </p></center>
      </div> 
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} />
      <Total exercises1={exercises1} />
      <Header course={course} />
      <Content part1={part2} />
      <Total exercises1={exercises2} />
      <Header course={course} />
      <Content part1={part3} />
      <Total exercises1={exercises3} />
    </div>
  )
}

export default App



