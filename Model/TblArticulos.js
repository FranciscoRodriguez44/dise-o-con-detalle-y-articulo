import { Entity } from "./Core/Entity";

class TblArticulos extends Entity   {
	constructor(articulo = {}){
		super();
		for (const prop in articulo) {
			this[prop] = articulo[prop];
		}
	}
	ApiMethods = {
        Get: "TblArticulos"  
      }
	idarticulo = "";
	nombrearticulo = "";
	descripcionarticulo = "";
	idcategoria = "";
	idmarca = "";

	TblArticulos ={
		val: [],
	 	get: async()=> {
			if (this.idarticulo != "") {
				const CargarArticuloVenta = new TblArticulos();
				return await CargarArticuloVenta.GetByProps("idarticulo", this.idarticulo); 
			} else{
				return this.TblArticulos.val
			}
		},
		set:(newValue)=> {
			this.val = newValue;
		}
	}
}
export { TblArticulos };
