import React, { Component } from 'react';

class Profile extends Component {
    state={
        profile:null,
        error:""
    }

    componentDidMount(){
        this.loadUserProfile();
    }

    loadUserProfile(){
        this.props.auth.getProfile((profile, err)=>{
            this.setState({profile, err});
        })
    }
    
    render() {
        const {profile} = this.state;
        if(!profile) return null
        return (
            <>
                <h1>Profile</h1>
                <p>{profile.nickname}</p>
                <img
                    style={{maxWidth:50, maxHeight: 50}}
                    src={profile.picture}
                    alt="profile"
                />
                <pre>{JSON.stringify(profile, null, 2)}</pre>
            </>
        );
    }
}

export default Profile;