import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'


function Button({url, fnc, children}) {
    const navigate = useNavigate();

    if (fnc){
        return (<button onClick={fnc} aria-label={`${children}`}>{children}</button>);
    } else {
        return(<button onClick={() => navigate(url)} aria-label={`${children}`}>{children}</button>);
    }
}

Button.propTypes = {
    url: PropTypes.string,
    value: PropTypes.string,
    fnc: PropTypes.func
}

export default Button;