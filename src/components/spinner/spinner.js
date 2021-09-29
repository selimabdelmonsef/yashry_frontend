import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from 'prop-types';

export const MySpinner = ({title}) => {
    return (
        <div>
            <ClipLoader color={"black"} loading={true} size={50} />
            <div>{title}</div>
        </div>
    );
}
MySpinner.propTypes = {
    loading: PropTypes.bool
};