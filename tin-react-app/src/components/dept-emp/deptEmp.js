import { Link } from 'react-router-dom'
import {getDeptEmpsApiCall} from "../../apiCalls/deptEmpApi";
import {Component} from "react";
import DeptEmpTable from "./deptEmpTable";


class DeptEmp extends Component {

    fetchAll = () => {
        getDeptEmpsApiCall()
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded : true,
                        deptEmps: data
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
            deptEmps :[],
            showModal: false
        }

    }

    componentDidMount() {
        this.fetchAll();
    }

    render() {

        const {error, isLoaded, deptEmps} = this.state
        let content;
        if(error){
            content = <p>HAHA 0!</p>
        }else{
            content =  <DeptEmpTable deptEmpList={deptEmps}/>
        }

        return (
            <main>
                <h2>DEPT-EMP</h2>
                {content}
                <Link className="btn" to={`/deptEmp/add`}>Add</Link>
                <br/>
                <div className="alert">
                    <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
                    <strong>ALERT!</strong> YOUR RECORD WAS DELETED.
                </div>
                <br/>
                <div className="alert">
                    <strong>ALERT!</strong> DO YOU WANT TO DELETE THE RECORD?
                    <div className="deletediv">
                            <span className="deletebtn"
                                  onClick="this.parentElement.parentElement.style.display='none';">Accept</span>
                        <span className="deletebtn"
                              onClick="this.parentElement.parentElement.style.display='none';">Cancel</span>
                    </div>
                </div>
                <br/>
                <div className="confirmation">
                    <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
                    <strong>ALERT!</strong> YOUR RECORD WAS ADDED!
                </div>
                <br/>
                <div className="modification">
                                <span className="closebtn"
                                      onClick="this.parentElement.style.display='none';">&times;</span>
                    <strong>ALERT!</strong>YOUR RECORD WITH NAME : dsada and WITH ADRESS: jdsadsa WAS
                    MODIFIED!
                </div>
            </main>
        );
    }


}

export default DeptEmp;