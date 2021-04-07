import React from "react";
import styles from "./search.module.scss"
import SearchIcon from "../Icon/search"
import { changeEvent } from "../../kit/changeEvent"

type searchProps = {
    filterValue: string,
    onChange: (e:changeEvent )=>any,
    placeholder: string
}

export default function Search(props:searchProps){

    return <div className = {styles.filter}>
                <input
                    className={styles.input}
                    placeholder={props.placeholder}
                    value = {props.filterValue}
                    onChange={props.onChange}
                />
                <SearchIcon />
            </div>
}