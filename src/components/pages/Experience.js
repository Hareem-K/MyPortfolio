import React, { useEffect } from 'react';
import '../../App.css';
import '../Experience.css';
import Footer from '../Footer';
import WorkTimeline from '../WorkTimeline';
import AwardsSlideshow from '../AwardsSlideshow';

export default function Experience() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="experience-hero">
                <div className="experience-hero__inner">
                    <span className="experience-hero__eyebrow">Career &amp; Achievements</span>
                    <h1 className="experience-hero__title">
                        Work &amp;
                        <em>experience.</em>
                    </h1>
                    <p className="experience-hero__sub">
                        A look at my professional journey, credentials, and achievements.
                    </p>
                </div>
            </div>

            <section className="exp-section exp-section--work">
                <div className="exp-section__inner">
                    <div className="exp-section__header">
                        <span className="exp-section__label">01</span>
                        <h2 className="exp-section__title">Work Experience</h2>
                    </div>
                    <WorkTimeline />
                </div>
            </section>

            <div className="exp-divider" />

            <section className="exp-section exp-section--awards">
                <div className="exp-section__inner">
                    <div className="exp-section__header">
                        <span className="exp-section__label">02</span>
                        <h2 className="exp-section__title">Awards &amp; Credentials</h2>
                    </div>
                    <AwardsSlideshow />
                </div>
            </section>

            <Footer />
        </>
    );
}
