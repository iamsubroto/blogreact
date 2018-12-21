import React from 'react'
import { AppConsumer } from '../Context'

class Input extends React.Component {

    render(props) {
    const { label } = this.props;

    const handleChange = (e) => {
        this.setState({val: e.target.value})
    }
        return (
            <AppConsumer>
                {
                    (context) => {
                        return (
                            <fieldset>
                                <legend>{ label }</legend>
                                <form>
                                    <input type="text" value={context[label]} onInput={context.sayHello.bind(this, label)} />
                                </form>
                            </fieldset>
                        )
                    }
                }
            </AppConsumer>
        )
    }
}

export default Input;
