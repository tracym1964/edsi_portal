var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;
var DispatchModal = require('./dispatchmodal');
var styles = require('../../styles');


function OpenDispatch (props){
  return (
    <Grid>
      <Row>
        <Col sm={4}>
          <Button
            onClick={props.onUpdateDispatches}
            bsSize="large"
            block
            bsStyle={null}
            className="btn-darkblue">
            {props.title}
          </Button>
          <Panel collapsible expanded={props.dispatches_open}>
            {props.dispatches.map((dispatch, i) => (
              <Button
                key={i}
                bsStyle="primary"
                bsSize="small"
                onClick={()=>{props.onDispatchSelection(dispatch, dispatch.id)}}
                style={styles.space}
                block>
                <h6>Customer Name: {dispatch.customer_name}</h6>
                <h6>Dispatch ID: {dispatch.dispatch_number}</h6>
              </Button>
            ))}
            <DispatchModal
              onUpdateModal={props.onUpdateModal}
              dispatch_modal={props.dispatch_modal}
              dispatch_selected={props.dispatch_selected} />
          </Panel>
        </Col>
      </Row>
    </Grid>
  )
};


module.exports = OpenDispatch;
