import { Link } from 'react-router-dom'
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";
import {Component} from "react";
import EmpTable from "./empTable";


class Emp extends Component {

    fetchAll = () => {
        getEmployeesApiCall()
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded : true,
                        employees: data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded:false,
            employees :[]
        }

    }

    componentDidMount() {
        this.fetchAll();
    }

    render() {


        const {error, isLoaded, employees} = this.state
        let content;
        if(error){
            content = <p>HAHA 0!</p>
        }else{
            content =  <EmpTable empList={employees}/>
        }
        return (
            <main>
                <h2>EMP</h2>
                {content}


                <Link className="btn" to={`/emp/add`}>
                    Add
                </Link>
                <br></br>
                <div className="alert">
                    <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
                    <strong>ALERT!</strong> YOUR RECORD WAS DELETED.
                </div>
                <br></br>
                <div className="alert">
                    <strong>ALERT!</strong> DO YOU WANT TO DELETE THE RECORD?
                    <div className="deletediv">
                            <span className="deletebtn"
                                  onClick="this.parentElement.parentElement.style.display='none';">Accept</span>
                        <span className="deletebtn"
                              onClick="this.parentElement.parentElement.style.display='none';">Cancel</span>
                    </div>
                </div>
                <br></br>
                <div className="confirmation">
                    <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
                    <strong>ALERT!</strong> YOUR RECORD WAS ADDED!
                </div>
                <br></br>
                <div className="modification">
                                <span className="closebtn"
                                      onClick="this.parentElement.style.display='none';">&times;</span>
                    <strong>ALERT!</strong>YOUR RECORD WITH NAME : dsada and WITH SURNAME: jdsadsa WAS
                    MODIFIED!
                </div>

            </main>
        );
    }


}

export default Emp;