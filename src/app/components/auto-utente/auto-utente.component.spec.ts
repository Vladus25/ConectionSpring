import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoUtenteComponent } from './auto-utente.component';

describe('AutoUtenteComponent', () => {
  let component: AutoUtenteComponent;
  let fixture: ComponentFixture<AutoUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoUtenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
