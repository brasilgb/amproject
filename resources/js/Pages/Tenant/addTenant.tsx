import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

type Props = {}

const AddCustomer = (props: Props) => {
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <div>AddCustomer</div>
    </AuthenticatedLayout>
  )
}

export default AddCustomer