import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoComponent } from './favo.component';

describe('FavoComponent', () => {
  let component: FavoComponent;
  let fixture: ComponentFixture<FavoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
