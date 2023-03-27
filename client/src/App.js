import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import CustomTable from './components/Table';

import useFilesData from './hooks/useFilesData';



function App() {
  const filesData = useFilesData();

  return (
    <Container fluid>
      <Header/>
      <Container expand="lg">
        <CustomTable data={filesData} />
      </Container>
    </Container>
  );
}

export default App;
