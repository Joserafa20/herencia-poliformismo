//Clase abstracta
export class Cuenta{
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo){
        //this.tipo = tipo;
        if (this.constructor == Cuenta){
            throw new Error ('No se debe instanciar objetos de la clase Cuenta');
            
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente
        this.#saldo = saldo;
    }

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        //Metodo abstracto
        throw new Error ('Debe implementar el metdo retiraraDeCuenta en su clase');
        //this._retirarDeCuenta(valor,0);
    }

    _retirarDeCuenta(valor, comision) {
        /*if (this.tipo == 'Corriente')
            valor = valor * 1.05;
        else if (this.tipo == 'Ahorros')
            valor = valor * 1.02;*/
        
        valor = valor * (1+comision/100);
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}