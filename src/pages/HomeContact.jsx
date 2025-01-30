import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
};

export default function HomeContact() {
    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const isInView = useInView(ref, { margin: "-100px" });

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs
            .sendForm('service_9ktjv9g', 'template_d5opq8b', formRef.current, {
                publicKey: 'dV2JMuviSOBB8G5c1',
            })
            .then(
                () => {
                    setSuccess(true);
                },
                (error) => {
                    setError(true);
                },
            );
    };

    return (
        <motion.div
            ref={ref}
            className="min-h-screen bg-[#0c0c1d] text-white py-20 px-4 md:px-8 lg:px-16 relative"
        >
            <motion.div 
                className="max-w-7xl mx-auto"
                variants={variants}
                initial="initial"
                whileInView="animate"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Contact Info */}
                    <motion.div
                        className="space-y-12"
                        variants={variants}
                    >
                        <motion.h1
                            variants={variants}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                        >
                            Let's work<br />together
                        </motion.h1>

                        <motion.div className="space-y-8">
                            <motion.div variants={variants} className="space-y-2">
                                <h2 className="text-xl font-semibold text-gray-400">Mail</h2>
                                <span className="text-lg">hello@react.dev</span>
                            </motion.div>

                            <motion.div variants={variants} className="space-y-2">
                                <h2 className="text-xl font-semibold text-gray-400">Address</h2>
                                <span className="text-lg">Hello street New York</span>
                            </motion.div>

                            <motion.div variants={variants} className="space-y-2">
                                <h2 className="text-xl font-semibold text-gray-400">Phone</h2>
                                <span className="text-lg">+91-72183471287</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Animated SVG and Form */}
                    <motion.div
                        variants={variants}
                        className="relative"
                    >
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-full pointer-events-none"
                            initial={{ opacity: 1 }}
                            whileInView={{ opacity: 0 }}
                            transition={{ delay: 3, duration: 1 }}
                            style={{ zIndex: 2 }}
                        >
                            <svg 
                                viewBox="0 0 473.806 473.806" 
                                className="w-full h-full stroke-orange-500 fill-none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <motion.path
                                    d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z"
                                    strokeWidth={2}
                                    initial={{ pathLength: 0 }}
                                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                    transition={{ duration: 2 }}
                                />
                                <motion.path
                                    d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"
                                    strokeWidth={2}
                                    initial={{ pathLength: 0 }}
                                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                />
                                <motion.path
                                    d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"
                                    strokeWidth={2}
                                    initial={{ pathLength: 0 }}
                                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                    transition={{ duration: 2, delay: 1 }}
                                />
                            </svg>
                        </motion.div>

                        <motion.form 
                            ref={formRef}
                            onSubmit={sendEmail}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 4, duration: 1 }}
                            className="space-y-6 relative"
                            style={{ zIndex: 1 }}
                        >
                            <motion.input
                                type="text"
                                required
                                placeholder="Name"
                                name="name"
                                className="w-full bg-transparent border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                                whileFocus={{ borderColor: "#f97316" }}
                            />

                            <motion.input
                                type="email"
                                required
                                placeholder="Email"
                                name="email"
                                className="w-full bg-transparent border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                                whileFocus={{ borderColor: "#f97316" }}
                            />

                            <motion.textarea
                                rows={8}
                                placeholder="Message"
                                name="message"
                                className="w-full bg-transparent border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                                whileFocus={{ borderColor: "#f97316" }}
                            />

                            <motion.button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                Submit
                            </motion.button>
                            {error && "Error"}
                            {success && "Success"}
                        </motion.form>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}