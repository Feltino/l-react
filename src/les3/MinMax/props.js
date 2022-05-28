import PropTypes from 'prop-types';

export default {
  max: PropTypes.number.isRequired,
  min: PropTypes.number,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}