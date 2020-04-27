import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadSimpleSampleComponent } from './typeahead-simple-sample.component';

describe('TypeaheadSimpleSampleComponent', () => {
  let component: TypeaheadSimpleSampleComponent;
  let fixture: ComponentFixture<TypeaheadSimpleSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeaheadSimpleSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadSimpleSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
