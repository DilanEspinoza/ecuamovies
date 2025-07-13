// components/skeletons/MovieDetailSkeleton.jsx

export const MovieDetailSkeleton = () => {
    return (
        <div className="relative w-full flex items-center justify-center px-4">
            <div className="absolute inset-0  animate-pulse" />

            <div className="h-full flex flex-col md:flex-row gap-8 overflow-y-auto p-6 w-full max-w-7xl animate-pulse">
                {/* Poster */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="w-full h-[400px] bg-gray-300 rounded-lg shadow-lg"></div>
                </div>

                {/* Contenido */}
                <div className="w-full md:w-2/3 flex flex-col space-y-4">
                    {/* Título */}
                    <div className="h-10 w-2/3 bg-gray-300 rounded"></div>

                    {/* Metadata */}
                    <div className="h-4 w-1/2 bg-gray-200 rounded mt-2"></div>

                    {/* Botones */}
                    <div className="flex flex-wrap gap-4 mt-4">
                        <div className="w-48 h-10 bg-gray-300 rounded-md"></div>
                        <div className="w-48 h-10 bg-gray-300 rounded-md"></div>
                    </div>

                    {/* Descripción */}
                    <div className="space-y-2 mt-6">
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>

                    {/* Production Companies */}
                    <div className="mt-6 space-y-4">
                        {[...Array(2)].map((_, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 bg-gray-100 px-6 py-4 rounded-lg"
                            >
                                <div className="w-24 h-10 bg-gray-300 rounded"></div>
                                <div className="space-y-2 w-full">
                                    <div className="h-4 bg-gray-300 w-1/3 rounded"></div>
                                    <div className="h-3 bg-gray-200 w-1/4 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Director y elenco */}
                    <div className="mt-6 space-y-4">
                        <div>
                            <div className="h-4 bg-gray-300 w-24 mb-1 rounded"></div>
                            <div className="h-4 bg-gray-200 w-40 rounded"></div>
                        </div>
                        <div>
                            <div className="h-4 bg-gray-300 w-24 mb-1 rounded"></div>
                            <div className="h-4 bg-gray-200 w-40 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
