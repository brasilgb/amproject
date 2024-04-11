import { AddButton, AgendaClienteButton, DeleteButton, EditButton, OrderButton } from "@/Components/Buttons"
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Card"
import FlashMessage from "@/Components/FlashMessage"
import InputSearch from "@/Components/InputSearch"
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop"
import Pagination from "@/Components/Pagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Table"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import moment from "moment"
import React, { Fragment } from 'react'
import { IoPeopleSharp } from "react-icons/io5"

type Props = {}

const Tenant = ({ tenants }: any) => {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <main className='animate__animated animate__fadeIn p-6'>
                <Card>
                    <HeaderContent>
                        <TitleTop>
                            <IoPeopleSharp size={30} />
                            <span className="ml-2">Clientes</span>
                        </TitleTop>
                        <BreadCrumbTop links={[{ url: null, label: "Clientes" }]} />
                    </HeaderContent>
                    <CardContainer>
                        <CardHeader>
                            <CardHeaderContent>
                                <InputSearch
                                    placeholder={"Buscar por nome do cliente ou cnpj"}
                                    url={"tenants.index"}
                                />
                            </CardHeaderContent>
                            <CardHeaderContent>
                                <AddButton
                                    url={route('customers.create')}
                                    label={"Cliente"}
                                />
                            </CardHeaderContent>
                        </CardHeader>
                        <FlashMessage message={'flash'} />
                        <CardBody>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>#</TableHead>
                                        <TableHead>Nome</TableHead>
                                        <TableHead>E-mail</TableHead>
                                        <TableHead>CPF</TableHead>
                                        <TableHead>Telefone</TableHead>
                                        <TableHead>Cadastro</TableHead>
                                        <TableHead></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {tenants.data.map((cliente: any) => (
                                        <Fragment key={cliente.id}>
                                            <TableRow>
                                                <TableCell>{cliente.id}</TableCell>
                                                <TableCell>
                                                    {cliente.nome}
                                                </TableCell>
                                                <TableCell>
                                                    {cliente.email}
                                                </TableCell>
                                                <TableCell>{cliente.cpf}</TableCell>
                                                <TableCell>
                                                    {cliente.telefone}
                                                </TableCell>
                                                <TableCell>
                                                    {moment(
                                                        cliente.created_at,
                                                    ).format("DD/MM/YYYY")}
                                                </TableCell>
                                                <TableCell className="flex items-center justify-end gap-2">
                                                    <AgendaClienteButton
                                                        url={`/agendas?ac=${cliente.id}`}
                                                    />
                                                    <OrderButton
                                                        url={`/ordens?oc=${cliente.id}`}
                                                    />
                                                    <EditButton
                                                        url={route(
                                                            "tenants.edit",
                                                            cliente.id,
                                                        )}
                                                    />
                                                    <DeleteButton
                                                        url="tenants.destroy"
                                                        param={cliente.id}
                                                        identify={`o cliente ${cliente.nome}`}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        </Fragment>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardBody>
                        <CardFooter>
                            <Pagination data={tenants} />
                        </CardFooter>
                    </CardContainer>
                </Card>
            </main>
        </AuthenticatedLayout >
    )
}

export default Tenant