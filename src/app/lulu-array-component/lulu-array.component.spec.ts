import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuluArrayComponent } from './lulu-array.component';

describe('LuluArrayComponent', () => {
  let component: LuluArrayComponent;
  let fixture: ComponentFixture<LuluArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LuluArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LuluArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
