import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeComponent } from './rodape.component';

describe('RodapeComponent', () => {
  let component: RodapeComponent;
  type NewType = ComponentFixture<RodapeComponent>;

  let fixture: NewType;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodapeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
