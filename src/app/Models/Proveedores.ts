export class Proveedores {
  id_proveedor: number;
  nombre_proveedor: string;
  direccion_proveedor: string;
  telefono_proveedor: string;
  email_proveedor: string;
  contacto_nombre_proveedor: string;

  constructor(id_proveedor: number, nombre_proveedor: string, direccion_proveedor: string, telefono_proveedor: string, email_proveedor: string, contacto_nombre_proveedor: string) {
    this.id_proveedor = id_proveedor;
    this.nombre_proveedor = nombre_proveedor;
    this.direccion_proveedor = direccion_proveedor;
    this.telefono_proveedor = telefono_proveedor;
    this.email_proveedor = email_proveedor;
    this.contacto_nombre_proveedor = contacto_nombre_proveedor;
  }
}
