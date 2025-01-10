

export const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex items-center space-x-2">
                <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                <div className="text-red-500 text-xl font-semibold">
                    Cargando...
                </div>
            </div>
        </div>
    );
};


