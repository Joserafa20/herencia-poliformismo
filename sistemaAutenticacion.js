export class sistemaAutenticacion{
    static login(usuario,clave){
        if("autenticable" in usuario 
        && usuario.autenticable instanceof Function)
            return usuario.autenticable(clave);
        else
            return false;
                
        //return usuario.clave == clave;
        /*if (empleado.clave == clave)
            return true;
        return false;*/
    }
}