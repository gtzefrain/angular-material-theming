import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatSelectModule,
  MatSidenavModule, MatTabsModule, MatCardModule, MatDividerModule, MatFormFieldModule, 
  MatInputModule, MatMenuModule} from '@angular/material';

@NgModule({
  imports: [
  	CommonModule,
  	MatButtonModule,
  	MatCheckboxModule,
  	MatIconModule,
  	MatToolbarModule,
  	MatSelectModule,
  	MatSidenavModule,
  	MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
  	],
  exports: [
  	MatButtonModule, 
  	MatCheckboxModule, 
  	MatIconModule, 
  	MatToolbarModule,
  	MatSelectModule,
  	MatSidenavModule,
  	MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
  	],
})
export class AppMaterialModule { }
