import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
    visible?: boolean;
};

export default function LoadingSpinner(props: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    console.log("Loading spinner in view? ", isInView);
    return (
        <div
            className={ `
                absolute 
                h-full 
                inset-0 
                ${props.visible ? null : "hidden"}
                `
            }
            ref={ ref }
        >
            <div className={ `flex flex-auto gap-8 bg-gray-very-dark bg-opacity-80 text-white p-8 w-fit mx-auto my-96 text-center items-center shadow-md rounded-md z-100 ${isInView ? "opacity-100" : "opacity-0"}
                transition-all
                duration-150`}>
                <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            x1="8.042%"
                            y1="0%"
                            x2="65.682%"
                            y2="23.865%"
                            id="a"
                        >
                            <stop
                                stopColor="#fff"
                                stopOpacity="0"
                                offset="0%"
                            />
                            <stop
                                stopColor="#fff"
                                stopOpacity=".631"
                                offset="63.146%"
                            />
                            <stop stopColor="#fff" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(1 1)">
                            <path
                                d="M36 18c0-9.94-8.06-18-18-18"
                                id="Oval-2"
                                stroke="url(#a)"
                                strokeWidth="2"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 18 18"
                                    to="360 18 18"
                                    dur="0.9s"
                                    repeatCount="indefinite"
                                />
                            </path>
                            <circle fill="#fff" cx="36" cy="18" r="1">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 18 18"
                                    to="360 18 18"
                                    dur="0.9s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </g>
                    </g>
                </svg>
                <h3>Searching...</h3>
            </div>
        </div>
    );
}
