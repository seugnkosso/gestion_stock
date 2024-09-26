import { Component, OnInit } from '@angular/core';
import { RestResponse } from '../../../core/models/rest.response';
import { AdminList } from '../../../core/models/admin.model';
import { AdminImplService } from '../../../core/services/impl/admin-impl.service';

@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css'
})
export class AdminsComponent implements OnInit {
  response? :RestResponse<AdminList[]>;

  constructor(private adminService: AdminImplService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(page : number = 0){
    this.adminService.findAll(page).subscribe((data) =>
      (this.response = data)
  );
  }
}
