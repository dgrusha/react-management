import { Link } from 'react-router-dom'
import {getAgencyApiCall} from "../../apiCalls/agencyApiCall";
import {Component} from "react";
import AgencyTable from "./agencyTable";

class Agency extends Component{
    fetchAll = () => {
        getAgencyApiCall()
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded : true,
                        agencys: data
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
            agencys :[]
        }

    }

    componentDidMount() {
        this.fetchAll();
    }

    render() {
        const {error, isLoaded, agencys} = this.state
        let content;
        if(error){
            content = <p>HAHA 0!</p>
        }else{
            content =  <AgencyTable agencyList={agencys}/>
        }
        return (
            <main>
                <h2>AGENCY</h2>
                {content}

                <Link className="btn" to={`/agency/add`}>Add</Link>
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

export default Agency;