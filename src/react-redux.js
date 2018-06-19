import React, { Component } from 'react';
import PropTypes from 'prop-types';
export const connect = (mapStateToPtops) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor() {
            super();
            this.state = {
                allProps: {}
            }
        }

        componentWillMount() {
            const { store } = this.context
            this._updateProps()
            store.subscribe(() => this._updateProps());
        }

        _updateProps() {
            const { store } = this.context;
            let stateProps = mapStateToPtops(store.getState(), this.props);
            this.setState({
                allProps: {
                    // 整合普通的 props 和从 state 生成的 props
                    ...stateProps,
                    ...this.props
                }
            });
        }
        render() {
            return <WrappedComponent {...this.state.allProps} />
        }
    }

    return Connect;
}