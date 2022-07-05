import React, {Component} from "react";

class Courses extends Component{
    course=['angular','react','node','npm'];
    courseList=this.course.map((item)=>
        <li>{item}</li>
        )
    courseindex=this.course.map((value,index)=>
        <li key={index}> {index} {value}</li>
    )
    render(){
        return(
            <div>
                <h3> Courses Component</h3>
                <ul>
                    {this.course}
                    {/*angular react node npm*/}
                </ul>
                <p>Course items are</p>
                <ul>{this.courseList}</ul>
                <p>Course items with index are</p>
                <ul>{this.courseindex}</ul>
            </div>
        );
    }
}

export default Courses;