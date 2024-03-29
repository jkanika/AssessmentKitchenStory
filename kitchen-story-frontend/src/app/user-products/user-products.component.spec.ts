import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsComponent } from './user-products.component';

describe('UserMoviesComponent', () => {
  let component: UserProductsComponent;
  let fixture: ComponentFixture<UserProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
