
export default function App() {
    return (
        <article className="w-full md:w-lg my-8 mx-auto rounded-2xl overflow-hidden shadow-lg bg-sky-900 pb-4">
            <header className="w-full aspect-16/9 bg-[url(https://www.thelongdark.com/img/about-back-desktop-comp.jpg)] bg-cover flex items-center">
                <img className="w-3/5 mx-auto" src="https://www.thelongdark.com/img/logo-tld-header.svg" alt="The Long Dark" />
            </header>
            <section className="px-6 py-4 text-slate-50">
                <h1 className="text-3xl leading-8 font-light mb-4 pb-4 border-0 border-b-1 border-slate-400">The Long Dark</h1>
                <p className="mb-4">WELCOME TO THE QUIET APOCALYPSE™</p>
                <p className="mb-4">Bright lights flare across the night sky. The wind rages outside the thin walls of your wooden cabin. A wolf howls in the distance. You look at the meagre supplies in your pack, and wish for the days before the power mysteriously went out. How much longer will you survive?</p>
                <p className="mb-4">The Long Dark is a thoughtful, exploration-survival experience that challenges solo players to think for themselves as they explore an expansive frozen wilderness in the aftermath of a geomagnetic disaster. There are no zombies — only you, the cold, and all the threats Mother Nature can muster.</p>
            </section>
            <footer className="px-6 py-4 text-slate-400">
                <dl className="md:flex md:flex-wrap md:flex-row">
                    <dt className="font-bold md:basis-1/4">Studios:</dt>
                    <dd className="md:basis-3/4">Hinterland Studio Inc.</dd>

                    <dt className="font-bold md:basis-1/4">Year:</dt>
                    <dd className="md:basis-3/4">2017</dd>

                    <dt className="font-bold md:basis-1/4">Website:</dt>
                    <dd className="md:basis-3/4"><a href="https://www.thelongdark.com/" target="_blank" className="text-sky-50">https://www.thelongdark.com/</a></dd>
                </dl>
            </footer>
        </article>
    );
}

function Loader() {
    return (
        <div className="w-full md:w-lg my-8 mx-auto text-center">
            <span className="loader"></span>
        </div>
    )
}
