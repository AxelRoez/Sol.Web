export interface HistorialCompra {
  idHistorial: number;
  idUsuarioHist: number;
  idTipoPagoHis: number;
  idLocalHist: number;
  fechaCompra: string;
  totalComp: number;
  idTipoEntrega: number;
  idDireccion: number | null;
}
