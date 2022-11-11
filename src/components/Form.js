import React from 'react'; //typed rafce to create this Form Component using extension
import * as actionCreators from "../state/action-creators";
import { connect } from "react-redux";

export const Form = (props) => {

 console.log("PROPS:", props)

    const onInputChange = evt => {
        props.form.movieTitle = evt.target.value
        props.inputChange(props.form.movieTitle)
    }

   

    const onSubmit = evt => {
        evt.preventDefault();
        props.fetchMovie(props.form.movieTitle)
     
       
    }
  return (
    <div>
      <form id="form" onSubmit={onSubmit}>
            <h2>Search For A Movie</h2>
            <input
                maxLength={50}
                onChange={onInputChange}
                id="movieTitle"
                placeholder="Enter a Movie Title"
                name="movieTitle" 
                type="text"
                value={props.form.movieTitle}
            />


            <button>Submit</button>
        </form>

        {/* <div>{props.movie.title}</div> */}
        <div>{props.movie}</div>
    </div>
  )
}

export default connect(st => st, actionCreators)(Form) //appreviation for map state to props