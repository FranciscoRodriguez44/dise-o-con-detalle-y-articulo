import { Entity } from "./Core/Entity";

class TblProveedor extends Entity{

    constructor(proveedor ={})
    {
        super();
        for (const prop in proveedor) {
            this[prop] = proveedor[prop];
        }
    }
    ApiMethods = {
        Get: "TblProveedor"  
      }
    idproveedor= "";
    nombreproveedor="";
    telefonoproveedor="";
    direccionproveedor= "";

    // Get= async(param) => {
    //     const Proveedor = await import("../APIDatabase/TblProveedor.json");
    //     const ProveedorFilt = Proveedor.default.filter((c)=>
    //     c.nombreproveedor.toUpperCase().includes(param.toUpperCase()));

    //     return ProveedorFilt.map((c) => new TblProveedor(c));
    // }

}
export {TblProveedor};