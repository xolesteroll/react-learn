import React, {useEffect, useState} from 'react';
import classes from "./ProfileStatus.module.css";

const ProfileStatus = props => {


    let [status, setStatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditModeAndSetStatus = () => {
        setEditMode(false)
        props.postProfileStatus(status)
    }

    const onStatusChange = (e) => {
        const text = e.target.value
        props.updateProfileStatusText(text)
    }

    const handleFocus = (e) => {
        e.target.select()
    }

    return (
        <div className={classes.statusBox}>
            {!editMode &&
            <div className={classes.statusWrapper}>
                <div className={classes.statusShowBox}
                     onDoubleClick={activateEditMode}>{status ? status : "Double click to add Status"}</div>
            </div>
            }
            {editMode &&
            <div className={classes.statusWrapper}><input className={classes.statusAddBox}
                                                          onChange={onStatusChange}
                                                          onFocus={handleFocus} autoFocus={true}
                                                          onBlur={() => {
                                                              deactivateEditModeAndSetStatus(status)
                                                          }}
                                                          value={status}/></div>}
        </div>
    );
};

export default ProfileStatus