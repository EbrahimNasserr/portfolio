'use client';
import { useEffect, useRef, useState } from 'react'
import Hero from './_components/hero/Hero';
import { AnimatePresence, useScroll } from 'framer-motion';
import Preloader from './_common/Preloader/Preloader';
import About from './_components/About/About';
import { projects } from './_Data/data';
import WorkCard from './_components/WorkCard/WorkCard';
import Services from './_components/Services/Services';
import Contact from './_components/Contact/Contact';


export default function Home() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const initLocomotiveScroll = async () => {
            try {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                const locomotiveScroll = new LocomotiveScroll();
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.cursor = 'default';
                    window.scrollTo(0, 0);
                }, 2000);
            } catch (error) {
                console.error('Error initializing Locomotive Scroll:', error);
            }
        };

        initLocomotiveScroll();

        // Clean up any resources if necessary
        return () => {
            // Cleanup code
        };
    }, []);

    return (
        <main>
            <Hero />
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader />}
            </AnimatePresence>
            <About />
            <section ref={container}>
                {
                    projects.map((project, i) => {
                        const targetScale = 1 - ((projects.length - i) * 0.05);
                        return <WorkCard key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                    })
                }
            </section>
            <Services />
            <Contact />
        </main>
    );
}
