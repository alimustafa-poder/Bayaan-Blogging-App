import { Link } from 'react-router-dom'
import { LoremIpsum } from 'lorem-ipsum'

export function PreAuthHomepage() {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4,
        },
        wordsPerSentence: {
            max: 16,
            min: 4,
        },
    })
    return (
        <div className="flex flex-col grow dark:bg-slate-800 transition-all">
            <div className="flex flex-row gap-x-4 tracking-wide h-28 text-xl sm:text-6xl md:text-7xl justify-center items-center mt-5 font-extrabold">
                <span className="animate- bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Think.
                </span>
                <span className="animate- bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Write.
                </span>
                <span className="animate- bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Share.
                </span>
            </div>
            <div className="flex flex-col align-center items-center tracking-wide gap-y-3">
                <p className="font-bold p-2 text-center dark:text-white">
                    {lorem.generateSentences(1)}
                </p>
                <Link to={'/signup'}>
                    <button className="bg-red-400 p-3 rounded-md text-xl animate-float">
                        Let's Go.
                    </button>
                </Link>
            </div>
            <div className="flex flex-row h-48 mt-3 p-4 bg-pink-200 text-black items-center align-center dark:bg-slate-200">
                <p className="text-3xl mx-6 font-bold animate-fontColor text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-fontColor">
                    Shape the World
                </p>
                <p className="w-92 mx-5 bold-md text-base leading-2">
                    {lorem.generateParagraphs(1)}
                </p>
            </div>
            <div className="">
                <div className="flex flex-row justify-around p-6">
                    <div className="flex flex-col items-center text-2xl">
                        <span className="text-3xl font-bold dark:text-white">
                            1000+
                        </span>
                        <span className="dark:text-white">active Users</span>
                    </div>
                    <div className="flex flex-col items-center text-2xl">
                        <span className="text-3xl font-bold dark:text-white">
                            4000+
                        </span>
                        <span className="dark:text-white">testimonals</span>
                    </div>
                    <div className="flex flex-col items-center text-2xl">
                        <span className="text-3xl font-bold dark:text-white">
                            3000+
                        </span>
                        <span className="dark:text-white">blog posts</span>
                    </div>
                    <div className="flex flex-col items-center text-2xl">
                        <span className="text-3xl font-bold dark:text-white">
                            2000+ Million
                        </span>
                        <span className="dark:text-white">post views</span>
                    </div>
                </div>
            </div>
            <footer>
                {/*footer component for my blog site*/}
                <div className="flex flex-col justify-center items-center dark:bg-gray-200">
                    <div className="flex flex-row justify-center items-center gap-x-8 p-5">
                        <div className="flex flex-col justify-center items-center gap-y-2">
                            <span className="font-bold text-xl">About</span>
                            <span className="text-sm">About Us</span>
                            <span className="text-sm">Contact Us</span>
                            <span className="text-sm">Feedback</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-2">
                            <span className="font-bold text-xl">Services</span>
                            <span className="text-sm">Services</span>
                            <span className="text-sm">Pricing</span>
                            <span className="text-sm">Support</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-2">
                            <span className="font-bold text-xl">Social</span>
                            <span className="text-sm">Facebook</span>
                            <span className="text-sm">Twitter</span>
                            <span className="text-sm">Instagram</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-2">
                            <span className="font-bold text-xl">Legal</span>
                            <span className="text-sm">Terms of Use</span>
                            <span className="text-sm">Privacy Policy</span>
                            <span className="text-sm">Security</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-2">
                            <span className="font-bold text-xl">Others</span>
                            <span className="text-sm">FAQ</span>
                            <span className="text-sm">Help</span>
                            <span className="text-sm">Report</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-x-2 p-5">
                        <span className="text-xs">
                            © 2023 All Rights Reserved.
                        </span>
                        <span className="text-xs">Designed by</span>
                        <span className="text-xs font-bold">Ali</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
