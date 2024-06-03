import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImagesComponent } from './list-images.component';

describe('ListComponent', () => {
  let component: ListImagesComponent;
  let fixture: ComponentFixture<ListImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListImagesComponent]
    });
    fixture = TestBed.createComponent(ListImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
