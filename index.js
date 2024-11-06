class Vehiculo{
  constructor(marca, modelo, year){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.disponible = true;
  }
  alquilar(){
    if(this.disponible){
      console.log(`El vehiculo se encuentra disponible, gracias por seleccionarlo`);
      this.disponible = false;
    }else{
      console.log(`El vehiculo que usted selecciono no esta disponible, lo sentimos.`);
    }
  }

  devolver(){
    if(this.disponible){
      console.log(`Este carro no esta alquilado por nadie, no se puede devolver algo que no se a tomado`)
    }else{
    console.log(`Esta ingresando devuelta el vehiculo ${this.marca}, modelo ${this.modelo}, año ${this.year}`);
    this.disponible = true;
    }
  }

  informacion(){
    console.log(`========================`)
    console.log(`Nombre: ${this.marca}`);
    console.log(`Marca: ${this.modelo}`);
    console.log(`Año: ${this.year}`);
    console.log(`Disponibilidad: ${this.disponible}`)
  }
}

class EmpresaAlquiler{
  constructor(nombre){
    this.nombre = nombre;
    this.flota = [];
  }

  agregar(vehiculo){
    this.flota.push(vehiculo);
  }

  mostrarVehiculos(){
    this.flota.forEach(element =>{
      if(element.disponible){
        console.log(`Marca: ${element.marca}`);
        console.log(`Modelo: ${element.modelo}`);
        console.log(`Año: ${element.year}`);
        console.log(`Disponibilidad: ${element.disponible}`)
        console.log(`========================`)
      }
    })
  }

  buscarVehiculo(marca,modelo, year){
    let vehiculo;
    this.flota.forEach(element =>{
      if((element.marca === marca) && (element.modelo === modelo)&&(element.year === year)){
        vehiculo = element
      }else{
        console.log('El carro en cuestion no existe, ingrese uno que si este en nuestra posesion.') 
      }
    })
    return vehiculo
  }
}
/*Por favor utilice esta funcion para ingresar nuevos vehiculos*/
function nuevoCarro(marca, modelo,year){  
  return new Vehiculo(marca,modelo,year);
}



let empresa = new EmpresaAlquiler('Carros Super Fun');

empresa.agregar(nuevoCarro('Ford','Mustang',1969))
empresa.agregar(nuevoCarro('Lexus','Lexus',2000))
empresa.agregar(nuevoCarro('Tucson','Hunday',2008))
empresa.agregar(nuevoCarro('CyberTruck','Tesla',2023))

empresa.mostrarVehiculos();

let vehiculo = empresa.buscarVehiculo('CyberTruck','Tesla',2023)

vehiculo.informacion()
vehiculo.alquilar()
vehiculo.alquilar()

empresa.mostrarVehiculos()

vehiculo.devolver()
vehiculo.devolver()

