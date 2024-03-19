import Sidebar from '@/components/admin/Sidebar';
import React from 'react';

const AdminLayout = ({ children }) => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Sidebar */}
            <aside className="bg-gray-800 text-gray-100 w-full md:w-64 flex-shrink-0">
                {/* Sidebar content */}
                <Sidebar />
            </aside>

            {/* Main content */}
            <div className="flex flex-col flex-1">

                {/* Main body */}
                <main className="flex-1 overflow-y-auto">
                    {/* Main body content (children components) */}
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-gray-200 shadow-md">
                    {/* Footer content */}
                    Footer
                </footer>
            </div>
        </div>
    );
};

export default AdminLayout;