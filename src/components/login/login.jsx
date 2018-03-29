import React, { PropTypes } from 'react';
import './login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'http://127.0.0.1:8008',
            imgCode: '/VerifyCode',
            avoidLogin: false,
        };

        this.submitBtn = this.submitBtn.bind(this);
        this.VerifyCode = this.VerifyCode.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    submitBtn(){
        let email = this.refs.email.value;
        let passwd = this.refs.passwd.value;
        let verify = this.refs.verify.value;
        let accessLogin = this.state.avoidLogin;

        let data = {
            email: email,
            passwd: passwd,
            verify: verify,
            accessLogin: String(accessLogin)
        };
        this.props.actions.BtnLogin('/userLogin', data).then( result => {
            console.log("登录请求完成", this.props.state);
        }).catch( err => {
            console.log("登录请求失败", this.props.state);
        });
    }

    VerifyCode(){
        this.refs.imgFresh.setAttribute('src', this.refs.imgFresh.getAttribute('src')+'?');
    }

    handleCheck(){
        let oldAvoidLogin = this.state.avoidLogin;
        let newAvoidLogin = '';

        if(!oldAvoidLogin){
            if(window.confirm('确认一月免登陆吗？') !== true){
                newAvoidLogin = false;
            }else {
                newAvoidLogin = true;
            }
        }else {
            newAvoidLogin = false;
        }

        this.setState({
            avoidLogin: newAvoidLogin,
        })
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
                                        <input type="email" className="form-control" ref="email" id="inputEmail3" placeholder="Email"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" ref='passwd' id="inputPassword3" placeholder="Password"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputPassword4" className="col-sm-2 control-label">验证码</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" ref='verify' id="inputPassword4" placeholder="验证码"/>
                                    </div>
                                    <div className='col-sm-4'>
                                        <img className="cursorSate" ref='imgFresh' src={this.state.url+this.state.imgCode} onClick={this.VerifyCode} alt="点击刷新"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" ref='accessLogin' onClick={this.handleCheck} checked={this.state.avoidLogin}/>免登录
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <input type="button" onClick={this.submitBtn} className="btn btn-default" value='Sign in'/>
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