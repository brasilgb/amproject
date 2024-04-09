import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

type Props = {}

const Customer = (props: Props) => {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="bg-white overflow-hidden shadow-sm rounded">Customer</div>
        </AuthenticatedLayout>
    )
}

export default Customer