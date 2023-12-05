import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleIdComponent } from './single-id.component';

describe('SingleIdComponent', () => {
  let component: SingleIdComponent;
  let fixture: ComponentFixture<SingleIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
