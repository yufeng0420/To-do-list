import styles from "./buttons.module.scss"
import classNames from 'classnames';
import Button from "../button/button"

type ButtonsType = {
    leftText: string
    leftClick: ()=>any 
    rightText: string
    rightClick: ()=>any
    className?: string
}

export default function Buttons({leftText, leftClick, rightText, rightClick, className}: ButtonsType){
    return <div className = {classNames(styles.buttons, className)}>
        <Button 
            setWidth = {90}
            setHeight = {30}
            theme = {"solid"}
            text = {leftText}
            onClick = {leftClick}
        />
         <Button 
            setWidth = {90}
            setHeight = {30}
            theme = {"hollow"}
            text = {rightText}
            onClick = {rightClick}
        />
    </div>
}