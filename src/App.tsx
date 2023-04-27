import React, {useCallback} from 'react';
import {Header} from "./header/Header";
import cl from "./App.module.scss"
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Freelance} from "./freelance/Freelance";
import {Contact} from "./contact/Contact";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";
import {AboutMe} from "./about/AboutMe";

function App() {
    const particlesInit = useCallback(async (engine: any) => {
        console.log(engine);
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);
    return (
        <div className={cl.app}>
            <Particles
                className={cl.particles}
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "#eeeded",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.1,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#999",
                        },
                        links: {
                            color: "#999",
                            distance: 150,
                            enable: true,
                            opacity: 0.6,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.6,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: {min: 1, max: 5},
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Header/>
            <div className={cl.section}>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Freelance/>
                <Contact/>
            </div>
        </div>
    )

}

export default App;
