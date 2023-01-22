import { Link } from 'react-router-dom'
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";
import {Component} from "react";
import { Routes, Route, useNavigate} from 'react-router-dom';
import EmpTable from "./empTable";
import ReactModal from "react-modal"
import { withTranslation } from 'react-i18next';


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
            error: '',
            isLoaded:false,
            employees :[],
            showModal: false,
            reload: false,
            deleteStated: false,
            deleteId: 0,
            mode: '',
            modalText: '',
            modalButtons:''
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        if(props.mode !== undefined){
            this.state.mode = props.mode
        }
    }

    handleDelete (value) {
        this.setState({ deleteId: value });
        this.setState({ deleteStated: true });
        this.handleOpenModal ()
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ deleteStated: false });
        this.setState({ showModal: false });
    }

    componentDidMount() {

        if(this.props.mode !== undefined){
            this.setState({ modalButtons: <><Link className="btn_modal" to="/emp">Close</Link> </> });
            if(this.props.mode === 'edit'){
                this.setState({ modalText: "Your record was modified" });
            }else if(this.props.mode === 'add'){
                this.setState({ modalText: "Your record was added" });
            }
            console.log(this.props.mode)
            this.handleOpenModal()
        }
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
        const { t } = this.props;

        let {error, isLoaded, employees,showModal,reload, deleteStated,deleteId, mode, modalText, modalButtons} = this.state
        let content;
        if(error){
            content = <p>HAHA 0!</p>
        }else{
            content =  <EmpTable empList={employees} modalWin={this.handleOpenModal} handleDelete={this.handleDelete}/>
        }

        if(deleteStated){
            modalText = "Do you want to delete your record?"
            modalButtons =<><button className="btn_modal" onClick={() => this.deleteRecord(deleteId)}>Accept</button>
            <button className="btn_modal" onClick={this.handleCloseModal}>Close</button> </>
        }

        if (reload){
            return <Emp t={t}/>
        }


        return (
            <main>
                <h2>{t('nav.employees')}</h2>
                {content}
                {reload}

                <Link className="btn" to={`/emp/add`}>
                    {t('list.actions.add')}
                </Link>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    portalClassName="modalCustom"
                    className="Modal"
                >

                    <div className="modal-content">
                        <div className="modal-text">
                            {modalText}

                        </div>
                        <div className="modal-buttons">

                            {modalButtons}

                        </div>
                    </div>


                </ReactModal>

            </main>
        );
    }


}
export default withTranslation()(Emp);