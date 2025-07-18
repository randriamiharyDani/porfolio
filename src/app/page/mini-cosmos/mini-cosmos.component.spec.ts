import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCosmosComponent } from './mini-cosmos.component';

describe('MiniCosmosComponent', () => {
  let component: MiniCosmosComponent;
  let fixture: ComponentFixture<MiniCosmosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniCosmosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCosmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
