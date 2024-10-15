const data = [
  {
    accion: 9,
    mes_cuota: 5,
    status: true,
    monto: 400
  },
  {
    accion: 9,
    mes_cuota: 6,
    status: false,
    monto: 400
  },
  {
    accion: 9,
    mes_cuota: 7,
    status: false,
    monto: 400
  },
  {
    accion: 40,
    mes_cuota: 5,
    status: false,
    monto: 400
  },
  {
    accion: 40,
    mes_cuota: 6,
    status: false,
    monto: 400
  },
  {
    accion: 40,
    mes_cuota: 7,
    status: false,
    monto: 400
  },
  {
    accion: 40,
    mes_cuota: 8,
    status: false,
    monto: 400
  },
]

const deuda_socios = data.reduce((acc, el) => {
  const { accion, mes_cuota, status, monto } = el

  if (!acc[accion]) {
    acc[accion] = {
      accion,
      cuotas: [],
      total_deuda: 0,
      meses_vencidos: 0,
    }
  }

  if (!status) acc[accion].meses_vencidos++

  acc[accion].total_deuda += monto

  acc[accion].cuotas.push({ mes_cuota, status, monto })


  return acc
}, {})



console.log(deuda_socios)