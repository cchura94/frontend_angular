export interface Producto {
    nombre: string,
    precio: number,
    stock: number,
    categoria_id: number
}

export interface PaginateProducto {
    count: number,
    rows: Producto[]
}
