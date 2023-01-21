import { Link } from 'react-router-dom'
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";
import {Component} from "react";
import { Routes, Route, useNavigate} from 'react-router-dom';
import EmpTable from "./empTable";
import ReactModal from "react-modal"

ReactModal.setAppElement('#root');

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
            employees :[],
            showModal: false,
            reload: false,
            deleteStated: false,
            deleteId: 0,
            mode: ''
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        if(props.mode){
            this.state.mode = props.mode
        }
    }

    handleDelete (value) {
        this.setState({ deleteId: value });
        this.setState({ deleteStated: true });
        this.handleOpenModal ()
        console.log(value);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ deleteStated: false });
        this.setState({ showModal: false });
    }

    componentDidMount() {
        this.fetchAll();
    }

    deleteRecord(deleteId){
        let res = fetch('http://localhost:3000/api/emps/' +deleteId, {
            method: "DELETE",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })
        this.setState({ showModal: false });
        this.setState({ deleteStated: false });
        this.setState({ reload: true });
    }

    render() {

        const {error, isLoaded, employees,showModal,reload, deleteStated,deleteId, mode} = this.state
        let content, modalBtn, text;
        if(error){
            content = <p>HAHA 0!</p>
        }else{
            content =  <EmpTable empList={employees} modalWin={this.handleOpenModal} handleDelete={this.handleDelete}/>
        }

        if(deleteStated){
            text = "Do you want to delete your record?"
            modalBtn =<><button className="btn_modal" onClick={() => this.deleteRecord(deleteId)}>Accept</button>
            <button className="btn_modal" onClick={this.handleCloseModal}>Close</button> </>
        }else{
            modalBtn =  <p>a</p>
        }

        if (reload){
            return <Emp/>
        }

        if(mode !== ''){
            modalBtn =<>
                <Link className="btn_modal" to="/emp">Close</Link> </>
            if(mode === 'edit'){
                text = "Your record was modified"
            }else{
                text = "Your record was added"
            }
            this.handleOpenModal()
        }

        return (
            <main>
                <h2>EMP</h2>
                {content}
                {reload}

                <Link className="btn" to={`/emp/add`}>
                    Add
                </Link>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    portalClassName="modalCustom"
                    className="Modal"
                >

                    <div className="modal-content">
                        <div className="modal-text">{text}</div>
                        <div className="modal-buttons">

                            {modalBtn}

                        </div>
                    </div>


                </ReactModal>

            </main>
        );
    }


}
export default Emp;