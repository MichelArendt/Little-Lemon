import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'


function Button({url, value, fnc}) {
    const navigate = useNavigate();

    if (fnc){
        return (<button onClick={fnc}>{value}</button>);
    } else {
        return(<button onClick={() => navigate(url)}>{value}</button>);
    }

    // return (
    //     {
    //         if ( onClick ) {
    //             return
    //         }
    //     }
    // );
}

Button.propTypes = {
    url: PropTypes.string,
    value: PropTypes.string
}

export default Button;