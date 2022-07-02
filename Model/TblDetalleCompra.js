import { Entity } from "./Core/Entity";
import { TblArticulos } from "./TblArticulos";

class TblDetalleCompra extends Entity{

    constructor(detallecompra ={})
    {
        super();
        for (const prop in detallecompra) {
            this[prop] = detallecompra[prop];
        }
    }
    ApiMethods = {
        Get: "TblDetalleCompra"  
      }
      iddetallecompra= "";
      idcompra="";
      idarticulo="";
      preciocompra= "";
      cantidadcompra= "";
      descuentocompra= "";

      TblArticulos = {
        val: [],
        get: async ()=> {
            if (this.idarticulo != "") {
                const articulo = new TblArticulos();

                return await articulo.GetByProps("idarticulo", this.idarticulo);
            }else{
                return this.TblArticulos.val;
            }            
        }, set(newValue) {
            this.TblArticulos.val = newValue;
        }
    }

}
export {TblDetalleCompra};