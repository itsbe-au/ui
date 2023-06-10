import { useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
    visible?: boolean;
};

export default function NoResultsModal(props: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    console.log("No results spinner in view? ", isInView);
    return (
        <div
            className={ `absolute h-full inset-0 ${props.visible ? null : "hidden"
                }` }
            ref={ ref }
        >
            <div
                className={`flex flex-auto gap-8 bg-gray-very-dark bg-opacity-80 text-white p-8 w-fit mx-auto my-96 text-center items-center shadow-md rounded-md z-100 ${
                    isInView ? "opacity-100" : "opacity-0"
                }
                transition-all
                duration-300`}
            >
                <h3>No results returned.</h3>
            </div>
        </div>
    );
}
