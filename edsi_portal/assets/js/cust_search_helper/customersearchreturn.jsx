var React = require('react');

var Form = require('react-bootstrap').Form;
var Table = require('react-bootstrap').Table;
var Button = require('react-bootstrap').Button;

function CustomerSearchReturn (props) {
    if (props.searchreturn) {
      if (props.searchreturn.length == 0) {
        table_ret =
            <Table>
              <tbody>
                <tr>
                  <th>No Customers Returned, Please Check Your Query and Try Again</th>
                </tr>
              </tbody>
            </Table>
      } else {
        table_ret =
            <Form>
              <Table>
                <thead>
                <tr>
                  <th>
                    Select
                  </th>
                  <th>
                    Name
                  </th>
                  <th>
                    City/State
                  </th>
                  <th>
                    Phone
                  </th>
                </tr>
                </thead>
                <tbody>
                {props.searchreturn.map((customer, i) => (
                    <tr key={i}>
                      <td>
                        <Button
                            bsStyle={null}
                            className="btn-darkblue"
                            type="submit"
                            onClick={() => {
                                props.onUpdateCustomerSelection(customer, customer.name)
                            }}>
                          Select
                        </Button>
                      </td>
                      <td>
                          {customer.name}
                      </td>
                      <td>
                          {customer.city_state}
                      </td>
                      <td>
                          {customer.phone}
                      </td>

                    </tr>
                ))}
                </tbody>

              </Table>
            </Form>
      }
    } else {
        table_ret = null;
  }
  return (
    <div>
        {table_ret}
    </div>
  )
};

module.exports = CustomerSearchReturn;
