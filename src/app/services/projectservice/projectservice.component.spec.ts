import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectService } from './projectservice.component';

describe('ProjectserviceComponent', () => {
  let component: ProjectService;
  let fixture: ComponentFixture<ProjectService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
