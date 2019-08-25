import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'perfil',
    templateUrl: 'perfil.component.html',
    styleUrls: ['perfil.component.scss']
})

export class PerfilComponent implements OnInit{
    infoPerfil:any = {
        id:112351,
        nombre: "Oscar Daniel Rangel",
        dirección: "Laguna de terminos 202, Polanco, 11520",
        creditosActivos:[
            {
                id:239892,
                producto: "Iphone X",
                sku: 102414,
                id_producto:3090912,
                color:"blanco",
                capacidad:"128gb",
                Precio:16700,
                fechaCompra:"10/01/2019",
                planFinancimeinto:"18 meses",
                tipoPago:"mensual",
                noTotalPagos:18,
                pagoMensual:927.27,
                pagosRealizados:7,
                pagoRealizadoFecha:6494
            },
            {
                id:239892,
                producto:"Lavadora Whirpool 7 pies",
                sku:1002841,
                id_producto:289312,
                color:"blanco",
                capacidad:"15kg",
                Precio:6500,
                fechaCompra:"20/11/2018",
                planFinancimeinto:"18 meses",
                tipoPago:"semanal",
                noTotalPagos:72,
                pagoMensual:90.27,
                pagosRealizados:37,
                pagoRealizadoFecha:3339
            }
        ]
    }
    constructor(){

    }

    ngOnInit(){

    }

}