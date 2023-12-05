import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleToolComponent } from './single-tool.component';

describe('SingleToolComponent', () => {
  let component: SingleToolComponent;
  let fixture: ComponentFixture<SingleToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
