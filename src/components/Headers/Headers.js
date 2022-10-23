import {Link} from "react-router-dom";

import './Headers.css'
import {Theme} from "../themes";

const Headers = () => {
    return (
        <div className={"header"}>
            <button className={'home'}><Link  style={{ textDecoration: 'none'}} to={'/'}>HOME</Link></button>
            <Theme/>
        </div>
    )
}
export {Headers}