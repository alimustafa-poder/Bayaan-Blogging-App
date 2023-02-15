import { Link } from 'react-router-dom'

export function PreAuthHomepage() {
    return (
        <div className="flex flex-col grow dark:bg-slate-800 transition-all">
            <div className="flex flex-row gap-x-4 tracking-wide h-28 text-xl sm:text-6xl md:text-7xl  justify-center items-center mt-5 font-extrabold">
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
                    Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                    ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                </p>
                <Link to={'/signup'}>
                    <button className="bg-red-400 p-3 rounded-md text-xl animate-float">
                        Let's Go.
                    </button>
                </Link>
            </div>
            <div className="flex flex-row h-48 mt-3 p-4 bg-pink-200 text-black items-center align-center dark:bg-slate-800">
                <p className="text-3xl mx-6 font-bold animate-fontColor text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-fontColor">
                    Shape the World
                </p>
                <p className="w-92 mx-5 bold-md text-base leading-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras sit amet iaculis sapien, a porttitor mi. Nunc eu dictum
                    sapien. Maecenas at cursus lacus. Morbi porta non magna et
                    posuere. Aenean vel viverra sem, nec pharetra tortor. Mauris
                    ut sapien turpis. Sed nec augue id massa maximus volutpat.
                    Sed vel diam lacinia, tincidunt est imperdiet, iaculis orci.
                    Nulla purus nunc, pretium ut nulla a, volutpat rhoncus
                    augue.
                </p>
            </div>
        </div>
    )
}
