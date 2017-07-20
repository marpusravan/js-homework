import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { addUserComponent } from './adduser.component';
import { UserService } from '../user.service';

describe('addUserComponent', () => {
    let component: addUserComponent;
    let fixture: ComponentFixture<addUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [UserService],
            declarations: [
                addUserComponent
            ],
            imports: [RouterModule, AppRoutingModule],
        })
    }));
    fixture = TestBed.createComponent(addUserComponent);
    component = fixture.componentInstance;

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });
});
