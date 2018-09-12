import {MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatButtonToggleModule,
  MatDialogModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
imports: [MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatTooltipModule,
      MatPaginatorModule,
      MatButtonToggleModule,
      MatDialogModule
     ],
exports: [MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatTooltipModule,
      MatPaginatorModule,
      MatButtonToggleModule,
      MatDialogModule
     ],
})
export class MaterialModule { }
