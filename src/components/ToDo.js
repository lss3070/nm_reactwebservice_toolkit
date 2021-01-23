import React from "react";
import {connect} from "react-redux";
import {add,remove} from "../store";
import {Link} from "react-router-dom";

function ToDo({text,onBtnClick,id}){
return (
<li>
    <Link to={`/${id}`}>
        {text}
    </Link>
    <button onClick={onBtnClick}>DEL</button>
</li>
);
}

function mapDispatchToProps(dispatch,ownProps){

    return {

        onBtnClick:()=>{
            return dispatch(remove(ownProps.id))
        }
        //daddToDo는 새롭게 선언한 props
    }

}
export default connect(null,mapDispatchToProps)(ToDo);