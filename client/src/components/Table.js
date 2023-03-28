import { useMemo } from 'react';
import Table from 'react-bootstrap/Table';

const CustomTable = props => {
  const tableBody = useMemo(() => {
    return props.data?.map(value => {
      return value.lines.map(file => {
        return (
          <tr key={file.hex}>
            <td>{value.file}</td>
            <td>{file.text}</td>
            <td>{file.number}</td>
            <td>{file.hex}</td>
          </tr>
        )
      });
    });
  }, [props.data]);

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
        {tableBody}
      </tbody>
    </Table>
  );
}

export default CustomTable;