export default function About(){
    return(
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center max-w-4xl text-gray-800">
            <main className="flex flex-col items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">
                        👀 Well, well, well... look who found this page!
                    </h1>
        
                    <p className="text-lg mb-4">
                        This page isn’t linked anywhere obvious, I’m glad you found it.
                    </p>
                    <p className="text-lg mb-6">
                        Since you’re here, let's connect!😉
                    </p>

                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-10 items-center justify-center">
                        <a
                            href="https://twitter.com/PrakashDelwin"
                            className="hover:text-gray-200 transition-colors duration-300"
                        >
                            🐦 Follow me on Twitter
                        </a>

                        <a
                            href="https://github.com/DelwinPrakash/fake-calculator"
                            className="hover:text-gray-200 transition-colors duration-300"
                        >
                            ⭐ Star the repo on GitHub
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}