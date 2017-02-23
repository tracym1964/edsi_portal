var React = require('react');
var SearchReturn = require('./searchreturn');

var Modal = require('react-bootstrap').Modal;
var Form = require('react-bootstrap').Form;
var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;
var Form = require('react-bootstrap').Form;
var Button = require('react-bootstrap').Button;


function SearchModal (props){
    if (props.search_context == 'bill') {
        type = <FormControl type="text" value="Bill-To" disabled/>
    } else if (props.search_context =='ent') {
        type = <FormControl type="text" value="Enterprise" disabled/>
    } else if (props.search_context =='org') {
        type = <FormControl type="text" value="Organization" disabled/>
    } else {
        type = null
    }
   return (
     <div>
       <Modal
         show={props.search_modal}
         onHide={props.onUpdateSearchModal}
         aria-labelledby="contained-modal-title"
         bsSize="large">
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title">Search Modal</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Form onSubmit={props.onCS}>
             <Table>
               <tbody>
                 <tr>
                   <th>
                       {type}
                   </th>
                   <th colSpan="2">
                     <FormControl
                       type="text"
                       placeholder="Search"
                       value={props.search_text}
                       onChange={props.onUpdateSearchText}/>
                   </th>
                   <th>
                     <Button
                       bsStyle='success'
                       type='submit'>
                       Search
                     </Button>
                   </th>
                 </tr>
               </tbody>
             </Table>
           </Form>
         <SearchReturn
             searchreturn={props.searchreturn}
             onUpdateCustomerSelection={props.onUpdateCustomerSelection}
             search_context={props.search_context}
         />
         </Modal.Body>
         <Modal.Footer>
           <Button
             onClick={props.onUpdateSearchModal}
             bsStyle="danger">
             Close
           </Button>
         </Modal.Footer>
       </Modal>

     </div>
    );
};



module.exports = SearchModal;