import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  productoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    precio: new FormControl(''),
    stock: new FormControl(''),
    categoria_id: new FormControl('', [Validators.required]),
    descripcion: new FormControl(''),
    imagen: new FormControl('')
  })

  nombreImagenSeleccionada: string = "Ninguna Imagen Seleccionada";
  imagenSeleccionada?:File
  imgPreview?:string

  constructor(private prodService: ProductoService) { }

  ngOnInit(): void {
  }

  imagenInputSeleccionado(fileInputEvent: any){
    console.log(fileInputEvent.target.files[0]);
    this.nombreImagenSeleccionada = fileInputEvent.target.files[0].name
    this.imagenSeleccionada = fileInputEvent.target.files[0]
    this.productoForm.get('imagen')?.setValue(this.imagenSeleccionada)

    if(this.imagenSeleccionada){
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgPreview = e.target.result
      }
      reader.readAsDataURL(this.imagenSeleccionada)
    }
  }

  guardarProducto(){
    this.prodService.sendProducto(this.productoForm).subscribe(
      (res: any) => {
        alert("Producto registrado");
      },
      (error: any) => {
        console.log(error);
      }
    )

  }

}
