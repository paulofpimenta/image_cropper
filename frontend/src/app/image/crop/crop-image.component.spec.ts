import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropImageComponent } from './crop-image.component';

describe('AddComponent', () => {
  let component: CropImageComponent;
  let fixture: ComponentFixture<CropImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CropImageComponent]
    });
    fixture = TestBed.createComponent(CropImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
