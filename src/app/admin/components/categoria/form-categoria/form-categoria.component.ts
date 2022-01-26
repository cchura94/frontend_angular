import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/core/services/categoria.service';


@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit {

  categoriaForm = new FormGroup({
    nombre: new FormControl(this.data.nombre, [Validators.required]),
    detalle: new FormControl(this.data.detalle)
  })

  constructor(private catService: CategoriaService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
    }

  ngOnInit(): void {
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'cerrar', {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000
    });
  }

  guardarProducto(){
    this.catService.sendCategoria(this.categoriaForm.value).subscribe(
      (res: any) => {
        console.log(res)
        this.openSnackBar(res.mensaje)
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  modificarProducto(){
    this.catService.updateCategoria(this.categoriaForm.value, this.data.id).subscribe(
      (res: any) => {
        console.log(res)
        this.openSnackBar(res.mensaje)
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
