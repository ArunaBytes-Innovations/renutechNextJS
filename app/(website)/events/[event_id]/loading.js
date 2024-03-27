import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="border-4 border-gray-200 border-t-0 border-l-0 border-black rounded-full h-20 w-20 animate-spin"></div>
            <p className="mt-4 text-lg font-semibold text-gray-800">
                Loading...
            </p>
        </div>
    );
}

export default Loading;
