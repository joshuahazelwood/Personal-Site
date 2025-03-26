import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldComputerComponent } from './old-computer.component';

describe('OldComputerComponent', () => {
  let component: OldComputerComponent;
  let fixture: ComponentFixture<OldComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldComputerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
