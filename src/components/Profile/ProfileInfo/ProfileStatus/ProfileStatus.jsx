import React from 'react';
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    handleFocus = (event) => {
        event.target.select();
    }


    deactivateEditModeAndSetStatus = (message) => {
        this.setState({
            editMode: false,
            status: message
        })
        this.props.postProfileStatus(this.state.status)
    }

    onStatusChange = (e) => {
        const message = e.target.value
        this.props.updateProfileStatusText(message)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={classes.statusBox}>
                {!this.state.editMode &&
                <div className={classes.statusWrapper}>
                    <div className={classes.statusShowBox}
                         onDoubleClick={this.activateEditMode}>{this.state.status ? this.state.status : "Double click to add Status"}</div>
                </div>
                }
                {this.state.editMode &&
                <div className={classes.statusWrapper}><input className={classes.statusAddBox}
                                                              onChange={this.onStatusChange}
                                                              onFocus={this.handleFocus} autoFocus={true}
                                                              onBlur={() => {
                                                                  this.deactivateEditModeAndSetStatus(this.state.status)
                                                              }}
                                                              value={this.state.status}/></div>}
            </div>
        );
    }
};

export default ProfileStatus;