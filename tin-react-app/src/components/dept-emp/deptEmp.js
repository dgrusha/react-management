import { Link } from 'react-router-dom'
import {getDeptEmpsApiCall} from "../../apiCalls/deptEmpApi";
import {Component} from "react";
import DeptEmpTable from "./deptEmpTable";
import ReactModal from "react-modal"
import { Routes, Route, useNavigate} from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {getCurrentUser} from "../../helpers/authHelper";

ReactModal.setAppElement('#root');

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

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded:false,
            deptEmps :[],
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
            this.setState({ modalButtons: <><Link className="btn_modal" to="/deptEmp">Close</Link> </> });
            if(this.props.mode === 'edit'){
                this.setState({ modalText: "Your record was modified" });
            }else if(this.props.mode === 'add'){
                this.setState({ modalText: "Your record was added" });
            }
            this.handleOpenModal()
        }
        this.fetchAll();
    }

    deleteRecord(deleteId){
        const user = getCurrentUser()
        let token
        if (user && user.token) {
            token = user.token
        }
        let res = fetch('http://localhost:3000/api/deptEmps/' +deleteId, {
            method: "DELETE",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                'Authorization': 'Bearer ' + token
            }
        })
        this.setState({ showModal: false });
        this.setState({ deleteStated: false });
        this.setState({ reload: true });
    }

    render() {
        const { t } = this.props;
        let {error, isLoaded, deptEmps,showModal,reload, deleteStated,deleteId, mode, modalText, modalButtons} = this.state
        let content;
        if(error){
            content = <p>HAHA 0!</p>
        }else{
            content =  <DeptEmpTable deptEmpList={deptEmps} modalWin={this.handleOpenModal} handleDelete={this.handleDelete}/>
        }

        if(deleteStated){
            modalText = "Do you want to delete your record?"
            modalButtons =<><button className="btn_modal" onClick={() => this.deleteRecord(deleteId)}>Accept</button>
                <button className="btn_modal" onClick={this.handleCloseModal}>Close</button> </>
        }

        if (reload){
            return <DeptEmp/>
        }

        return (
            <main>
                <h2>{t('nav.emp-dept')}</h2>
                {content}
                <Link className="btn" to={`/deptEmp/add`}>{t('list.actions.add')}</Link>
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

export default withTranslation()(DeptEmp);