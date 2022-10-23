import {Badge} from "reactstrap";

import './badge.css'

const Genre = ({genre}) => {
const{id, name} = genre
    return (
        <Badge color="primary" pill className={"badge"}>
            {name}
        </Badge>
    )
}
export {Genre}