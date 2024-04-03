import moment from "moment"
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="flex items-center justify-center py-0.5 bg-gray-50">
      <p className="text-xs text-solar-gray-light">&copy; {moment().format("YYYY")} Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer