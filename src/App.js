import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";

class App  extends React.Component{
  state={
     courseNumber:"",
      id:"",
      idToDelete:"",
      idToAdd:"",
      name:"",
      phone:""
  }

    setValue=(key,event)=>{
      this.setState({[key]:event.target.value})
    }

    showCourseStudents=()=>{
       axios.get("http://localhost:9030/show_course_students?courseNumber="+this.state.courseNumber).then(
           response=>{
               console.log(response.data)
           }
       )
    }

    showStudentsGrades=()=>{
        axios.get("http://localhost:9030/show_students_grades?id="+this.state.id).then(
            response=>{
                console.log(response.data)
            }
        )
    }
    deleteStudent=()=>{
        axios.get("http://localhost:9030/delete_student?id="+this.state.idToDelete).then(
            response=>{
                console.log(response.data)
            }
        )

    }
    addStudent=()=>{
        axios.get("http://localhost:9030/add_student?id="+this.state.idToAdd + "&name=" + this.state.name
        +"&phone=" + this.state.phone).then(
            response=>{
                console.log(response.data)
            }
        )

    }
  render() {
    return (
        <div className="App">
          <h1>task sql</h1>
           <div>
               <p>Show course student:</p>
             <input placeholder={"Enter course number"}
              type={"number"} value={this.state.courseNumber}
             onChange={(event)=>this.setValue("courseNumber",event)}/> <br/>
               <button onClick={()=>this.showCourseStudents()}>show course students</button>
           </div>
          <div>
              <p>Show student grades:</p>
              <input placeholder={"Enter student id"}
                     type={"number"} value={this.state.id}
                     onChange={(event)=>this.setValue("id",event)}/> <br/>
              <button onClick={()=>this.showStudentsGrades()}>show students grades</button>
          </div>
            <div>
                <p>Delete student:</p>
                <input placeholder={"Enter student id"}
                       type={"number"} value={this.state.idToDelete}
                       onChange={(event)=>this.setValue("idToDelete",event)}/> <br/>
                <button onClick={()=>this.deleteStudent()}>Delete student</button>
            </div>
            <div>
                <p>Add student:</p>
                <label>Enter student id:</label>
                <input type={"number"} value={this.state.idToAdd}
                       onChange={(event)=>this.setValue("idToAdd",event)}/>
                <label>Enter student name:</label>
                <input type={"text"} value={this.state.name}
                       onChange={(event)=>this.setValue("name",event)}/>
                <label>Enter phone number</label>
                <input type={"number"} value={this.state.phone}
                       onChange={(event)=>this.setValue("phone",event)}/>
                <button onClick={()=>this.addStudent()}>Add student</button>
            </div>
            <div>
                <p>update grade by id:</p>
                <label>Enter student id:</label>
                <input />
                <label>Enter new grade:</label>
                <input />
            </div>
            <div>
                <p>update details by id:</p>
                <label>Enter student id:</label>
                <input />
                <label>Enter new name:</label>
                <input />
                <label>Enter new phone:</label>
                <input />
            </div>
            <div>
                <p>Show average:</p>
                <label>Enter student id:</label>
                <input />
                <p>average: </p>
            </div>
        </div>
    );
  }
}

export default App;
