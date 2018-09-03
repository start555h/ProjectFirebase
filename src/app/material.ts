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
  MatButtonToggleModule
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
      MatButtonToggleModule
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
      MatButtonToggleModule
     ],
})
export class MaterialModule { }
