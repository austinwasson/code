import Navbar from "../navigation/Navbar";

const Base = () => {
    return (
        <div className="w-screen h-screen p-1.5 bg-neutral-900 text-white">
            <div className="w-full h-full py-1.5 border border-neutral-800 rounded-lg">
                <Navbar />
            </div>
        </div>
    )
}

export default Base;