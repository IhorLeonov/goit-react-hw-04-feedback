import { Button, Options } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const options = ['good', 'neutral', 'bad'];

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Options>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Options>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
