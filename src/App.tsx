import React, {Fragment, useEffect} from 'react';
import { useDispatch } from "react-redux";
import Desktop from "./page/desktop/desktop"
import Mobile from "./page/mobile/mobile"
import { getTasks } from "./reducer"
import { useWindowWidth } from "./kit/useScreenWidth"


function App() {

    const dispatch = useDispatch();
    const screenWidth = useWindowWidth();

    useEffect(()=>{
        dispatch(getTasks())
    },[])

    return (
        <Fragment>
            {screenWidth < 769 ?
                <Mobile /> :
                <Desktop />
            }
        </Fragment>
    );
}

export default App;
