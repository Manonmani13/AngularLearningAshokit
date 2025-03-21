import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchExampleComponent } from './ng-switch-example.component';

describe('NgSwitchExampleComponent', () => {
  let component: NgSwitchExampleComponent;
  let fixture: ComponentFixture<NgSwitchExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSwitchExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
