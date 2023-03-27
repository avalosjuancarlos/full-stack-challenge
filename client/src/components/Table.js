import Table from 'react-bootstrap/Table';

const CustomTable = props => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>number</th>
          <th>hex</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>test3.csv</td>
          <td>OajXr</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>test3.csv</td>
          <td>iGPHmOLwIBFjwwjQERDK</td>
          <td>056</td>
          <td>0952c016909b9c60642286eb6b8e67d3</td>
        </tr>
        <tr>
          <td>test3.csv</td>
          <td>tXqfB</td>
          <td>4512945</td>
          <td>c0f98515b7700172ced9c72dffad91b2</td>
        </tr>
        <tr>
          <td>test3.csv</td>
          <td>jkCBhTwWHvstvueLfZmkZGwpz</td>
          <td>74381</td>
          <td>5030a87df17081c16f6ee1967755c5fc</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CustomTable;