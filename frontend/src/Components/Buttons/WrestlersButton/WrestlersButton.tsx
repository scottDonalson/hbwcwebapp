import Link from "next/link";

export default function WrestlersButton() {
    return (
        <div className="mt-6 text-center">
            <Link href="/About/Wrestlers">
                <button className="bg-orange-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-800 transition duration-300">
                    Meet the Wrestlers
                </button>
            </Link>
        </div>
    );
}
