var React = require('react');

var Form = require('react-bootstrap').Form;
var Table = require('react-bootstrap').Table;
var Button = require('react-bootstrap').Button;

function SearchReturn (props){
  if (props.searchreturn){
    if (props.search_context == 'bill') {
      return (
        <Form>
          <Table>
            <thead>
              <tr>
                <th>
                  Select
                </th>
                <th>
                  Number
                </th>
                <th>
                  Name
                </th>
              </tr>
            </thead>
            <tbody>
              {props.searchreturn.map((item, i) => (
                <tr key={i}>
                  <td>
                    <Button
                      bsStyle={null}
                      className="btn-darkblue"
                      onClick={()=>{props.onSearchSelection(item)}}
                    >
                      Select
                    </Button>
                  </td>
                  <td>
                      {item.number}
                  </td>
                  <td>
                      {item.name}
                  </td>
                </tr>
              ))}
            </tbody>

          </Table>
        </Form>
      )

    } else {
      return (
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
              </tr>
            </thead>
            <tbody>
              {props.searchreturn.map((item, i) => (
                <tr key={i}>
                  <td>
                    <Button
                      bsStyle={null}
                      className="btn-darkblue"
                      onClick={()=>{props.onSearchSelection(item)}}
                    >
                      Select
                    </Button>
                  </td>
                  <td>
                    {item.name}
                  </td>
                </tr>
              ))}
            </tbody>

          </Table>
        </Form>
      )
    }
  } else {
      return null
  }
};

module.exports = SearchReturn;