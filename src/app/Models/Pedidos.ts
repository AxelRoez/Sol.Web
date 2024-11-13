export interface Pedido {
    idPedido: number;
    idHistorial: number;
    idTipoEntrega: number;
    direccionEntrega: string | null;
    tiempoEstimado: string | null;
    estadoEntrega: 'Pendiente' | 'En camino' | 'Entregado' | 'Cancelado';
    fechaPedido: string;
  }
  