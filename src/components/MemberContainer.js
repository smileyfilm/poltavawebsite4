import React from 'react';
import MemberFilter from './MemberFilter';
import MemberList from "./MemberList";
import {withMemberConsumer } from "../context";
import Loading from "./Loading";

function MemberContainer({context}) {
const {loading,sortedMembers,members} = context;
if (loading) {
    return <Loading/>;
}

return (
    <> 
        <MemberFilter members={members}/>
        <MemberList members={sortedMembers}/>
    </>
);
}




export default withMemberConsumer(MemberContainer);

