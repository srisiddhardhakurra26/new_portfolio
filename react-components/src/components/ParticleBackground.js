import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine";
import './ParticleBackground.css';

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await tsParticles.load("tsparticles", {});
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 3,
                            },
                            grab: {
                                distance: 150,
                                links: {
                                    opacity: 0.5
                                }
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"],
                        },
                        links: {
                            color: "#FF6B6B",
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
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
                            speed: 1,
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
                            value: 0.8,
                            animation: {
                                enable: true,
                                speed: 0.5,
                                minimumValue: 0.4,
                            },
                        },
                        shape: {
                            type: ["circle", "triangle", "square"],
                        },
                        size: {
                            value: { min: 3, max: 5 },
                            animation: {
                                enable: true,
                                speed: 1,
                                minimumValue: 2,
                            },
                        },
                        rotate: {
                            value: {
                                min: 0,
                                max: 360
                            },
                            direction: "random",
                            animation: {
                                enable: true,
                                speed: 2
                            },
                            move: true
                        },
                    },
                    detectRetina: true,
                }}
            />
        );
    }

    return <></>;
};

export default ParticleBackground;