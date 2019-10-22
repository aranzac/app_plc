import { Comentario } from '../compartido/comentario';

export class Detalle {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    comentario: Array<Comentario>
}