import React, { PropTypes } from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.submitBtn = this.submitBtn.bind(this);
    }

    submitBtn(){
        console.log("登录请求开始", this.props.state);
        this.props.actions.BtnLogin('/userLogin', {a:1,b:3}).then( result => {
            console.log("登录请求完成", this.props.state);
        }).catch( err => {
            console.log("登录请求失败", this.props.state);
        });
    }

    render() {
        const { state, actions } = this.props;

        return (
            <section>
                <div className='container que_vertical_center'>
                    <div className='row'>
                        <div className='col-md-6 col-md-offset-3'>
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"/> Remember me
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <input type="button" onClick={this.submitBtn} className="btn btn-default aa" value='Sign in'/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;