var React = require('react');
var EditModal = require('./editmodal');
var AddModal = require('./addmodal');
var SearchModal = require('./searchmodal');

var Button = require('react-bootstrap').Button;
var FormControl = require('react-bootstrap').FormControl;
var Table = require('react-bootstrap').Table;
var PageHeader = require('react-bootstrap').PageHeader;


function CustomerMaintenance (props){
    if (props.ent) {
        billto = <FormControl
                    componentClass="select"
                    value={props.billto}
                    onChange={props.onBillToUpdate}>
                    {props.billto_list.map((bt, i) => (
                        <option key={i} value={bt.number}>{bt.number}</option>
                    ))}
                 </FormControl>
        billto_edit = <Button
                    bsStyle="success"
                    onClick={()=>{props.onUpdateEditModal('bill')}}
                    block>
                    Edit
               </Button>
        org = <FormControl
                componentClass="select"
                value={props.org}
                onChange={props.onOrgUpdate}>
                {props.org_list.map((org, i) => (
                    <option key={i} value={org._id}>{org.name}</option>
                ))}
             </FormControl>
        org_edit = <Button
                      bsStyle="success"
                      onClick={()=>{props.onUpdateEditModal('org')}}
                      block>
                    Edit
                  </Button>
        ent = <FormControl
                componentClass="select"
                value={props.ent}
                onChange={props.onEntUpdate}>
                {props.ent_list.map((org, i) => (
                    <option key={i} value={org._id}>{org.name}</option>
                ))}
              </FormControl>
        ent_edit = <Button
                        bsStyle="success"
                        onClick={()=>{props.onUpdateEditModal('ent')}}
                        block>
                      Edit
                   </Button>
        getcustomers = <Button
                        bsStyle="danger"
                        onClick={props.onGetCustomers}>
                        Get Customers
                    </Button>
    } else {
        billto = null
        billto_edit = null
        org = null
        org_edit = null
        ent = null
        ent_edit = null
        ent_label = null
        org_label = null
        billto_label = null
        getcustomers = null
    }

    if (props.customers) {
        table =        <Table>
                           <tbody>
                                <tr>
                                    <th>Customer Name</th>
                                    <th>Customer Number</th>
                                    <th>Customer Bill-To</th>
                                </tr>
                                {props.customers.map((customer, i) => (
                                    <tr key={i}>
                                        <td>{customer.name}</td>
                                        <td>{customer.customer_number}</td>
                                        <td>{customer.billto}</td>
                                    </tr>
                                ))}
                           </tbody>
                       </Table>
    } else {
        table = null
    }
    if (props.edit_context == 'bill') {
        edit_title = props.billto
    } else {
        edit_title = null
    }
   return (
     <div className="col-sm-8 col-sm-offset-2">
       <PageHeader>
          Customer Maintenance
       </PageHeader>
       <Table>
           <tbody>
                <tr>
                    <th>Enterprise</th>
                    <th>
                        <Button
                            bsStyle="primary"
                            onClick={()=>{props.onUpdateSearchModal('ent')}}
                            block>
                          Search
                        </Button>
                    </th>
                    <th>
                        {ent}
                    </th>
                    <th>
                        {ent_edit}
                    </th>
                </tr>
                <tr>
                    <th>Organiztion</th>
                    <th>
                        <Button
                            bsStyle="primary"
                            onClick={()=>{props.onUpdateSearchModal('org')}}
                            block>
                          Search
                        </Button>
                    </th>
                    <th>
                        {org}
                    </th>
                    <th>
                        {org_edit}
                    </th>
                </tr>
                <tr>
                    <th>Bill-to</th>
                    <th>
                        <Button
                            bsStyle="primary"
                            onClick={()=>{props.onUpdateSearchModal('bill')}}
                            block>
                          Search
                        </Button>
                    </th>
                    <th>
                        {billto}
                    </th>
                    <th>
                        {billto_edit}
                    </th>
                </tr>
                <tr>
                    <th>
                        {getcustomers}
                    </th>
                    <th colSpan="3"></th>
                </tr>
           </tbody>
       </Table>
         {table}
         <EditModal
             edit_modal={props.edit_modal}
             onUpdateEditModal={props.onUpdateEditModal}
             edit_context={props.edit_context}
             org={props.org}
             org_list={props.org_list}
             edit_org={props.edit_org}
             onEditOrgUpdate={props.onEditOrgUpdate}
             title={edit_title}
             onSaveEdit={props.onSaveEdit}
             edit_org_name={props.edit_org_name}
             onOrgNameUpdate={props.onOrgNameUpdate}
             edit_ent_name={props.edit_ent_name}
             onEntNameUpdate={props.onEntNameUpdate}
         />
         <AddModal
             add_modal={props.add_modal}
             search_text={props.search_text}
             search_context={props.search_context}
             onUpdateAddModal={props.onUpdateAddModal}
             onUpdateSearchText={props.onUpdateSearchText}
             onSearchSelection={props.onSearchSelection}
             searchreturn={props.searchreturn}
             onSearch={props.onSearch}
         />
         <SearchModal
             search_modal={props.search_modal}
             search_text={props.search_text}
             search_context={props.search_context}
             onUpdateSearchModal={props.onUpdateSearchModal}
             onUpdateSearchText={props.onUpdateSearchText}
             onSearchSelection={props.onSearchSelection}
             searchreturn={props.searchreturn}
             onSearch={props.onSearch}
             billto={props.billto}
             billto_list={props.billto_list}
         />
     </div>
   )
};

CustomerMaintenance.propTypes = {
},

module.exports = CustomerMaintenance;