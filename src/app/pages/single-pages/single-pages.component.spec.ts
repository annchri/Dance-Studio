import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePagesComponent } from './single-pages.component';

describe('SinglePagesComponent', () => {
  let component: SinglePagesComponent;
  let fixture: ComponentFixture<SinglePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
