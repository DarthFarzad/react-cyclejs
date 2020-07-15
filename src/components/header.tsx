import React, { Component } from 'react';
export function withHeader(WrappedComponent, selectedData){
    return class extends Component{
        constructor(props:any) {
            super(props);
        }
        render() {
            return <React.Fragment></React.Fragment>
        }
    }
}