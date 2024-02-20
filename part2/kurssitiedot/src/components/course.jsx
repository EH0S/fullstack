import React from "react"


const Header = (props) => {
    return(
      <h1>{props.course}</h1>
    )
  };
  
  const Content = (props) => {
    //osa + tehtävämäärä
    return(
      <>
        {props.parts.map((part, index) => (
      <div key={index}>
      <Part parts={part} />
      </div>
        ))}
  </>
    )
  };
  
  const Count = (partExercises) =>
    partExercises.reduce(
      (totalExercises, currentExercises) => totalExercises + currentExercises.exercises, 0
    );
  
  const Total = (props) => {
    console.log(props)
    return(
      <div>
        <p> Total of {props.count} exercises</p>
      </div>
    )
  };
  
  const Part = (props) => {
    return(
      <div>
        <p>{props.parts.name}</p>
        <p>{props.parts.exercises}</p>
    </div>
    )
  };
  
  const Course = (props) => {
    return(
      <div>
        <Header course={props.course.name} />
        <Content parts={props.course.parts} />
        <Total count={Count(props.course.parts)}/>
      </div>
    )
  };

  export default Course;