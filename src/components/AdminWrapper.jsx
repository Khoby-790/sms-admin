import React from 'react'

const AdminWrapper = ({ children }) => {
    return (
        <main class="flex-1 relative pb-8 z-0 overflow-y-auto">
            {children}
        </main>
    )
}

export default AdminWrapper
