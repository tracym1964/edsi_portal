var React = require('react');
var EquipmentModal = require('./equipmentmodal')

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;
var styles = require('../../styles')

function Equipment (props){
   return (
     <Grid>
       <Row>
         <Col sm={4}>
           <Button
             onClick={props.onUpdateEquipment}
             bsSize="large"
             block
             bsStyle={null}
             className="btn-darkblue"> Equipment
           </Button>
           <Panel collapsible expanded={props.equipment_open}>
             {props.equipment.map((eqt, i) => (
               <Button
                 key={i}
                 bsStyle="success"
                 onClick={()=>{props.onEquipmentSelection(eqt, eqt.id)}}
                 bsSize="small"
                 style={styles.space}
                 block>
                 {eqt.product}
               </Button>
              ))}
             <EquipmentModal
               onUpdateEquipmentModal={props.onUpdateEquipmentModal}
               equipment_modal={props.equipment_modal}
               equipment_selected={props.equipment_selected} />

           </Panel>
         </Col>
       </Row>
     </Grid>
   )
};


module.exports = Equipment;
