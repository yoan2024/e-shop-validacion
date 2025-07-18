import { useEffect } from "react";
import BodyTableP from "./BodyTableP";

const Table = ({ label, ped }) => {
  useEffect(() => {}, []);
  return (
    <section className="flex flex-col items-center mt-32">
      <div className="text-3xl mb-10 font-bold ">{label}</div>
      <div>
        {ped.map((p, index) => {
          return (
            <table
              key={index}
              className="border-solid border-2 border-slate-900 mb-5"
            >
              <thead>
                <tr>
                  <th className="border-solid border-2 border-slate-900">
                    {p.idPedido}
                  </th>
                  <th className="border-solid border-2 border-slate-900">
                    {p.fechaPedido}
                  </th>
                  <th className="border-solid border-2 border-slate-900">
                    ITEM
                  </th>
                  <th className="border-solid border-2 border-slate-900">
                    NAME
                  </th>
                  <th className="border-solid border-2 border-slate-900">
                    CANTIDAD
                  </th>
                  <th className="border-solid border-2 border-slate-900">
                    TOTAL
                  </th>
                  <th className="border-solid border-2 border-slate-900">
                    ESTADO
                  </th>
                  <th className="border-solid border-2 border-slate-900">
                    Envio
                  </th>
                </tr>
              </thead>
              <tbody>
                <BodyTableP itemspedidos={p.itemsPedido} />
                <tr>
                  <th className="bg-slate-800">total</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th className="bg-slate-700 p-2">${p.totalPagado} USD</th>
                  <th
                    className={
                      p.estado === "Pendiente"
                        ? "bg-yellow-300 p-2"
                        : p.estado === "En camino"
                        ? "bg-blue-400 p-2"
                        : p.estado === "Entregado"
                        ? "bg-green-300 p-2"
                        : "bg-red-300"
                    }
                  >
                    {p.estado}{" "}
                  </th>
                  <th className="p-2 animate-pulse">{p.envio}</th>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </section>
  );
};

export default Table;
