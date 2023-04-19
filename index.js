/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import { Cuenta } from './Cuentas/Cuenta.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { sistemaAutenticacion } from './sistemaAutenticacion.js';
//import { Cuenta } from './Cuenta.js';


const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');
cliente.asignarClave('12378')
console.log(sistemaAutenticacion.login(cliente,'12378'));

const empleado = new Empleado('Juan Perez','1098625858',10000);
empleado.asignarClave('1234');
console.log(sistemaAutenticacion.login(empleado,'1234'));

const gerente = new Gerente('Cristian Federico', '1042999445',12000);
gerente.asignarClave('1235');
console.log(sistemaAutenticacion.login(gerente,'1235'));

const director = new Director('Jose Salcedo', '8633503',15000);

/*console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());*/



/*const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente,'9985','001',0);

//const cuentaSimple = new Cuenta(cliente,'098','001');

const cunetaNominaLeonardo = new CuentaNomina(cliente,'9854','001',100);
cunetaNominaLeonardo.depositoEnCuenta(150);
console.log(cunetaNominaLeonardo.verSaldo());
cunetaNominaLeonardo.retirarDeCuenta(50);
console.log(cunetaNominaLeonardo.verSaldo());
/*console.log(cuentaDeLeonardo);

cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(100);
console.log(cuentaDeLeonardo.verSaldo());

console.log(cuentaAhorroLeonardo);

cuentaAhorroLeonardo.depositoEnCuenta(2000);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(150);
console.log(cuentaAhorroLeonardo.verSaldo());*/

