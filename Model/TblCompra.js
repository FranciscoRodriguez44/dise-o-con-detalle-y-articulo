import { Entity } from "./Core/Entity";
import { TblDetalleCompra } from "./TblDetalleCompra";

class TblCompra extends Entity{

    constructor(compra ={})
    {
        super();
        for (const prop in compra) {
            this[prop] = compra[prop];
        }
    }
    ApiMethods = {
        Get: "TblCompra"  
      }
      idcompra= "";
      fechacompra="";
      idusuario="";
      subtotalcompra= "";
      iva= "";
      descuentocompra= "";
      totalcompra= "";
      idproveedor= "";

      TblDetalleCompra ={
		val: [],
	 	get: async()=> {
			if (this.idcompra != "") {
				const DetalleCompra = new TblDetalleCompra();
				return await DetalleCompra.GetByProps("idcompra", this.idcompra); 
			} else{
				return this.TblDetalleCompra.val
			}
		},
		set:(newValue)=> {
			this.val = newValue;
		}
	}

}
export {TblCompra};