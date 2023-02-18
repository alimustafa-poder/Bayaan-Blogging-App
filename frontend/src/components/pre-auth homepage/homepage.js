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
        </div>
    )
}
