import React, {useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import styles from "./dialog.module.scss"
import CloseButton from "../Icon/close";
import classNames from "classnames";

type DialogProps = {
    className?: string,
    children: React.ReactElement<HTMLAllCollection>, // wrap child in one div
    showDialog: boolean,
    handleClose: () => any
}

// all child divs should be wrapped in one 'children container' div
export default function Dialog({ className, children, showDialog, handleClose}: DialogProps) {
    
    useEffect(()=>{
        if(showDialog){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [showDialog]);

    return (ReactDOM.createPortal(<>
        {showDialog &&
        <div className={styles.darkFilter}>
            <div className={classNames(styles.dialogBox, className)}>
                <div className= {styles.closeButton}>
                    <CloseButton
                        onClick={handleClose}
                    />
                </div>
                <div className={styles.dialogChildren}>
                    {children}
                </div>
            </div>
        </div>
        }
    </>, document.body))
}