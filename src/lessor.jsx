import { Link } from 'react-router-dom';
import { AppExpo } from './App';
import { useNavigate } from 'react-router-dom';
import { Headers } from './App';
import { Footeras } from './App';
import { LogProvider } from './LogContext';

const lessor = () => {
    return (
        <LogProvider>
            <Header></Header>
            <Footeras> </Footeras>
        </LogProvider>
    )

}