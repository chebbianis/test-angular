import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlbunsComponent } from './list-albuns.component';

describe('ListAlbunsComponent', () => {
  let component: ListAlbunsComponent;
  let fixture: ComponentFixture<ListAlbunsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAlbunsComponent]
    });
    fixture = TestBed.createComponent(ListAlbunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
