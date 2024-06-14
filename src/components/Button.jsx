import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'


function Button({url, value}) {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(url)}>{value}</button>
    );
}

Button.propTypes = {
    url: PropTypes.string,
    value: PropTypes.string
}

export default Button;