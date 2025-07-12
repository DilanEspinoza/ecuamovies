export const MovieDetails = ({
    title,
    overview,
    poster_path,
    vote_average,
    release_date,
    genre,
    production_companies
}) => {
    return (
        <div className="relative w-full h flex items-center justify-center px-4">
            {/* Fondo detrás del contenido */}
            <div className="absolute " />

            {/* Contenedor principal con 75% de ancho y altura completa */}
            <div className=" h-full flex flex-col md:flex-row gap-8 overflow-y-auto p-6">
                {/* Poster */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Contenido */}
                <div className="w-full md:w-2/3 flex flex-col font-bold">
                    {/* Título */}
                    <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>

                    {/* Metadata */}
                    <div className="text-gray-500 mt-2 text-sm">
                        ★ {vote_average} • {release_date} • {genre}
                    </div>

                    {/* Botones */}
                    <div className="flex flex-wrap gap-4 mt-6">
                        <button className="flex items-center gap-2 border border-neutral-500 px-4 py-2 rounded-md  hover:text-white hover:bg-black transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 -960 960 960">
                                <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240zm80-122 200-86 200 86v-518H280zm0-518h400z" />
                            </svg>
                            Add to Watchlist
                        </button>

                        <button className="flex items-center gap-2 border border-neutral-500 px-4 py-2 rounded-md  hover:text-white hover:bg-black transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 -960 960 960">
                                <path d="m424-296 282-282-56-56-226 226-114-114-56 56zm56 216q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q134 0 227-93t93-227-93-227-227-93-227 93-93 227 93 227 227 93m0-320" />
                            </svg>
                            Mark as Seen
                        </button>
                    </div>

                    {/* Descripción */}
                    <p className="mt-6 max-w-3xl ">{overview}</p>


                    <div className="mt-6 space-y-4">
                        {production_companies.map((company) => (
                            <a
                                key={company.id}
                                href="https://www.netflix.com/title/81673111/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-neutral-100 hover:bg-neutral-200 transition px-6 py-4 rounded-lg text-white"
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                                    alt={company.name}
                                    className="w-24 h-10 object-contain"
                                />
                                <div>
                                    <div className="font-semibold text-black">{company.name}</div>
                                    <div className="text-sm text-gray-500">
                                        {company.origin_country}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Director y elenco */}
                    <div className="mt-6 space-y-2">
                        <div>
                            <div className="font-semibold">Director</div>
                            <div className="text-neutral-300">Matt Wilcox</div>
                        </div>
                        <div>
                            <div className="font-semibold">Starring</div>
                            <div className="text-neutral-300">Rob Reider</div>
                        </div>
                    </div>

                    {/* Recomendaciones */}

                </div>
            </div>
        </div>
    );
};
