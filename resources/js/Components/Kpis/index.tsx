import React, { Fragment } from 'react';
import { IconContext } from 'react-icons';
import { IoTime } from 'react-icons/io5';

interface dataKpis {
  title: any;
  value: any;
  valColor?: any;
  titleColor?: string;
  rotulo?: string;
  padding?: string;
  valorStyle?: string;
  titleStyle?: string;
  rotuloStyle?: string;
  kpiStyle?: string;
  realTime?: any;
}

export const Kpi = ({
  title,
  value,
  valColor,
  titleColor,
  rotulo,
  kpiStyle,
}: dataKpis) => {
  return (
    <Fragment>
      <div
        className={`${kpiStyle} flex flex-col items-center justify-center md:my-8 py-8`}
      >
        <div className="">
          <h1 className={`${titleColor} font-normal md:text-lg pb-2`}>
            {title}
          </h1>
        </div>
        <div className={`${rotulo && 'pb-1'}`}>
          <h1 className="drop-shadow-md font-semibold md:text-xl text-gray-500">
            {rotulo}
          </h1>
        </div>
        <div className="">
          <h1
            className={`${valColor} drop-shadow-md font-semibold text-xl md:text-3xl`}
          >
            {value}
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

export const KpiHome = ({
  title,
  value,
  valorStyle,
  titleStyle,
  rotuloStyle,
  rotulo,
  realTime,
  kpiStyle,
}: dataKpis) => {
  return (
    <Fragment>
      <div className="relative">
        <div
          className={`${kpiStyle} flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-md py-6`}
        >
          {realTime && (
            <div className="absolute top-2 left-2">
              <IconContext.Provider
                value={{ className: 'text-gray-500 cursor-pointer text-xl' }}
              >
                <div>
                  <IoTime title="Dados carregados a cada 10 min" />
                </div>
              </IconContext.Provider>
            </div>
          )}
          <div className="">
            <h1 className={`${titleStyle} pb-2`}>{title}</h1>
          </div>
          <div className="">
            <h1
              className={`${rotuloStyle} drop-shadow-md font-semibold text-base md:text-xl text-gray-500`}
            >
              {rotulo}
            </h1>
          </div>
          <div className="">
            <h1
              className={`${valorStyle} drop-shadow-md font-semibold text-base md:text-3xl`}
            >
              {value}
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

interface KpiTesteProps {
  icon: any;
  title: string;
  value: string;
  textcolor: string;
  bgcolor: string;
}

export const KpiTeste = (props: KpiTesteProps) => {

  return (
    
      <div className="flex flex-col bg-white rounded-md shadow-sm ">
        <div className="flex items-center justify-between p-4">

          <div className="flex flex-1 flex-col items-start justify-between">
            <div className="text-base text-gray-400 ">{props.title}</div>
            <div className="text-2xl font-bold text-gray-800 ">{props.value}</div>
          </div>
          <div className={`flex items-center justify-center ${props.textcolor}`}>
            {props.icon}
          </div>
        </div>
        <div className="text-xs text-gray-400 px-4 py-2 border-t border-gray-100">
          <span className={`px-2 py-0.5  ${props.textcolor}  ${props.bgcolor} font-bold rounded`}>+15%</span> que no mês anterior
        </div>
      </div>
  )

}
