import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VisionService } from 'src/app/services/vision.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/entity/product';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
    selector: 'camera',
    templateUrl: 'camera.component.html',
    styleUrls: ['camera.component.scss']
})

export class CameraComponent implements OnInit {
    formCamera: FormGroup;
    hidden: boolean = false;
    foto = {
        hash: null
    }

    products: any

    constructor(
        private fb: FormBuilder,
        private visionService: VisionService,
        private cd: ChangeDetectorRef,
        private router: Router,
        private persistenceService: PersistenceService
    ) {

    }

    ngOnInit() {
        this.formCamera = this.fb.group({
            hash: [null, [Validators.required]]
        })
    }

    activeCamera() {
        document.getElementById('event').click()
    }

    onFileSelected(valor) {
        console.log(valor)
        this.visionService.recognize(valor).then(response => {
            if (response) {
                this.hidden = true;
                this.products = response.fields.products
                console.log('response: ', response)
                console.log('Productos: ', this.products)
                this.hidden = true

            } else {
                console.log('no llega')
            }
        }
        )
    }
    onFileChange(event) {
        let reader = new FileReader();

        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);

            reader.onload = () => {

                let str = reader.result;
                let arr = str.toString().split(',');

                this.formCamera.patchValue({
                    // contentType: arr[0], 
                    hash: arr[1]
                });
                this.foto.hash = this.formCamera.controls.hash.value
                console.log(this.foto)
                this.cd.markForCheck();
                this.onFileSelected(this.foto)
            }
        }
    }

    buyProduct(product: IProduct) {
        this.persistenceService.set('product', product, {type: StorageType.SESSION, oneUse: true});
        this.router.navigate(['/home/producto/comprar']);
    }

}