// hello-world.module.ts
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [CommonModule],  // Import CommonModule here
  exports: [HelloWorldComponent]  // If you need to export it for use elsewhere
})
export class HelloWorldModule { }
