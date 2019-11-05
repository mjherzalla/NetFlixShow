import React, { Component } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player'
class ShowPervBtn extends React.Component {
   
    constructor (props) {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
        
          <i onClick={this.handleOpenModal} className="far fa-play-circle prvBtn"></i>
          <Modal 
             isOpen={this.state.showModal}
             contentLabel="Perview"
          >
            <div className="ModalContent"> 
             <i onClick={this.handleCloseModal} className="far fa-arrow-alt-circle-left GoBackIcon"></i><br/>
             <iframe src={this.props.SRC }></iframe>
            </div>
          </Modal>
        </div>
      );
    }
  }
  
  const props = {};

  export default ShowPervBtn;
 