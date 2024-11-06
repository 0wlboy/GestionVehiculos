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

  devolver(marca, modelo, year){
    console.log(`Esta ingresando devuelta el vehiculo ${marca}, modelo ${modelo}, año ${year}`);
    this.disponible = true;
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

  buscarVehiculo(marca,modelo){
    this.flota.forEach(element =>{
      if((element.marca === marca) && (element.modelo === modelo)){
        let vehiculo = element
        return vehiculo
      }
    })
  }
}

function nuevoCarro(marca, modelo,year){  
  return new Vehiculo(marca,modelo,year);
}

let empresa = new EmpresaAlquiler('Carros Super Fun');

empresa.agregar(nuevoCarro('Ford','Mustang',1969))
empresa.agregar(nuevoCarro('Lexus','Lexus',2000))
empresa.agregar(nuevoCarro('Tucson','Hunday',2008))
empresa.agregar(nuevoCarro('CyberTruck','Tesla',2023))

empresa.mostrarVehiculos();

console.log(empresa.buscarVehiculo('CyberTruck','Tesla'))