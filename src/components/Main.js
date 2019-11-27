import React, { Component } from "react";
import Navbar from "./Navbar";
import ContactSection from "./ContactSection";
import AboutSection from "./AboutSection";
import Timeline from "./Timeline";
import ProjectSection from "./ProjectSection";
import Skills from './SkillsSection'
import Hobby from "./Hobby";
import Button from './Button';
import Card from './Card';
import './css/Main.css';
import './css/Card.css';
import profile from './media/profile.jpeg';
import banner from './media/banner.jpg';
import profilePic from "./media/Profile.jpg";
import name from "./media/name.png";
import name2 from "./media/name2.png";


class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            color: 'white',
            animationClass: 'test'
        }
        this.changeState = this.changeState.bind(this);
    }

    // listenScrollEvent = e => {
    //     if (window.scrollY > 1500) {
    //         this.setState({color: 'purple'})
    //     } else {
    //         this.setState({color: 'white'})
    //     }
    // }
    // style={{background: this.state.color}}

    changeState(){
        if(this.state.animationClass === 'test'){
            this.setState({
                animationClass: 'test paused'
            });
        }else{
            this.setState({
                animationClass: 'test'
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    render() {
        return (
            <div>
                <div className='test'>
                    <div class = "container1">
                        <img className="banner" src={banner}/>
                        <div className="centered">
                            <p className="texttop">  Hello World, I'm </p>
                            <img src={name2} className="name" />
                            <Button/>
                        </div>
                    </div>

                    <AboutSection
                        title=" Who am I? "
                        dark={true}
                        id="aboutMe"
                        image={profilePic}
                        />
                    <Timeline
                        title=" What have I been up to? "
                        subtitle="Testing 2"
                        dark={true}
                        id="work"
                        />
                    <ProjectSection
                        title=" What projects have I worked on? "
                        subtitle="Testing 3"
                        dark={true}
                        id="projects"
                        />
                    <Skills
                        title="What are my Skillsets?"
                        id="skills"
                    />
                    <Hobby
                        title=" What do I like to do? "
                        id="hobbies"
                        />
                    <ContactSection
                        title=" How can you connect with me? "
                        dark={true}
                        id="contact"
                        />
                </div>
            </div>
        );
    }
}
export default Main;
