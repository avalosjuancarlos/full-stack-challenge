import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = props => {
    return (
    <Navbar bg="danger" variant='dark'>
        <Container>
            <Navbar.Brand href="/">React Test App</Navbar.Brand>
        </Container>
    </Navbar>);
}

export default Header;