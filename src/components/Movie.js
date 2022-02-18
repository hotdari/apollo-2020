import React from "react";
import { Link } from "react-router-dom"
import { gql} from "apollo-boost";

export default ({ id }) => <div>
    <Link to={`/${id}`}>{id}</Link>
</div>