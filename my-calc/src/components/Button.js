import { Text } from "react-native";
import propTypes from 'prop-types';

const Button = (props) => {
    console.log(props)
    return <Text>{props.title}</Text>;
};

Button.propTypes ={
    title: propTypes.string.isRequired,
}
export default Button;