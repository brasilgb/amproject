import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

type Props = {}

const EditCustomer = (props: Props) => {
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <div>EditCustomer</div>
    </AuthenticatedLayout>
  )
}

export default EditCustomer