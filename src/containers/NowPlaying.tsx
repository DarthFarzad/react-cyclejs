import React, {Component} from 'react';
import { connect } from 'react-redux';

class NowPlaying extends Component<any, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <section className="container mb-5">
                    <h4 className="section__heading">Now Playing</h4>
                    <div>normal grid view</div>
                </section>
            </React.Fragment>
        );
    }
}

export default connect(()=>({}),{})(NowPlaying)