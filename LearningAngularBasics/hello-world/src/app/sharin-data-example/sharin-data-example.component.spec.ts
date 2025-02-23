import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharinDataExampleComponent } from './sharin-data-example.component';

describe('SharinDataExampleComponent', () => {
  let component: SharinDataExampleComponent;
  let fixture: ComponentFixture<SharinDataExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharinDataExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharinDataExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
